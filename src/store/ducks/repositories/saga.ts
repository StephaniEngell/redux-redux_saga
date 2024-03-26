import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'

import { loadSucces, loadFailure } from './actions'

export function* load(): Generator<any, any, any> {
    try {
        const response = yield call(api.get, 'users/stephaniengell/repos')

        yield put(loadSucces(response.data))
    }catch (err) {
        yield put(loadFailure())
    }
}