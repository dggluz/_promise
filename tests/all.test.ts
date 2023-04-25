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

const _p1: _Promise<1, 'A'> = null as any;
expectType<_Promise<1, "A">>(
  _p1
);

const _p2: _Promise<2, 'B'> = null as any;
expectType<_Promise<2, "B">>(
  _p2
);

const _p3: _Promise<3, 'C'> = null as any;
expectType<_Promise<3, "C">>(
  _p3
);

const _p4: _Promise<4, 'D'> = null as any;
expectType<_Promise<4, "D">>(
  _p4
);

const _p5: _Promise<5, 'E'> = null as any;
expectType<_Promise<5, "E">>(
  _p5
);

const _p6: _Promise<6, 'F'> = null as any;
expectType<_Promise<6, "F">>(
  _p6
);

const _p7: _Promise<7, 'G'> = null as any;
expectType<_Promise<7, "G">>(
  _p7
);

const _p8: _Promise<8, 'H'> = null as any;
expectType<_Promise<8, "H">>(
  _p8
);

const _p9: _Promise<9, 'I'> = null as any;
expectType<_Promise<9, "I">>(
  _p9
);

const _p10: _Promise<10, 'J'> = null as any;
expectType<_Promise<10, "J">>(
  _p10
);

// Basic cases:

// For 0 Promises
expectType<_Promise<[], never>>(
  _Promise.all([])
);

// For 1 plain value
expectType<_Promise<[number], never>>(
  _Promise.all([3])
);

// For 1 resolved Promise
expectType<_Promise<[number], unknownError>>(
  _Promise.all([Promise.resolve(3)])
);

// For 1 rejected Promise
expectType<_Promise<[never], unknownError>>(
  _Promise.all([Promise.reject(3)])
);

// For 1 resolved _Promise
expectType<_Promise<[number], never>>(
  _Promise.all([_pNumber])
);

// For 1 rejected _Promise
expectType<_Promise<[never], number>>(
  _Promise.all([_pRejectedNumber])
);

// Augmenting array's size
expectType<_Promise<[1], "A">>(
  _Promise.all([_p1])
);
expectType<_Promise<[1, 2], "A" | "B">>(
  _Promise.all([_p1, _p2])
);
expectType<_Promise<[1, 2, 3], "A" | "B" | "C">>(
  _Promise.all([_p1, _p2, _p3])
);
expectType<_Promise<[1, 2, 3, 4], "A" | "B" | "C" | "D">>(
  _Promise.all([_p1, _p2, _p3, _p4])
);
expectType<_Promise<[1, 2, 3, 4, 5], "A" | "B" | "C" | "D" | "E">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5])
);
expectType<_Promise<[1, 2, 3, 4, 5, 6], "A" | "B" | "C" | "D" | "E" | "F">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6])
);
expectType<_Promise<[1, 2, 3, 4, 5, 6, 7], "A" | "B" | "C" | "D" | "E" | "F" | "G">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7])
);
expectType<_Promise<[1, 2, 3, 4, 5, 6, 7, 8], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8])
);
expectType<_Promise<[1, 2, 3, 4, 5, 6, 7, 8, 9], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9])
);
expectType<_Promise<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10])
);

// Combining values, _Promises and Promises
expectType<_Promise<[number, true, string], unknownError>>(
  _Promise.all([_pNumber, true, Promise.resolve('Boo!')])
);
// If a Promise is NOT included, unknownError is NOT added
expectType<_Promise<[number, true, string], never>>(
  _Promise.all([_pNumber, true, 'Boo!'])
);

// Most generic case
expectType<_Promise<number[], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, _pNumber])
);
expectType<_Promise<number[], unknownError | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, Promise.resolve(11)])
);
expectType<_Promise<number[], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">>(
  _Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, 11])
);

// Iterable:
const iterable: Iterable<number> = null as any;
expectType<_Promise<number[], never>>(
  _Promise.all(iterable)
);
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
expectType<_Promise<(string | number | boolean)[], string | unknownError>>(
  _Promise.all(iterator2)
);
