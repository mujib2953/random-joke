import { LoaderState, LoadingTypes, IS_LOADING } from "./types";

const initialState: LoaderState = {
    isLoading: false,
};

export const LoaderReducer = (
    state = initialState,
    action: LoadingTypes
) => {

    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};