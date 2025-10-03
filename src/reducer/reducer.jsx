export const INITIAL = {
    loading: false,
    post: {},
    error: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {
                loading: true,
                post: {},
                error: false,
            }

        case "SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: false,
            }

        case "ERROR":
            return {
                loading: false,
                post: action.payload,
                error: true,
            }

        default:
            return state;
    }
};