import create, { GetState, SetState } from "zustand";

export type SynestheticUser = {
  userId: string;
  email: string;
  displayName: string;
  photoUrl?: string;
  token: string;
  provider: string;
  stripeRole?: string;
  profile?: UserProfileData;
  theme: "light" | "dark";
};

export type UserProfileData = {};

export const useUserStore = create<SynestheticUser>(
  (set: SetState<SynestheticUser>, get: GetState<SynestheticUser>) => ({
    userId: "1",
    email: "test@test.com",
    displayName: "Tom Ace",
    token: "0",
    provider: "Google",
    theme: "light",
  })
);
