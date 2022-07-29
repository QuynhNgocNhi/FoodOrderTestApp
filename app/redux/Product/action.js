import * as actionTypes from './type';
//import API
import { getMasterDataApi } from '../../services/api'

export const fetchData = async () => {


    const data = await getMasterDataApi()
    console.log("SAGA data" + data)
    if (response.__typename !== 'ErrorResponse') {
        return {
            type: actionTypes.GET_PRODUCT_LIST,
            data
        }

    }

}