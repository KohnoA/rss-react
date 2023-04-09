import { useState } from 'react';

type useFetchingReturns = [() => Promise<void>, boolean, string];

export function useFetching(callback: () => Promise<void>): useFetchingReturns {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
