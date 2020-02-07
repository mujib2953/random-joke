import { combineReducers } from "redux";

import { JokeReducer } from "./jokes/reducer";

export const rootReducer = combineReducers({
    joke: JokeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
