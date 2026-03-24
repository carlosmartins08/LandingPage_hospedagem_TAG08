'use client';

import React from 'react';

interface OnboardingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

const OnboardingLink: React.FC<OnboardingLinkProps> = ({
  href = '#onboarding',
  onClick,
  children,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    event.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tag08:open-onboarding'));
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default OnboardingLink;
