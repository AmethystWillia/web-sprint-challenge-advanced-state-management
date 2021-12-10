import { SMURF_START, SMURF_SUCCESS, SMURF_FAIL, SET_ERROR, SMURF_ADD } from "../actions";

export const initialState = {
    smurfs: [{
        id:"42069",
        name:'test',
        position:'peepee',
        nickname: 'poopoo',
        description: 'bruh',
    }],
    isLoading: false,
    fetchError: '',
    formError: 'You must fill in the name, position, and nickname.',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (SMURF_START):
            return ({
                ...state,
                smurfs: [],
                isLoading: true,
                fetchError: '',
                formError: '',
            });
        case (SMURF_SUCCESS):
            return ({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                fetchError: '',
                formError: '',
            });
        case (SMURF_FAIL):
            return ({
                ...state,
                smurfs: [],
                isLoading: false,
                fetchError: action.payload,
                formError: '',
            });
        case SMURF_ADD:
            const newSmurf = {
                id: 420,
                name: action.payload,
                position: 'test',
                nickname: 'test',
                description: 'test',
            };
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            };
        case (SET_ERROR):
            return ({
                ...state,
                smurfs: [],
                isLoading: false,
                fetchError: '',
                formError: action.payload,
            });

        default:
            return state;
    };
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.