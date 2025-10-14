import { greet, formatDate } from '@repo/utils';
import { formatMessage, createBox } from '@repo/ui';

console.log(formatMessage('='.repeat(50), 'PRIMARY'));
console.log(formatMessage('🚀 API SERVER - Hello World Demo', 'SUCCESS'));
console.log(formatMessage('='.repeat(50), 'PRIMARY'));
console.log();

// Simulate API endpoints
const endpoints = [
  { method: 'GET', path: '/api/hello', response: greet('API User') },
  { method: 'GET', path: '/api/date', response: formatDate() },
  { method: 'GET', path: '/api/status', response: 'OK' }
];

console.log(formatMessage('📡 Available Endpoints:', 'WARNING'));
console.log();

endpoints.forEach(endpoint => {
  const methodColor = endpoint.method === 'GET' ? 'SUCCESS' : 'PRIMARY';
  console.log(formatMessage(`  ${endpoint.method}`, methodColor) + ` ${endpoint.path}`);
  console.log(formatMessage(`    Response: ${endpoint.response}`, 'PRIMARY'));
  console.log();
});

const boxContent = `API Status: Running\nUsing shared packages from monorepo\nReady to handle requests!`;
console.log(createBox(boxContent));

