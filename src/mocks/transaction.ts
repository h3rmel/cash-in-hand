import { ITransaction } from '@/types/transaction';
import { faker, fakerPT_BR } from '@faker-js/faker';

function generateMockTransaction(): ITransaction {
  return {
    id: fakerPT_BR.string.uuid(),
    name: fakerPT_BR.commerce.product(),
    description: fakerPT_BR.lorem.sentence(),
    type: fakerPT_BR.datatype.boolean() ? 'income' : 'expense',
    value: Number(fakerPT_BR.finance.amount()),
    categoryId: String(Math.floor(Math.random() * 6) + 1),
    createdAt: fakerPT_BR.date.anytime(),
    date: faker.date.anytime(),
  } satisfies ITransaction;
}

const MOCK_TRANSACTIONS: ITransaction[] = Array.from({ length: 10 }, generateMockTransaction);

export { MOCK_TRANSACTIONS };
