<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母搜索 : </dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city_'+item">{{item}}</a>
            </dd>
        </dl>
        <dl v-for="(item,index) in cityList" :key="index" :id="'city_'+index.toUpperCase()"  class="m-categroy-section">
            <dt>{{index.toUpperCase()}}</dt>
            <dd ><span v-for="city in item" :key="city.id">{{city.name}}</span></dd>
        </dl>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
                cityList: {},
            }
        },
        created(){
            var data=[
                    {
                        "id":1,
                        "name":"北京",
                        "pinyin":"beijing",
                        "acronym":"bj",
                        "ranks":"S",
                        "firstChar":"b"
                    },
                    {
                        "id":10,
                        "name":"上海",
                        "pinyin":"shanghai",
                        "acronym":"sh",
                        "ranks":"K",
                        "firstChar":"k"
                    },
                    {
                        "id":20,
                        "name":"广州",
                        "pinyin":"gaungzhou",
                        "acronym":"gz",
                        "ranks":"A",
                        "firstChar":"g"
                    },
                    {
                        "id":30,
                        "name":"哈尔滨",
                        "pinyin":"haerbin",
                        "acronym":"hrb",
                        "ranks":"C",
                        "firstChar":"h"
                    },
                    {
                        "id":39,
                        "name":"重庆",
                        "pinyin":"chongqing",
                        "acronym":"cq",
                        "ranks":"D",
                        "firstChar":"c"
                    },
                    {
                        "id":49,
                        "name":"河南",
                        "pinyin":"henan",
                        "acronym":"hn",
                        "ranks":"S",
                        "firstChar":"h"
                    },
                     {
                        "id":15,
                        "name":"西安",
                        "pinyin":"xian",
                        "acronym":"xa",
                        "ranks":"K",
                        "firstChar":"x"
                    },
                    {
                        "id":25,
                        "name":"安徽",
                        "pinyin":"安徽",
                        "acronym":"ah",
                        "ranks":"K",
                        "firstChar":"a"
                    },
                    {
                        "id":21,
                        "name":"桂林",
                        "pinyin":"guilin",
                        "acronym":"gl",
                        "ranks":"S",
                        "firstChar":"G"
                    },
                    {
                        "id":31,
                        "name":"昆明",
                        "pinyin":"kunming",
                        "acronym":"km",
                        "ranks":"K",
                        "firstChar":"k"
                    },
                    {
                        "id":41,
                        "name":"内蒙古",
                        "pinyin":"neimenggu",
                        "acronym":"nmg",
                        "ranks":"N",
                        "firstChar":"n"
                    },
                    {
                        "id":61,
                        "name":"南昌",
                        "pinyin":"nanchang",
                        "acronym":"nc",
                        "ranks":"N",
                        "firstChar":"n"
                    },
                     {
                        "id":52,
                        "name":"山西",
                        "pinyin":"shangxi",
                        "acronym":"sx",
                        "ranks":"S",
                        "firstChar":"s"
                    },
                     {
                        "id":68,
                        "name":"林州",
                        "pinyin":"林州",
                        "acronym":"lz",
                        "ranks":"L",
                        "firstChar":"l"
                    },
                     {
                        "id":67,
                        "name":"安阳",
                        "pinyin":"anyang",
                        "acronym":"ay",
                        "ranks":"A",
                        "firstChar":"a"
                    }
                ];
                var obj={};
                data.forEach((item,index)=>{
                    if(!obj[item.firstChar]){
                        obj[item.firstChar]=[];
                    }
                    obj[item.firstChar].push(item);

                })
              this.cityList=obj;
        }
    }
</script>

<style lang="scss" >
    @import '@/assets/css/changecity/categroy.scss'
</style>