import React, {useState, useContext, useEffect} from 'react';

import {ContextBlock} from './context';

import {apiGetInfo, apiGetBlock} from '@src/data/api';


const DataContainer = ({children}) => {

    const [dataBlocks, setDataBlocks] = useState([])



    async function getDataBlocks()  {
        const data = [];

        const getBlock = (res) => {
            // data.push(res)
            return apiGetBlock(res.last_irreversible_block_id)
        }

        const getBlockPrev = (res) => {
            data.push(res)
            return apiGetBlock(res.previous)
        }

        const setData = () => {
            setDataBlocks(data);
        }

        const respInfo = await apiGetInfo();

        // const respBlock = await apiGetBlock(respInfo.last_irreversible_block_id);

        let respBlock;
        for (let i = 0; i < 10; i++) {

            if (i === 0) {
                // respBlock = await apiGetBlock(respInfo.last_irreversible_block_id);
                respBlock = await apiGetBlock(respInfo.head_block_id);
            }
            else {
                respBlock = await apiGetBlock(respBlock.previous);
            }            
            data.push(respBlock);
        }

        setDataBlocks(data);

    };

    useEffect(() => {
        getDataBlocks()
    }, [])


    return <ContextBlock.Provider 
        value={{
            dataBlocks,
            methods: {
                getDataBlocks
            }
        }}
    >
        {children}
    </ContextBlock.Provider>
}

export default DataContainer