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

const _pStringBoolean: _Promise<string, boolean> = null as any;
expectType<_Promise<string, boolean>>(
  _pStringBoolean
);

// Without values
expectType<_Promise<never, never>>(
  _Promise.race([])
);

// With plain values
expectType<_Promise<number, never>>(
  _Promise.race([1, 2, 3])
);

// With Promises
expectType<_Promise<number, unknownError>>(
  _Promise.race([Promise.resolve(1), Promise.resolve(2)])
);

// With _Promises
expectType<_Promise<string | number, number | boolean>>(
  _Promise.race([_pNumber, _pRejectedNumber, _pStringBoolean])
);

// Mixed
expectType<_Promise<number, number | unknownError>>(
  _Promise.race([1, Promise.resolve(2), _pNumber, _pRejectedNumber])
);

// With iterable
const iterable: Iterable<number> = null as any;
expectType<_Promise<number, never>>(
  _Promise.race(iterable)
);

// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
expectType<_Promise<string | number | boolean, string | unknownError>>(
  _Promise.race(iterator2)
);
