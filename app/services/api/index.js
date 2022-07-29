import axios from 'axios';
import { Alert } from 'react-native';
import { loadItems } from '../../redux/Cart/reducer';

//configuration
const BASE_URL = 'https://gist.githubusercontent.com/trandongtam/21b7633d121e6e72d1afcc603f484fe5/raw/f9e8558f62d854715fc63fc9eafaafb78d68e7c8/data.json'
const TIMEOUT = 10000;

const baseAPI = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

let headers = {
    "Content-Type": "application/json"
}


const get = async (path, config) => {
    const response = await baseAPI.get(path, {
        headers: headers,
        params: config?.params
    });
    console.log({ path, method: 'GET', params: config ? config.params : undefined });
    return response;
};
const handleServerError = (error) => {
    console.log({ error });
    const { response } = error;

    if (response && response.status >= 400) {

        if (response.status >= 500) {
            Alert.alert(
                "",
                "Hệ thống đang lỗi, vui lòng thử lại sau!",
                [
                    {
                        text: "OK",
                        style: "cancel"
                    }
                ]
            );
            return {
                message: error?.response?.data?.message,
                errors: error?.response?.data?.message || {},
                status: response.status,
                __typename: 'ErrorResponse'
            };;
        }


        if (response.data && response.status !== 401 && response.status !== 413 && response.status !== 403 && response.status < 500) {
            let messages = [];
            if (response.data.errors) {
                for (const [key, value] of Object.entries(response.data.errors)) {
                    messages.push(value);
                }
            }
            if (messages.length === 0) {
                messages.push(error.message);
            }
            Alert.alert(
                "",
                messages.join('\n'),
                [
                    {
                        text: "OK",
                        style: "cancel"
                    }
                ]
            );
            return {
                message: response.data.message,
                errors: response.data.errors || {},
                __typename: 'ErrorResponse'
            };
        }
        else {
            return {
                message: error?.response?.data?.message,
                errors: {},
                __typename: 'ErrorResponse'
            };
        }
    } else {
        Alert.alert(
            "",
            "Hệ thống đang lỗi, vui lòng thử lại sau!",
            [
                {
                    text: "OK",
                    style: "cancel",
                    onPress: () => { }
                }
            ]
        );
        return {
            message: 'Unhandled ERROR API',
            errors: {},
            __typename: 'ErrorResponse'
        };
    }
}
export const getMasterDataApi = async () => {
    try {
        const response = await get('');
        return response.data
    } catch (error) {
        return handleServerError(error);
    }
}

export const getFoods = () => {
    try {
        return async dispatch => {
            const response = await axios.get(`${BASE_URL}`);
            if (response.data) {
                dispatch({
                    type: loadItems,
                    payload: response.data
                });
            } else {
                console.log('Unable to fetch data from the API BASE URL!');
            }
        };
    } catch (error) {
        Alert.alert(
            "",
            "Hệ thống đang lỗi, vui lòng thử lại sau!",
            [
                {
                    text: "OK",
                    style: "cancel"
                }
            ]
        );
        console.log(error);
    }
};
