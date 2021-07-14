import { _Promise } from '_Promise';
import { unknownError } from '../src/unknown-error';
import { UnpackRejected } from '../src/unpack';


const _pStringBoolean: _Promise<string, boolean> = null as any;
_pStringBoolean; // $ExpectType _Promise<string, boolean>
const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pBoolean: _Promise<boolean, never> = null as any;
_pBoolean; // $ExpectType _Promise<boolean, never>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>
const _pBooleanString: _Promise<boolean, string> = null as any;
_pBooleanString; // $ExpectType _Promise<boolean, string>
const _pBooleanNumber: _Promise<boolean, number> = null as any;
_pBooleanNumber; // $ExpectType _Promise<boolean, number>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>
const _pRejectedBoolean: _Promise<never, boolean> = null as any;
_pRejectedBoolean; // $ExpectType _Promise<never, boolean>

// Without parameter
_pStringBoolean.then(); // $ExpectType _Promise<string, boolean>

// With undefined
_pStringBoolean.then(undefined); // $ExpectType _Promise<string, boolean>

// With null
_pStringBoolean.then(null); // $ExpectType _Promise<string, boolean>

// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return 3;
});

// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
});

// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<never, boolean | unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
});

// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return _pNumber;
});

// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, string | boolean | unknownError>
    value; // $ExpectType string
    return _pNumberString;
});

// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<never, number | boolean | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
});

// With a callback returning a union of rejected _Promise and a value
_pStringBoolean.then(value => { // $ExpectType _Promise<3, number | boolean | unknownError>
    value; // $ExpectType string
    return value.length > 7 ?
        _pRejectedNumber :
        3;
});

/**
 * Passing a second argument
 */

/**
 * First argument undefined
 */
// With undefined
_pStringBoolean.then(undefined, undefined); // $ExpectType _Promise<string, boolean>
// With null
_pStringBoolean.then(undefined, null); // $ExpectType _Promise<string, boolean>
// with a callback returning a plain value
_pStringBoolean.then(undefined, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectType boolean
    return 3;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(undefined, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectError boolean
    return Promise.resolve(3);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(undefined, error => { // $ExpectType _Promise<string, unknownError>
    error; // $ExpectType boolean
    return Promise.reject(3);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(undefined, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectType boolean
    return _pNumber;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(undefined, error => { // $ExpectType<string | number, string | unknownError>
    error; // $ExpectType boolean
    return _pNumberString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(undefined, error => { // $ExpectType _Promise<string, number | unknownError>
    error; // $ExpectType boolean
    return _pRejectedNumber;
});

/**
 * First argument null
 */
// With undefined
_pStringBoolean.then(null, undefined); // $ExpectType _Promise<string, boolean>
// With null
_pStringBoolean.then(null, null); // $ExpectType _Promise<string, boolean>
// with a callback returning a plain value
_pStringBoolean.then(null, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectType boolean
    return 3;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(null, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectError boolean
    return Promise.resolve(3);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(null, error => { // $ExpectType _Promise<string, unknownError>
    error; // $ExpectType boolean
    return Promise.reject(3);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(null, error => { // $ExpectType _Promise<string | number, unknownError>
    error; // $ExpectType boolean
    return _pNumber;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(null, error => { // $ExpectType<string | number, string | unknownError>
    error; // $ExpectType boolean
    return _pNumberString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(null, error => { // $ExpectType _Promise<string, number | unknownError>
    error; // $ExpectType boolean
    return _pRejectedNumber;
});

/**
 * First argument is a callback returning plain value
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return 3;
}, undefined);
// With null
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return 3;
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number, unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return _pBooleanString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, number | unknownError>
    value; // $ExpectType string
    return 3;
}, error => {
    error; // $ExpectType boolean
    return _pRejectedNumber;
});

/**
 * First argument is a callback returning resolved PromiseLike
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, undefined);
// With null
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number, unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return _pBooleanString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, number | unknownError>
    value; // $ExpectType string
    return Promise.resolve(3);
}, error => {
    error; // $ExpectType boolean
    return _pRejectedNumber;
});

/**
 * First argument is a callback returning rejected PromiseLike
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<never, boolean | unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, undefined);
// With null
_pStringBoolean.then(value => { // $ExpectType _Promise<never, boolean | unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<never, unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, string | unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return _pBooleanString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<never, boolean | unknownError>
    value; // $ExpectType string
    return Promise.reject(3);
}, error => {
    error; // $ExpectType boolean
    return _pRejectedBoolean;
});

/**
 * First argument is a callback returning resolved _Promise
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return _pNumber;
}, undefined);
// With null
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return _pNumber;
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number, unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return _pBooleanString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, boolean | unknownError>
    value; // $ExpectType string
    return _pNumber;
}, error => {
    error; // $ExpectType boolean
    return _pRejectedBoolean;
});

/**
 * First argument is a callback returning rejected _Promise
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<never, number | boolean | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, undefined);
// With null
_pStringBoolean.then(value => { // $ExpectType _Promise<never, number | boolean | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, number | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, number | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<never, number | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, number | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<boolean, string | number | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return _pBooleanString;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<never, number | boolean | unknownError>
    value; // $ExpectType string
    return _pRejectedNumber;
}, error => {
    error; // $ExpectType boolean
    return _pRejectedBoolean;
});

/**
 * First argument is a callback returning resolved/rejected _Promise
 */
// With undefined
_pStringBoolean.then(value => { // $ExpectType _Promise<number, string | boolean | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, undefined);
// // With null
_pStringBoolean.then(value => { // $ExpectType _Promise<number, string | boolean | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, null);
// with a callback returning a plain value
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return true;
});
// with a callback returning a resolved PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return Promise.resolve(true);
});
// with a callback returning a rejected PromiseLike
_pStringBoolean.then(value => { // $ExpectType _Promise<number, string | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return Promise.reject(true);
});
// with a callback returning a resolved _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return _pBoolean;
});
// with a callback returning a resolved/rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number | boolean, string | number | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return _pBooleanNumber;
});
// with a callback returning a rejected _Promise
_pStringBoolean.then(value => { // $ExpectType _Promise<number, string | boolean | unknownError>
    value; // $ExpectType string
    return _pNumberString;
}, error => {
    error; // $ExpectType boolean
    return _pRejectedBoolean;
});


// With a callback returning a union of rejected _Promise and a value
const foo = _pStringBoolean.then(value => { // $ExpectType _Promise<3, number | boolean | unknownError>
    value; // $ExpectType string
    return value.length > 7 ?
        _pRejectedNumber :
        3;
}, error => {
    error; // $ExpectType boolean
    return _pRejectedBoolean;
});


/**
 * More complex case for type inference
 */
const applyIf = <T, E = never> (condition: boolean, fn: (x: T) => _Promise<T, E>) =>
    (x: T) => {
        const ret = _Promise
            .resolve(x)
            .then(x => x)
            .then(x => x)
            .then(x => x, e => _Promise.reject(e))
            .then(x => x)
            .then(x => {
                x; // $ExpectType T
                return fn(x);
            });
        ret; // $ExpectType _Promise<T, unknownError | E>
        return ret;
    }
;

/**
 * Tap
 */

const tap: <T> (fn: (x: T) => any) => (value: T) => T = null as any;

// $ExpectType _Promise<string, boolean | unknownError>
const tap1 = _pStringBoolean
    .then(tap(parseInt))
;

// $ExpectType _Promise<string, boolean | unknownError>
const tap2 = _pStringBoolean
    .then(
        // $ExpectType (value: string) => string
        tap(
            x => x.length // $ExpectType (x: string) => number
        )
    )
;
