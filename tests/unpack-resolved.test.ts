import { _Promise } from '_Promise';
import { UnpackResolved } from '../src/unpack';

// Getting from _Promise<number, never>
const _pNumber = _Promise.resolve(4); // $ExpectType _Promise<number, never>
type From_Promise = UnpackResolved<typeof _pNumber>; // $ExpectType number

// Getting from _Promise<number, string>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>
type From_PromiseWithRejected = UnpackResolved<typeof _pNumberString>; // $ExpectType number

// Getting from normal Promise<number>
const pNumber = Promise.resolve(3);
pNumber; // $ExpectType Promise<number>
type FromPromise = UnpackResolved<typeof pNumber>; // $ExpectType number

// Getting from escalar
const number = parseInt('5', 10); // $ExpectType number
type FromEscalar = UnpackResolved<typeof number>; // $ExpectType number
