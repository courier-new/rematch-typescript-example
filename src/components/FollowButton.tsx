import React, { FC, memo, ButtonHTMLAttributes } from 'react';

import './FollowButton.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
  onClick: () => void;
};

const FollowButton: FC<ButtonProps> = memo(({ isActive, onClick }) => (
  <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick} type="button">
    {isActive ? '✔ Following' : 'Follow'}
  </button>
));

export default FollowButton;
