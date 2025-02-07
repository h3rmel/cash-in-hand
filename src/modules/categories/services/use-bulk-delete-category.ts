import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.categories)['bulk-delete']['$post']
>;
type RequestType = InferRequestType<
  (typeof client.api.categories)['bulk-delete']['$post']
>['json'];

export function useBulkDeleteCategory() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.categories['bulk-delete']['$post']({
        json,
      });

      return await response.json();
    },
    onSuccess: () => {
      toast.success('Category(ies) deleted successfully');
      void queryClient.invalidateQueries({ queryKey: ['categories'] });
      // TODO: Invalidate "summary" query key when it's available
    },
    onError: () => {
      toast.error('Failed to create category(ies)');
    },
  });

  return mutation;
}
