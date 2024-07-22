/* Components */
import { type JSX } from 'react';
import type { Style } from '@/assets/theme';
import ClientProviders from '../../components/ClientProviders';
import initTranslations from '../i18n';
import { Container, Box, Typography } from '@mui/material';
import LocaleSwitch from '../../components/LocaleSwitch';
import { Profile } from '../../components/SideProfile';
import { CryptoApi, Ibind } from '../../components/Collection';
import { lightBlue } from '@mui/material/colors';

const namespaces = ['index'];

async function IndexPage({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <ClientProviders
      namespaces={namespaces}
      locale={locale}
      resources={resources}
    >
      <Box sx={styles.page}>
        <Box sx={styles.side}>
          <Profile />
        </Box>
        <Box sx={styles.main}>
          <Container fixed>
            <Box sx={styles.container}>
              <Box
                display={'flex'}
                width={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Typography variant="h3">{t('title')}</Typography>
                <LocaleSwitch />
              </Box>
            </Box>
            <Box sx={styles.content}>
              <CryptoApi />
              <Ibind />
            </Box>
          </Container>
        </Box>
      </Box>
    </ClientProviders>
  );
}
const styles: Style = {
  page: {
    display: 'flex',
    height: '100vh',
    position: 'relative',
  },
  sticky: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  main: {
    flex: 1,
    haxHeight: '100vh',
    overflow: 'auto',
  },
  side: {
    width: 200,
    backgroundColor: lightBlue[50],
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    p: 2,
  },
  langBtn: {
    padding: '0 10px',
  },
  home: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    width: '100%',
    marginTop: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
} as const;

export default IndexPage;
