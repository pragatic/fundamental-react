import FormGroup from './FormGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormGroup />', () => {
    const formGroup = <FormGroup>Test Form Group</FormGroup>;

    test('create snapshot', () => {
        // create form group
        let component = renderer.create(formGroup);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormGroup component', () => {
            const element = mount(<FormGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
