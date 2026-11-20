# Real Device Pipeline

Minimal skeleton for Appium + BullMQ worker to run device tests.

## First test flow
- Job payload: `{ platform: "android", deviceId: "emulator-5554", test: "login_flow" }`
- Worker starts Appium session, runs basic login, takes screenshot, reports result.

## Stack
- Node.js
- Appium
- BullMQ + Redis

## Run
1. Start Redis and Appium server
2. `npm install`
3. `npm start`
