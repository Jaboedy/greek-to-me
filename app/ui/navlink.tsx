// Navlink component to be used in the sidenav component
import Link from 'next/link';
import React, { ReactElement } from "react";

export interface NavLinkProps {
  href: string;
  label: string;
  icon?: ReactElement;
}

export const NavLink = ({href, label, icon}: NavLinkProps) => {
  return (
    <li className="mb-4">
      <Link
        href={href}
        className="flex items-center gap-2 text-blue-primary hover:text-blue-secondary transition-colors"
      >
        {icon && (
          <div className="flex items-center justify-center w-5 h-5">
            {icon}
          </div>
        )}
        <span className='text-blue-primary hover:text-gold-accent transition-colors text-lg font-semibold'>{label}</span>
      </Link>
    </li>
  );
};