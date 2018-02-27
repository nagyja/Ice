import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import PeopleDetail from "./people_detail";

configure({ adapter: new Adapter() });


describe('PeopleDetail', () => {
    it('selectable with the class people-detail', () => {
        expect(shallow(<PeopleDetail />).is('.people-detail')).toBe(true);
    });

    it('should contain an <img> tag', () => {
        const wrapper = mount(<PeopleDetail />);
        expect(wrapper.find('img').exists()).toEqual(true);
    });
});
