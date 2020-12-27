export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQCzT1_PmbIOZtyLFDk28Lj0gErY3RD7eOsRWHRcTKmKaLnyOkZy4e3errURsdTpqDsu3jOtWZPmMfFWnSEiPEnqYCLNTiX8uQIgNImT36pFNZJkFqOCUPwTD6pYKZQniyjsDkdAB1qQhv7QfFlZtVfKwMpz8aWOzzLbEIUwJ2OJuZQj',
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY': 
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;