import { combineReducers } from "redux";

import { JokeReducer } from "./jokes/reducer";
import { LoaderReducer } from "./loader/reducer";

export const rootReducer = combineReducers({
    loader: LoaderReducer,
    joke: JokeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
