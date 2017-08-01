import { all, put, select, takeEvery } from 'redux-saga/effects';
import { getFormInitialValues, initialize } from 'redux-form';
import { INITIALIZE_FORM } from '../../actions/formActions';

export function* initializeForm({ payload }) {
    const initialValues = yield select(getFormInitialValues('record-form'));

    yield put(
        initialize(
            'record-form',
            { ...initialValues, ...payload },
            { keepDirty: true, keepSubmitSucceeded: true }
        )
    );
}

export default function* watchInitializeForm() {
    yield takeEvery(INITIALIZE_FORM, initializeForm);
}
