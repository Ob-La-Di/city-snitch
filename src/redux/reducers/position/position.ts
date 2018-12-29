import {Action} from "redux";
import {SET_COORDINATES} from "./actionsTypes";

export interface IPositionState {
    lat: number;
    lng: number;
}

const initialState: IPositionState = {
    lat: 0,
    lng: 0
};

export default function(state = initialState, action: Action) {
    switch(action.type) {
        case SET_COORDINATES:
            state.
            break;
    }
    return state;
}
