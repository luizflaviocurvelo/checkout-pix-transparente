import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
export const runtime = 'nodejs';
const digits = x => String(x || '').replace(/\D/g,'');
function validCPF(s){if(s.length!==11||/^(\d)\1+$/.test(s))return false;for(let k=9;k<11;k++){let sum=0;for(let i=0;i<k;i++)sum+=Number(s[i])*(k+1-i);let d=(sum*10)%11;if(d===10)d=0;if(d!==Number(s[k]))return false;}return true;}
export async function POST(request){
 try{
  if(!process.env.MERCADOPAGO_ACCESS_TOKEN)return NextResponse.json({error:'Credencial de pagamento não configurada.'},{status:503});
  const body=await request.json();const name=String(body.nome||'').trim().slice(0,120);const email=String(body.email||'').trim().slice(0,150);const cpf=digits(body.cpf);const phone=digits(body.whats);
  if(name.length<3||!/^\S+@\S+\.\S+$/.test(email)||!validCPF(cpf)||phone.length<10||phone.length>13)return NextResponse.json({error:'Confira nome, e-mail, CPF e telefone.'},{status:400});
  const names=name.split(/\s+/);const id=randomUUID();
  const payload={type:'online',external_reference:id,total_amount:'0.07',description:'Pagamento de teste do checkout',payer:{email,first_name:names[0],last_name:names.slice(1).join(' ')||names[0],identification:{type:'CPF',number:cpf}},transactions:{payments:[{amount:'0.07',payment_method:{id:'pix',type:'bank_transfer'}}]}};
  const r=await fetch('https://api.mercadopago.com/v1/orders',{method:'POST',headers:{Authorization:`Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,'Content-Type':'application/json','X-Idempotency-Key':id},body:JSON.stringify(payload),cache:'no-store'});
  const data=await r.json().catch(()=>({}));
  if(!r.ok){console.error('Mercado Pago Orders error',r.status,JSON.stringify(data).slice(0,1200));return NextResponse.json({error:'Mercado Pago não aceitou a cobrança. Verifique os logs da Vercel (inclusive o valor mínimo permitido).',code:r.status},{status:502});}
  const payment=data.transactions?.payments?.[0]||{};const pix=payment.payment_method||{};
  return NextResponse.json({id:data.id,status:data.status,qr_code:pix.qr_code||payment.point_of_interaction?.transaction_data?.qr_code||null,qr_code_base64:pix.qr_code_base64||payment.point_of_interaction?.transaction_data?.qr_code_base64||null,ticket_url:pix.ticket_url||null});
 }catch(e){console.error('Pix route error',e);return NextResponse.json({error:'Não foi possível criar o Pix.'},{status:500});}
}
