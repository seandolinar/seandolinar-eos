import React from 'react';

import TemplateABI from './TemplateABI';


const ActionItem = ({data, obj, index, actionABI, methods}) => <li key={`${obj.account}-${index}`}>
    <div>{obj.account}</div>
    <div>{obj.name}</div>
    {!actionABI ?
        <button onClick={() => methods.getDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Get ABI</button> :
        <button onClick={() => methods.destroyDataABI({ blockId: data.id, actionId: `${obj.account}-${index}`, name: obj.account })}>Close ABI</button>
    }
    <TemplateABI actionABI={actionABI} actionData={obj} />
</li>


export default ActionItem;