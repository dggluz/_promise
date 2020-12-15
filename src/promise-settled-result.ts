interface _PromiseFulfilledResult<T> {
    status: "fulfilled";
    value: T;
}

export interface _PromiseRejectedResult<E> {
    status: "rejected";
    reason: E;
}

export type _PromiseSettledResult<T, E> = _PromiseFulfilledResult<T> | _PromiseRejectedResult<E>;
