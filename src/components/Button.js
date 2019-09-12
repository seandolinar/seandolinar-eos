import React, {useContext} from 'react';

import { ContextBlock } from '@src/context';

export default ({onClick, children}) => {

    const {methods} = useContext(ContextBlock);

    return <button onClick={methods.getDataBlocks}>{'Update'}</button>
}