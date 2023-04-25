import { expectType } from 'tsd';
import { unknownError, _Promise } from '../src/index';


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
expectType<_Promise<number, never>>(
  _Promise.resolve(4)
);

// Resolving with a resolved Promise
expectType<_Promise<number, unknownError>>(
  _Promise.resolve(Promise.resolve(4))
);

// Resolving with a rejected Promise
expectType<_Promise<never, unknownError>>(
  _Promise.resolve(Promise.reject(4))
);

// Resolving with a resolved _Promise
expectType<_Promise<number, never>>(
  _Promise.resolve(_pNumber)
);

// Resolving with a rejected _Promise
expectType<_Promise<never, string>>(
  _Promise.resolve(_pRejectedString)
); 

// Resolving with a resolved/rejected promise
expectType<_Promise<number, string>>(
  _Promise.resolve(_pNumberString)
); 

// Resolving without a parameter
expectType<_Promise<void, never>>(
  _Promise.resolve()
); 
