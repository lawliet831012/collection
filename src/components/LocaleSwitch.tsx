'use client';
import { Style } from '@/assets/theme';
import { type JSX, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import i18nConfig from '@/i18nConfig';

import { toast } from 'react-toastify';

function LocaleSwitch(): JSX.Element {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onSelected = (lang: string) => {
    // set cookie for next-i18n-router
    if (currentLocale === lang) {
      toast(t('noNeedRoSwitch'), { type: 'info' });
      return;
    }
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + lang + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${lang}`));
    }
    router.refresh();
  };

  return (
    <>
      <Button onClick={handleClick} variant="outlined" sx={styles.langBtn}>
        {t('lang')}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => onSelected('zh')}>中文</MenuItem>
        <MenuItem onClick={() => onSelected('en')}>EN</MenuItem>
      </Menu>
    </>
  );
}

const styles: Style = {
  langBtn: {
    padding: '0 10px',
  },
} as const;

export default LocaleSwitch;
