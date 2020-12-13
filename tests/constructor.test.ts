import { _Promise } from '_Promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>


// without resolve nor reject
new _Promise(() => {}); // $ExpectType _Promise<unknown, never>

// with a resolve calling a plain value
new _Promise<number>(resolve => { // $ExpectType _Promise<number, unknownError>
    resolve(3);
});

// with a resolve calling a resolved Promise
new _Promise<number>(resolve => { // $ExpectType _Promise<number, unknownError>
    resolve(Promise.resolve(3));
});

// with a resolve calling a rejected Promise
new _Promise<never>(resolve => { // $ExpectType _Promise<never, unknownError>
    resolve(Promise.reject(3));
});

// with a resolve calling a resolved _Promise
new _Promise<number>(resolve => { // $ExpectType _Promise<number, unknownError>
    resolve(_pNumber);
});

// with a resolve calling a rejected _Promise
new _Promise<never>(resolve => { // $ExpectType _Promise<never, unknownError>
    resolve(_pRejectedNumber);
});

// with a resolve calling a resolved/rejected _Promise
new _Promise<number>(resolve => { // $ExpectType _Promise<number, unknownError>
    resolve(_pNumberString);
});

// with a reject calling without parameters
new _Promise<number>((resolve, reject) => { // $ExpectType _Promise<number, unknownError>
    resolve(3);
    reject();
});

// with a reject calling a plain value
new _Promise<number, string>((resolve, reject) => { // $ExpectType _Promise<number, string | unknownError>
    resolve(3);
    reject('Boo!');
});

// with a reject calling a resolved Promise
new _Promise<number, Promise<string>>((resolve, reject) => { // $ExpectType _Promise<number, unknownError | Promise<string>>
    resolve(3);
    reject(Promise.resolve('Boo!'));
});

// with a reject calling a rejected Promise
new _Promise<number, Promise<never>>((resolve, reject) => { // $ExpectType _Promise<number, unknownError | Promise<never>>
    resolve(3);
    reject(Promise.reject('Boo!'));
});

// with a reject calling a resolved _Promise
new _Promise<number, _Promise<number, never>>((resolve, reject) => { // $ExpectType _Promise<number, _Promise<number, never> | unknownError>
    resolve(3);
    reject(_pNumber);
});

// with a reject calling a rejected _Promise
new _Promise<number, _Promise<never, number>>((resolve, reject) => { // $ExpectType _Promise<number, _Promise<never, number> | unknownError>
    resolve(3);
    reject(_pRejectedNumber);
});

// with a reject calling a resolved/rejected _Promise
new _Promise<number, _Promise<number, string>>((resolve, reject) => { // $ExpectType _Promise<number, unknownError | _Promise<number, string>>
    resolve(3);
    reject(_pNumberString);
});
