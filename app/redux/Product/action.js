import * as actionTypes from './type';
//import API
import { getMasterDataApi } from '../../services/api'

export const fetchData = async () => {


    const data = await getMasterDataApi()
    console.log("action product data" + data)

    return {
        type: actionTypes.GET_PRODUCT_LIST,
        data
    }



}