import { _Promise } from '_Promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>
const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>

// Without values
_Promise.any([]); // $ExpectType _Promise<never, _AggregateError<never>>

// With plain values
_Promise.any([1, 2, 3]); // $ExpectType _Promise<number, _AggregateError<never>>

// With Promises
_Promise.any([Promise.resolve(1), Promise.resolve(2)]); // $ExpectType _Promise<number, _AggregateError<unknownError>>

// With _Promises
_Promise.any([_pNumber, _pRejectedNumber, _pStringBoolean]); // $ExpectType _Promise<string | number, _AggregateError<number | boolean>>

// Mixed
_Promise.any([1, Promise.resolve(2), _pNumber, _pRejectedNumber]); // $ExpectType _Promise<number, _AggregateError<number | unknownError>>

// With iterable
const iterable: Iterable<number> = null as any;
_Promise.any(iterable); // $ExpectType _Promise<number, _AggregateError<never>>
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
_Promise.any(iterator2); // $ExpectType _Promise<string | number | boolean, _AggregateError<string | unknownError>>
