import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ id: 'order-retrieve' }];
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const order_id = params.id;
  console.log('order_id', order_id);

  try {
    const response = await axios.get(`${process.env.SQUIRE_BASE_URL}/orders/${order_id}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
