import {NextResponse} from 'next/server';
export const runtime='nodejs';
export async function GET(_req,{params}){
 const id=params.id;if(!/^[a-zA-Z0-9_-]{1,100}$/.test(id))return NextResponse.json({error:'ID inválido'},{status:400});
 if(!process.env.MERCADOPAGO_ACCESS_TOKEN)return NextResponse.json({error:'Não configurado'},{status:503});
 const r=await fetch(`https://api.mercadopago.com/v1/orders/${encodeURIComponent(id)}`,{headers:{Authorization:`Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`},cache:'no-store'});
 if(!r.ok)return NextResponse.json({error:'Não foi possível consultar o pagamento'},{status:502});
 const data=await r.json();return NextResponse.json({status:data.status,status_detail:data.status_detail||null});
}
