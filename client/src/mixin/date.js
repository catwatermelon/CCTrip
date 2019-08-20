import { parse } from "url";

var DataFormat = {
    filters: {
        formatTimestampToDate(timestamp){
            var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return Y + M + D + h + m + s;
        },
        getFuzzyTime(date){
            return date.split(' ')[0];
        },
        getAccurateTime(data){
            return data.split(' ')[1];
        },
        calTimeDifference(endTime, startTime){
            var timeDifference = ( endTime - startTime ) / 1000;  //得到的是秒

            let timeStr = '';
            let daytime = 60*60*24;
            let day = Math.floor(timeDifference / daytime);
            day > 0 ? timeStr += day + '天' : 0;
            timeDifference -= day * daytime;
            let hourtime = 60 * 60;
            let hour =  Math.floor(timeDifference / hourtime);
            hour > 0 ? timeStr += hour + '小时' : 0;
            timeDifference -= hour * hourtime;

            let minutetime = 60;
            let minute = Math.floor(timeDifference / minutetime);
            minute > 0 ? timeStr += minute + '分钟' : 0;
            timeDifference -= minute * minutetime;

            let seconds = timeDifference;
            timeStr += (seconds > 0 ?  Math.round(seconds) : 1) + '秒'
            return timeStr;
        }
    }
}
export default DataFormat;


// 1565929552472
// 1565929553616

// 1200ms  1s = 
// 1200ms