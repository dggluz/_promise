import { expectType } from 'tsd';
import { _Promise, UnpackResolved } from '../src';

// Getting from _Promise<number, never>
const _pNumber = _Promise.resolve(4);
expectType<_Promise<number, never>>(
  _pNumber
);

expectType<number>(
  null as any as UnpackResolved<typeof _pNumber>
);

// Getting from _Promise<number, string>
const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

expectType<number>(
  null as any as UnpackResolved<typeof _pNumberString>
);

// Getting from normal Promise<number>
const pNumber = Promise.resolve(3);
expectType<Promise<number>>(pNumber);

expectType<number>(
  null as any as UnpackResolved<typeof pNumber>
);

// Getting from escalar
const number = parseInt('5', 10);
expectType<number>(number);

expectType<number>(
  null as any as UnpackResolved<typeof number>
);
