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
        <Paper sx={styles.img} elevation={2}>
          <Image
            src={'/applogin.gif'}
            alt="Crypto Api"
            width={300}
            height={630}
          />
        </Paper>
      </Grow>

      <Grow in={show}>
        <Paper sx={styles.img} elevation={2}>
          <Image src={'/app.gif'} alt="Crypto Api" width={300} height={630} />
        </Paper>
      </Grow>

      <Fade in={show}>
        <Typography variant="body1" component="p">
          {t('ibind.techStack')}
        </Typography>
      </Fade>
      <Fade in={show}>
        <Typography variant="body1" component="p">
          Demo: &nbsp;
          <Link href="https://crypto-com-api.vercel.app/">
            {t('ibind.link')}
          </Link>
          &nbsp;|&nbsp;
          <Link href="https://github.com/lawliet831012/Crypto.com_api">
            Git
          </Link>
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
  },
  img: {
    my: 4,
  },
};
