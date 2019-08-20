<template>
    <div class="login">
        <div class="day">
            <p class="title">DAY</p>
        </div>
        <div class="night">
            <p class="title">NIGHT</p>
        </div>
       <div class="formWrapper">
            <div class="skewEle">CC Record</div>
            <!-- <span class="heart"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1640 1024" width="64" height="64" t="1565944430181" p-id="4818" version="1.1"><path fill="#d81e06" d="M 594.576 171.246 C 645.93 86.957 712.018 31.4863 806.058 8.73468 c 166.954 -40.3029 346.692 75.8388 375.944 245.284 c 17.3346 99.1322 -5.95877 190.139 -48.5369 277.678 c -63.9213 131.526 -160.995 236.075 -277.353 322.098 c -76.7056 56.6624 -157.636 107.691 -237.701 159.478 a 49.5119 49.5119 0 0 1 -41.928 4.55033 c -150.053 -84.1811 -288.513 -184.18 -404.221 -312.673 C 90.2482 613.82 22.3183 512.196 5.20038 389.337 c -24.7018 -176.813 39.5445 -306.389 199.673 -368.36 C 339.65 -30.7015 501.403 10.7932 594.576 171.246 Z" p-id="4819" /><path fill="#d81e06" d="M 867.055 919.667 c 86.673 -93.4985 172.479 -177.788 249.185 -269.77 a 508.554 508.554 0 0 0 119.175 -312.348 c 2.92521 -98.1571 -21.6682 -192.414 -97.5071 -269.445 a 267.386 267.386 0 0 1 140.844 -64.2463 c 227.517 -29.1438 401.404 165.979 354.167 391.545 c -25.2435 120.367 -86.673 219.933 -165.437 309.422 c -115.492 130.551 -256.769 229.358 -407.363 315.165 a 30.0105 30.0105 0 0 1 -24.9185 2.16682 c -58.8293 -34.3442 -115.6 -69.9884 -168.146 -102.491 Z" p-id="4820" /></svg></span> -->
            <span class="heart"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="90" height="90" t="1565947272366" p-id="11189" version="1.1"><path fill="#fa004b" d="M 591.252 29.742 c -18.758 -18.758 -49.168 -18.758 -67.926 0 l -11.322 11.322 l -11.322 -11.322 c -18.758 -18.758 -49.168 -18.758 -67.926 0 c -18.758 18.758 -18.758 49.168 0 67.926 l 79.248 79.248 l 79.248 -79.248 c 18.756 -18.756 18.756 -49.168 0 -67.926 Z" p-id="11190" /><path fill="#faedd6" d="M 384.514 608.618 V 255.832 l 79.458 64.37 h 96.06 l 79.46 -64.37 v 352.786" p-id="11191" /><path fill="#36c9a3" d="M 704.128 608.062 h 192.126 v 179.77 c 0 121.774 -98.718 220.492 -220.492 220.492 h -327.52 c -121.774 0 -220.492 -98.718 -220.492 -220.492 v -179.77 h 192.126" p-id="11192" /><path fill="#ffffff" d="M 127.742 608.058 h 768.506 v 64.042 H 127.742 Z" p-id="11193" /><path fill="#fa004b" d="M 736.15 1008.33 H 287.854 c -35.368 0 -64.042 -28.672 -64.042 -64.042 h 576.378 c 0 35.368 -28.672 64.042 -64.04 64.042 Z" p-id="11194" /><path fill="#faedd6" d="M 415.94 600.332 v 55.762 c 0 26.526 -21.504 48.032 -48.032 48.032 c -26.526 0 -48.032 -21.504 -48.032 -48.032 v -55.762 c 0 -13.416 10.874 -24.29 24.29 -24.29 h 47.484 c 13.416 0 24.29 10.874 24.29 24.29 Z M 704.128 600.332 v 55.762 c 0 26.526 -21.504 48.032 -48.032 48.032 c -26.526 0 -48.032 -21.504 -48.032 -48.032 v -55.762 c 0 -13.416 10.874 -24.29 24.29 -24.29 h 47.484 c 13.414 0 24.29 10.874 24.29 24.29 Z" p-id="11195" /><path fill="#232323" d="M 449.306 401.714 h 31.35 v 31.35 h -31.35 Z M 545.444 401.714 h 31.35 v 31.35 h -31.35 Z M 545.442 464.41 h -64.788 v 31.35 h 14.63 v 16.72 h 31.35 v -16.72 h 18.808 Z M 528.726 531.294 h 31.35 v 31.35 h -31.35 Z M 512.004 199.086 l -90.334 -90.332 c -12.032 -12.034 -18.658 -28.03 -18.658 -45.05 c 0 -17.016 6.626 -33.014 18.658 -45.048 C 433.702 6.628 449.7 0 466.72 0 c 17.016 0 33.016 6.628 45.048 18.662 l 0.236 0.236 l 0.236 -0.238 C 524.272 6.628 540.27 0 557.286 0 c 17.018 0 33.018 6.628 45.05 18.662 c 12.032 12.032 18.658 28.028 18.658 45.046 s -6.626 33.016 -18.658 45.05 l -90.332 90.328 Z M 466.72 31.35 a 32.14 32.14 0 0 0 -22.88 9.476 c -12.618 12.618 -12.618 33.142 0 45.76 l 68.162 68.164 l 68.162 -68.164 c 12.618 -12.616 12.618 -33.14 0 -45.758 v -0.002 c -6.112 -6.112 -14.236 -9.476 -22.878 -9.476 s -16.766 3.364 -22.876 9.476 l -22.406 22.406 l -22.406 -22.404 a 32.136 32.136 0 0 0 -22.878 -9.478 Z" p-id="11196" /><path fill="#fa004b" d="M 991.514 269.9 c -18.758 -18.758 -49.168 -18.758 -67.926 0 l -11.322 11.322 l -11.322 -11.322 c -18.758 -18.758 -49.168 -18.758 -67.926 0 c -18.758 18.758 -18.758 49.168 0 67.926 l 79.248 79.248 l 79.248 -79.248 c 18.756 -18.758 18.756 -49.168 0 -67.926 Z" p-id="11197" /><path fill="#232323" d="M 912.264 439.242 l -90.334 -90.33 c -24.838 -24.842 -24.838 -65.258 0 -90.094 c 24.844 -24.84 65.256 -24.84 90.096 0 l 0.234 0.236 l 0.238 -0.236 c 24.84 -24.838 65.258 -24.836 90.094 0 c 24.838 24.84 24.838 65.256 0 90.092 l -90.328 90.332 Z m -45.284 -167.72 a 32.248 32.248 0 0 0 -22.878 9.464 c -12.616 12.614 -12.616 33.14 0 45.76 l 68.162 68.162 l 68.164 -68.164 c 12.616 -12.616 12.616 -33.142 0 -45.758 c -12.614 -12.618 -33.146 -12.618 -45.76 0 l -22.406 22.402 l -22.404 -22.402 a 32.248 32.248 0 0 0 -22.878 -9.464 Z" p-id="11198" /><path fill="#fa004b" d="M 190.986 269.9 c -18.758 -18.758 -49.168 -18.758 -67.926 0 l -11.322 11.322 l -11.322 -11.322 c -18.758 -18.758 -49.168 -18.758 -67.926 0 c -18.758 18.758 -18.758 49.168 0 67.926 l 79.248 79.248 l 79.248 -79.248 c 18.758 -18.758 18.758 -49.168 0 -67.926 Z" p-id="11199" /><path fill="#232323" d="M 111.74 439.242 l -90.336 -90.33 c -24.838 -24.842 -24.838 -65.258 0 -90.094 c 24.844 -24.84 65.256 -24.84 90.096 0 l 0.236 0.236 l 0.234 -0.236 c 24.844 -24.84 65.256 -24.84 90.096 0 c 24.838 24.84 24.838 65.256 0 90.092 L 111.74 439.242 Z m -45.284 -167.718 a 32.254 32.254 0 0 0 -22.88 9.462 c -12.616 12.614 -12.616 33.14 0 45.76 l 68.164 68.162 l 68.162 -68.164 c 12.616 -12.616 12.616 -33.142 0 -45.758 c -12.614 -12.618 -33.144 -12.618 -45.76 0 l -22.404 22.402 l -22.404 -22.402 a 32.248 32.248 0 0 0 -22.878 -9.462 Z M 336.446 928.39 h 353.206 v 31.35 H 336.446 Z" p-id="11200" /><path fill="#232323" d="M 719.004 592.388 c -1.976 -9.752 -7.534 -18.194 -15.21 -23.97 v -24.396 c 0 -17.84 14.514 -32.354 32.354 -32.354 h 32.02 c 35.128 0 63.706 -28.58 63.706 -63.706 s -28.58 -63.704 -63.706 -63.704 h -32.02 v 31.35 h 32.02 c 17.842 0 32.358 14.514 32.358 32.354 c 0 17.842 -14.514 32.358 -32.358 32.358 h -32.02 c -35.128 0 -63.704 28.578 -63.704 63.704 v 16.346 h -18.322 V 222.344 l -99.768 83.228 h -84.816 l -101.744 -82.674 v 337.468 h -23.63 c -19.316 0 -35.472 13.778 -39.164 32.02 H 112.074 v 195.444 C 112.074 918.056 218.016 1024 348.24 1024 h 327.52 c 130.224 0 236.168 -105.944 236.168 -236.168 v -195.444 h -192.924 Z m -95.264 7.944 a 8.624 8.624 0 0 1 8.612 -8.614 h 47.486 a 8.624 8.624 0 0 1 8.612 8.614 l 0.002 55.762 c 0 17.842 -14.514 32.358 -32.358 32.358 c -17.84 0 -32.354 -14.514 -32.354 -32.358 v -55.762 Z m -165.334 -263.41 h 107.308 l 57.058 -47.6 v 272.256 c -15.402 3.812 -27.28 16.552 -29.826 32.412 H 431.06 c -2.66 -16.572 -15.506 -29.764 -31.916 -32.892 V 288.766 l 59.262 48.156 Z m 134.054 321.856 h -160.914 c 0.038 -0.89 0.068 -1.784 0.068 -2.684 v -30.756 h 160.778 v 30.756 c -0.002 0.9 0.03 1.794 0.068 2.684 Z m -256.908 -58.446 a 8.624 8.624 0 0 1 8.612 -8.614 h 47.486 a 8.624 8.624 0 0 1 8.612 8.614 v 55.762 c 0 17.842 -14.514 32.358 -32.354 32.358 s -32.354 -14.514 -32.354 -32.358 v -55.762 h -0.002 Z M 824.6 928.386 h -103.598 v 31.35 h 65.992 c -32.052 20.81 -70.25 32.916 -111.228 32.916 h -327.52 c -40.978 0 -79.178 -12.106 -111.228 -32.916 h 68.082 v -31.35 H 199.404 c -34.684 -36.706 -55.98 -86.186 -55.98 -140.554 v -97.704 h 48.81 v -31.35 H 143.424 v -35.04 h 160.778 v 32.354 c 0 0.9 0.032 1.794 0.068 2.684 h -80.686 v 31.35 h 90.51 c 11.306 17.814 31.196 29.674 53.812 29.674 c 22.618 0 42.506 -11.858 53.812 -29.674 h 180.564 c 11.306 17.814 31.196 29.674 53.812 29.674 s 42.506 -11.858 53.814 -29.674 h 107.228 v -31.35 h -97.404 c 0.038 -0.89 0.068 -1.784 0.068 -2.684 v -32.354 h 160.776 v 35.04 h -32.09 v 31.35 h 32.09 v 97.704 c 0.004 54.368 -21.296 103.848 -55.976 140.554 Z" p-id="11201" /></svg></span>
            <p>不论昼夜 </p>
            <p>你找不到的路</p>
            <p class="last">我陪你找~</p>

            <!-- <form action=""  method='post' class="formContent">     -->
                <input type="text" v-show="loginMethod == 'accountNumber'" placeholder="登录账号" v-model="accountNumber">
                <input type="text" v-show="loginMethod == 'username'" placeholder="登录用户名" v-model="accountNumber">              
                <input type="password" placeholder="登录密码" v-model="password">
               <div class="otherService">
                    <button class="forgetBtn">找回密码</button>
                    <button class="changeBtn" @click="changeLoginMethod"><span>切换登录方式</span></button>
                </div>
                       <button class="submit"  @click="login">登录</button>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            accountNumber: '',
            password: '',
            loginMethod: 'accountNumber'
        }
    },
    methods: {
        login(){
            if(!this.accountNumber || !this.password)
                return;
            let postObj = {
                password:   this.password,
                loginMethod: this.loginMethod
            };
            postObj[this.loginMethod] = this.accountNumber;
            this.$axios.post('/api/login',postObj).then(res=>{
                if(res.data.status){                    
                    const token = res.data.token;
                    localStorage.setItem('token',token);
                    this.$axios.get('/api/userinfo').then(res=>{
                        this.$store.commit('SET_LOGIN_STATUES',true);
                        this.$store.commit({
                            type: 'SET_TOKEN',
                            token: 'Bearer ' + token,
                            loginMethod: this.loginMethod
                        })
                        this.$store.commit('SET_USER',res.data.data);
                    })                 
                    this.$router.push({name: 'home'})
                }
            }).catch(error=>{
                console.log(error)
            })
        },
        changeLoginMethod(){
            this.loginMethod = this.loginMethod == 'accountNumber' ? 'username' : 'accountNumber';
            this.accountNumber = '';
        }
    }
}
</script>

<style>
body,html {
    width: 100%;
    height: 100%;
}
.login {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
}
button, input {
    outline: none;
    border: none;
}
.day, .night {
    flex: 1;
}

.night {
    background-color: black;    
    /* background: url(../assets/loginBg.jpg) 0 0 no-repeat; */
    background-size: cover;
    text-shadow: 0px 5px 6px white;
    display: flex;
    justify-content: center;
    align-items: flex-end;  
    padding-bottom: 4%; 
}
.day {
    background-size: cover;
    color: black;
    text-shadow: 0px 5px 6px rgba(0,0,0,.75);
    padding-top: 4%;     
}
.login .title{
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}
.day .title {
    color: black;
}

.login .formWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 82%;
    height: 44%;
    box-sizing: border-box;
    top: 38%;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(255,255,255,1);
    position: absolute;
    z-index: 999;
    box-shadow: 0px 12px 24px rgba(0,0,0,.65);
}
.login .skewEle {
    position: absolute;
    top: -14%;
    width: 100%;
    height: 80%;    
    z-index: -1;
    box-sizing: border-box;
    background-color: white;
    transform: skew(0deg,-5deg);
    -ms-transform: skew(0deg,-5deg);
    -webkit-transform: skew(0deg,-5deg); 
}
.formWrapper input:not(.submit) {
    border: none;
    width: 80%;
    outline: none;
    text-indent: .8em;
    margin: 5px auto;
    line-height: 26px;
    font-size: 14px;
    border-bottom: 1px solid rgb(195, 234, 247);
}
.formWrapper>p {
    line-height: 24px;
    font-size: 14px;
    font-weight: bold; 
    letter-spacing: 4px;
}
.formWrapper .last {
    margin-bottom: 8%;
}
.formContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.submit  {
    position: absolute;
    z-index: 99999;
    bottom: 0;
    height: 34px;
    background-color: transparent;
    color: white;
    background-color: rgba(0,0,0,.85);
    border-radius: 12px;
    left: 50%;
    transform: translate(-50%,17px);
    box-sizing: border-box;
    width: 90px;    
}
.heart {
    position: absolute;
    top: -70px;
}
.otherService {
    width: 80%;
    display: flex;
    justify-content: space-between; 
    box-sizing: border-box;
    padding-bottom: 8%;
}
.forgetBtn {
    background-color: transparent;
    text-decoration: underline;
}
.changeBtn {
    background: url(../assets/switch.png) 0 0 no-repeat;
    background-size: 1.3em;
    text-indent: 1.6em;
}
</style>