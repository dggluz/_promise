export interface _AggregateError <E> extends Error {
    errors: E[]
}
