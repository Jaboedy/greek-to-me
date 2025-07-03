'use client';

import { ReactNode } from 'react';
import SideNav from './sidenav';

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <SideNav>
      {children}
    </SideNav>
  );
}
