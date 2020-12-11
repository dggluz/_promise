import { _Promise } from './_promise';

export type UnpackResolved <P> =
    P extends _Promise<infer T, any> ? T :
    P extends PromiseLike<infer T> ? T :
    P
;

export type UnpackRejected <P> =
    P extends Promise<any> ? never :
    P extends _Promise<any, infer E> ? E :
    never
;
