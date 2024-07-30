/**
 * Category Interface
 *
 * Serves as a model for the category object.
 *
 * A category is a identifier to group transactions.
 *
 * @param id - Unique identifier of the category. (Auto-generated)
 * @param name - Name of the category. (e.g. Salary, Health, Service, etc.)
 */
export interface ICategory {
  id: string;
  name: string;
}

/**
 * Category Form Data Interface
 *
 * Serves as a model for the category form data object.
 * Used to create and manage categories with a form.
 *
 * @param name - Name of the category. (e.g. Salary, Health, Service, etc.)
 */
export interface ICategoryFormData extends Omit<ICategory, 'id'> {}
