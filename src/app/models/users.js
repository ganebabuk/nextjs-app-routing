import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  marks: [
    {
      english: { type: Number, required: true },
      maths: { type: Number, required: true }
    }
  ],
  date_created: { type: Date, required: true },
});

const Users = mongoose.models.Users || mongoose.model('Users', userProfileSchema);
export default Users;
