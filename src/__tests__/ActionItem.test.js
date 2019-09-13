import React from 'react';
import renderer from 'react-test-renderer';

import ActionItem from '../components/ActionItem';

const mockProps = {
    obj: {account: 'testAccount', name: 'testName'},
    data: {id: 'a01', timestamp: '2019-09-13T13:01:04.500'},
    methods: {
        getDataABI: (mock) => mock,
        destroyDataABI: (mock) => mock
    },
    actionABI: {abi: {}},
    index: 3
}

it('matches previous snapshot: ActionItem', () => {
    expect(renderer.create(<ActionItem {...mockProps} />).toJSON()).toMatchSnapshot();
});
