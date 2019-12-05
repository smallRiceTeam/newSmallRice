<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 11:49:39
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 14:56:53
 -->
<template>
    <div class="box">
        <div class="title">
            <p>热门搜索</p>
        </div>
        <img src="../assets/img/12d025189901e793f0a39ce8bb9b7548.jpg" alt="">
        <div class="sat">
            <router-link to="" v-for="(Coneny,index) in Conenys" :key="index" :style="Coneny.style">
               {{Coneny.product}}
            </router-link>
        </div>
        <div class="title">
            <p>常用分类</p>
        </div>
        <div class="hotClassify-list">
            <router-link to="" v-for="(Type,index) in Types" :key="index">
               {{Type.typesof}}
            </router-link>
            <router-link to="" >
               电视
            </router-link>
            <router-link to="" >
               笔记本
            </router-link>
            <router-link to="" >
               盒子
            </router-link>
            <router-link to="" >
               路由器
            </router-link>
            <router-link to="" >
               平板
            </router-link>
        </div>

    </div>
            
</template>
            
<script>

import axios from 'axios';

export default {
    name:'SearchContent',
   data() {
      return {
          Conenys:[],
          Types:[]
      }
   },
   created() {
     //从后端获取数据    
    axios.all([
        // axios.get('http://localhost:3000/Content'),
        // axios.get('http://localhost:3000/Types')
    ])
     .then(axios.spread(function (Conenys, Types){
        // this.Conenys = userResp.data;
        // this.Types = reposResp.data
        // console.log(  this.Types)
     }))
     .catch(err=>{
         console.log(err);
     });
    },

}
</script>
            
<style scoped lang="scss">
.box{
    width: 100%;
    height: 100%;
    background: #fff;
    img{
        width: 100%;
        height: 100%;
    }

}

.title{
    width: 95%;
    height: .4rem;
    margin: 0 auto;
    margin-bottom: 3px;
    p{
        line-height: 0.4rem;
        font-size: 18px;
    }
}   

.sat{
    margin: .1rem .2rem;
    text-align: left;
    a{
        display: inline-block;
        padding: .1rem .1rem;
        margin: .05rem;
        border: 1px solid #e4e4e4;
        font-size: 16px;
    }
}
.hotClassify-list{
    text-align: left;
    max-height: 1.2rem;
    overflow: hidden;
    padding-left: .32rem;
    padding-bottom: 1.72rem;
    a{
        display: inline-block;
        background: #f5f5f5;
        height: .35rem;
        line-height: .35rem;
        padding: 0 .1rem;
        margin-right: .05rem;
        margin-bottom: .05rem;
        color: rgba(0,0,0,.54);
    }
}
</style>
