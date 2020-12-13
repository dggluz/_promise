import { _Promise } from '_Promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>
const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>

// Without values
_Promise.allSettled([]); // $ExpectType _Promise<[], never>

// With plain values
_Promise.allSettled([1, 2, 3]); // $ExpectType _Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<number, never>, _PromiseSettledResult<number, never>], never>

// With Promises
_Promise.allSettled([Promise.resolve(1), Promise.resolve(2)]); // $ExpectType _Promise<[_PromiseSettledResult<number, unknownError>, _PromiseSettledResult<number, unknownError>], never>

// With _Promises
_Promise.allSettled([_pNumber, _pRejectedNumber, _pStringBoolean]); // $ExpectType _Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<never, number>, _PromiseSettledResult<string, boolean>], never>

// Mixed
_Promise.allSettled([1, Promise.resolve(2), _pNumber, _pRejectedNumber]); // $ExpectType _Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<number, unknownError>, _PromiseSettledResult<number, never>, _PromiseSettledResult<never, number>], never>

// With iterable
const iterable: Iterable<number> = null as any;
_Promise.allSettled(iterable); // $ExpectType _Promise<_PromiseSettledResult<number, never>[], never>
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
_Promise.allSettled(iterator2); // $ExpectType _Promise<_PromiseSettledResult<string | number | boolean, string | unknownError>[], never>
