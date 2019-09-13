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
                {!actionABI ?
                    <button onClick={() => methods.getDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Get ABI</button> :
                    <button onClick={() => methods.destroyDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Close ABI</button>
                }
                <TemplateABI actionABI={actionABI} actionData={obj} />
            </li>
        })



        return <li key={data.id}>
            <div onClick={() => methods.toggleBlockExpand({ blockId: data.id, type: 'Raw' })}>
                <div>{data.id}</div>
                <div>{data.timestamp}</div>
                <div>Total Transactions: {countTransactions}</div>
                <div>Actions: {countActions}</div>
            </div>
            <div onClick={() => methods.toggleBlockExpand({ blockId: data.id, type: 'EOSAction' })}>eosio.token Actions: {dataActions.length}</div>
            {!!isExpanded.Raw && <div><pre>{JSON.stringify(data)}</pre></div>}
            {!!isExpanded.EOSAction && <ul>{liActions}</ul>}
        </li>
    })

    return <ul>
        {li}
    </ul>
}

export default BlockList