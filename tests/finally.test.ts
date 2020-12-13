import { _Promise } from '_Promise';

const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>
const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>

// Without parameter
_pStringBoolean.finally(); // $ExpectType _Promise<string, boolean>

// With undefined
_pStringBoolean.finally(undefined); // $ExpectType _Promise<string, boolean>

// With null
_pStringBoolean.finally(null); // $ExpectType _Promise<string, boolean>

// with a callback returning a plain value
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, boolean | unknownError>
    return 3;
});

// with a callback returning a resolved PromiseLike
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, boolean | unknownError>
    return Promise.resolve(3);
});

// with a callback returning a rejected PromiseLike
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, boolean | unknownError>
    return Promise.reject(3);
});

// with a callback returning a resolved _Promise
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, boolean | unknownError>
    return _pNumber;
});

// with a callback returning a resolved/rejected _Promise
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, string | boolean | unknownError>
    return _pNumberString;
});

// with a callback returning a rejected _Promise
_pStringBoolean.finally(() => { // $ExpectType _Promise<string, number | boolean | unknownError>
    return _pRejectedNumber;
});
