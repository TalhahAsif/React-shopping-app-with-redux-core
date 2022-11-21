import axios from "axios"
import ActionTypes from "../Constant/constant";

const getProductAction = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type: ActionTypes.GET_PRODUCTDATA_LOADING
            })
            const data = await axios.get("https://fakestoreapi.com/products")
            // console.log(data)
            dispatch({
                type: ActionTypes.GETPRODUCTSUCCESS,
                payload: data.data
            })
        }catch(error){
            dispatch({
                type: ActionTypes.GETPRODUCTERROR,
            })
        }
    };
    
}

const AddtoCartAction = (product) => {
    console.log(product);
    return (dispatch) =>{
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: product,
        })
    }

}
export {getProductAction, AddtoCartAction}