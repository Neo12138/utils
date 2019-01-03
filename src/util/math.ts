namespace utils.math {
    /**
     * 返回[s, e)区间的随机整数
     * @param s 
     * @param e
     * @returns {any}
     */
    export function randomInt(s:number, e:number):number {
        return Math.floor(Math.random() * (e - s)) + s;
    }

    /**
     * 返回[s, e)区间的随机浮点数
     * @param s
     * @param e
     * @returns {number}
     */
    export function randomDouble(s:number, e:number):number{
        return Math.random() * (e - s) + s;
    }
}