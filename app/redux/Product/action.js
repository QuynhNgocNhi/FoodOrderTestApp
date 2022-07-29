import * as actionTypes from './type';
//import API
import { getMasterDataApi } from '../../services/api'

export const fetchData = () => {


    //const data = await getMasterDataApi()
    let data = "product data"
    console.log("action product data is called " + data)

    return {
        type: actionTypes.GET_PRODUCT_LIST,
        data
    }



}