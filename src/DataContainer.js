import React, {useState, useContext, useEffect} from 'react';

import {ContextBlock} from './context';

import {apiGetInfo, apiGetBlock, apiGetABI} from '@src/data/api';


const DataContainer = ({children}) => {

    const [dataBlocks, setDataBlocks] = useState([]);
    const [dataABI, setDataABI] = useState([]);



    async function getDataBlocks()  {
        const data = [];

        const getBlock = (res) => {
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

        let respBlock;
        for (let i = 0; i < 10; i++) {

            if (i === 0) {
                respBlock = await apiGetBlock(respInfo.head_block_id);
            }
            else {
                respBlock = await apiGetBlock(respBlock.previous);
            }            
            data.push({data: respBlock, isExpanded: {Raw: false, EOSAction: false}});
        }

        setDataBlocks(data);

    };

    async function getDataABI({blockId, actionId, name}) {
        const respABI = await apiGetABI(name);

        setDataABI(dataABI.concat({...respABI, blockId, actionId}));
    }

    const destroyDataABI = ({blockId, actionId}) => {
        const updatedDataABI = dataABI.filter(obj => obj.blockId !== blockId && obj.actionId !== actionId)

        setDataABI(updatedDataABI)
    }
    

    const toggleBlockExpand = ({blockId, type}) => {
        const dataBlocksToggled = dataBlocks.map(obj => {
            if (obj.data.id === blockId) {
                obj.isExpanded[type] = !obj.isExpanded[type];
            }
            return obj
        })

        setDataBlocks(dataBlocksToggled);
    }

    const toggleEOSActionDetail = ({blockId, type}) => {
        const dataBlocksToggled = dataBlocks.map(obj => {
            if (obj.data.id === blockId) {
                obj.isExpanded[type] = !obj.isExpanded[type];
            }
            return obj
        })

        setDataBlocks(dataBlocksToggled);
    }

    useEffect(() => {
        getDataBlocks()
    }, [])


    return <ContextBlock.Provider 
        value={{
            dataBlocks,
            dataABI,
            methods: {
                getDataBlocks,
                getDataABI,
                toggleBlockExpand,
                destroyDataABI
            }
        }}
    >
        {children}
    </ContextBlock.Provider>
}

export default DataContainer