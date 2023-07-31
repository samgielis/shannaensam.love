export interface Invitation {
  aanspreking: string;
  plusOne: boolean;
  tier: 1 | 2 | 3;
}

export const INVITATIONS: Invitation[] = [
  {
    aanspreking: "Ray en Christel",
    plusOne: true,
    tier: 1,
  },
];
