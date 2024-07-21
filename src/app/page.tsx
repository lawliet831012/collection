/* Components */
import { type JSX } from 'react';
import type { Style } from '@/assets/theme';

import Logo from '@/assets/img/logo.png';

async function IndexPage(): Promise<JSX.Element> {
  return <>home</>;
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
