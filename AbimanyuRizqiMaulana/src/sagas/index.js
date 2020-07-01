import { watchGetContact, watchFindContact, watchSaveContact, watchDeleteContact } from './contact';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fork(watchGetContact),
        fork(watchFindContact),
        fork(watchSaveContact),
        fork(watchDeleteContact)
    ]);
}