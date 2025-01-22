export type CredentialLoginPayload = {
  email: string;
  password: string;
};

export type TUser = {
  id: string;
  last_name: string;
  first_name: string;
  email: string;
  profile_pic_url: string;
  sign_up_method: string;
  completed_1st_login_process: boolean;
};

export type TLoginRepoonse = {
  token: string;
  user: TUser;
};
