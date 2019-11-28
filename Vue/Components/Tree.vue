<template>
    <div>
        <ul class="tree">
            <li
               v-for="(item, index) in treeData"
               :key="item.name"
               class="scope tree-li"
               :class="{
                  'active':showChildren[index]
               }"
            >
                <span @click="handleClick(index)">{{item.name}}</span>
                <Tree
                   v-show="showChildren[index]"
                   v-if="alreardyShow[index]"
                   :treeData="item.children"
                ></Tree>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tree",
        data(){
            return {
                showChildren: [],
                alreardyShow: []
            }
        },
        props:[
            'treeData'
        ],
        methods:{
            handleClick(index){
                this.showChildren.splice(index,1,!this.showChildren[index]);
                if(!this.alreardyShow[index]){
                    this.alreardyShow.splice(index,1,true);
                }
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    @font-face {
        font-family: 'iconfont';
        src: url('../static/iconfont.eot');
        src: url('../static/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../static/iconfont.woff2') format('woff2'),
        url('../static/iconfont.woff') format('woff'),
        url('../static/iconfont.ttf') format('truetype'),
        url('../static/iconfont.svg#iconfont') format('svg');
    }

    .tree-li {
        font-size: 14px;
        margin-left: 30px;
        cursor: pointer;
    }

    .scope::before {
        display: inline-block;
        content: '\e65a';
        font-family: 'iconfont';
    }

    .active::before {
        transform: rotateZ(-90deg);
    }
</style>