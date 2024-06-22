import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/lib/database';

export async function GET() {
  try {
    const database = await connectToDatabase();

    database.connection.close();
    database.disconnect();

    return NextResponse.json({ message: 'Connected to database successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: 'Failed to connect to database!' }, { status: 500 });
  }
}
