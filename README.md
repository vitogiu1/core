## 🌌 Esmerald.js
<p align="center">
<img src="esmerald.png">
<a href="https://www.npmjs.com/package/esmerald.js"><img src="https://img.shields.io/npm/v/esmerald.js.svg?maxAge=3600" alt="npm version"/></a>
<a href="https://www.npmjs.com/package/esmerald.js.js"><img src="https://img.shields.io/npm/dt/esmerald.js.js.svg?maxAge=3600" alt="npm downloads" /></a>
</p

##### A simple and powerfull library for Discord API

<hr>

#### 👀 Why use esmerald.js?

- Simple to use;
- Beta updates, and easy support;
- Save ram memory.

  
  
## 🚧 Installations
 - **💻 Node v16.14+ is required**
 
 ```sh-session
npm install esmerald.js
yarn add esmerald.js
pnpm add esmerald.js
```
 
 
## 💭 Example

```js
const { Client, Intents } = require('esmerald.js');

const client = new Client({
  token: 'your token',
  intents: [Intents.GUILDS],
})

client.connect();
```
