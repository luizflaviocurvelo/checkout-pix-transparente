# Checkout Pix Transparente — integração inicial Orders

Versão para **validação técnica controlada** do Pix real no Mercado Pago. **Não liberar ao público ainda.** Usa a API de Orders `/v1/orders`, com valor fixo no servidor de R$ 0,07. O Mercado Pago pode rejeitar valores inferiores ao mínimo aceito ou exigir ajustes de payload.

## Atualizar o mesmo GitHub
Extraia o ZIP e envie os arquivos para a **raiz do repositório existente**, substituindo os anteriores. Não crie novo projeto. A Vercel deve fazer novo deploy após o commit.

## Variável na Vercel
`MERCADOPAGO_ACCESS_TOKEN` — somente no ambiente Production, nunca `NEXT_PUBLIC_`. Faça redeploy após modificar variáveis.

## Como testar
1. Confirme que a rota `/api/pix` existe no deploy (não abra diretamente: aceita apenas POST).
2. Abra o checkout e use dados próprios reais para o teste autorizado. Não publique o link para clientes ainda.
3. Se houver erro, confira os logs de funções da Vercel. Um erro de valor mínimo exige rever o valor, não tentar contornar a restrição.
4. Se a API retornar o QR Code, valide o pagamento no painel do Mercado Pago. O status mostrado na tela é apenas informativo.

## Limitações importantes
- A tela atual é um formulário próprio; **não é o Payment Brick oficial**. Precisamos verificar a compatibilidade exata do Payment Brick com a aplicação Orders antes de substituí-lo.
- A rota `/api/webhook` é um placeholder: **não valida assinatura e não deve ser cadastrada como webhook de produção ainda**.
- Ainda não há Supabase, WhatsApp, idempotência persistente, fila de mensagens, proteção contra abuso/rate limit, nem política LGPD. **Não lançar comercialmente** antes disso.
- O endpoint de status consulta a API do Mercado Pago; não deve ser utilizado para conceder acesso sem verificação no servidor e registro no banco.
- O valor de R$ 0,07 pode não ser permitido em produção.
