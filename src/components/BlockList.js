import React, {useContext} from 'react';

import { ContextBlock } from '@src/context';

const BlockList = ({onClick, children}) => {

    const {
        dataBlocks,
        methods
    } = useContext(ContextBlock);

    const li = dataBlocks.map(obj => {

        const countActions = obj.transactions.reduce((prev, cur) => {

            if (!cur.trx || !cur.trx.transaction) {
                return prev;
            }

            return prev + cur.trx.transaction.actions.length
        }, 0)

        return <li key={obj.id}>
            <div>{obj.id}</div>
            <div>{obj.timestamp}</div>
            <div>{countActions}</div>
        </li>
    })

    return <ul>
        {li}
    </ul>
}

export default BlockList