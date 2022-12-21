export interface RegisterProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollToTop: () => void;
  business?: boolean;
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone_no: string;
      password: string;
      full_name: string;
      account_type: string;
      state: string;
      country: string;
      description: string;
    }>
  >;
  data: {
    name: string;
    email: string;
    phone_no: string;
    password: string;
    full_name: string;
    account_type: string;
    state: string;
    country: string;
    description: string;
  };
}

export type currentUser = {
  id: number;
  full_name: string;
  email: string;
  email_verified_at?: string;
  phone_no?: string;
  phone_no_verified_at?: string;
  otp?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  otp_created_at?: string;
} | null;
