export type GetOtpResponse = {
  expire: string;
  mobile: string;
};

export type NationalIdResponse = {
  isMember: boolean;
  isOwner: boolean;
  description: string;
  title: string;
  link: string;
};
