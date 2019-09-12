import React, { useContext } from 'react';

import { ContextBlock } from '@src/context';

const BlockList = ({ onClick, children }) => {

    const {
        dataBlocks,
        dataABI,
        methods
    } = useContext(ContextBlock);

    const li = dataBlocks.map(({ data, isExpanded }, index) => {

        if (!data.transactions) {
            return <li key={index}></li>
        }

        const countTransactions = data.transactions.length;
        const countActions = data.transactions.reduce((prev, cur) => {

            if (!cur.trx || !cur.trx.transaction) {
                return prev;
            }

            return prev + cur.trx.transaction.actions.length
        }, 0)

        const dataActions = data.transactions.reduce((prev, cur) => {

            if (!cur.trx || !cur.trx.transaction) {
                return prev;
            }

            return prev.concat(cur.trx.transaction.actions);
        }, []);

        const liActions = dataActions.map((obj, index) => {

            constactionABI = dataABI.find(abi => {
                console.log(abi.actionId, `${obj.account}-${index}`)
                return abi.actionId === `${obj.account}-${index}`
            })

            return <li key={`${obj.account}-${index}`}>
                <div>{obj.account}</div>
                <div>{obj.name}</div>
                <button onClick={() => methods.getDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Get ABI</button>
                {JSON.stringify(actionABI)}
            </li>
        })
        


        return <li key={data.id}>
            <div onClick={() => methods.toggleBlockDetail(data.id)}>
                <div>{data.id}</div>
                <div>{data.timestamp}</div>
                <div>Total Transactions: {countTransactions}</div>
                <div>Actions: {countActions}</div>
            </div>

            {/* {!!isExpanded && <div>{JSON.stringify(data)}</div>} */}
            {!!isExpanded && <ul>{liActions}</ul>}
        </li>
    })

    return <ul>
        {li}
    </ul>
}

export default BlockList