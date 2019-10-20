import React, { FC } from 'react';
import FollowButton from './FollowButton';
import { User } from '../types';

import './UserCard.css';

type CardProps = {
  user: User;
  onFollow: (userID: string) => void;
};

const Card: FC<CardProps> = ({ user, onFollow }) => (
  <div className="container">
    <img className="avatar" src={user.picture.thumbnail} alt="user avatar" />
    <div className="mid-col">
      <h1 className="name">
        {user.name.first} {user.name.last}
      </h1>
      <h3 className="location">
        {/* {user.location.postcode} {user.location.state}, {user.location.city}, {user.location.street} */}
      </h3>
    </div>
    <FollowButton isActive={user.isFollowed} onClick={(): void => onFollow(user.id.value)} />
  </div>
);

export default Card;
