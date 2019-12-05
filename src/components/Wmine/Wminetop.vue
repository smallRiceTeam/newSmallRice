<!--
 * @Author: your name
 * @Date: 2019-11-26 10:13:58
 * @LastEditTime: 2019-12-02 16:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xmsc\src\components\w_star.vue
 -->
<template>
  <div id="Wminetop">
      <div class="Wmytop">
          <div class="Wmytopcon">
            <img src="../../assets/img/Wphoto1.jpg" alt="" @click="wgostar">
            <span @click="wgobottom" v-show="yonghushow">{{username}}</span>
            <span @click="wgobottom" v-show="loginshow" class="wloginregister">登陆/注册</span>
            <a href="#">
                <i class="iconfont icon-huiyuan-"></i>
                会员积分
            </a>
          </div>
      </div>
      <div class="WmineOrder">
          <span class="worder">我的订单</span>
          <span class="totalorder">全部订单</span>
          <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="Wserver">
        <a href="#">
            <span class="iconfont icon-daifukuan"></span>
            <span>待付款</span>
        </a>
        <a href="#">
            <span class="iconfont icon-ziyuan"></span>
            <span>待收货</span>
        </a>
        <a href="#">
            <span class="iconfont icon-pingjia"></span>
            <span>待评价</span>
        </a>
        <a href="#">
            <span class="iconfont icon-tuihuanxiu"></span>
            <span>退休换</span>
        </a>
	  </div>
      <div class="Wserver">
        <a href="#">
            <span class="wspecial">0</span>
            <span>优惠券</span>
        </a>
        <a href="#">
            <span class="wspecial">20
                <i>万</i>
            </span>
            <span>最高额度</span>
        </a>
        <a href="#">
            <span class="wspecial">0</span>
            <span>礼品卡</span>
        </a>
        <a href="#">
            <span class="iconfont icon-wodeqianbao"></span>
            <span>我的钱包</span>
        </a>
	  </div>
      <mt-popup class="wframe" v-model="popupVisible" position="bottom" v-if="gobottom">
          <img src="../../assets/img/Wphoto1.jpg" alt="">
          <p class="wlogin1">以系统账号{{username}}登陆</p>
          <p class="wlogin2">已阅读并同意<span class="wlogin3">小米商城用户协议，小米商城隐私政策</span></p>
          <p class="wlogin4" @click="wgologinqie">切换账号</p>
      </mt-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
export default {
  name: 'Wminetop',
  data(){
      return{
        username:'',
        popupVisible:true,
        gobottom:false,
        yonghushow:false,
        loginshow:false
      }
  },
  methods:{
      wgobottom(){
          this.gobottom=!this.gobottom;
      },
      wgologinqie(){
          this.$router.push('/wlogin/')
      },
      wgostar(){
          this.$router.push('/Wstart/')
      }
  },
  created(){
      this.username = window.localStorage.getItem('name');
      if(this.username){
          this.yonghushow=true;
      }else{
          console.log(this.yonghushow)
          this.loginshow=true;
      }
  }
}


</script>

<style lang="scss" scoped="" type="text/css">
.Wmytop{
    width: 100%;
    height: 1rem;
    background: url(../../assets/img/bg1.png);
    background-size: cover;
    background-color: #f37d0f;
    .Wmytopcon{
        display: flex;
        background: url(../../assets/img/bg1.png);
        background-size: cover;
        background-color: #f37d0f;
        align-items: center;
        height: 1rem;
        padding-top: 50px;
        padding-left: 20px;
            img{
                width: .75rem;
                height: .75rem;
            }
            span{
                color: white;
                font-size: 16px;
                display: block;
                margin-left: 10px;
            }
            a{
                color: #b65005;
                font-size: 16px;
                display: block;
                width: 100px;
                height: 30px;
                background-color: #ffd43f;
                line-height: 30px;
                text-align: center;
                border-top-left-radius:50px; 
                border-bottom-left-radius:50px; 
                margin-left: 72px;
            }
            i{
                color: #b75001;
            }
    }
}
.WmineOrder{
    width: 100%;
    height: .25rem;
    font-size: 16px;
    margin-top: 60px;
    border-bottom: 2px solid #eeeeee;
    .worder{
        margin-left: 10px;
    }
    .totalorder{
        margin-left:207px; 
        color: #b1b1b1
    }
    .icon-youjiantou{
        color: #b1b1b1;
    }
}
.Wserver{
        width: 100%;
        height: .6rem;
        display: -webkit-flex;
        align-items:center;
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: 10px solid #f5f5f5;
            a{
                flex:1;
                span{
                color: #666666;
                font-size: 15px;
                display: block;
                text-align: center;
                margin-top: .07rem;
                }
                .iconfont{
                    font-size: 30px;
                }
                .icon-ziyuan{
                    font-size: 23px;
                }
                .icon-tuihuanxiu{
                    font-size: 23px;
                }
                .wspecial{
                    color: black;
                    font-size: 20px;
                    i{
                        font-size: 12px;
                        font-style: normal;
                        line-height:25px;
                    }
                }
            }
}
.wframe{
    width: 100%;
    font-size: 16px;
    text-align: center;
    img{
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
        margin: 20px 0;
    }
    .wlogin1{
        width: 90%;
        height: 40px;
        background: rgb(255, 94, 0);
        color: white;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .wlogin2{
        color: rgb(150, 146, 146);
        font-size: 12px;
    }
    .wlogin3{
        text-decoration: underline;
    }
    .wlogin4{
        color:rgb(110, 108, 108);
        margin: 20px 0;
        font-size: 14px;
    }
}
.wloginregister{
    font-size: 16px;
}
</style>