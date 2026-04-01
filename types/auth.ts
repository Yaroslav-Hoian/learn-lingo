export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface LoginDataProps {
  email: string;
  password: string;
}

export interface RegisterDataProps {
  email: string;
  password: string;
  name: string;
}
