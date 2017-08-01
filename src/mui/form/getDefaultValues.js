import { Children } from 'react';
import { createSelector } from 'reselect';
import set from 'lodash.set';

const getDefaultValues = (data = {}, defaultValue = {}) => {
    const globalDefaultValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    return { ...globalDefaultValue, ...data };
};

const getRecord = (state, props) => props.record;
const getDefaultValue = (state, props) => props.defaultValue;

export default createSelector(
    getRecord, getDefaultValue,
    (record, defaultValue) => getDefaultValues(record, defaultValue)
);
