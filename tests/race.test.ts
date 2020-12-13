import { _Promise } from '_Promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>
const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>

// Without values
_Promise.race([]); // $ExpectType _Promise<never, never>

// With plain values
_Promise.race([1, 2, 3]); // $ExpectType _Promise<number, never>

// With Promises
_Promise.race([Promise.resolve(1), Promise.resolve(2)]); // $ExpectType _Promise<number, unknownError>

// With _Promises
_Promise.race([_pNumber, _pRejectedNumber, _pStringBoolean]); // $ExpectType _Promise<string | number, number | boolean>

// Mixed
_Promise.race([1, Promise.resolve(2), _pNumber, _pRejectedNumber]); // $ExpectType _Promise<number, number | unknownError>

// With iterable
const iterable: Iterable<number> = null as any;
_Promise.race(iterable); // $ExpectType _Promise<number, never>
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
_Promise.race(iterator2); // $ExpectType _Promise<string | number | boolean, string | unknownError>
