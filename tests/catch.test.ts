import { expectType } from 'tsd';
import { unknownError, _Promise } from '../src/index';

const _pStringBoolean: _Promise<string, boolean> = null as any;
expectType<_Promise<string, boolean>>(
  _pStringBoolean
);

const _pNumber: _Promise<number, never> = null as any;
expectType<_Promise<number, never>>(
  _pNumber
);

const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

const _pRejectedNumber: _Promise<never, number> = null as any;
expectType<_Promise<never, number>>(
  _pRejectedNumber
);

// Without parameter
expectType<_Promise<string, boolean>>(
  _pStringBoolean.catch()
);

// With undefined
expectType<_Promise<string, boolean>>(
  _pStringBoolean.catch(undefined)
);

// With null
expectType<_Promise<string, boolean>>(
  _pStringBoolean.catch(null)
);

// with a callback returning a plain value
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );

    return 3;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );

    return Promise.resolve(3);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<string, unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );

    return Promise.reject(3);
  })
);

// with a callback returning an only resolved _Promise
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );
    
    return _pNumber;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<string | number, string | unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );
    
    return _pNumberString;
  })
);

// with a callback returning an only rejected PromiseLike
expectType<_Promise<string, number | unknownError>>(
  _pStringBoolean.catch(e => {
    expectType<boolean>(
      e
    );

    return _pRejectedNumber;
  })
);

/**
 * Tap
 */

const tap: <T> (fn: (x: T) => any) => (value: T) => T = null as any;

expectType<_Promise<string | number, unknownError>>(
  _pNumberString
    .catch(tap(parseInt))
);

expectType<_Promise<string | number, unknownError>>(
  _pNumberString
    .catch(
      tap(
        x => x.length
      )
    )
);

/**
 * TapCatch
 */

const tapCatch: <E> (fn: (err: E) => any) => (err: E) => _Promise<never, E> = null as any;

expectType<_Promise<number, string | unknownError>>(
  _pNumberString
    .catch(tapCatch(parseInt))
);

expectType<_Promise<number, string | unknownError>>(
  _pNumberString
    .catch(
      tapCatch(
        x => x.length
      )
    )
);
