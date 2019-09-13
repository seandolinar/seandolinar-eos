const { JsonRpc } = require('eosjs');

// Safari fix for UA string
let fetch = window.fetch || require('node-fetch');

const rpc = new JsonRpc('https://api.eosnewyork.io');

export const apiGetInfo = () => rpc.get_info();

export const apiGetBlock = (blockId) => rpc.get_block(blockId);

export const apiGetABI = (name) => rpc.get_abi(name);


