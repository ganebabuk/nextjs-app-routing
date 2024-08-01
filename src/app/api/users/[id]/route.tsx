import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import mongoose from 'mongoose';

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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();

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
