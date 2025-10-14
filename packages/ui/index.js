export const COLORS = {
  PRIMARY: '\x1b[36m',    // Cyan
  SUCCESS: '\x1b[32m',    // Green
  WARNING: '\x1b[33m',    // Yellow
  ERROR: '\x1b[31m',      // Red
  RESET: '\x1b[0m'        // Reset
};

export function formatMessage(message, type = 'PRIMARY') {
  const color = COLORS[type] || COLORS.PRIMARY;
  return `${color}${message}${COLORS.RESET}`;
}

export function createBox(content) {
  const lines = content.split('\n');
  const maxLength = Math.max(...lines.map(line => line.length));
  const border = '─'.repeat(maxLength + 2);
  
  const box = [
    `┌${border}┐`,
    ...lines.map(line => `│ ${line.padEnd(maxLength)} │`),
    `└${border}┘`
  ];
  
  return box.join('\n');
}

