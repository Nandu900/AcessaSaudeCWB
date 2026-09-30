import { NextResponse } from 'next/server'
import { addRegistro, getAba, isAba, nomeAba } from '@/lib/sheets'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ aba: string }> },
) {
  const { aba: segmento } = await params
  const aba = nomeAba(segmento)

  if (!isAba(aba)) {
    return NextResponse.json({ error: 'Aba inválida' }, { status: 404 })
  }

  try {
    return NextResponse.json(await getAba(aba))
  } catch {
    return NextResponse.json({ error: 'Não foi possível carregar os dados.' }, { status: 502 })
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ aba: string }> },
) {
  const { aba: segmento } = await params
  const aba = nomeAba(segmento)

  if (!isAba(aba)) {
    return NextResponse.json({ error: 'Aba inválida' }, { status: 404 })
  }

  try {
    const body = await request.json()
    if (!body?.dados || typeof body.dados !== 'object') {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }

    return NextResponse.json(await addRegistro(aba, body.dados))
  } catch {
    return NextResponse.json({ error: 'Não foi possível salvar os dados.' }, { status: 502 })
  }
}
