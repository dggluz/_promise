import { expectType } from 'tsd';
import { _AggregateError } from '../src/aggregate-error';
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
expectType<_Promise<never, _AggregateError<never>>>(
  _Promise.any([])
);

// With plain values
expectType<_Promise<number, _AggregateError<never>>>(
  _Promise.any([1, 2, 3])
);

// With Promises
expectType<_Promise<number, _AggregateError<unknownError>>>(
  _Promise.any([Promise.resolve(1), Promise.resolve(2)])
);

// With _Promises
expectType<_Promise<string | number, _AggregateError<number | boolean>>>(
  _Promise.any([_pNumber, _pRejectedNumber, _pStringBoolean])
);

// Mixed
expectType<_Promise<number, _AggregateError<number | unknownError>>>(
  _Promise.any([1, Promise.resolve(2), _pNumber, _pRejectedNumber])
);

// With iterable
const iterable: Iterable<number> = null as any;
expectType<_Promise<number, _AggregateError<never>>>(
  _Promise.any(iterable)
);
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
expectType<_Promise<string | number | boolean, _AggregateError<string | unknownError>>>(
  _Promise.any(iterator2)
);
