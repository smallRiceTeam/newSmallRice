import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

const types = {
    SET_LOCATION: "SET_LOCATION",
    SET_ADDRESS: "SET_ADDRESS",
    SET_CHANGE: "SET_CHANGE",
    ORDER_INFO: 'ORDER_INFO',
    USER_INFO: 'USER_INFO',
    REMARK_INFO: 'REMARK_INFO',
    SAVE_QUESTION: 'SAVE_QUESTION'
  }
  
export default new VueX.Store({
    state: {//存储数据
        toBuyGoods:[],
        money:0,
        count:0,
        temps:[],
        location: {},
        address: "",
        flag: true,
        orderInfo: null,
        userInfo: null,
        remarkInfo: {
          tableware: '',
          remark: ''
        },
        question: null,
        addSave:{}
    },
    getters:{
        location: state => state.location,
        address: state => state.address,
        change: state => state.change,
        orderInfo: state => state.orderInfo,
        userInfo: state => state.userInfo,
        totalPrice: state => {
            let price = 0;
            if (state.orderInfo) {
            const selectFoods = state.orderInfo.selectFoods;
            selectFoods.forEach(food => {
                price += food.activity.fixed_price * food.count;
            });
            price += state.orderInfo.shopInfo.float_delivery_fee;
            }
            return price;
        },
        remarkInfo: state => state.remarkInfo
    },      
    mutations: {
      save(state,add){
         state.addSave = add;
      },
      //跟踪状态
        buyGoods(state,goodsInfo){
            if(state.toBuyGoods.indexOf(goodsInfo) == -1){
                state.toBuyGoods.push(goodsInfo);
            }
        },
        AllMoney(state,money){
            state.money = money;
        },
        AllCount(state,count){
            state.count = count;
        },
        allTemp(state,temps){
            state.temps = temps;
        },
        [types.SET_LOCATION](state, location) {
            if (location) {
              state.location = location;
            } else {
              state.location = null;
            }
          },
          [types.SET_ADDRESS](state, address) {
            if (address) {
              state.address = address;
            } else {
              state.address = "";
            }
          },
          changeclick: state => {
            state.flag = !state.flag;
            console.log(state.flag)
          },
          [types.ORDER_INFO](state, orderInfo) {
            if (orderInfo) {
              state.orderInfo = orderInfo;
            } else {
              state.orderInfo = null;
            }
          },
          [types.USER_INFO](state, userInfo) {
            if (userInfo) {
              state.userInfo = userInfo;
            } else {
              state.userInfo = null;
            }
          },
          [types.REMARK_INFO](state, remarkInfo) {
            if (remarkInfo) {
              state.remarkInfo = remarkInfo;
            } else {
              state.remarkInfo = null;
            }
          },
          //保存所选问题标题和详情
          [types.SAVE_QUESTION](state, question) {
            state.question = { ...question };
          },
    },
    actions: {
        setLocation: ({
            commit
          }, location) => {
            commit(types.SET_LOCATION, location);
          },
          setAddress: ({
            commit
          }, address) => {
            commit(types.SET_ADDRESS, address);
          },
          setchange: ({
            commit
          }, flag) => {
            commit(types.SET_CHANGE, flag);
          },
          setOrderInfo: ({ commit }, orderInfo) => {
            commit(types.ORDER_INFO, orderInfo);
          },
          setUserInfo: ({ commit }, userInfo) => {
            commit(types.USER_INFO, userInfo);
          },
          setRemarkInfo: ({ commit }, remarkInfo) => {
            commit(types.REMARK_INFO, remarkInfo);
          }
    }
})