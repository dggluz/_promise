import { _Promise } from './index';
import { unknownError } from './unknown-error';

export type UnpackResolved <P> =
    P extends _Promise<infer T, any> ? T :
    P extends PromiseLike<infer T> ? T :
    P
;

export type UnpackRejected <P> =
    P extends _Promise<any, infer E> ? E :
    P extends Promise<any> ? unknownError :
    never
;
