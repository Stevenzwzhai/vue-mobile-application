import axios from 'axios'
import config from './config'
import qs from 'qs'

// axios(config);
class API {
	getList (param) {
		config.data.Method="get";
		config.data.CustData.Data = param;
		return axios.post('/Router',{},config);
	}
	getCurrency (param) {
		console.log(config);
		var commonData = Object.create(config);
		
		config.data.Method="get";
		config.data.CustData.Data = param;
		return axios.post('/Router',{},config);
	}
}
export default API;
