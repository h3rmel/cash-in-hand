import { connect } from 'mongoose';

import { InternalServerError } from '@/lib/errors';

/**
 * Connects to the database using the provided MongoDB URI.
 *
 * @returns A promise that resolves to the Mongoose module.
 * @throws {InternalServerError} If an error occurs while connecting to the database.
 */
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
