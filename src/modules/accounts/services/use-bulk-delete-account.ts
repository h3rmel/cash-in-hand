import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';

import { client } from '@/lib/hono';

type ResponseType = InferResponseType<
  (typeof client.api.accounts)['bulk-delete']['$post']
>;
type RequestType = InferRequestType<
  (typeof client.api.accounts)['bulk-delete']['$post']
>['json'];

export function useBulkDeleteAccount() {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts['bulk-delete']['$post']({ json });

      return await response.json();
    },
    onSuccess: () => {
      toast.success('Account(s) deleted successfully');
      void queryClient.invalidateQueries({ queryKey: ['accounts'] });
      // TODO: Invalidate "summary" query key when it's available
    },
    onError: () => {
      toast.error('Failed to create account(s)');
    },
  });

  return mutation;
}
