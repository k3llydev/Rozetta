type User = any;
// import {
//   FindOAuth2Params,
//   FindUserParams,
//   OAuth2Details,
//   UserDetails,
// } from 'src/utils/types';

export interface IAuthService {
//   validateUser(datails: UserDetails): Promise<User>;
//   createUser(details: UserDetails): Promise<User>;
//   updateUser(details: UserDetails): Promise<User>;
//   findUser(params: FindUserParams): Promise<User>;
//   validateOAuth2(details: OAuth2Details): Promise<OAuth2Details>;
//   createOAuth2(details: OAuth2Details): Promise<OAuth2Details>;
//   updateOAuth2(details: OAuth2Details): Promise<OAuth2Details>;
//   findOAuth2(params: FindOAuth2Params): Promise<OAuth2Details>;
}

export type UserDetails = {
  discordId: string;
  discordTag: string;
  avatar: string;
  email: string;
};

export type OAuth2Details = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
};

export type FindUserParams = Partial<{
  discordId: string;
  discordTag: string;
  avatar: string;
  email: string;
}>;

export type FindOAuth2Params = Partial<{
  discordId: string;
  accessToken: string;
  refreshToken: string;
}>;

export type Done = (err: Error, user: User) => void;