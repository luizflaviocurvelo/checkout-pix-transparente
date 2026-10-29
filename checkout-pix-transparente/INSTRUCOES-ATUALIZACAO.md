# Atualização: página de pagamento confirmado

Este pacote mantém as rotas existentes de criação e consulta Pix. A interface troca o QR Code pela página de sucesso quando a consulta à API de Orders retorna `processed` ou `approved`. Cobranças canceladas, falhas ou expiradas não aparecem como aprovadas.

## Publicação
1. Extraia o ZIP.
2. No GitHub, substitua os arquivos dentro da pasta existente `checkout-pix-transparente`, sem criar outra pasta aninhada.
3. Aguarde a Vercel mostrar Ready.
4. Para verificar a página, consulte um novo pagamento de valor autorizado. A tela não altera pagamentos anteriores que já foram concluídos em sessões fechadas.

## Limites desta versão
- Não há webhook de produção validado, Supabase nem envio de WhatsApp.
- A tela de sucesso depende da consulta periódica no navegador.
- Não é comprovante fiscal e não substitui o registro da compra no servidor.
- Antes de liberar ao público, implemente persistência, webhook com validação e autorização da consulta de status.
