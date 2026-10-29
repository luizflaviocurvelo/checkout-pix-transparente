'use client';

export default function Obrigado() {
  const whatsapp = '5513991496597';

  const mensagem = encodeURIComponent(
    'Olá! Gostaria de falar com o vendedor sobre minha compra.'
  );

  const link = `https://wa.me/${whatsapp}?text=${mensagem}`;

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f3f6fa',
        fontFamily: 'Arial, sans-serif',
        padding: '30px 20px',
        boxSizing: 'border-box'
      }}
    >
      <section
        style={{
          background: '#ffffff',
          padding: '35px 28px',
          borderRadius: 22,
          textAlign: 'center',
          width: '100%',
          maxWidth: 1050,
          boxShadow: '0 10px 35px rgba(0,0,0,0.08)'
        }}
      >
        {/* Ícone de confirmação */}
        <div
          style={{
            fontSize: 60,
            color: '#087443',
            marginBottom: 10
          }}
        >
          ✓
        </div>

        {/* Título */}
        <h1
          style={{
            color: '#087443',
            fontSize: 'clamp(25px, 4vw, 36px)',
            marginBottom: 18
          }}
        >
          Obrigado pela sua compra!
        </h1>

        {/* Confirmação */}
        <p
          style={{
            fontSize: 19,
            color: '#152b46',
            marginBottom: 28
          }}
        >
          Seu pagamento foi confirmado com sucesso.
        </p>

        {/* Imagem principal */}
        <img
          src="/imagem-obrigado.png"
          alt="Liberdade, Justiça e Constituição"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: 14,
            marginBottom: 28
          }}
        />

        {/* Orientações */}
        <p
          style={{
            fontSize: 19,
            color: '#152b46',
            lineHeight: 1.6,
            marginBottom: 15
          }}
        >
          Em breve, você receberá as orientações
          para acessar seu curso.
        </p>
      </section>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o vendedor pelo WhatsApp"
        style={{
          position: 'fixed',
          bottom: 25,
          right: 25,
          background: '#25D366',
          color: '#ffffff',
          borderRadius: 50,
          padding: '16px 24px',
          textDecoration: 'none',
          fontSize: 18,
          fontWeight: 'bold',
          boxShadow: '0 5px 20px rgba(0,0,0,0.25)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
