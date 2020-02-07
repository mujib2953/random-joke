import { GET_A_JOKE, Joke, JokeTypes } from "./types";

export const doGetAJoke = () => {
    return async (dispatch: React.Dispatch<JokeTypes>) => {
        const api_call = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data: Joke = await api_call.json();

        dispatch({
            type: GET_A_JOKE,
            payload: data,
        });
    };
}