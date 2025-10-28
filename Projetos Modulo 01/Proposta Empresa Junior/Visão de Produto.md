---
sidebar_position: 1
---

# 📄 Visão de Produto

## 🗓 Informações Gerais

- **Nome do Projeto:** 
InteliHub – Plataforma de gestão e acompanhamento tanto do cliente quanto da Inteli Júnior.

- **Cliente:** 
Inteli Júnior

- **Responsável da Visão de Produto (PO):**
João Dias e Felipe Teixeira

- **Duração Total Estimada:** 
1 semana

- **Período na Etapa de Design (estimado):** 
3 dias

- **Período na Etapa de Desenvolvimento (estimado):** 
4 dias

---

## ✅ Checklist de Entrada (para iniciar o projeto)

- [ ] Reunião de Kickoff com o cliente realizada
- [ ] Objetivo do projeto compreendido
- [ ] Tecnologias necessárias mapeadas
- [ ] Estimativa de esforço feita
- [ ] Capacidade do time verificada
- [ ] Escopo inicial do wireframe aprovado pelo cliente

---

## 📤 Checklist de Saída (para encaminhar o projeto às próximas áreas)

- [ ] Documento de Visão preenchido e validado
- [ ] Matriz “é/não é/faz/não faz” definida
- [ ] Wireframes (se aplicável) finalizados
- [ ] Epics e User Stories redigidas
- [ ] Datas de entrada/saída em cada área definidas
- [ ] Contrato e escopo revisados e claros
- [ ] Alinhamento com área de Design ou Desenvolvimento realizado

---

## 📘 Resumo do Projeto

### Projeto: Landing Page Institucional e Plataforma Web - Inteli Júnior

#### Entregáveis de Valor

1. **Landing Page Institucional**  
   - Objetivo: Apresentar a Inteli Júnior ao público externo, explicando o que é a empresa e como ela funciona.

2. **Plataforma Web**  
   - Objetivo: Ferramenta para Diretores, Membros, Leads e Clientes focada em:
     - Gestão de projetos
     - Acompanhamento de equipes e entregas

#### Contexto

O projeto surgiu da necessidade de:
- Fortalecer a presença digital da empresa
- Organizar e centralizar processos internos
- Resolver problemas como:
  - Falta de visibilidade online
  - Gestão descentralizada de informações
  - Baixa integração entre áreas

A solução proposta oferecerá um sistema eficiente e acessível para clientes, membros e gestores.

#### Descrição

Desenvolver:
- **Uma landing page institucional** para apresentar a Inteli Júnior ao público externo
- **Uma plataforma web** para centralizar:
  - Gestão de projetos
  - Gestão de equipes
  - Comunicação interna da empresa júnior

#### Objetivos

- Fortalecer a presença digital da Inteli Júnior
- Centralizar a gestão de projetos e equipes
- Facilitar a comunicação entre membros, diretores e clientes

#### Público-Alvo

- Equipe interna da Inteli Júnior (Diretores, Membros e Leads)
- Clientes atuais
- Potenciais clientes interessados nos serviços da empresa

#### 👤 Personas

1. Inteli Junior:
   a) Presidência (presidente e vice): Acessam a plataforma como administradores gerais e gerenciam a permissão de todos os membros e configurações da plataforma. 
   b) Diretores: Acessam a plataforma para controlar  os  dados, gerir os membros de seus setores e visualizar andamento dos projetos.
   c) Membros: Acessam a plataforma para alimentar os dados dos projetos e gerenciar tanto seu trabalho indivdual quanto atualizar os outros respectivos membros e diretores da sua área sobre o andamento do projeto

2. Clientes:
   a) Atuais: Acompanham o andamento do projeto pela plataforma de forma visual, com informações sobre entregáveis e membros responsáveis.
   b) Potenciais: Descobrem o que é a inteli júnior pela landing page, visualizando provas sociais, projetos entregues e quem são os responsaveis pela empresa júnior.

**Principais Funcionalidades:**
1. Inteli Júnior:
    - Cadastro e login com diferentes níveis de permissão (presidência, diretores e membros).
    - Painel administrativo para presidência e diretores gerenciarem dados e equipes.
    - Visualização do andamento dos projetos com status, entregáveis, responsáveis.
    - Atualização de informações pelos membros diretamente na plataforma.
    - Gerenciamento de usuários e permissões conforme as áreas da empresa

2. Clientes:
    - Cadastro e login para acompanhamento do projeto contratado.
    - Acesso a landing page institucional com informações sobre a empresa, serviços, projetos, formas de contato e equipe.

---

## 🧩 Matriz "É / Não É / Faz / Não Faz"
<div align="center">

| Categoria  | Descrição |
|-----------|-----------|
| **É**     | Uma aplicação web para gestão de projetos internos e acompanhamento de clientes, além de uma landing page institucional.  |
| **Não É** | Não substitui reuniões estratégicas ou operacionais entre membros da Inteli Júnior. |
| **Faz**   | Permite cadastro e login de usuários, gestão de permissões, acompanhamento de projetos, edição de dados, visualização de projetos e visibilidade/reconhecimento da Inteli Júnior. |
| **Não Faz** | Substitui totalmente a comunicação humana entre Inteli Júnior e os clientes por meio de videoconferências ou realiza controle financeiro detalhado (como emissão de faturas e manipulação de dados para calculo como um ERP faria). |

</div>

---

## 🧠 Matriz de Certezas, Suposições e Dúvidas

<div align="center">

| Tipo        | Descrição                                                                |
|-------------|--------------------------------------------------------------------------|
| **Certeza**   | A plataforma deve permitir a gestão de projetos com diferentes níveis de acesso (presidência, diretores, membros, clientes). |
| **Suposição** | Acreditamos que os clientes usarão principalmente a plataforma para acompanhar o progresso dos projetos, e a landing page será o primeiro ponto de contato. |
| **Dúvida**    | O dashboard será suficiente para que os clientes se sintam atualizados sobre seus projetos, ou ainda será necessária uma comunicação humana via reunião recorrente? |

</div>

# Épicos e User Stories - Plataforma Inteli Junior

---

## Epic 1: Gestão de Projetos (Diretor de Projetos)

**Descrição:**  
Como diretor de projetos, quero um ambiente para gerenciar projetos da minha área, para que as informações sejam acessíveis à equipe, à empresa e aos clientes.

### User Stories:

**US 1.1 - Criar Projeto**  
- Como diretor de projetos, quero criar projetos preenchendo nome, descrição, tipo, links relevantes, membros, data de entrega e cliente associado.

**Critérios de Aceite:**
- Formulário de criação com todos os campos listados.
- Validação obrigatória para campos essenciais (nome, tipo e data de entrega).
- Opção de salvar e visualizar projeto após cadastro.

**US 1.2 - Editar Projeto**  
- Como diretor de projetos, quero editar as informações dos projetos já cadastrados.

**Critérios de Aceite:**
- Edição disponível apenas para projetos ativos.
- Histórico de modificações salvo.

**US 1.3 - Excluir Projeto**  
- Como diretor de projetos, quero excluir projetos que não são mais relevantes.

**Critérios de Aceite:**
- Confirmação de exclusão com alerta.
- Apenas usuários autorizados podem excluir.

**US 1.4 - Dashboard de Projetos**  
- Como diretor de projetos, quero visualizar uma dashboard com o status dos projetos.

**Critérios de Aceite:**
- Visualização de métricas: total de projetos ativos, dentro do prazo, fora do prazo, próximos da entrega e distribuição por tipo.
- Atualização automática dos dados.

**US 1.5 - Acesso de Clientes**  
- Como cliente, quero acessar o andamento dos meus projetos por meio de chave de acesso.

**Critérios de Aceite:**
- Sistema de login por chave.
- Visualização restrita ao projeto do cliente.

**US 1.6 - Barra de Progresso Automática**  
- Como usuário, quero visualizar o andamento do projeto com base na data atual e na data de entrega.

**Critérios de Aceite:**
- Barra de progresso automática atualizada diariamente.
- Visualização no card do projeto.

---

## Epic 2: Gestão de Parcerias (Diretor de Relações Institucionais)

**Descrição:**  
Como diretor de relações institucionais, quero cadastrar e gerenciar parcerias e ativações para acompanhar o relacionamento com empresas.

### User Stories:

**US 2.1 - Cadastro de Parceria**  
- Como diretor, quero registrar novas parcerias com informações sobre a empresa e tipo de relacionamento.

**Critérios de Aceite:**
- Cadastro de nome da empresa, tipo de parceria, data de início e status.

**US 2.2 - Classificação de Relacionamento**  
- Como diretor, quero classificar as parcerias como "ativas" ou "inativas".

**Critérios de Aceite:**
- Status de relacionamento editável.
- Filtragem de parcerias por status.

**US 2.3 - Visualizar Histórico de Ativações**  
- Como diretor, quero ver o histórico de ativações realizadas com cada parceiro.

**Critérios de Aceite:**
- Lista de ativações vinculada ao cadastro do parceiro.
- Data e descrição da ativação.

---

## Epic 3: Gestão de Pessoas (Diretor de Gestão de Pessoas)

**Descrição:**  
Como diretor de gestão de pessoas, quero acessar e atualizar as informações de desenvolvimento dos membros.

### User Stories:

**US 3.1 - Visualizar Membros**  
- Como diretor, quero visualizar uma lista com nome e foto dos membros.

**Critérios de Aceite:**
- Exibição de todos os membros cadastrados com imagem e nome.

**US 3.2 - Acessar Perfil do Membro**  
- Como diretor, quero acessar o perfil de cada membro.

**Critérios de Aceite:**
- Informações disponíveis: objetivos profissionais, habilidades e forças.

**US 3.3 - Atualizar Informações de Desenvolvimento**  
- Como diretor, quero editar informações do PDI de cada membro.

**Critérios de Aceite:**
- Formulário de atualização de dados.
- Histórico de alterações salvo.

---

## Epic 4: Coleta de Métricas e Eficiência (Diretor Administrativo-Financeiro)

**Descrição:**  
Como diretor administrativo-financeiro, quero visualizar métricas de performance e eficiência das áreas.

### User Stories:

**US 4.1 - Visualizar Métricas de Áreas**  
- Como diretor, quero acompanhar as métricas de cada área da empresa.

**Critérios de Aceite:**
- Indicadores claros e atualizados periodicamente.

**US 4.2 - Relatórios de Eficiência**  
- Como diretor, quero gerar relatórios de performance das áreas.

**Critérios de Aceite:**
- Relatórios exportáveis em PDF ou Excel.

**US 4.3 - Exportar Relatórios**  
- Como usuário, quero exportar os dados em formatos compatíveis.

**Critérios de Aceite:**
- Botão de exportação disponível e funcional.

---

## Epic 5: Gestão Comercial (Diretor de Vendas)

**Descrição:**  
Como diretor de vendas, quero cadastrar oportunidades, acompanhar clientes em potencial e registrar contratos fechados.

### User Stories:

**US 5.1 - Cadastro de Leads e Oportunidades**  
- Como diretor, quero cadastrar novos leads e oportunidades de vendas.

**Critérios de Aceite:**
- Formulário de cadastro de lead com nome, contato e interesse.

**US 5.2 - Atualização de Status de Vendas**  
- Como diretor, quero atualizar o status das vendas em andamento.

**Critérios de Aceite:**
- Mudança de status de lead para oportunidade ou contrato fechado.

**US 5.3 - Dashboard de Vendas**  
- Como diretor, quero visualizar a evolução das vendas no sistema.

**Critérios de Aceite:**
- Gráficos de conversão e pipeline de vendas.

**US 5.4 - Histórico de Clientes**  
- Como diretor, quero ver o histórico de vendas para cada cliente.

**Critérios de Aceite:**
- Visualização de contratos e negociações anteriores.

---

## Epic 6: Gestão Estratégica (Presidente)

**Descrição:**  
Como presidente, quero visualizar o panorama geral da empresa com métricas estratégicas e status financeiro.

### User Stories:

**US 6.1 - Visualizar Dashboard Executivo**  
- Como presidente, quero um dashboard resumido de todas as áreas.

**Critérios de Aceite:**
- KPIs estratégicos exibidos em painel único.

**US 6.2 - Acesso a Relatórios Estratégicos**  
- Como presidente, quero acessar relatórios completos.

**Critérios de Aceite:**
- Relatórios segmentados por área.

**US 6.3 - Gestão de Indicadores de Sucesso**  
- Como presidente, quero acompanhar indicadores-chave.

**Critérios de Aceite:**
- Atualização periódica e comparativos entre períodos.

---

## Epic 7: Suporte à Gestão Estratégica (Vice-Presidente)

**Descrição:**  
Como vice-presidente, quero acessar relatórios e indicadores estratégicos para apoiar a presidência.

### User Stories:

**US 7.1 - Visualizar Relatórios de Performance**  
- Como vice-presidente, quero acompanhar relatórios de performance de cada área.

**Critérios de Aceite:**
- Relatórios acessíveis em painel restrito.

**US 7.2 - Acesso a Progresso de Projetos-Chave**  
- Como vice-presidente, quero ver a evolução dos projetos estratégicos.

**Critérios de Aceite:**
- Exibição de progresso e alertas de risco.

**US 7.3 - Notificações de Riscos Estratégicos**  
- Como vice-presidente, quero ser notificado sobre projetos críticos.

**Critérios de Aceite:**
- Sistema de alertas integrado.

---

## Epic 8: Acompanhamento Individual (Membros de Área)

**Descrição:**  
Como membro de uma área, quero acessar meus projetos e tarefas

### User Stories:

**US 8.1 - Visualizar Meus Projetos/Tarefas**  
- Como membro, quero acessar rapidamente meus projetos.

**Critérios de Aceite:**
- Listagem clara e filtros por status.

**US 8.2 - Atualizar Minhas Informações Pessoais**  
- Como membro, quero atualizar meu perfil e habilidades.

**Critérios de Aceite:**
- Edição de informações pessoais com histórico.

**US 8.3 - Acessar Meu Plano de Desenvolvimento**  
- Como membro, quero acompanhar meu próprio PDI.

**Critérios de Aceite:**
- Visualização e atualização de metas.

---

## Epic 9: Acesso de Clientes Externos

**Descrição:**  
Como cliente, quero acessar o projeto contratado e acompanhar seu andamento.

### User Stories:

**US 9.1 - Login Seguro com Chave de Acesso**  
- Como cliente, quero acessar a aplicação de forma segura.

**Critérios de Aceite:**
- Sistema de autenticação funcional.

**US 9.2 - Visualizar Progresso do Meu Projeto**  
- Como cliente, quero ver atualizações do projeto.

**Critérios de Aceite:**
- Timeline de entregas e status atualizado.

**US 9.3 - Visualizar Entregas e Datas Importantes**  
- Como cliente, quero acompanhar as principais entregas.

**Critérios de Aceite:**
- Exibição de marcos do projeto.

---

## ⚙️ Requisitos Funcionais

### Cadastro, Login e Gestão de Permissões
- RF01 - O sistema deve permitir o cadastro de usuários com diferentes níveis de permissão (presidência, diretores, membros, clientes).
- RF02 - O sistema deve permitir o login de usuários autenticados com validação de permissões.
- RF03 - O sistema deve permitir o login de clientes via chave de acesso segura.
- RF04 - O sistema deve permitir que administradores gerenciem permissões dos usuários.

### Gestão de Projetos
- RF05 - O sistema deve permitir a criação de novos projetos preenchendo nome, descrição, tipo, link reposítorio, cliente associado, chave de acesso do cliente e data de entrega.
- RF06 - O sistema deve permitir a edição de projetos ativos, salvando o histórico de alterações.
- RF07 - O sistema deve permitir a exclusão de projetos, com alerta de confirmação para o usuário autorizado.
- RF08 - O sistema deve disponibilizar um dashboard de projetos, exibindo status, datas e tipo de cada projeto.
- RF09 - O sistema deve calcular e exibir automaticamente a barra de progresso dos projetos com base nas datas.

### Gestão de Parcerias
- RF10 - O sistema deve permitir o cadastro de parcerias, com nome da empresa, tipo de relacionamento, data de início e status.
- RF11 - O sistema deve permitir a edição e filtragem do status das parcerias (ativas/inativas).
- RF12 - O sistema deve permitir visualizar o histórico de ativações por parceiro, com data e descrição.

### Gestão de Pessoas e Desenvolvimento Individual
- RF13 - O sistema deve exibir uma lista de membros com nome e foto.
- RF14 - O sistema deve permitir acessar o perfil individual dos membros, exibindo objetivos, habilidades e forças.
- RF15 - O sistema deve permitir a atualização do PDI (Plano de Desenvolvimento Individual) dos membros, registrando o histórico de alterações.

### Métricas, Relatórios e Dashboards
- RF16 - O sistema deve exibir métricas de performance por área.
- RF17 - O sistema deve permitir a geração de relatórios de eficiência em formato PDF e Excel.
- RF18 - O sistema deve exibir um dashboard executivo consolidando os principais KPIs da empresa.
- RF19 - O sistema deve permitir a exportação de dados e relatórios.

### Gestão Comercial (Leads e Vendas)
- RF20 - O sistema deve permitir o cadastro de leads e oportunidades com nome, contato e interesse.
- RF21 - O sistema deve permitir a atualização do status das oportunidades (lead, oportunidade, contrato fechado).
- RF22 - O sistema deve exibir uma dashboard de vendas com gráficos de conversão e pipeline.
- RF23 - O sistema deve permitir visualizar o histórico de vendas por cliente.

### Acompanhamento Individual (para membros)
- RF24 - O sistema deve listar os projetos e tarefas de cada membro, com filtros por status.
- RF25 - O sistema deve permitir que membros atualizem seu próprio perfil e habilidades.
- RF26 - O sistema deve disponibilizar a visualização e atualização das metas individuais no PDI.

### Acesso Externo (Clientes)
- RF27 - O sistema deve permitir que clientes visualizem o progresso do projeto contratado.
- RF28 - O sistema deve apresentar entregas e marcos importantes do projeto para clientes.

### Notificações Estratégicas
- RF29 - O sistema deve notificar o vice-presidente sobre riscos em projetos estratégicos.
- RF30 - O sistema deve exibir alertas de risco e progresso nos projetos-chave para a presidência e vice-presidência.

## 📱 Responsividade

**O projeto será responsivo?**
- [x] Sim
- [ ] Não

**Se sim, até qual ponto?**
- [ ] Mobile-first
- [ ] Adaptável para tablets
- [x] Desktops Grandes e notebooks menores
- [ ] Totalmente responsivo (desktop, tablet, mobile)

---

## 📌 Observações Finais

- **Dependências:** Integração com serviço de autenticação segura para login de clientes (ex: Auth0, Firebase Authentication).
- **Riscos Conhecidos:** Possível resistência de membros em adotar a plataforma no início; mitigação prevista via treinamento interno.
- **Considerações Legais:** Proteção de dados dos clientes conforme a LGPD (Lei Geral de Proteção de Dados).
- **Prazos:** Algumas funcionalidades, como dashboards de vendas e métricas de áreas, podem ser entregues em fases posteriores.

---

