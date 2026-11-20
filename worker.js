const { Worker } = require('bullmq');
const { remote } = require('webdriverio');

const worker = new Worker('device-tests', async (job) => {
  const { platform, deviceId, test } = job.data;
  console.log(`Running ${test} on ${deviceId}`);

  const driver = await remote({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities: require('./appium.config.json')
  });

  try {
    // Basic login flow placeholder
    await driver.$('~email').setValue('test@example.com');
    await driver.$('~password').setValue('password123');
    await driver.$('~login').click();
    await driver.saveScreenshot('./screenshot.png');
    return { status: 'passed' };
  } finally {
    await driver.deleteSession();
  }
}, { connection: { host: 'localhost', port: 6379 } });

console.log('Worker started');
