export type UsersT = {
  name?: string;
  email: string;
  permissions: string[];
  image?: string;
};

export type UserT = {
  email?: string;
  permissions?: string[];
};
