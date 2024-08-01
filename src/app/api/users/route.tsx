import connectToDatabase from '../../../lib/mongoose';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
const userProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {type: String, required: true},
  marks: [
    {
      english: { type: Number, required: true },
      maths: { type: Number, required: true }
    }
  ],
  date_created: { type: Date, required: true},
});

const Users = mongoose.models.Users || mongoose.model('Users', userProfileSchema);

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
