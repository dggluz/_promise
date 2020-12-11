import { _Promise } from '_Promise';


const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedString: _Promise<never, string> = null as any;
_pRejectedString; // $ExpectType _Promise<never, string>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>

// Resolving with a plain value
_Promise.resolve(4); // $ExpectType _Promise<number, never>

// Resolving with a resolved Promise
_Promise.resolve(Promise.resolve(4)); // $ExpectType _Promise<number, unknownError>

// Resolving with a rejected Promise
_Promise.resolve(Promise.reject(4)); // $ExpectType _Promise<never, unknownError>

// Resolving with a resolved _Promise
_Promise.resolve(_pNumber); // $ExpectType _Promise<number, never>

// Resolving with a rejected _Promise
_Promise.resolve(_pRejectedString); // $ExpectType _Promise<never, string>

// Resolving with a resolved/rejected promise
_Promise.resolve(_pNumberString); // $ExpectType _Promise<number, string>

// Resolving without a parameter
_Promise.resolve(); // $ExpectType _Promise<void, never>
