'use client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Link, Paper, Grow, Fade } from '@mui/material';
import { Style } from '../../assets/theme';
import Image from 'next/image';

const Ibind: React.FC = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Box sx={styles.root}>
      <Fade in={show}>
        <Typography variant="h6" component="h2">
          {t('ibind.title')}
        </Typography>
      </Fade>
      <Fade in={show}>
        <Typography variant="body1" component="p">
          {t('ibind.content')}
        </Typography>
      </Fade>
      <Grow in={show}>
        <Paper sx={styles.img} elevation={2}>
          <Image src={'/web.gif'} alt="Crypto Api" width={600} height={329} />
        </Paper>
      </Grow>

      <Grow in={show}>
        <Box display={'flex'}>
          <Paper sx={styles.img} elevation={2}>
            <Image
              src={'/applogin.gif'}
              alt="Crypto Api"
              width={300}
              height={630}
            />
          </Paper>
          <Paper sx={styles.img} elevation={2}>
            <Image src={'/app.gif'} alt="Crypto Api" width={300} height={630} />
          </Paper>
        </Box>
      </Grow>

      <Fade in={show}>
        <Typography variant="body1" component="p">
          {t('ibind.techStack')}
        </Typography>
      </Fade>

      {/* Add your MUI components and logic here */}
    </Box>
  );
};

export default Ibind;

const styles: Style = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    mb: 4,
  },
  img: {
    my: 2,
  },
};
