# Checkout Pix Transparente — versão inicial para obter URL

Este projeto Next.js publica uma página inicial responsiva na Vercel para informar sua URL ao Mercado Pago Developers. **Não processa pagamentos ainda.** O botão Pix está intencionalmente desabilitado e o formulário não transmite nem armazena dados.

## Publicar
1. Extraia o ZIP.
2. Crie um repositório novo no GitHub (por exemplo, `checkout-pix-transparente`).
3. Envie os arquivos **da pasta do projeto** ao repositório, incluindo `app`, `package.json`, `.gitignore` e `README.md`. Não envie credenciais.
4. Na Vercel, selecione Add New → Project → Import Git Repository.
5. Selecione o repositório e mantenha a configuração padrão Next.js; clique em Deploy.
6. Copie a URL real `https://...vercel.app` gerada e informe-a no campo de site do Mercado Pago.

## Próximas fases (não implementadas nesta versão)
- Confirmar na documentação atual a compatibilidade da aplicação Orders com o componente oficial de checkout desejado.
- Criar endpoint de cobrança Pix no servidor, usando Access Token de produção em variável privada da Vercel.
- Verificar valor mínimo aceito para R$ 0,07 antes de cobrar.
- Validar webhook e consultar status diretamente no Mercado Pago.
- Salvar compras no Supabase com prevenção de duplicidade.
- Enviar mensagem transacional pelo WhatsApp Cloud API com consentimento e template aprovado.
- Aplicar LGPD, validações, rate limiting, proteção de segredos e monitoramento antes de produção.

**Nunca coloque o Access Token no GitHub, em variáveis NEXT_PUBLIC_ ou em capturas de tela.**
