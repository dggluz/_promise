import { _Promise } from '_Promise';

const _pNumber: _Promise<number, never> = null as any;
_pNumber; // $ExpectType _Promise<number, never>
const _pRejectedNumber: _Promise<never, number> = null as any;
_pRejectedNumber; // $ExpectType _Promise<never, number>

const _p1: _Promise<1, 'A'> = null as any;
_p1; // $ExpectType _Promise<1, "A">
const _p2: _Promise<2, 'B'> = null as any;
_p2; // $ExpectType _Promise<2, "B">
const _p3: _Promise<3, 'C'> = null as any;
_p3; // $ExpectType _Promise<3, "C">
const _p4: _Promise<4, 'D'> = null as any;
_p4; // $ExpectType _Promise<4, "D">
const _p5: _Promise<5, 'E'> = null as any;
_p5; // $ExpectType _Promise<5, "E">
const _p6: _Promise<6, 'F'> = null as any;
_p6; // $ExpectType _Promise<6, "F">
const _p7: _Promise<7, 'G'> = null as any;
_p7; // $ExpectType _Promise<7, "G">
const _p8: _Promise<8, 'H'> = null as any;
_p8; // $ExpectType _Promise<8, "H">
const _p9: _Promise<9, 'I'> = null as any;
_p9; // $ExpectType _Promise<9, "I">
const _p10: _Promise<10, 'J'> = null as any;
_p10; // $ExpectType _Promise<10, "J">

// Basic cases:

// For 0 Promises
_Promise.all([]); // $ExpectType _Promise<[], never>

// For 1 plain value
_Promise.all([3]); // $ExpectType _Promise<[number], never>

// For 1 resolved Promise
_Promise.all([Promise.resolve(3)]); // $ExpectType _Promise<[number], unknownError>

// For 1 rejected Promise
_Promise.all([Promise.reject(3)]); // $ExpectType _Promise<[never], unknownError>

// For 1 resolved _Promise
_Promise.all([_pNumber]); // $ExpectType _Promise<[number], never>

// For 1 rejected _Promise
_Promise.all([_pRejectedNumber]); // $ExpectType _Promise<[never], number>

// Augmenting array's size
_Promise.all([_p1]); // $ExpectType _Promise<[1], "A">
_Promise.all([_p1, _p2]); // $ExpectType _Promise<[1, 2], "A" | "B">
_Promise.all([_p1, _p2, _p3]); // $ExpectType _Promise<[1, 2, 3], "A" | "B" | "C">
_Promise.all([_p1, _p2, _p3, _p4]); // $ExpectType _Promise<[1, 2, 3, 4], "A" | "B" | "C" | "D">
_Promise.all([_p1, _p2, _p3, _p4, _p5]); // $ExpectType _Promise<[1, 2, 3, 4, 5], "A" | "B" | "C" | "D" | "E">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6]); // $ExpectType _Promise<[1, 2, 3, 4, 5, 6], "A" | "B" | "C" | "D" | "E" | "F">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7]); // $ExpectType _Promise<[1, 2, 3, 4, 5, 6, 7], "A" | "B" | "C" | "D" | "E" | "F" | "G">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8]); // $ExpectType _Promise<[1, 2, 3, 4, 5, 6, 7, 8], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9]); // $ExpectType _Promise<[1, 2, 3, 4, 5, 6, 7, 8, 9], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10]); // $ExpectType _Promise<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">

// Combining values, _Promises and Promises
_Promise.all([_pNumber, true, Promise.resolve('Boo!')]); // $ExpectType _Promise<[number, boolean, string], unknownError>
// If a Promise is NOT included, unknownError is NOT added
_Promise.all([_pNumber, true, 'Boo!']); // $ExpectType _Promise<[number, boolean, string], never>

// Most generic case
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, _pNumber]); // $ExpectType _Promise<number[], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, Promise.resolve(11)]); // $ExpectType _Promise<number[], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | unknownError>
_Promise.all([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _p10, 11]); // $ExpectType _Promise<number[], "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J">

// Iterable:
const iterator: Iterable<number> = null as any;
_Promise.all(iterator); // $ExpectType _Promise<number[], never>
// Complex case:
const iterator2: Iterable<number | _Promise<boolean, string> | Promise<string>> = null as any;
_Promise.all(iterator2); // $ExpectType _Promise<(string | number | boolean)[], string | unknownError>
