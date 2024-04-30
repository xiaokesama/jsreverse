u = {
pageIndex: 2,
pageSize: 12,
categoryCode: 123,
stageCode: 931,
order: 0
}
Ke = {}
Ke.a = 5053
Ke.b = '750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2'
n = 440300



// 定义一个测试函数,默认的参数写上面，外面的参数这里输入
const CryptoJS = require('crypto-js');
function test(e,index) {
                e.pageIndex = index;
                var t = "appId=".concat(Ke.a, "&cityCode=").concat(n, "&t=").concat((new Date).getTime());
                console.log(t);
                for (var r in e)
                    String(e[r]) && void 0 != e[r] && null != e[r] && "undefined" != e[r] && "null" != e[r] && (t = "".concat(t, "&").concat(r, "=").concat(e[r]));
                return {
                    params: t,
                    sign: CryptoJS.MD5("".concat(t).concat(Ke.b)).toString()
                }
            }


// 输出函数
function result(index){return test(u,index)}
