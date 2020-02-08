import { GET_A_JOKE, Joke, JokeTypes } from "./types";

const initialState: Joke = {
    id: 1,
    type: "",
    setup: "",
    punchline: "",
};

export const JokeReducer = (
    state = initialState,
    action: JokeTypes
) => {
    switch (action.type) {
        case GET_A_JOKE:
            return {
                // --- not sure why I have to use spread operator here, since it is giving an error
               ...action.payload,
            };
        default:
            return state;
    }
};
