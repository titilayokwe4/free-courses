import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = ({className}: {className?: string}) => {
  return (
    <Link to={"/"} className="flex items-center gap-2 mb-12">
      <img src='/logo.png' alt='Logo' className={`${className} w-30 brightness-0 invert`} />
    </Link>
  );
};
