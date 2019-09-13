import React from 'react';
import renderer from 'react-test-renderer';

import BlockHeader from '../components/BlockHeader';

const mockProps = {
    data: {id: 'a01', timestamp: '2019-09-13T13:01:04.500'},
    count: {transactions: 9999, actions: 555}
}

it('matches previous snapshot', () => {
    expect(renderer.create(<BlockHeader {...mockProps} />).toJSON()).toMatchSnapshot();
});
