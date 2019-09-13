import React from 'react';

import Mustache from 'mustache';

const TemplateABI =  ({actionABI=null, actionData: { data: contractData = {}}}) => {

    // catches empty or bad ABI return
    if (!actionABI || !actionABI.abi.actions || !actionABI.abi.structs)  {
        return null;
    }

    const ricardianContractTemplate = actionABI.abi.actions.find(obj => !!obj.ricardian_contract.length).ricardian_contract

    // I couldn't find the transaction.delay in the API
    const ricardianContractData = Object.assign(contractData, {transaction: {delay: '1000ms'}})
    
    const ricardianContractHtml = Mustache.render(ricardianContractTemplate, ricardianContractData)

    return <div dangerouslySetInnerHTML={{__html: ricardianContractHtml}}></div>
}


export default TemplateABI