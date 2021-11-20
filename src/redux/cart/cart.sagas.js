import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut()
{
    yield put(clearCart());
}

export function* onSignOutSuccess()
{
    // reminder sobre saga aqui ele escuta as actions que são disparadas quando é disparada a action UserActionTypes.SIGN_OUT_SUCCESS ele executa
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}