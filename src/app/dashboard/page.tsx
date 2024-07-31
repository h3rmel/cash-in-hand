import { columns } from '@/app/dashboard/_components/columns';
import { DataTable } from '@/app/dashboard/_components/data-table';
import { MOCK_TRANSACTIONS } from '@/mocks/transaction';

export default function DashboardPage() {
  return <DataTable columns={columns} data={MOCK_TRANSACTIONS} />;
}
