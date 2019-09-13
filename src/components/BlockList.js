import React, { useContext } from 'react';

import { ContextBlock } from '../context';

import BlockHeader from './BlockHeader';
import ActionItem from './ActionItem';

const BlockList = () => {

    const {
        dataBlocks,
        dataABI,
        methods
    } = useContext(ContextBlock);

    const liBlocks = dataBlocks.map(({ data, isExpanded }, index) => {

        if (!data.transactions) {
            return <li key={index}></li>
        }

        const count = {};
        count.transactions = data.transactions.length;
        count.actions = data.transactions.reduce((prev, cur) => {

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

            return <ActionItem 
                        data={data}
                        obj={obj}
                        actionABI={actionABI}
                        methods={methods}
                        index={index}
                    />
        });



        return <li key={data.id}>
            <div onClick={() => methods.toggleBlockExpand({ blockId: data.id, type: 'Raw' })}>
                <BlockHeader data={data} count={count} />
            </div>
            <div onClick={() => methods.toggleBlockExpand({ blockId: data.id, type: 'EOSAction' })}>eosio.token Actions: {dataActions.length}</div>
            {!!isExpanded.Raw && <div><pre>{JSON.stringify(data)}</pre></div>}
            {!!isExpanded.EOSAction && <ul>{liActions}</ul>}
        </li>
    })

    return <ul>
        {liBlocks}
    </ul>
}

export default BlockList