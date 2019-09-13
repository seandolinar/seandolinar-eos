import React, {useState, useContext, useEffect} from 'react';

import DataContainer from './DataContainer';
import Button from './components/Button';
import BlockList from './components/BlockList';

import '@styles/App.scss';

const App = () => {
    
    return <DataContainer>
        <BlockList />
        <Button />
    </DataContainer>
}


export default App