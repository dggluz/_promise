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
_pStringBoolean.catch(); // $ExpectType _Promise<string, boolean>

// With undefined
_pStringBoolean.catch(undefined); // $ExpectType _Promise<string, boolean>

// With null
_pStringBoolean.catch(null); // $ExpectType _Promise<string, boolean>

// with a callback returning a plain value
_pStringBoolean.catch(e => { // $ExpectType _Promise<string | number, unknownError>
    e; // $ExpectType boolean
    return 3;
});

// with a callback returning a resolved PromiseLike
_pStringBoolean.catch(e => { // $ExpectType _Promise<string | number, unknownError>
    e; // $ExpectType boolean
    return Promise.resolve(3);
});

// with a callback returning a rejected PromiseLike
_pStringBoolean.catch(e => { // $ExpectType _Promise<string, unknownError>
    e; // $ExpectType boolean
    return Promise.reject(3);
});

// with a callback returning an only resolved _Promise
_pStringBoolean.catch(e => { // $ExpectType _Promise<string | number, unknownError>
    e; // $ExpectType boolean
    return _pNumber;
});

// with a callback returning a resolved/rejected _Promise
_pStringBoolean.catch(e => { // $ExpectType _Promise<string | number, string | unknownError>
    e; // $ExpectType boolean
    return _pNumberString;
});

// with a callback returning an only rejected PromiseLike
_pStringBoolean.catch(e => { // $ExpectType _Promise<string, number | unknownError>
    e; // $ExpectType boolean
    return _pRejectedNumber;
});

/**
 * Tap
 */

const tap: <T> (fn: (x: T) => any) => (value: T) => T = null as any;

// $ExpectType _Promise<string | number, unknownError>
const tap1 = _pNumberString
    .catch(tap(parseInt))
;

// $ExpectType _Promise<string | number, unknownError>
const tap2 = _pNumberString
    .catch(
        // $ExpectType (value: string) => string
        tap(
            x => x.length // $ExpectType (x: string) => number
        )
    )
;

/**
 * TapCatch
 */

const tapCatch: <E> (fn: (err: E) => any) => (err: E) => _Promise<never, E> = null as any;

// $ExpectType _Promise<number, string | unknownError>
const tapCatch1 = _pNumberString
    .catch(tapCatch(parseInt))
;

// $ExpectType _Promise<number, string | unknownError>
const tapCatch2 = _pNumberString
    .catch(
        // $ExpectType (err: string) => _Promise<never, string>
        tapCatch(
            x => x.length // $ExpectType (x: string) => number
        )
    )
;
