import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionFailure, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionsAsync()
{
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }


    // real time
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({loading: false});
    // });

    // via api

    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionFailure(error.message)));

}

export function* fetchCollectionStart()
{
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas()
{
    yield all([
        call(fetchCollectionStart)
    ])
}

