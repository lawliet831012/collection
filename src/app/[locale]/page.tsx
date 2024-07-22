/* Components */
import { type JSX } from 'react';
import type { Style } from '@/assets/theme';
import initTranslations from '../i18n';
import { Container, Box, Button, Typography } from '@mui/material';

async function IndexPage({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<JSX.Element> {
  const { t, resources } = await initTranslations(locale, ['index']);
  return (
    <Container fixed>
      <Box>
        <Typography variant="h2">{t('title')}</Typography>
      </Box>
      <Box>b</Box>
      home
    </Container>
  );
}
const styles: Style = {
  nav: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'flex',
  },
  navButton: {
    minWidth: 100,
  },
  home: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
} as const;

export default IndexPage;
