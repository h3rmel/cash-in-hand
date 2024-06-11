/**
 * Represents a custom error with additional properties.
 */
export class CustomError extends Error {
  /**
   * The HTTP status code associated with the error.
   */
  status: number;

  /**
   * A user-friendly message describing the error.
   */
  userFriendlyMessage: string;

  /**
   * Creates a new instance of the CustomError class.
   * @param {string} message - The error message.
   * @param {number} status - The HTTP status code associated with the error.
   * @param {string} userFriendlyMessage - A user-friendly message describing the error.
   */
  constructor(message: string, status: number, userFriendlyMessage: string) {
    super(message);
    this.name = 'CustomError';
    this.status = status;
    this.userFriendlyMessage = userFriendlyMessage;
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string, userFriendlyMessage: string) {
    super(message, 500, userFriendlyMessage);
    this.name = 'InternalServerError';
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string, userFriendlyMessage: string) {
    super(message, 400, userFriendlyMessage);
    this.name = 'BadRequestError';
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string, userFriendlyMessage: string) {
    super(message, 403, userFriendlyMessage);
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string, userFriendlyMessage: string) {
    super(message, 404, userFriendlyMessage);
    this.name = 'NotFoundError';
  }
}
