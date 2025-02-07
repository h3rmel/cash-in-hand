import { Edit, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useSheets } from '@/hooks/use-sheets';

type CategoryActionsProps = {
  id: string;
};

export function CategoryActions({ id }: CategoryActionsProps) {
  const { onOpen } = useSheets();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="size-8 p-1">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onOpen('editCategory', id)}>
          <Edit className="size-4" />
          Edit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
