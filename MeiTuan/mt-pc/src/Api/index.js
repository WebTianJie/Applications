import axios from '@/axios'
var api={
    searchHotWords(params) {
        return  axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    getSearchList(params) {
        return  axios.get('/api/meituan/header/search.json',params);
    },
    getMenuList(params) {
        return  axios.get('/api/meituan/index/nav.json',params);
    },
    getresultsByKeywords(params) {
        return axios.get('/api/meituan/index/resultsByKeywords.json',params);
    },
    getGoodsList(params) {
        return axios.get('/api/meituan/list/goodsList.json',params);
    },
    getHotCity(params){
        return axios.get('/api/meituan/city/hot.json',params);
    },
    getRecents(params) {
        return axios.get('/api/meituan/city/recents.json',params);
    },
    getProvinceList(params){
        return axios.get('/api/meituan/city/province.json',params);
    },
    getUserPosition(params){
        return axios.get('/api/meituan/city/getPosition.json',params);
    },
    getCityList(params){
        return axios.get('/api/meituan/city/cityList.json',params);
    },
    login(params) {
        return axios.get('/api/meituan/login',params);
    },
    register(params){
        return axios.get('/api/meituan/register',params);
    }
}

export  default api;