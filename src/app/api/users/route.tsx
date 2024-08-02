import connectToDatabase from '../../../lib/mongoose';
import { NextRequest, NextResponse } from 'next/server';
import Users from '../../models/users';

export async function GET() {
  await connectToDatabase();
  const userslist = await Users.find({});
  return new Response(JSON.stringify(userslist), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { first_name, _id } = await request.json();
  const user = new Users({ first_name, _id });
  await user.save();
  return NextResponse.json(user);
}
