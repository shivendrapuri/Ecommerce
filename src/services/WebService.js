import axios from "axios";
class WebService
{
getProductAPI(url){
    var data = axios.get(url)
    return data;
}
}
export default new WebService();