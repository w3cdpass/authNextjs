import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const educationSchema = new mongoose.Schema({
  qualification: { type: String, trim: true },
  fieldOfStudy: { type: String, trim: true },
  educationProgress: { type: String, trim: true },
  yearPass: { type: String, trim: true }
}, { _id: false });

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    default: 'candidate'
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  dob: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    type: String,
    trim: true
  },
  education: [educationSchema],
  fresher: {
    type: Boolean,
    default: true
  },
  experience: {
    type: String,
    trim: true
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
}, { timestamps: true });

// Hash password before saving
candidateSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Password comparison method
candidateSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.Candidates || mongoose.model('Candidates', candidateSchema);
