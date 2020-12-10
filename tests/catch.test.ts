import { _Promise } from '../src/es5';

const _pString: _Promise<string> = null as any;
_pString; // $ExpectType _Promise<string>

// Without parameter
_pString.catch(); // $ExpectType _Promise<string>

// With undefined
_pString.catch(undefined); // $ExpectType _Promise<string>

// With null
_pString.catch(null); // $ExpectType _Promise<string>

// with a callback returning a plain value
_pString.catch(_ => 3); // $ExpectType _Promise<string | number>

// with a callback returning a resolved PromiseLike
_pString.catch(_ => Promise.resolve(3)); // $ExpectType _Promise<string | number>

// with a callback returning a rejected PromiseLike
_pString.catch(_ => Promise.reject(3)); // $ExpectType _Promise<string>
