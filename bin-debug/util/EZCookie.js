/**
 * Created by Neo on 2017/11/21
 */
var zero;
(function (zero) {
    var utils;
    (function (utils) {
        /**
         * 各浏览器之间对Cookie的数量限制基本上是50个，大小基本为4K(所有的key,value,expires,等号)
         */
        var EZCookie = /** @class */ (function () {
            ////////////////////////////////////////////////////////////////////////////
            //public
            //请在此处书写所有的公有方法
            ////////////////////////////////////////////////////////////////////////////
            function EZCookie() {
            }
            /**
             * 以键值对的方式存储cookie值，并且还可以设置一个过期时间
             * 由于使用了encodeURIComponent对value编码,因此value可以写入';''='这些会混淆cookie值的字符
             * @param {string} key cookie键
             * @param {string} value cookie值 只能是字符串
             * @param {number} expireDays 过期时间，默认30天
             */
            EZCookie.prototype.set = function (key, value, expireDays) {
                if (expireDays === void 0) { expireDays = 30; }
                var d = new Date();
                d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toLocaleTimeString();
                document.cookie = key + "=" + encodeURIComponent(value) + "; " + expires;
            };
            /**
             * 根据键值获取存储的cookie
             * @param {string} key
             * @returns {string}
             */
            EZCookie.prototype.get = function (key) {
                var start;
                var end;
                if (document.cookie.length > 0) {
                    start = document.cookie.indexOf(key + "=");
                    if (start != -1) {
                        start += key.length + 1;
                        end = document.cookie.indexOf(";", start);
                        if (end == -1) {
                            end = document.cookie.length;
                        }
                        return decodeURIComponent(document.cookie.substring(start, end));
                    }
                }
                return "";
            };
            /**
             * 根据键移除cookie
             * @param {string} key
             */
            EZCookie.prototype.remove = function (key) {
                //设置为过期，系统会立刻删除cookie
                this.set(key, "", -1);
            };
            return EZCookie;
        }());
        utils.EZCookie = EZCookie;
    })(utils = zero.utils || (zero.utils = {}));
})(zero || (zero = {}));
