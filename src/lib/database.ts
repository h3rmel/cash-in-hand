// // import { connect } from 'mongoose';

import mongoose from 'mongoose';

import { BadRequestError } from '@/lib/errors';

/**
 * @see {@url https://dev.to/thatanjan/2-ways-to-set-up-nextjs-with-mongodb-and-mongoose-4afo}
 */

// // import { InternalServerError } from '@/lib/errors';

// // /**
// //  * Connects to the database using the provided MongoDB URI.
// //  *
// //  * @returns A promise that resolves to the Mongoose module.
// //  * @throws {InternalServerError} If an error occurs while connecting to the database.
// //  */
// // export async function connectToDatabase(): Promise<typeof import('mongoose')> {
// //   try {
// //     return await connect(process.env.MONGODB_URI as string, { autoIndex: false });
// //   } catch (error) {
// //     console.error(error);

// //     throw new InternalServerError(
// //       'An error occurred while connecting to the database.',
// //       'An error occurred while connecting to the database. Please try again.',
// //     );
// //   }
// // }

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) throw new BadRequestError('MONGODB_URI is not defined', 'MONGODB_URI is not defined');

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { connection: null, promise: null };

async function connectToDatabase() {}
