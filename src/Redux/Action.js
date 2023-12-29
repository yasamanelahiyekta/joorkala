import axios from "axios"

export const getpc = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getPc", payload: { pcData: [], pcLoading: true, pcError: "" } })
        const { data } = await axios("https://fakestoreapi.com/products")
        localStorage.setItem("pc", JSON.stringify(data))
        const newData = JSON.parse(JSON.stringify(data))
        console.log(data);
        dispatch({ type: "getPc", payload: { pcData: newData, pcLoading: false, pcError: "" } })
    } catch (error) {
        console.log(error);
        dispatch({ type: "getPc", payload: { pcData: [], pcLoading: false, pcError: error.response } })
    }
}
export const setPrice = (value) => (dispatch, getstate) => {
    dispatch({
        type: "setPrice", payload: {
            pcDta: getstate().getPc.pcData, pcLoading: getstate().getPc.pcLoading,
            pcError: getstate().getPc.pcError,
            price: [value[0], value[1]]
        }
    })
    console.log(getstate().getPc.price);
    console.log(value);
}
export const getgr = () => async (dispatch, getstate) => {
    try {
        dispatch({ type: "getGr", payload: { grData: [], grLoading: true, grError: "" } })
        const { data } = await axios("https://my.api.mockaroo.com/groceryshop2.json?key=69639760")
        localStorage.setItem("gr", JSON.stringify(data))
        const newData = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getGr", payload: { grData: newData, grLoading: false, grError: "" } })
        // console.log(new)
    } catch (error) {
        dispatch({ type: "getGr", payload: { grData: [], grLoading: false, grError: error.response } })
    }
}