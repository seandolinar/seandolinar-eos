import React, {useContext} from 'react';

import { ContextBlock } from '../context';

export default () => {

    const {methods} = useContext(ContextBlock);

    return <button onClick={methods.getDataBlocks}>{'Update'}</button>
}