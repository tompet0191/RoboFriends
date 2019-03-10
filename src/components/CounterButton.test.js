import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton component', () => {
    const mockColor = 'blue';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const componentInstance = wrapper.instance();

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('sets states correctly', () => {
        expect(wrapper.state('count')).toBe(0);
        componentInstance.updateCount();
        componentInstance.updateCount();
        expect(wrapper.state('count')).toBe(2);
    });

    it('counter correctly increments when clicked', () =>{
        wrapper.find('[id="counter"]').simulate("click");
        expect(wrapper.state()).toEqual({count: 3});
    })

    it('props are set correctly', () => {
        expect(componentInstance.props.color).toBe(mockColor);
    })

    it('does not allow update if state is not changed', () => {
        expect(componentInstance.shouldComponentUpdate(null, { count: 3 })).toBe(false);
    })

    it('does allow update if state is changed', () => {
        expect(componentInstance.shouldComponentUpdate(null, { count: 4 })).toBe(true);
    })

});
