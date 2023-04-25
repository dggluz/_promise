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

const _pBoolean: _Promise<boolean, never> = null as any;
expectType<_Promise<boolean, never>>(
  _pBoolean
);

const _pNumberString: _Promise<number, string> = null as any;
expectType<_Promise<number, string>>(
  _pNumberString
);

const _pBooleanString: _Promise<boolean, string> = null as any;
expectType<_Promise<boolean, string>>(
  _pBooleanString
);

const _pBooleanNumber: _Promise<boolean, number> = null as any;
expectType<_Promise<boolean, number>>(
  _pBooleanNumber
);

const _pRejectedNumber: _Promise<never, number> = null as any;
expectType<_Promise<never, number>>(
  _pRejectedNumber
);

const _pRejectedBoolean: _Promise<never, boolean> = null as any;
expectType<_Promise<never, boolean>>(
  _pRejectedBoolean
);

// Without parameter
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then()
);

// With undefined
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(undefined)
);

// With null
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(null)
);

// with a callback returning a plain value
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<never, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<number, string | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<never, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  })
);

// With a callback returning a union of rejected _Promise and a value
expectType<_Promise<3, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return value.length > 7 ?
      _pRejectedNumber :
      3;
  })
);

/**
 * Passing a second argument
 */

/**
 * First argument undefined
 */

// With undefined
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(undefined, undefined)
);

// With null
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(undefined, null)
);

// with a callback returning a plain value
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.then(undefined, error => {
    expectType<boolean>(
      error
    );

    return 3;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.then(undefined, error => { 
    expectType<boolean>(
      error
    );

    return Promise.resolve(3);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<string, unknownError>>(
  _pStringBoolean.then(undefined, error => {
     expectType<boolean>(
      error
    );

    return Promise.reject(3);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.then(undefined, error => {
    expectType<boolean>(
      error
    );

    return _pNumber;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<string | number, string | unknownError>>(
  _pStringBoolean.then(undefined, error => {
    expectType<boolean>(
      error
    );

    return _pNumberString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<string, number | unknownError>>(
  _pStringBoolean.then(undefined, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedNumber;
  })
);

/**
 * First argument null
 */

// With undefined
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(null, undefined)
);

// With null
expectType<_Promise<string, boolean>>(
  _pStringBoolean.then(null, null)
);

// with a callback returning a plain value
expectType<_Promise<string | number, unknownError>>(
  _pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return 3;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<string | number, unknownError>>(
_pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(3);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<string, unknownError>>(
_pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(3);
  })
);
// with a callback returning a resolved _Promise
expectType<_Promise<string | number, unknownError>>(
_pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return _pNumber;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<string | number, string | unknownError>>(
_pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return _pNumberString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<string, number | unknownError>>(
_pStringBoolean.then(null, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedNumber;
  })
);

/**
 * First argument is a callback returning plain value
 */

// With undefined
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
      expectType<string>(
        value
      );

      return 3;
    },
    undefined
  )
);

// With null
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(
    value => {
      expectType<string>(value);

      return 3;
    },
    null
  )
);

// with a callback returning a plain value
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  },
  error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
     expectType<string>(
      value
    );

    return 3;
  },
  error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<number, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<number | boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<number, number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return 3;
  }, error => {
    expectType<boolean>(error);

    return _pRejectedNumber;
  })
);

/**
 * First argument is a callback returning resolved PromiseLike
 */

// With undefined
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  },
  undefined)
);

// With null
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(value);
    return Promise.resolve(3);
  }, null)
);

// with a callback returning a plain value
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<number, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<number | boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<number, number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.resolve(3);
  }, error => {
    expectType<boolean>(error);

    return _pRejectedNumber;
  })
);

/**
 * First argument is a callback returning rejected PromiseLike
 */

// With undefined
expectType<_Promise<never, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  },
  undefined)
);

// With null
expectType<_Promise<never, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, null)
);

// with a callback returning a plain value
expectType<_Promise<boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<never, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<never, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return Promise.reject(3);
  }, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedBoolean;
  })
);

/**
 * First argument is a callback returning resolved _Promise
 */

// With undefined
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, undefined)
);

// With null
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, null)
);

// with a callback returning a plain value
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<number, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<number | boolean, unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<number | boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<number, boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedBoolean;
  })
);

/**
 * First argument is a callback returning rejected _Promise
 */

// With undefined
expectType<_Promise<never, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, undefined)
);

// With null
expectType<_Promise<never, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, null)
);

// with a callback returning a plain value
expectType<_Promise<boolean, number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<boolean, number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<never, number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<boolean, number | unknownError>>(
_pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<boolean, string | number | unknownError>>(
_pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanString;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<never, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pRejectedNumber;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedBoolean;
  })
);

/**
 * First argument is a callback returning resolved/rejected _Promise
 */

// With undefined
expectType<_Promise<number, string | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, undefined)
);

// With null
expectType<_Promise<number, string | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, null)
);

// with a callback returning a plain value
expectType<_Promise<number | boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return true;
  })
);

// with a callback returning a resolved PromiseLike
expectType<_Promise<number | boolean, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.resolve(true);
  })
);

// with a callback returning a rejected PromiseLike
expectType<_Promise<number, string | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return Promise.reject(true);
  })
);

// with a callback returning a resolved _Promise
expectType<_Promise<number | boolean, string | unknownError>>(
_pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBoolean;
  })
);

// with a callback returning a resolved/rejected _Promise
expectType<_Promise<number | boolean, string | number | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pBooleanNumber;
  })
);

// with a callback returning a rejected _Promise
expectType<_Promise<number, string | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return _pNumberString;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedBoolean;
  })
);


// With a callback returning a union of rejected _Promise and a value
expectType<_Promise<3, number | boolean | unknownError>>(
  _pStringBoolean.then(value => {
    expectType<string>(
      value
    );

    return value.length > 7 ?
      _pRejectedNumber :
      3;
  }, error => {
    expectType<boolean>(
      error
    );

    return _pRejectedBoolean;
  })
);


/**
 * More complex case for type inference
 */
const applyIf = <T, E = never> (condition: boolean, fn: (x: T) => _Promise<T, E>) =>
    (x: T) => {
        const ret = _Promise
            .resolve(x)
            .then(x => x)
            .then(x => x)
            .then(x => x, e => _Promise.reject(e))
            .then(x => x)
            .then(x => {
                expectType<T>(
                  x
                );

                return fn(x);
            });
        expectType<_Promise<T, unknownError | E>>(
          ret
        );

        return ret;
    }
;

/**
 * Tap
 */

const tap: <T> (fn: (x: T) => any) => (value: T) => T = null as any;

expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean
    .then(tap(parseInt))
);

expectType<_Promise<string, boolean | unknownError>>(
  _pStringBoolean
    .then(
      tap(
        x => x.length
      )
    )
);
