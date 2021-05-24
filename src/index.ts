import { unknownError } from './unknown-error';
export * from './unknown-error';
import { UnpackResolved, UnpackRejected } from './unpack';
import { _AggregateError } from './aggregate-error';
import { _PromiseSettledResult } from './promise-settled-result';

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
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled?: undefined | null, onrejected?: undefined | null): _Promise<T, E>

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<TResult, EResult = never>(
        onfulfilled?: (value: T) => _Promise<TResult, EResult> | PromiseLike<TResult> | TResult,
        onrejected?: undefined | null
    ): _Promise<TResult, E | EResult | unknownError>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
     then<TResult, EResult = never>(
        onfulfilled: undefined | null,
        onrejected: (reason: E) => _Promise<TResult, EResult> | PromiseLike<TResult> | TResult
    ): _Promise<T | TResult, EResult | unknownError>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of which ever callback is executed.
     */
    then<TResult1, TResult2 = never, EResult1 = never, EResult2 = never>(
        onfulfilled: (value: T) => _Promise<TResult1, EResult1> | PromiseLike<TResult1> | TResult1,
        onrejected: (reason: E) => _Promise<TResult2, EResult2> | PromiseLike<TResult2> | TResult2
    ): _Promise<TResult1 | TResult2, EResult1 | EResult2 | unknownError>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of the callback.
     */
    catch(
        onrejected?: undefined | null
    ): _Promise<T, E>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A _Promise for the completion of the callback.
     */

    catch<TResult, EResult = never>(
        onrejected: (reason: E) => _Promise<TResult, EResult> | PromiseLike<TResult> | TResult
    ): _Promise<T | TResult, EResult | unknownError>;

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A _Promise for the completion of the callback.
     */
    finally(onfinally?: undefined | null): _Promise<T, E>

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A _Promise for the completion of the callback.
     */
    finally<EResult = never>(onfinally: () => _Promise<any, EResult>): _Promise<T, E | EResult | unknownError>

    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A _Promise for the completion of the callback.
     */
    finally(onfinally: () => any): _Promise<T, E | unknownError>
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
    
    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>,
            UnpackResolved<T9>,
            UnpackResolved<T10>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8> |
        UnpackRejected<T9> |
        UnpackRejected<T10>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>,
            UnpackResolved<T9>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8> |
        UnpackRejected<T9>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1, T2, T3, T4, T5, T6, T7, T8]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>,
            UnpackResolved<T8>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7> |
        UnpackRejected<T8>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1, T2, T3, T4, T5, T6, T7]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>,
            UnpackResolved<T7>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6> |
        UnpackRejected<T7>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5, T6>(values: readonly [T1, T2, T3, T4, T5, T6]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>,
            UnpackResolved<T6>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5> |
        UnpackRejected<T6>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4, T5>(values: readonly [T1, T2, T3, T4, T5]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>,
            UnpackResolved<T5>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4> |
        UnpackRejected<T5>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3, T4>(values: readonly [T1, T2, T3, T4]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>,
            UnpackResolved<T4>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3> |
        UnpackRejected<T4>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2, T3>(values: readonly [T1, T2, T3]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>,
            UnpackResolved<T3>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2> |
        UnpackRejected<T3>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T1, T2>(values: readonly [T1, T2]): _Promise<[
            UnpackResolved<T1>,
            UnpackResolved<T2>
        ],
        UnpackRejected<T1> |
        UnpackRejected<T2>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T>(values: [T]): _Promise<[
            UnpackResolved<T>
        ],
        UnpackRejected<T>
    >;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all(values: []): _Promise<[], never>;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    all<T>(values: readonly T[]): _Promise<UnpackResolved<T>[], UnpackRejected<T>>;

    /**
     * Creates a _Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An iterable of Promises.
     * @returns A new _Promise.
     */
    all<T>(values: Iterable<T>): _Promise<UnpackResolved<T>[], UnpackRejected<T>>;

    /**
     * Creates a _Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    race<T>(values: readonly T[]): _Promise<UnpackResolved<T>, UnpackRejected<T>>;

    /**
     * Creates a _Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An iterable of Promises.
     * @returns A new _Promise.
     */
    race<T>(values: Iterable<T>): _Promise<UnpackResolved<T>, UnpackRejected<T>>;

    /**
     * Creates a _Promise that is resolved with an array of results when all
     * of the provided Promises resolve or reject.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    allSettled<T extends readonly unknown[] | readonly [unknown]>(values: T):
        _Promise<{ -readonly [P in keyof T]: _PromiseSettledResult<UnpackResolved<T[P]>, UnpackRejected<T[P]>> }, never>;

    /**
     * Creates a _Promise that is resolved with an array of results when all
     * of the provided Promises resolve or reject.
     * @param values An array of Promises.
     * @returns A new _Promise.
     */
    allSettled<T>(values: Iterable<T>): _Promise<_PromiseSettledResult<UnpackResolved<T>, UnpackRejected<T>>[], never>;

    /**
     * The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.
     * @param values An array or iterable of Promises.
     * @returns A new _Promise.
     */
    any<T>(values: T[] | Iterable<T>): _Promise<UnpackResolved<T>, _AggregateError<UnpackRejected<T>>>

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected _Promise.
     */
    reject<T = never>(reason: T): _Promise<never, T>;
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected _Promise.
     */
    reject(): _Promise<never, undefined>;

    /**
     * Creates a new resolved promise for the provided value.
     * @param value A promise.
     * @returns A _Promise whose internal state matches the provided promise.
     */
    resolve<P extends PromiseLike<any>>(value: P): _Promise<
        UnpackResolved<P>,
        UnpackRejected<P>
    >;
    resolve<T>(value: T): _Promise<
        T,
        never
    >;

    /**
     * Creates a new resolved promise .
     * @returns A resolved _Promise.
     */
    resolve(): _Promise<void, never>;
}

export const _Promise: _PromiseConstructor = Promise as any;
