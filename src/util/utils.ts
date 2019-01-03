/**
 * Created by admin on 2018/12/21.
 */
namespace zero {
    export namespace utils {
        export function getTimestamp(): string {
            let time = new Date();
            let Y = time.getFullYear();
            let M = time.getMonth() + 1;
            let D = time.getDate();

            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();
            let ms = time.getMilliseconds();

            return `${Y}-${M}-${D} ${paddingTime(h)}:${paddingTime(m)}:${paddingTime(s)}.${ms}`;
        }

        export function paddingTime(value: number): string {
            return value < 10 ? '0' + value : '' + value;
        }

        export function paddingLeft(value: number, digits: number = 2): string {
            if (!value) value = 0;
            let len = value.toString().length;
            return Array(digits - len + 1).join('0') + value;
        }

    }
}