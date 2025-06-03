import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://mongo:PiBxdxBxKXRoSIkKiGdkXVKwJBnyGbUu@tramway.proxy.rlwy.net:43721/testdb';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'testdb',
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;

