import { expectType } from 'tsd';
import { unknownError, _Promise } from '../src/index';
import { _PromiseSettledResult } from '../src/promise-settled-result';

const _pNumber: _Promise<number, never> = null as any;
expectType<_Promise<number, never>>(
  _pNumber
);

const _pRejectedNumber: _Promise<never, number> = null as any;
expectType<_Promise<never, number>>(
  _pRejectedNumber
);

const _pStringBoolean: _Promise<string, boolean> = null as any;
expectType<_Promise<string, boolean>>(
  _pStringBoolean
);

// Without values
expectType<_Promise<[], never>>(
  _Promise.allSettled([])
);

// With plain values
expectType<_Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<number, never>, _PromiseSettledResult<number, never>], never>>(
  _Promise.allSettled([1, 2, 3])
);

// With Promises
expectType<_Promise<[_PromiseSettledResult<number, unknownError>, _PromiseSettledResult<number, unknownError>], never>>(
  _Promise.allSettled([Promise.resolve(1), Promise.resolve(2)])
);

// With _Promises
expectType<_Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<never, number>, _PromiseSettledResult<string, boolean>], never>>(
  _Promise.allSettled([_pNumber, _pRejectedNumber, _pStringBoolean])
);

// Mixed
expectType<_Promise<[_PromiseSettledResult<number, never>, _PromiseSettledResult<number, unknownError>, _PromiseSettledResult<number, never>, _PromiseSettledResult<never, number>], never>>(
  _Promise.allSettled([1, Promise.resolve(2), _pNumber, _pRejectedNumber])
);

// With iterable
const iterable: Iterable<number> = null as any;
expectType<_Promise<_PromiseSettledResult<number, never>[], never>>(
  _Promise.allSettled(iterable)
);
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
expectType<_Promise<_PromiseSettledResult<string | number | boolean, string | unknownError>[], never>>(
  _Promise.allSettled(iterator2)
);
