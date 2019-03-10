import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render Searchbox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
});