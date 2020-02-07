export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
};

export const GET_A_JOKE = "GET_A_JOKE";

interface GetAJoke {
    type: typeof GET_A_JOKE;
    payload: Joke;
}

export type JokeTypes = GetAJoke;