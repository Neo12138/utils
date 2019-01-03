/**
 * Created by admin on 2018/12/21.
 */
namespace zero {
    export let enableLog = true;
    export function log(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.log(`[LOG] [${utils.getTimestamp()}] ${message}`, ...args);
    }

    export function warn(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.warn(`[WARN] [${utils.getTimestamp()}] ${message}`, ...args);
    }

    export function error(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.error(`[ERROR] [${utils.getTimestamp()}] ${message}`, ...args);
    }

    export function info(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.info(`[INFO] [${utils.getTimestamp()}] ${message}`, ...args);
    }

    export function debug(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.debug(`[DEBUG] [${utils.getTimestamp()}] ${message}`, ...args);
    }

    export function trace(message?: string, ...args: any[]): void {
        if (zero.enableLog) console.trace(`[TRACE] [${utils.getTimestamp()}] ${message}`, ...args);
    }


}