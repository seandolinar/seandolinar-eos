import React, {useState, useContext, useEffect} from 'react';

import DataContainer from './DataContainer';
import UpdateButton from './components/UpdateButton';
import BlockList from './components/BlockList';

import './styles/App.scss';

const App = () => {
    
    return <DataContainer>
        <h1>Last 10 Blocks on EOS.IO</h1>
        <UpdateButton />
        <BlockList />
    </DataContainer>
}


export default App