namespace zero.utils {
    /**
     * 返回字符串的真实长度，（一个中文算2个字符单位）
     * @param str
     * @returns {number}
     */
    export function stringRealLength(str: string): number {
        if (!str) return 0;
        return str.replace(/[^\x00-\xff]/g, "01").length;
    }

    /**
     * 截取字符串的前几位（中文按两个字符算） 稍微有点误差
     * @param {string} str
     * @param {number} length 字符长度（中文一个字占2字符长度）
     */
    export function stringSlice(str: string, length: number): string {
        if (!str) return '';
        let chars = str.split('');
        //长度小于限定的长度，直接返回
        if (stringRealLength(str) <= length) return str;

        //超过限定的长度，截取
        let count = 0, i;
        for (i = 0; i < chars.length && count < length; i++) {
            if (chars[i].search(/[\x00-\xff]/) == -1) count += 2;
            else count++;
        }
        return str.substring(0, i) + "...";
    }
}