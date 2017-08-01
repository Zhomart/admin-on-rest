import { createElement } from 'react';
import assert from 'assert';
import getDefaultValues from './getDefaultValues';

describe('getDefaultValues', () => {
    it('should get defaults values from form correctly', () => {
        const someTitle = 'some value';

        const expectedResult = {
            aField: 'aValue',
            title: someTitle,
            nested: {
                title: someTitle,
            },
        };
        const defaultValuesResult = getDefaultValues({}, {
            record: { aField: 'aValue' },
            defaultValue: {
                aField: 'aDefaultValue',
                title: someTitle,
                    nested: {
                    title: someTitle,
                },
            },
        });
        assert.deepEqual(defaultValuesResult, expectedResult);
    });
    it('should get defaults values from form correctly when defaultValue is a function', () => {
        const someTitle = 'some value';

        const expectedResult = {
            aField: 'aValue',
            title: someTitle,
            nested: {
                title: someTitle,
            },
        };
        const defaultValuesResult = getDefaultValues({}, {
            record: { aField: 'aValue' },
            defaultValue: () => ({
                aField: 'aDefaultValue',
                title: someTitle,
                nested: {
                    title: someTitle,
                },
            }),
        });
        assert.deepEqual(defaultValuesResult, expectedResult);
    });
});
