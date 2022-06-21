import { useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { Page } from './components/page';
import { Widget } from './components/Widget';

import { applyTheme } from './themes/utils';
import lightTheme from './themes/light';
import greenTheme from './themes/green';

export function App() {
  useEffect(() => {
    applyTheme(lightTheme);
    applyTheme(greenTheme);
  }, [])

  return (
    <div>
      <NavBar />
      <Page />
      <Widget />
    </div>
  );
}