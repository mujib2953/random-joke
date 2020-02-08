export const IS_LOADING = "IS_LOADING";

interface IsLoading {
    type: typeof IS_LOADING;
    payload: boolean;
}

export interface LoaderState {
    isLoading: boolean;
};

export type LoadingTypes = IsLoading;