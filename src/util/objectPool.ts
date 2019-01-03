/**
 * Created by wangcheng on 2019/1/2 16:57.
 */
namespace zero.utils {
    let objectCount = 1;

    export function injectHashCode(obj: Object): void {
        if (!obj['hashCode']) {
            obj['hashCode'] = objectCount++;
        }
    }

    export interface ObjectPool<T> {
        create: () => T;
        recover: (e: T) => void;
    }

    export function objectPoolFactory<T>(createFn: () => T): ObjectPool<T> {
        let objectPool: T[] = [];
        return {
            create: () => {
                return objectPool.length == 0 ? createFn() : objectPool.shift();
            },
            recover: (e: T) => {
                objectPool.push(e);
            }
        }
    }
}
