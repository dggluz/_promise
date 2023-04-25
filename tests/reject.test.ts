import { expectType } from 'tsd';
import { _Promise } from '../src/index';

const _pNumber: _Promise<number, never> = null as any;
expectType<_Promise<number, never>>(
  _pNumber
);

const _pRejectedString: _Promise<never, string> = null as any;
expectType<_Promise<never, string>>(
  _pRejectedString
);

const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

// Resolving with a plain value
expectType<_Promise<never, number>>(
  _Promise.reject(4)
);

// Resolving with a resolved Promise
expectType<_Promise<never, Promise<number>>>(
  _Promise.reject(Promise.resolve(4))
);

// Resolving with a rejected Promise
expectType<_Promise<never, Promise<never>>>(
  _Promise.reject(Promise.reject(4))
);

// Resolving with a resolved _Promise
expectType<_Promise<never, _Promise<number, never>>>(
  _Promise.reject(_pNumber)
);

// Resolving with a rejected _Promise
expectType<_Promise<never, _Promise<never, string>>>(
  _Promise.reject(_pRejectedString)
);

// Resolving with a resolved/rejected promise
expectType<_Promise<never, _Promise<number, string>>>(
  _Promise.reject(_pNumberString)
);

// Resolving without a parameter
expectType<_Promise<never, undefined>>(
  _Promise.reject()
);
