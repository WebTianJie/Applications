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
    }
}

export  default api;