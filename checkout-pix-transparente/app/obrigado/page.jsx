'use client';

export default function Obrigado() {
  const mensagem = encodeURIComponent('Olá! Gostaria de falar com o vendedor sobre minha compra.');
  const whatsapp = `https://wa.me/5513991496597?text=${mensagem}`;

  return (
    <main style={{minHeight:'100vh',background:'#f3f6fa',fontFamily:'Arial, sans-serif',padding:'28px 16px',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <section style={{background:'#fff',borderRadius:20,maxWidth:900,width:'100%',padding:24,textAlign:'center',boxShadow:'0 10px 30px #0001'}}>
        <h1 style={{color:'#087443'}}>Obrigado pela sua compra!</h1>
        <p>Seu pagamento foi confirmado com sucesso.</p>
        <img src="/imagem-obrigado.png" alt="Arte sobre liberdade, justiça e Constituição" style={{display:'block',width:'100%',height:'auto',borderRadius:12,margin:'24px auto'}} />
        <p>Em breve, você receberá as orientações para acessar seu curso.</p>
        <a href="/" style={{display:'inline-block',background:'#0879df',color:'#fff',padding:'14px 24px',borderRadius:10,textDecoration:'none',marginTop:12}}>Voltar ao início</a>
      </section>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com o vendedor pelo WhatsApp" style={{position:'fixed',bottom:24,right:24,background:'#25D366',color:'#fff',borderRadius:50,padding:'15px 20px',textDecoration:'none',fontWeight:'bold',boxShadow:'0 5px 20px #0003'}}>WhatsApp</a>
    </main>
  );
}
