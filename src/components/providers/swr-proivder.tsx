'use client';

import { SWRConfig } from 'swr';

type SWRProviderProps = {
  children: React.ReactNode;
};
export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        onError: (error) => console.log(error),
      }}
    >
      {children}
    </SWRConfig>
  );
}
