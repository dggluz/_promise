import { expectType } from 'tsd';
import { _Promise, UnpackRejected, unknownError } from '../src/index';

// Getting from _Promise<number, never>
const _pNumber = _Promise.resolve(4);
expectType<_Promise<number, never>>(
  _pNumber
);

expectType<never>(
  null as UnpackRejected<typeof _pNumber>
);

// Getting from _Promise<number, string>
const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

expectType<string>(
  null as any as UnpackRejected<typeof _pNumberString>
);

// Getting from normal Promise<number>
const pNumber = Promise.resolve(3);
expectType<Promise<number>>(
  pNumber
);

expectType<unknownError>(
  null as any as UnpackRejected<typeof pNumber>
);

// Getting from escalar
const number = parseInt('5', 10);
expectType<number>(
  number
);

expectType<never>(
  null as UnpackRejected<typeof number>
);
