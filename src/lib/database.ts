import mongoose from 'mongoose';

import { InternalServerError } from './errors';

export async function connectToDatabase(): Promise<typeof mongoose> {
  const MONGODB_URI: string = process.env.MONGODB_URI as string;

  if (!MONGODB_URI) throw new InternalServerError('MONGODB_URI is not defined', 'MONGODB_URI is not defined');

  try {
    const connection: Promise<typeof mongoose> = mongoose.connect(MONGODB_URI, { autoIndex: false });

    mongoose.connection.on('connected', () => {
      console.info('Connected to Database!');
    });
    mongoose.connection.on('disconnected', () => {
      console.info('Disconnected from Database!');
    });

    return connection;
  } catch (error) {
    console.error(error);

    throw new InternalServerError(
      'An error occurred while connecting to the database.',
      'An error occurred while connecting to the database. Please try again.',
    );
  }
}
