const { JsonRpc } = require('eosjs');

const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });

export const apiGetInfo = () => rpc.get_info();

export const apiGetBlock = (blockId) => rpc.get_block(blockId);


// apiGetInfo.then(res => {
//     rpc.get_block(res.last_irreversible_block_num).then(res => {
//         console.log(res)
//     })
// })



// window.setTimeout(() => {
//     const respBlock = rpc.get_block('04b3fb9510152702e437a1d549285412c5c210e7f29aa6ae14e7677fe45df1ea')



// }, 1000)


// window.setTimeout(() => {
//     const respBlock = rpc.get_abi('newdexpublic')
// }, 2000)