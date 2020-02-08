import { IS_LOADING, LoadingTypes } from "./types";

export const changeLoader = (isLoading: boolean): LoadingTypes => {
    return {
        type: IS_LOADING,
        payload: isLoading,
    };
};
