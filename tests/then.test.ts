import { _Promise } from '../src/es5';

const _pString: _Promise<string> = null as any;
_pString; // $ExpectType _Promise<string>
const _pNumber: _Promise<number> = null as any;
_pNumber; // $ExpectType _Promise<number>
const _pBoolean: _Promise<boolean> = null as any;
_pBoolean; // $ExpectType _Promise<boolean>
const _pRejectedNumber: _Promise<never> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never>
const _pRejectedBoolean: _Promise<never> = null as any;
_pRejectedBoolean; // $ExpectType _Promise<never>

// Without parameter
_pString.then(); // $ExpectType _Promise<string>

// With undefined
_pString.then(undefined); // $ExpectType _Promise<string>

// With null
_pString.then(null); // $ExpectType _Promise<string>

// with a callback returning a plain value
_pString.then(_ => 3); // $ExpectType _Promise<number>

// with a callback returning a resolved PromiseLike
_pString.then(_ => Promise.resolve(3)); // $ExpectType _Promise<number>

// with a callback returning a rejected PromiseLike
_pString.then(_ => Promise.reject(3)); // $ExpectType _Promise<never>

// with a callback returning a resolved _Promise
_pString.then(_ => _pNumber); // $ExpectType _Promise<number>

// with a callback returning a rejected _Promise
_pString.then(_ => _pRejectedNumber); // $ExpectType _Promise<never>

/**
 * Passing a second argument
 */

/**
 * First argument undefined
 */
// With undefined
_pString.then(undefined, undefined); // $ExpectType _Promise<string>
// With null
_pString.then(undefined, null); // $ExpectType _Promise<string>
// with a callback returning a plain value
_pString.then(undefined, _ => 3); // $ExpectType _Promise<string | number>
// with a callback returning a resolved PromiseLike
_pString.then(undefined, _ => Promise.resolve(3)); // $ExpectType _Promise<string | number>
// with a callback returning a rejected PromiseLike
_pString.then(undefined, _ => Promise.reject(3)); // $ExpectType _Promise<string>
// with a callback returning a resolved _Promise
_pString.then(undefined, _ => _pNumber); // $ExpectType _Promise<string | number>
// with a callback returning a rejected _Promise
_pString.then(undefined, _ => _pRejectedNumber); // $ExpectType _Promise<string>

/**
 * First argument null
 */
// With undefined
_pString.then(null, undefined); // $ExpectType _Promise<string>
// With null
_pString.then(null, null); // $ExpectType _Promise<string>
// with a callback returning a plain value
_pString.then(null, _ => 3); // $ExpectType _Promise<string | number>
// with a callback returning a resolved PromiseLike
_pString.then(null, _ => Promise.resolve(3)); // $ExpectType _Promise<string | number>
// with a callback returning a rejected PromiseLike
_pString.then(null, _ => Promise.reject(3)); // $ExpectType _Promise<string>
// with a callback returning a resolved _Promise
_pString.then(null, _ => _pNumber); // $ExpectType _Promise<string | number>
// with a callback returning a rejected PromiseLike
_pString.then(null, _ => _pRejectedNumber); // $ExpectType _Promise<string>

/**
 * First argument is a callback returning plain value
 */
// With undefined
_pString.then(_ => 3, undefined); // $ExpectType _Promise<number>
// With null
_pString.then(_ => 3, null); // $ExpectType _Promise<number>
// with a callback returning a plain value
_pString.then(_ => 3, _ => true); // $ExpectType _Promise<number | boolean>
// with a callback returning a resolved PromiseLike
_pString.then(_ => 3, _ => Promise.resolve(true)); // $ExpectType _Promise<number | boolean>
// with a callback returning a rejected PromiseLike
_pString.then(_ => 3, _ => Promise.reject(true)); // $ExpectType _Promise<number>
// with a callback returning a resolved _Promise
_pString.then(_ => 3, _ => _pBoolean); // $ExpectType _Promise<number | boolean>
// with a callback returning a rejected _Promise
_pString.then(_ => 3, _ => _pRejectedBoolean); // $ExpectType _Promise<number>

/**
 * First argument is a callback returning resolved PromiseLike
 */
// With undefined
_pString.then(_ => Promise.resolve(3), undefined); // $ExpectType _Promise<number>
// With null
_pString.then(_ => Promise.resolve(3), null); // $ExpectType _Promise<number>
// with a callback returning a plain value
_pString.then(_ => Promise.resolve(3), _ => true); // $ExpectType _Promise<number | boolean>
// with a callback returning a resolved PromiseLike
_pString.then(_ => Promise.resolve(3), _ => Promise.resolve(true)); // $ExpectType _Promise<number | boolean>
// with a callback returning a rejected PromiseLike
_pString.then(_ => Promise.resolve(3), _ => Promise.reject(true)); // $ExpectType _Promise<number>
// with a callback returning a resolved _Promise
_pString.then(_ => Promise.resolve(3), _ => _pBoolean); // $ExpectType _Promise<number | boolean>
// with a callback returning a rejected _Promise
_pString.then(_ => Promise.resolve(3), _ => _pRejectedBoolean); // $ExpectType _Promise<number>

/**
 * First argument is a callback returning rejected PromiseLike
 */
// With undefined
_pString.then(_ => Promise.reject(3), undefined); // $ExpectType _Promise<never>
// With null
_pString.then(_ => Promise.reject(3), null); // $ExpectType _Promise<never>
// with a callback returning a plain value
_pString.then(_ => Promise.reject(3), _ => true); // $ExpectType _Promise<boolean>
// with a callback returning a resolved PromiseLike
_pString.then(_ => Promise.reject(3), _ => Promise.resolve(true)); // $ExpectType _Promise<boolean>
// with a callback returning a rejected PromiseLike
_pString.then(_ => Promise.reject(3), _ => Promise.reject(true)); // $ExpectType _Promise<never>
// with a callback returning a resolved _Promise
_pString.then(_ => Promise.reject(3), _ => _pBoolean); // $ExpectType _Promise<boolean>
// with a callback returning a rejected _Promise
_pString.then(_ => Promise.reject(3), _ => _pRejectedBoolean); // $ExpectType _Promise<never>