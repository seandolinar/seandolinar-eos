import React from 'react';


const BlockHeader = ({data, count}) => <>
    <div>{data.id}</div>
    <div>{data.timestamp}</div>
    <div>Total Transactions: {count.transactions}</div>
    <div>Actions: {count.actions}</div>
</>


export default BlockHeader