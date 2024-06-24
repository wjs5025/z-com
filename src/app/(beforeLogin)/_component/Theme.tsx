'use client';

import React from 'react';
import { CSSProperties, useState } from 'react';

function Theme({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const styleVaraibles: CSSProperties =
    theme === 'light'
      ? {
          backgroundColor: 'white',
          color: 'black',
        }
      : {
          backgroundColor: 'black',
          color: 'white',
        };

  return <div style={styleVaraibles}>{children}</div>;
}

export default Theme;
