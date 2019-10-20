export type User = {
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    street: string;
    state: string;
    city: string;
    postcode: number;
  };
  isFollowed: boolean;
};

export type Toast = {
  id: number;
  message: string;
};
