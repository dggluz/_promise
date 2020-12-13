export interface _PromiseRejectedResult<E> {
    status: "rejected";
    reason: E;
}

export type _PromiseSettledResult<T, E> = PromiseFulfilledResult<T> | _PromiseRejectedResult<E>;
