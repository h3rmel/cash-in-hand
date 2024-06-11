import { InternalServerError } from '@/lib/errors';
import { connect } from 'mongoose';

export async function connectToDatabase(): Promise<typeof import('mongoose')> {
  try {
    return await connect(process.env.MONGODB_URI as string, { autoIndex: false });
  } catch (error) {
    console.error(error);

    throw new InternalServerError(
      'An error occurred while connecting to the database.',
      'An error occurred while connecting to the database. Please try again.',
    );
  }
}
