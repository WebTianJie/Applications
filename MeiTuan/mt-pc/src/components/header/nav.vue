<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list my">
                <router-link to="/">我的美团</router-link>
                <dl>
                    <dd>
                        <router-link to='/'>我的订单</router-link>
                    </dd>
                    <dd>
                         <router-link to='/'>我的收藏</router-link>
                    </dd>
                    <dd>
                         <router-link to='/'>抵用券</router-link>
                    </dd>
                    <dd>
                         <router-link to='/'>账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="list">
                 <router-link to="/">手机App</router-link>
            </li>
            <li class="list bd">
             <router-link to="/">商家中心</router-link>
                <dl>
                    <dd>
                        <router-link :to="{path: '/'}">登录商家中心</router-link>
                    </dd>
                    <dd>
                         <router-link :to="{path: '/'}">美团智能收银</router-link>
                    </dd>
                    <dd>
                         <router-link :to="{path: '/'}">我想合作</router-link>
                    </dd>
                    <dd>
                         <router-link :to="{path: '/'}">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="list site">
                 <router-link :to="{name: 'my'}">网站导航</router-link>
                <div class="subContainer">
                    <dl class="hotel">
                        <dt>酒店旅游</dt>
                        <dd>
                            <router-link :to="{path: '/'}">如家</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">七天</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">汉庭</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">AHotel</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">普林斯顿</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">高原红</router-link>
                        </dd>
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>
                            <router-link :to="{path: '/'}">烤鱼</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">特色小吃</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">烧烤</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">自助餐</router-link>
                        </dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>
                            <router-link :to="{path: '/'}">热门电影</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">热门影院</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">热门电影排行榜</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">最后受期待电影</router-link>
                        </dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                            <dd>
                                <router-link :to="{path: '/'}"> <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app"></router-link>
                            </dd>
                            <dd>
                                <router-link :to="{path: '/'}"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/dianping.png" title="美团app" alt="美团app"></router-link>
                            </dd>
                            <dd>
                                <router-link :to="{path: '/'}"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/zhenguo.png" title="美团app" alt="美团app"></router-link>
                            </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

</style>
