<!--
 * @Description: 首页
 * @Author: 张涛
 * @Date: 2019-11-29 17:20:39
 * @LastEditors: yx
 * @LastEditTime: 2019-12-05 14:26:09
 -->
<template>
<div>
    <div class="box" style="">
        <!-- position:fixed;z-index:10;" -->
       <ul>
           <li  v-for="(item,index) in items" :key="index" class="red" :class="{ 'Variety':footerCls[index]}" @touchend="changeCls(item.name,index)">
                <b>
                  {{item.name}}
               </b>
               <div>
                   <p>{{item.description}} </p>
               </div>
           </li>
       </ul>
    </div>
    <div class="put">
        <HomeList :typename="currtype"></HomeList>
    </div>
</div>
</template>
<script>

import HomeList from './HomeList';
import axios from 'axios';

export default {
    name:"Nav",
    data() {
        return {
            items:[],
            currtype:""
        }

    },
    components:{
        HomeList
    },
    created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/items')
     .then(res=>{ 
         this.items = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.currtype = this.items[0].name;
     })
     .catch(err=>{
         console.log(err);
     });
    },
        
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
            }
    },

    methods:{
        changeCls(typename,index){
            // console.log(typename);
            this.currtype = typename;
            this.$store.commit('changeFooterCls',index)
        }
        
    
    }
}
</script>

<style lang="scss" scoped>
.put{
     padding-top:.5rem;
     padding-bottom: 0.65rem;
}
.box{
    width: 100%;
    height: .5rem;
    background: #ffffff;
    margin: 0 auto;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .red{
            text-align: center;
            b{
                font-size: 20px;
                color: #333333;
            }
            p{
                font-size: 12px;
                color: #7b7b7b;
            }
        }
        .Variety{
            text-align: center;
            b{
                font-size: 20px;
                color:#ff5934;
            }
            div{
                width: .7rem;
                height: .18rem;
                background: #ff5934;
                border-radius: 10px;
                p{
                    font-size: 12px;
                    color: #ffffff;
                }
            }
        }
    }
}


            
</style>
