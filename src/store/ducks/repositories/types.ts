// Action types
export enum RepositoriesTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCES = '@repositories/LOAD_SUCCES',
    LOAD_FAILUDE = '@repositories/LOAD_FAILUDE'
}

// Data types (o formdato da informação que vou ter dentro do meu reducer)
export interface Repository {
    id: number
    name: string
}

// State type
export interface RepositoriesState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}