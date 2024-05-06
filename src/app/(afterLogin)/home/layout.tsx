import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
};

export default Layout;
