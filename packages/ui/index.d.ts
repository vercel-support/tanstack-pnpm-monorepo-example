export const COLORS: {
  PRIMARY: string;
  SUCCESS: string;
  WARNING: string;
  ERROR: string;
  RESET: string;
};

export function formatMessage(message: string, type?: keyof typeof COLORS): string;
export function createBox(content: string): string;

