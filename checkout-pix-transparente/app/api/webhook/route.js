import {NextResponse} from 'next/server';
export const runtime='nodejs';
// Não ativa acesso nem envia WhatsApp: primeiro implementar verificação de assinatura e persistência.
export async function POST(request){console.info('Webhook recebido; processamento ainda não habilitado',request.headers.get('x-request-id'));return NextResponse.json({received:true});}
