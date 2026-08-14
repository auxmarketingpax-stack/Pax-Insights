# Regras de Repositorio

## `Pax-Insights-`

Repositorio do CRM interno e da operacao protegida.

Entram aqui:
- autenticacao, perfis, permissoes e seguranca
- Supabase, migrations, scripts de banco e integracoes internas
- funil, subfunis, leads, relatorios e estrutura do CRM
- automacoes operacionais e regras de negocio internas
- qualquer codigo que use dados reais, credenciais ou logica administrativa

## `Pax-Insights`

Repositorio do site publico e da camada visual aberta.

Entram la:
- landing pages e paginas institucionais
- navegacao publica, textos comerciais e secoes de apresentacao
- componentes visuais publicos
- formularios publicos sem expor regras internas
- integracoes publicas controladas, sem credenciais sensiveis no frontend

## Fonte de verdade

`Pax-Insights-` e a fonte de verdade do produto.

Tudo que mexe com CRM, operacao, Supabase, migrations, login, permissoes, relatorios internos e dados reais deve nascer aqui primeiro.

`Pax-Insights` recebe apenas o espelho controlado do que fizer sentido expor ou publicar.

Nao assumir sincronizacao automatica entre os repositorios.
Quando um arquivo precisar existir nos dois, a copia para o publico deve ser intencional e revisada.

## Regra pratica

Se a demanda envolver seguranca, operacao interna, banco, login ou dados reais, usar `Pax-Insights-`.

Se a demanda envolver site publico, marketing, conteudo institucional ou interface aberta, usar `Pax-Insights`.

## Regra de seguranca

O repositorio `Pax-Insights` nao deve receber:
- chaves, tokens ou credenciais
- logica administrativa do CRM
- consultas internas diretas do Supabase com acesso sensivel
- logs, scripts operacionais ou codigo de auditoria

Quando algo publico precisar de dados do CRM, a exposicao deve ser controlada e separada da logica interna.

## Espelhamento para o publico

So espelhar para `Pax-Insights`:
- interface e comportamento que realmente precisem existir no site publicado
- arquivos visuais e scripts sem credenciais
- logica que nao aumente o risco de expor fluxo administrativo interno

Nao espelhar por padrao:
- migrations
- arquivos de operacao interna
- scripts de banco
- documentacao de seguranca
- qualquer detalhe que facilite engenharia reversa da camada administrativa

## Qualidade de codigo

Para regras de arquitetura, persistencia, seguranca, autorizacao e padrao de implementacao do projeto, consultar tambem [ENGINEERING_GUIDELINES.md](/C:/GitHub/Pax-Insights-/ENGINEERING_GUIDELINES.md).
