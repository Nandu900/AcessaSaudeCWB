const scriptUrl = process.env.GOOGLE_SCRIPT_URL

function getScriptUrl() {
  if (!scriptUrl) throw new Error('GOOGLE_SCRIPT_URL não configurada')
  return scriptUrl
}

export async function getAba(aba: string) {
  const response = await fetch(`${getScriptUrl()}?aba=${encodeURIComponent(aba)}`, {
    next: { revalidate: 300 },
  })

  if (!response.ok) throw new Error(`Falha ao ler a aba ${aba}`)
  return response.json()
}

export async function addRegistro(aba: string, dados: object) {
  const response = await fetch(getScriptUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ aba, dados }),
    redirect: 'follow',
  })

  if (!response.ok) throw new Error(`Falha ao gravar na aba ${aba}`)
  return response.json().catch(() => ({ ok: true }))
}

export const abasPermitidas = ['Unidades', 'Agendamentos', 'Triagens'] as const
export type Aba = (typeof abasPermitidas)[number]

export function isAba(value: string): value is Aba {
  return abasPermitidas.includes(value as Aba)
}

export function nomeAba(segmento: string) {
  return segmento.charAt(0).toUpperCase() + segmento.slice(1).toLowerCase()
}
