import { atom } from "jotai";

export const countAtom = atom(0);
export const countryAtom = atom("Japan");
export const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
export const mangaAtom = atom({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});
