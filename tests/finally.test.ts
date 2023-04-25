import { expectType } from 'tsd';
import { unknownError, _Promise } from '../src/index';

const _pStringBoolean: _Promise<string, boolean> = null as any;
expectType<_Promise<string, boolean>>(
  _pStringBoolean
);

const _pNumber: _Promise<number, never> = null as any;
expectType<_Promise<number, never>>(
  _pNumber
);

const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

const _pRejectedNumber: _Promise<never, number> = null as any;
expectType<_Promise<never, number>>(
  _pRejectedNumber
);

// Without parameter
expectType<_Promise<string, boolean>>(
  _pStringBoolean.finally()
);

// With undefined
expectType<_Promise<string, boolean>>(
  _pStringBoolean.finally(undefined)
);

// With null
expectType<_Promise<string, boolean>>(
  _pStringBoolean.finally(null)
);

// with a callback returning a plain value
expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return 3;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return Promise.resolve(3);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return Promise.reject(3);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return _pNumber;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<string, string | boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return _pNumberString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<string, number | boolean | unknownError>>(
  _pStringBoolean.finally(() => {
    return _pRejectedNumber;
  })
);
