# Regras de Repositório

## `View-Pax-Insights`

Repositório do site público e da camada visual aberta.

Entram aqui:
- landing pages e páginas institucionais
- navegação pública, textos comerciais e seções de apresentação
- componentes visuais públicos
- formulários públicos sem expor regras internas
- integrações públicas controladas, sem credenciais sensíveis no frontend

## `Pax-Insights-`

Repositório do CRM interno e da operação protegida.

Entram lá:
- autenticação, perfis, permissões e segurança
- Supabase, migrations, scripts de banco e integrações internas
- funil, subfunis, leads, relatórios e estrutura do CRM
- automações operacionais e regras de negócio internas
- qualquer código que use dados reais, credenciais ou lógica administrativa

## Regra prática

Se a demanda envolver segurança, operação interna, banco, login ou dados reais, usar `Pax-Insights-`.

Se a demanda envolver site público, marketing, conteúdo institucional ou interface aberta, usar `View-Pax-Insights`.

## Regra de segurança

Este repositório público não deve receber:
- chaves, tokens ou credenciais
- lógica administrativa do CRM
- consultas internas diretas do Supabase com acesso sensível
- logs, scripts operacionais ou código de auditoria

Quando algo público precisar de dados do CRM, a exposição deve ser controlada e separada da lógica interna.
