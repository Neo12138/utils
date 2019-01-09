/**
 * Created by wangcheng on 2019/1/3 11:50.
 */
namespace zero.utils {
    /**
     * 将数字本地化输出，每3个数字直接用空格或逗号隔开
     * @param value 需要处理的数字
     * @param filler 填充的符号。默认为逗号
     */
    export function toLocaleString(value: number, filler: string = ','): string {
        value = value || 0;
        let chars = value.toString().split('');
        for (let i = chars.length - 3; i > 0; i -= 3) {
            chars.splice(i, 0, filler);
        }
        return chars.join('');
    }

    /**
     * 将数字按指定位数输出，不足补0
     * @param value 数字
     * @param digits 位数
     */
    export function paddingLeft(value: number, digits: number = 2): string {
        if (!value) value = 0;
        let len = value.toString().length;
        return Array(digits - len + 1).join('0') + value;
    }
}