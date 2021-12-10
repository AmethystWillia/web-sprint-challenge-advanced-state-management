import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAIL = 'SMURF_FAIL';
export const SMURF_ADD = 'SMURF_ADD';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: SMURF_START});

        axios.get('http://localhost:3333/smurfs')
            .then(resp => {
                dispatch({type: SMURF_SUCCESS, payload: (resp.data)});
            })
            .catch(err => {
                dispatch({type: SMURF_FAIL, payload: err});
            });
    };
};

export const addSmurf = (newSmurf) => {
    return ({type: SMURF_ADD, payload: newSmurf});
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.