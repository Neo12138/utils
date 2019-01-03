/**
 * Created by wangcheng on 2019/1/3 11:50.
 */
namespace zero.utils {
    /**
     * 将数组转换为map
     * @param arr
     * @param key
     * @returns {{}}
     */
    export function arrayToMap<T>(arr: T[], key: string): { [key: number]: T } {
        let m = {};
        for (let a of arr) {
            if (a) {
                m[a[key]] = a;
            }
        }
        return m;
    }

    /**
     * 初始化数字类型的数组
     * @param len 数组长度
     * @param start 初始值。默认为0
     * @param diff 数组前后两个元素的差值。默认为0
     * @returns {Array}
     */
    export function initArray(len: number, start: number = 0, diff: number = 0): number[] {
        let a = [];
        for (let i = 0; i < len; i++) {
            a[i] = start + diff * i;
        }
        return a;
    }

    /**
     * 使用Knuth算法打乱数组
     * @param a 待打乱的数组
     * @returns {T[]}
     */
    export function knuthShuffle<T>(a: T[]): T[] {
        let n = a.length;
        for (let i = 0; i < n; i++) {
            //均匀地在[0, i]上取索引
            let r = Math.random() * (i + 1) | 0;
            let swap = a[r];
            a[r] = a[i];
            a[i] = swap;
        }
        return a;
    }
}