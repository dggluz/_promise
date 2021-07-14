import { _Promise } from '_Promise';
import { UnpackRejected } from '../src/unpack';

// Getting from _Promise<number, never>
const _pNumber = _Promise.resolve(4); // $ExpectType _Promise<number, never>
type From_Promise = UnpackRejected<typeof _pNumber>; // $ExpectType never

// Getting from _Promise<number, string>
const _pNumberString: _Promise<number, string> = null as any;
_pNumberString; // $ExpectType _Promise<number, string>
type From_PromiseWithRejected = UnpackRejected<typeof _pNumberString>; // $ExpectType string

// Getting from normal Promise<number>
const pNumber = Promise.resolve(3);
pNumber; // $ExpectType Promise<number>
type FromPromise = UnpackRejected<typeof pNumber>; // $ExpectType unknownError

// Getting from escalar
const number = parseInt('5', 10); // $ExpectType number
type FromEscalar = UnpackRejected<typeof number>; // $ExpectType never
