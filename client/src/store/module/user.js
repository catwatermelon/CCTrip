import Vue from 'vue'
import axois from '../../../api/axios'
const jwt = require('jsonwebtoken'); 

const userstore = {
    state: {
        isAuth: false,
        user: {
            accountNumber: '',
            password: '',
            username: ''
        },
        token: ''
    },
    getters: {
        getAccountNumber(state){
            return state.user.accountNumber;
        },
        getUsername(state){
            return state.user.username;
        }
    },
    mutations: {
        SET_LOGIN_STATUES(state,flag){
            state.isAuth = flag;
        },
        SET_TOKEN(state,payload){
            if(state.isAuth){  //如果已经登录
                state.token = payload.token;
                var userpayload = jwt.decode(payload.token.split(' ')[1], 'CatWatermelon');
                // console.log(userpayload);
                // if(payload.loginMethod == 'accountNumber')  
                //     state.user.accountNumber = userpayload.accountNumber;
                // else 
                //     state.user.username = userpayload.username;
                // let property = userpayload.
                console.log(userpayload)
                state.user[payload.loginMethod] = userpayload[payload.accountNumber];
                state.user.password = userpayload.password;
            }
        },
        SET_USER(state, user){
            state.user = user;
        }
    },
    // action: {
    //     getUserInfo({context}){
    //         axios.get('/api/userinfo',context.state.user).then(res=>{
    //             context.commit('SET_USER',res.data.data);
    //         })
    //     }
    // }
}
export default userstore;
