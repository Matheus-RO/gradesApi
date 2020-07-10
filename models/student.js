import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error('Valor não pode ser inferior a 0');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

studentSchema.method('toJSON', function () {
  const obj = this.toObject();
  // console.log({ ...this.toObject(), why: 'why this is happenning with me?' });
  // console.log({ ...obj, why: 'why this is happenning with me? part2' });

  // console.log(obj._id, 'is this working?');
  obj.id = obj._id;
  delete obj._id;

  return obj;
});
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
