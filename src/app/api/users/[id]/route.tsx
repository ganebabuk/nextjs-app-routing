import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import mongoose from 'mongoose';
import Users from '@/app/models/users';
import { headers } from 'next/headers';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  console.log('request.headers:::', request.headers.get('host'));
  const headersList = headers()
  const host = headersList.get('host');
  console.log('host:::', host);
  const { id } = params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const user = await Users.findById(objectId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Error retrieving user' }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();

  const { id } = params;
  const { name, email } = await request.json();

  try {
    const user = await Users.findByIdAndUpdate(id, { name, email }, { new: true });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating user' }, { status: 500 });
  }
}
