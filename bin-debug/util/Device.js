var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by Neo on 2017/11/21
 */
var zero;
(function (zero) {
    var util;
    (function (util) {
        var Device = (function () {
            ////////////////////////////////////////////////////////////////////////////
            //public
            //请在此处书写所有的公有方法
            ////////////////////////////////////////////////////////////////////////////
            function Device() {
            }
            return Device;
        }());
        util.Device = Device;
        __reflect(Device.prototype, "zero.util.Device");
    })(util = zero.util || (zero.util = {}));
})(zero || (zero = {}));
