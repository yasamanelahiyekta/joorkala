export const getPc = (state = { pcData: [], pcLoading: false, pcError: "", }, { type, payload }) => {
    switch (type) {
        case "getPc":

            return payload;

        default:
            return state;
    }
}
export const getGr = (state = { grData: [], grLoading: false, grError: "" }, { type, payload }) => {
    switch (type) {
        case "getGr":

            return payload;

        default:
            return state;
    }
}