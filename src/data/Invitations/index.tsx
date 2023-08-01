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
  {
    aanspreking: "Team curatie",
    plusOne: false,
    tier: 2,
  },
  {
    aanspreking: "Team redactie",
    plusOne: false,
    tier: 3,
  },
];
