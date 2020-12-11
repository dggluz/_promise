import { _Promise } from '../src/es5';

const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>
const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>

// Without parameter
_pStringBoolean.catch(); // $ExpectType _Promise<string, boolean>

// With undefined
_pStringBoolean.catch(undefined); // $ExpectType _Promise<string, boolean>

// With null
_pStringBoolean.catch(null); // $ExpectType _Promise<string, boolean>

// with a callback returning a plain value
_pStringBoolean.catch(_ => 3); // $ExpectType _Promise<string | number, never>

// with a callback returning a resolved PromiseLike
_pStringBoolean.catch(_ => Promise.resolve(3)); // $ExpectType _Promise<string | number, never>

// with a callback returning a rejected PromiseLike
_pStringBoolean.catch(_ => Promise.reject(3)); // $ExpectType _Promise<string, never>

// with a callback returning an only resolved _Promise
_pStringBoolean.catch(_ => _pNumber); // $ExpectType _Promise<string | number, never>

// with a callback returning a resolved/rejected _Promise
_pStringBoolean.catch(_ => _pNumberString); // $ExpectType _Promise<string | number, string>

// with a callback returning an only rejected PromiseLike
_pStringBoolean.catch(_ => _pRejectedNumber); // $ExpectType _Promise<string, number>
