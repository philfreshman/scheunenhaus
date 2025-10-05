import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import FtpDeploy from 'ftp-deploy';

// Compute __dirname in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Validate required environment variables early
const requiredEnv = ['FTP_USER', 'FTP_PASSWORD', 'FTP_HOST'];
const missing = requiredEnv.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: resolve(__dirname, 'dist'),
  remoteRoot: '/scheunenhausamsee.de/',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true,
};

console.log('Starting FTP deploy...');
console.log(`Local root: ${config.localRoot}`);
console.log(`Remote root: ${config.remoteRoot}`);

ftpDeploy
  .deploy(config)
  .then((res) => {
    console.log('Deployed successfully');
    console.log(res);
  })
  .catch((err) => {
    console.error('Deployment failed');
    console.error(err);
    process.exit(1);
  });