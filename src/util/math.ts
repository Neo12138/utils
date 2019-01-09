namespace zero.utils.math {
    /**
     * 返回[from, to)区间的随机整数
     * @param from
     * @param to
     * @returns {number}
     */
    export function randomInt(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from)) + from;
    }

    /**
     * 返回[from, to)区间的随机浮点数
     * @param from
     * @param to
     * @returns {number}
     */
    export function randomDouble(from: number, to: number): number {
        return Math.random() * (to - from) + from;
    }
}