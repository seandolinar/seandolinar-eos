import React, {useState, useContext, useEffect} from 'react';

import DataContainer from './DataContainer';
import UpdateButton from './components/UpdateButton';
import BlockList from './components/BlockList';

import './styles/App.scss';

const App = () => {
    
    return <DataContainer>
        <BlockList />
        <UpdateButton />
    </DataContainer>
}


export default App