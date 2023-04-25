import { expectType } from 'tsd';
import { unknownError, _Promise } from '../src/index';

const _pNumber: _Promise<number, never> = null as any;
expectType<_Promise<number, never>>(
  _pNumber
);

const _pRejectedNumber: _Promise<never, number> = null as any;
expectType<_Promise<never, number>>(
  _pRejectedNumber
);

const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);


// without resolve nor reject
expectType<_Promise<unknown, never>>(
  new _Promise(() => {})
);

// with a resolve calling a plain value
expectType<_Promise<number, unknownError>>(
  new _Promise<number>(resolve => {
    resolve(3);
  })
);

// with a resolve calling a resolved Promise
expectType<_Promise<number, unknownError>>(
  new _Promise<number>(resolve => {
    resolve(Promise.resolve(3));
  })
);

// with a resolve calling a rejected Promise
expectType<_Promise<never, unknownError>>(
  new _Promise<never>(resolve => {
    resolve(Promise.reject(3));
  })
);

// with a resolve calling a resolved _Promise
expectType<_Promise<number, unknownError>>(
  new _Promise<number>(resolve => {
    resolve(_pNumber);
  })
);

// with a resolve calling a rejected _Promise
expectType<_Promise<never, unknownError>>(
  new _Promise<never>(resolve => {
    resolve(_pRejectedNumber);
  })
);

// with a resolve calling a resolved/rejected _Promise
expectType<_Promise<number, unknownError>>(
  new _Promise<number>(resolve => {
    resolve(_pNumberString);
  })
);

// with a reject calling without parameters
expectType<_Promise<number, unknownError>>(
  new _Promise<number>((resolve, reject) => {
    resolve(3);
    reject();
  })
);

// with a reject calling a plain value
expectType<_Promise<number, string | unknownError>>(
  new _Promise<number, string>((resolve, reject) => {
    resolve(3);
    reject('Boo!');
  })
);

// with a reject calling a resolved Promise
expectType<_Promise<number, unknownError | Promise<string>>>(
  new _Promise<number, Promise<string>>((resolve, reject) => {
    resolve(3);
    reject(Promise.resolve('Boo!'));
  })
);

// with a reject calling a rejected Promise
expectType<_Promise<number, unknownError | Promise<never>>>(
  new _Promise<number, Promise<never>>((resolve, reject) => {
    resolve(3);
    reject(Promise.reject('Boo!'));
  })
);

// with a reject calling a resolved _Promise
expectType<_Promise<number, _Promise<number, never> | unknownError>>(
  new _Promise<number, _Promise<number, never>>((resolve, reject) => {
    resolve(3);
    reject(_pNumber);
  })
);

// with a reject calling a rejected _Promise
expectType<_Promise<number, _Promise<never, number> | unknownError>>(
  new _Promise<number, _Promise<never, number>>((resolve, reject) => {
    resolve(3);
    reject(_pRejectedNumber);
  })
);

// with a reject calling a resolved/rejected _Promise
expectType<_Promise<number, unknownError | _Promise<number, string>>>(
  new _Promise<number, _Promise<number, string>>((resolve, reject) => {
    resolve(3);
    reject(_pNumberString);
  })
);
