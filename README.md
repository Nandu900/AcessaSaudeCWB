# AcessaSaúdeCWB - Pré-Cadastro Digital para UBS e UPAs
>Atv. Ext. ll - Projeto - Trabalho Final -

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)

 Sistema de pré-cadastro digital para agilizar atendimento em Unidades Básicas de Saúde (UBS) e Unidades de Pronto Atendimento (UPA) de Curitiba, utilizando classificação de risco baseada no Protocolo de Manchester.

---

##  Sobre o Projeto

**AcessaSaúdeCWB** é uma solução tecnológica desenvolvida como Atividade Extensionista do curso de Análise e Desenvolvimento de Sistemas da UNINTER, com o objetivo de:

-  Reduzir tempo de espera nas unidades de saúde
-  Eliminar burocracia do preenchimento manual de fichas
-  Implementar triagem digital baseada no Protocolo de Manchester
-  Promover inclusão digital através de app mobile e totens
-  Integrar dados com sistemas de saúde existentes

---

##  Objetivos de Desenvolvimento Sustentável (ODS)

-  **ODS 3** - Saúde e Bem-Estar
-  **ODS 10** - Redução das Desigualdades

---

##  Funcionalidades

### Para Pacientes:
-  Pré-cadastro via aplicativo mobile (Android/iOS)
-  Pré-cadastro via totens interativos nas unidades
-  Interface acessível (alto contraste, áudio, fontes ampliadas)
-  Acompanhamento da posição na fila em tempo real
-  Notificações SMS sobre status do atendimento

### Para Profissionais de Saúde:
-  Validação de dados e sinais vitais
-  Classificação automática de risco (Protocolo de Manchester)
-  Dashboard com métricas em tempo real
-  Relatórios de demanda e atendimento

### Para Gestores:
-  Análise de fluxo de atendimento
-  Gráficos de demanda por horário
-  Identificação de gargalos operacionais
-  Monitoramento de tempo de espera

---

##  Arquitetura do Sistema

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   App Mobile    │      │   Totem Touch   │      │   Dashboard     │
│  (React Native) │      │     (HTML5)     │      │    (React.js)   │
└────────┬────────┘      └────────┬────────┘      └────────┬────────┘
         │                        │                        │
         └────────────────────────┼────────────────────────┘
                                  │
                         ┌────────▼────────┐
                         │   API REST      │
                         │   (Node.js)     │
                         └────────┬────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │                           │
            ┌───────▼────────┐         ┌────────▼────────┐
            │   PostgreSQL   │         │  Sistema Saúde  │
            │  (Banco Dados) │         │    Municipal    │
            └────────────────┘         └─────────────────┘
```

---

##  Tecnologias Utilizadas

### Frontend:
- **React Native** - Aplicativo mobile multiplataforma
- **React.js** - Dashboard web
- **HTML5/CSS3/JavaScript** - Interface dos totens
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos e visualizações

### Backend:
- **Node.js** - Servidor API
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados
- **REST API** - Comunicação entre sistemas
- **RabbitMQ** - Sistema de filas

### Integração:
- **HL7 FHIR** - Padrão de interoperabilidade em saúde
- **JWT** - Autenticação segura
- **LGPD Compliance** - Proteção de dados pessoais

---

##  Estrutura de Pastas

```
AcessaSaudeCWB/
├── mobile/                    # Aplicativo React Native
│   ├── src/
│   │   ├── screens/          # Telas do app
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── services/         # Integração com API
│   │   └── utils/            # Funções auxiliares
│   └── package.json
│
├── web/                       # Dashboard React.js
│   ├── src/
│   │   ├── pages/            # Páginas
│   │   ├── components/       # Componentes
│   │   └── services/         # Serviços
│   └── package.json
│
├── totem/                     # Interface dos totens
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── backend/                   # API Node.js
│   ├── src/
│   │   ├── routes/           # Rotas da API
│   │   ├── controllers/      # Lógica de negócio
│   │   ├── models/           # Modelos de dados
│   │   ├── middleware/       # Middlewares
│   │   └── services/         # Serviços externos
│   └── package.json
│
├── docs/                      # Documentação
│   ├── metodologia/
│   ├── fluxogramas/
│   └── mockups/
│
└── README.md
```

---

##  Metodologia - Scrum

O projeto foi desenvolvido utilizando metodologia ágil Scrum, dividido em **4 sprints de 1 semana**:

### Sprint 1 - Cadastro Básico
- Tela de login
- Formulário de dados pessoais
- Validação de CPF
- Testes unitários

### Sprint 2 - Triagem de Sintomas
- Seleção de sintomas
- Algoritmo de classificação Manchester
- Tela de resultado da triagem
- Integração com backend

### Sprint 3 - Integração e Filas
- API REST para integração
- Sistema de filas por prioridade
- Notificações SMS
- Testes de integração

### Sprint 4 - Dashboard e Relatórios
- Dashboard com métricas em tempo real
- Relatórios de atendimento
- Gráficos de demanda
- Testes finais e ajustes

---

##  Protótipo de Manchester (5 Níveis)

| Cor | Prioridade | Tempo Máximo | Descrição |
|-----|-----------|--------------|-----------|
| 🔴 Vermelho | Emergente | 0 min | Risco de vida imediato |
| 🟠 Laranja | Muito Urgente | 10 min | Situação crítica |
| 🟡 Amarelo | Urgente | 30 min | Necessita atendimento rápido |
| 🟢 Verde | Pouco Urgente | 60 min | Pode aguardar |
| 🔵 Azul | Não Urgente | 120 min | Casos não urgentes |

---

##  Resultados Esperados

### Redução de Tempo:
- ⏱ **78%** - Redução no tempo de cadastro (de 10-15min para 2-3min)
- ⏱ **75%** - Redução de erros de cadastro
- ⏱ **70%** - Redução no tempo de triagem
- ⏱ **36%** - Redução no tempo total de espera (de 103min para 66min)

### Aumento de Capacidade:
-  **50%** - Aumento de pacientes atendidos por hora (de 8 para 12)

### Impacto Anual:
-  **152.200 horas** economizadas por ano
-  **415.100 atendimentos** beneficiados

---


##  Como Executar

### Pré-requisitos:

 - Node.js 18.x ou superior
 - PostgreSQL 14.x ou superior
 - React Native CLI (para mobile)



---

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Equipe

**Desenvolvedor:** Fernando Pessoa  
**RU:** 4221379  
**Curso:** CST em Análise e Desenvolvimento de Sistemas  
**Instituição:** UNINTER  
**Disciplina:** Atividade Extensionista II - Tecnologia Aplicada à Inclusão Digital – Projeto

---

## 📞 Contato

Para dúvidas, sugestões ou contribuições, entre em contato:
- 📧 Email: [fernandopessoasud@gmail.com]
- 💼 LinkedIn: [https://www.linkedin.com/in/fernando-pessoa-8b563a137/]
---


**Desenvolvido com AMOR para melhorar o atendimento na saúde pública de Curitiba**
