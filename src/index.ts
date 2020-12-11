import { unknownError } from './unknown-error';
import { UnpackResolved, UnpackRejected } from './unpack';

declare const __brand: unique symbol;

/**
 * Represents the completion of an asynchronous operation
 */
export interface _Promise<T, E> {
    // Brand is needed for _Promise not extending Promise
    [__brand]: any;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled?: undefined | null, onrejected?: undefined | null): _Promise<T, E>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: (value: T) => R,
        onrejected?: undefined | null
    ): _Promise<UnpackResolved<R>, E | UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R>(
        onfulfilled: undefined | null,
        onrejected: (reason: E) => R 
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<R1, R2>(
        onfulfilled: (value: T) => R1,
        onrejected: (reason: E) => R2
    ): _Promise<UnpackResolved<R1> | UnpackResolved<R2>, UnpackRejected<R1> | UnpackRejected<R2> | unknownError>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(
        onrejected?: undefined | null
    ): _Promise<T, E>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of the callback.
     */
    catch<R>(
        onrejected: (reason: E) => R
    ): _Promise<T | UnpackResolved<R>, UnpackRejected<R> | unknownError>;

    // TODO
    // /**
    //  * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
    //  * resolved value cannot be modified from the callback.
    //  * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
    //  * @returns A Promise for the completion of the callback.
    //  */
    // finally(onfinally?: (() => void) | undefined | null): Promise<T>
}

export interface _PromiseConstructor {
    /**
     * A reference to the prototype.
     */
    readonly prototype: Promise<any>;

    /**
     * Creates a new _Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    new (executor: () => void): _Promise<unknown, never>;
    new <T, E = never>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: E) => void) => void): _Promise<T, E | unknownError>;
    
    // TODO
    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all of the provided Promises
    //  * resolve, or rejected when any Promise is rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;

    // // see: lib.es2015.iterable.d.ts
    // // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>;

    // TODO
    // /**
    //  * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
    //  * or rejected.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // race<T>(values: readonly T[]): Promise<T extends PromiseLike<infer U> ? U : T>;

    // // see: lib.es2015.iterable.d.ts
    // // race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;

    // TODO
    // /**
    //  * Creates a Promise that is resolved with an array of results when all
    //  * of the provided Promises resolve or reject.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // allSettled<T extends readonly unknown[] | readonly [unknown]>(values: T):
    //     Promise<{ -readonly [P in keyof T]: PromiseSettledResult<T[P] extends PromiseLike<infer U> ? U : T[P]> }>;

    // /**
    //  * Creates a Promise that is resolved with an array of results when all
    //  * of the provided Promises resolve or reject.
    //  * @param values An array of Promises.
    //  * @returns A new Promise.
    //  */
    // allSettled<T>(values: Iterable<T>): Promise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>;

    // TODO
    // /**
    //  * The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.
    //  * @param values An array or iterable of Promises.
    //  * @returns A new Promise.
    //  */
    // any<T>(values: (T | PromiseLike<T>)[] | Iterable<T | PromiseLike<T>>): Promise<T>

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject<T = never>(reason: T): _Promise<never, T>;
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject(): _Promise<never, undefined>;

    /**
     * Creates a new resolved promise for the provided value.
     * @param value A promise.
     * @returns A promise whose internal state matches the provided promise.
     */
    resolve<P>(value: P): _Promise<
        UnpackResolved<P>,
        UnpackRejected<P>
    >;

    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */
    resolve(): _Promise<void, never>;
}

export const _Promise: _PromiseConstructor = Promise as any;
