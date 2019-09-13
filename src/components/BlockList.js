import React, { useContext } from 'react';

import { ContextBlock } from '@src/context';

import TemplateABI from './TemplateABI';

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

        let dataActions = data.transactions.reduce((prev, cur) => {

            if (!cur.trx || !cur.trx.transaction) {
                return prev;
            }

            return prev.concat(cur.trx.transaction.actions);
        }, [])

        dataActions = dataActions.filter(obj => obj.account === 'eosio.token');

        const liActions = dataActions.map((obj, index) => {

            const actionABI = dataABI.find(abi => {
                return abi.actionId === `${obj.account}-${index}`
            })


            return <li key={`${obj.account}-${index}`}>
                <div>{obj.account}</div>
                <div>{obj.name}</div>
                <button onClick={() => methods.getDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Get ABI</button>
                <TemplateABI actionABI={actionABI} actionData={obj} />
            </li>
        })
        


        return <li key={data.id}>
            <div onClick={() => methods.toggleBlockDetail(data.id)}>
                <div>{data.id}</div>
                <div>{data.timestamp}</div>
                <div>Total Transactions: {countTransactions}</div>
                <div>Actions: {countActions}</div>
                <div>eosio.token Actions: {dataActions.length}</div>
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