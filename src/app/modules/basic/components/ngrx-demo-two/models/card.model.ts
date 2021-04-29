export interface IJoke {
    id: number;
    joke: string;
}

export interface IJokeResult {
    type: string;
    value: IJoke[];
}
