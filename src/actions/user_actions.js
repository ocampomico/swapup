import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    USER_UPDATE,
    USER_CREATE,
    USER_FETCH_SUCCESS
} from './types.js'

export const userUpdate = ({ prop, value }) => {
    return {
        type: USER_UPDATE,
        payload: { prop, value }
    };
};

export const userCreate = ({ name, occupation, city }) => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .push({ name, occupation, city })
            .then(() => {
                dispatch({ type: USER_CREATE });
                //Actions.pop();
            });
    };
};

export const usersFetch = () => {
    const{ currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};