import { GET_A_JOKE, Joke, JokeTypes } from "./types";

import { LoadingTypes } from "../loader/types";
import { changeLoader } from "../loader/actions";

export const doGetAJoke = () => {
    return async (dispatch: React.Dispatch<JokeTypes | LoadingTypes>) => {
        
        // --- loader will show
        dispatch(changeLoader(true));

        const api_call = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data: Joke = await api_call.json();

        dispatch({
            type: GET_A_JOKE,
            payload: data,
        });
        // --- loader will hide
        dispatch(changeLoader(false));
    };
}