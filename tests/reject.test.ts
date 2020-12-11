import { _Promise as Promise_ } from '_Promise';
import { _Promise } from '../src/_promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedString: _Promise<never, string> = null as any;
_pRejectedString; // $ExpectType _Promise<never, string>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>

// Resolving with a plain value
Promise_.reject(4); // $ExpectType _Promise<never, number>

// Resolving with a resolved Promise
Promise_.reject(Promise.resolve(4)); // $ExpectType _Promise<never, Promise<number>>

// // Resolving with a rejected Promise
Promise_.reject(Promise.reject(4)); // $ExpectType _Promise<never, Promise<never>>

// // Resolving with a resolved _Promise
Promise_.reject(_pNumber); // $ExpectType _Promise<never, _Promise<number, never>>

// // Resolving with a rejected _Promise
Promise_.reject(_pRejectedString); // $ExpectType _Promise<never, _Promise<never, string>>

// // Resolving with a resolved/rejected promise
Promise_.reject(_pNumberString); // $ExpectType _Promise<never, _Promise<number, string>>

// // Resolving without a parameter
Promise_.reject(); // $ExpectType _Promise<never, undefined>
