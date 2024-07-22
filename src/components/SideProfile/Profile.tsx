'use client';
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ProfilePic from '@/assets/img/profile.jpg';
import { Style } from '../../assets/theme';

const Profile: React.FC<ProfileProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.section} variant="h4">
        Louis Wu
      </Typography>
      <Typography sx={{ ...styles.section, mt: 4 }} variant="h5">
        {t('intro.title')}
      </Typography>
      <Typography sx={{ ...styles.section, mb: 4 }} variant="body1">
        {t('intro.content')}
      </Typography>

      <Box display="flex" alignItems="center" width="100%">
        <ContactPhoneIcon sx={styles.icons} />
        <Typography variant="body2">+886 988480912</Typography>
      </Box>
      <Box display="flex" alignItems="center" width="100%">
        <LocationOnIcon sx={styles.icons} />
        <Typography variant="body2">{t('intro.location')}</Typography>
      </Box>
      <Box display="flex" alignItems="center" width="100%">
        <LinkedInIcon sx={styles.icons} />
        <Typography variant="body2">
          <Link href="https://www.linkedin.com/in/chun-han-wu-269b19106/">
            louis wu
          </Link>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" width="100%">
        <GitHubIcon sx={styles.icons} />
        <Typography variant="body2">
          <Link href="https://github.com/lawliet831012">lawliet831012</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;

type ProfileProps = {};

const styles: Style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,

    px: 1,
    py: 4,
  },
  section: {
    marginBottom: 1,
  },
  icons: {
    marginRight: 2,
  },
};
