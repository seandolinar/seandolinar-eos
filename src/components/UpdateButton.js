import React, {useContext} from 'react';

import { ContextBlock } from '../context';

export default () => {

    const {methods} = useContext(ContextBlock);

    return <button className="button-update" onClick={methods.getDataBlocks}>{'Update'}</button>
}