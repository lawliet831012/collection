'use client';
import { useEffect, type JSX, type ReactNode } from 'react';
import { ToastifyContainer } from '@/components/Toastify';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { Resource, createInstance } from 'i18next';

function ClientProviders({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
}): JSX.Element {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  useEffect(() => {
    // client initail

    return () => {};
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
      <ToastifyContainer />
    </I18nextProvider>
  );
}

export default ClientProviders;
