import connectToDatabase from '../../../lib/mongoose';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

const UserSchema = new mongoose.Schema({
  first_name: String,
  _id: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export async function GET() {
  await connectToDatabase();
  const users = await User.find({});
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { first_name, _id } = await request.json();
  const user = new User({ first_name, _id });
  await user.save();
  return NextResponse.json(user);
}
