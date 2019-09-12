const { JsonRpc } = require('eosjs');

console.log(JsonRpc)

console.log(fetch)

const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });

console.log(rpc)

// const resp = rpc.get_table_rows({
//     json: true,              // Get the response as json
//     code: 'eosio.token',     // Contract that we target
//     scope: 'testacc',         // Account that owns the data
//     table: 'accounts',        // Table name
//     limit: 10,               // Maximum number of rows that we want to get
//     reverse: false,         // Optional: Get reversed data
//     show_payer: false,      // Optional: Show ram payer
// });

const resp = rpc.get_info()

console.log(resp);

window.setTimeout(() => {
    const respBlock = rpc.get_block(78904214)
}, 1000)


window.setTimeout(() => {
    const respBlock = rpc.get_abi('newdexpublic')
}, 2000)
