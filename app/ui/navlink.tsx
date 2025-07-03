// Navlink component to be used in the sidenav component
import Link from 'next/link';
import React, { ReactElement, MouseEventHandler } from "react";

export interface NavLinkProps {
  href: string;
  label: string;
  icon?: ReactElement | string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const NavLink = ({href, label, icon, onClick}: NavLinkProps) => {
  return (
    <li className="mb-4">
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center gap-2 text-blue-primary hover:text-blue-secondary transition-colors"
      >
        <>
            {typeof icon === 'string' ? (
              <span>{icon}</span>
            ) : icon ? (
              icon
            ) : (
              <></>
            )}
            <span className='text-blue-primary hover:text-gold-accent transition-colors text-lg font-semibold'>{label}</span>
        </>
      </Link>
    </li>
  );
};