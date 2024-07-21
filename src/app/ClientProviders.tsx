'use client';
import { useEffect, type JSX, type ReactNode } from 'react';
import { ToastifyContainer } from '@/components/Toastify';

function ClientProviders({ children }: { children: ReactNode }): JSX.Element {
  useEffect(() => {
    // client initail

    return () => {};
  }, []);

  return (
    <>
      {children}
      <ToastifyContainer />
    </>
  );
}

export default ClientProviders;
