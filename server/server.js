const Koa = require('koa');
var router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());
const User = require("./src/model/user").User;
const TripHistory = require("./src/model/triphistory").Triphistory;

const crypto  = require("crypto")

//验证码
// const svgCaptcha = require('svg-captcha')

const jwt = require('jsonwebtoken');
const SECRET = 'CatWatermelon'
const koajwt = require('koa-jwt');


function splitUrlParams(url){
    var stringParams = url.split('?')[1].split('&');
    var paramsObj = {}
    stringParams.forEach(item=>{
        let key = item.split('=')[0];
        let value = item.split('=')[1];
        paramsObj[key] = value;
    })
    return paramsObj;
}

// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
      if(err.status === 401){
          ctx.status = 401;
          ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
      next();
  })
})
//验证token
app.use(koajwt({
  secret: SECRET
}).unless({
  // path: [/^\/api\/login/, /^\/api\//, /^\/Home\//, /^\/login\//]
  path: ['/api/login','/login']
}));


//USER
router.post('/login', async(ctx)=>{
    var {password, loginMethod} = ctx.request.body, user, postObj = {};
    var property = loginMethod == 'accountNumber' ? 'accountNumber' : 'username';
    postObj[property] = ctx.request.body[property];
    let md5 = crypto.createHash('md5');
    postObj.password = md5.update(password).digest('hex');
    await User.findOne({
        where: postObj
    }).then(res=>{
        if(res){
            postObj.password = password;
            postObj.loginMethod = loginMethod;
            const token = jwt.sign(
                postObj, 
                SECRET,
                {expiresIn: '1h'}//过期时间为一天
            );
            return ctx.body = {
                status: 1,
                // data: res,   //登录操作只返回token，需要再拉取用户信息
                token
            }
        } 
        return ctx.body = {
            status: 0
        }
    })
})
router.get('/userinfo',async(ctx)=>{  //这里要拿token里的信息来请求数据库
    // console.log(ctx.request.header.authorization);
    var userpayload = jwt.decode(ctx.request.header.authorization.split(' ')[1], 'CatWatermelon')
    let md5 = crypto.createHash('md5');
    var postObj = {
        password: md5.update(userpayload.password).digest('hex')
    }
    var property = userpayload.loginMethod == 'accountNumber' ? 'accountNumber' : 'username';
    postObj[property] = userpayload[property];
    await User.findOne({
        where: postObj
    }).then(res=>{
        if(res){
            return ctx.body = {
                status: 1,
                data: res
            }
        } 
        return ctx.body = {
            status: 0
        }
    })
})
router.post('/uploadAvatar', async(ctx)=>{
    var userpayload = jwt.decode(ctx.request.header.authorization.split(' ')[1], 'CatWatermelon')
    var property = userpayload.loginMethod == 'accountNumber' ? 'accountNumber' : 'username';
    let md5 = crypto.createHash('md5');
    var postObj = {
        password: md5.update(userpayload.password).digest('hex')
    }
    postObj[property] = userpayload[property];
    var avatar = ctx.request.body.avatar;
    console.log(postObj);
    await User.update(
        {
            avatar
        },
        {
            where: postObj
        }
    ).then(res=>{
        if(res){
            return ctx.body = {
                status: 1
            }
        } 
        return ctx.body = {
            status: 0
        }
    })

})


//HISTORY
router.get('/history',async(ctx)=>{
    await TripHistory.findAll().then(res=>{
        if(res){
            return ctx.body = {
                status: 1,
                data: res
            }
        } 
        return ctx.body = {
            status: 0
        }
    })
})
router.get('/getHistoryById',async(ctx)=>{
    var id = splitUrlParams(ctx.request.url).id;
    // console.log(ctx.request);
    await TripHistory.findOne({
        where: {
            id
        }
    }).then(res=>{
        if(res){
            return ctx.body = {
                status: 1,
                data: res
            }
        } 
        return ctx.body = {
            status: 0
        }
    })
})
router.post('/history',async(ctx)=>{
    // console.log(ctx.request)
    var {userId = 13328, tripDate, endTime, start, end, cost, transport, distance, pathList} = ctx.request.body;
    await TripHistory.create({
        userId, tripDate, endTime, start, end, cost, transport, distance, pathList
    }).then(res=>{
        if(res){
            return ctx.body = {
                status: 1
            }
        } 
        return ctx.body = {
            status: 0
        }
    })
})


// router.post('/home',async(ctx)=>{
//   const cap = svgCaptcha.create({
//     size: 4, // 验证码长度
//     width:100,
//     height:40,
//     fontSize: 30,
//     ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
//     noise: 2, // 干扰线条的数量
//     color: false, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
//     background: '#eee' // 验证码图片背景颜色
//   })
  
//   let img = cap.data // 验证码
//   let text = cap.text.toLowerCase() // 验证码字符，忽略大小写
//   return ctx.body = {
//     img: `${img}`,
//     text: text
//   }
// })



app.use(router.routes());
app.listen(3000);
console.log('server run successed in localhost:3000');