/**
 * Created by admin on 2018/12/21.
 */

namespace zero {
    import getTimestamp = zero.utils.getTimestamp;
    export let enableLog = true;

    export function log(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.log(`[LOG] [${getTimestamp()}] ${message}`, ...args);
    }

    export function warn(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.warn(`[WARN] [${getTimestamp()}] ${message}`, ...args);
    }

    export function error(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.error(`[ERROR] [${getTimestamp()}] ${message}`, ...args);
    }

    export function info(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.info(`[INFO] [${getTimestamp()}] ${message}`, ...args);
    }

    export function debug(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.debug(`[DEBUG] [${getTimestamp()}] ${message}`, ...args);
    }

    export function trace(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.trace(`[TRACE] [${getTimestamp()}] ${message}`, ...args);
    }
}