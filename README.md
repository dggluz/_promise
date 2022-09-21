# `_Promise` (`error-typed-promise`)

On TypeScript `Promise`s are typed on their resolution value. For instance, a `Promise` which will eventually _resolve_ to a `number` will have a type of `Promise<number>`. But `Promise`s could be either _resolved_ or _rejected_. This library brings new typings for `Promise`s in order to also type the _rejection_ value. So, for instance, a `Promise` that can either resolve to a number or reject with a `SyntaxError` will have the type `_Promise<number, SyntaxError>`.

> The `_Promise` will work exactly the same as the native `Promise` (in fact, it just compiles to `Promise`). The API is exactly the same as the original's (except for the _rejected_ values, which will work exactly as it works on runtime with regular `Promise`s).

## Instalation

```sh
npm i error-typed-promise
```

I know: it's a horribly long name.

## Usage

Use `_Promise` just like you would use `Promise`. The first type paremeter is the _resolved value_, the second one is the _rejection reason_: `_Promise<resolve, rejected>`.

### Example

```typescript
import { _Promise } from 'error-typed-promise';
import { NotFoundStudent, CanNotGetAverageFromEmptyListError, StudentHasNoGradesError } from './errors';

interface Student {
    id: string;
    grades: {
        assignature: string;
        note: number;
    }[];
}

declare const students: Student[];

// getStudentQualification has type:
// (studentId: string) => _Promise<number, NotFoundStudent | StudentHasNoGradesError | unknownError>
const getStudentQualification = (studentId: string) =>
    getStudent(studentId)
        .then(student => student.grades)
        .then(grades => grades.map(grade => grade.note))
        .then(notes => getAverage(notes))
        .catch(err => {
            // at this point, err is NotFoundStudent | CanNotGetAverageFromEmptyListError | unknownError
            if (err instanceof CanNotGetAverageFromEmptyListError) {
                // We "transform" or "replace" an error by other
                return _Promise.reject(new StudentHasNoGradesError())
            }
            return _Promise.reject(err); // err is NotFoundStudent | unknownError
        })
        // The returned _Promise could be rejected with NotFoundStudent | StudentHasNoGradesError | unknownError
;

// getStudent has type:
// (studentId: string) => _Promise<>
const getStudent = (studentId: string) => {
    const student = users.find(aUser => aUser.id === studentId);

    if (!student) {
        return _Promise.reject(new NotFoundStudent(studentId));
    }

    return _Promise.resolve(student);
};

// getAverage has type:
// (xs: number[]) => _Promise<number, CanNotGetAverageFromEmptyListError>
const getAverage = (xs: number[]) => {
    if (xs.length === 0) {
        return _Promise.reject(new CanNotGetAverageFromEmptyListError());
    }

    return _Promise.resolve(sum(xs) / xs.length);
};

const sum = (xs: number[]) =>
    xs.reduce((total, x) => total + x, 0)
;
```

Take into account that TypeScript has structural typing, so your Error types shouldn't be structurally equal in order to avoid them being mixed or absorbed by others. A good idea is to [_brand_ them](https://basarat.gitbook.io/typescript/main-1/nominaltyping).

### A note on `unknownError`

When passing callbacks to `_Promise`'s methods (like `.then`, `.catch`, or even the constructor: `new _Promise`) errors can happen inside those callbacks (thrown and unhandled exceptions). `Promise`'s nature is to catch all of them and just reject the `Promise` with that error. For instance, given the following code:

```typescript
import { _Promise } from 'error-typed-promise';

const aHundred = _Promise
    .resolve(10)
    .then(x => x * 10)
;

// aHundred has type: _Promise<number, unknownError>
```

...we can not warranty that `aHundred` is not rejected (as the `.then`'s callback could throw an exception). As thrown exceptions are not typed in TypeScript (they are `any`) we can not just add them to the _rejection value_ of `_Promise`s. If we added them as `any` or `unknown`, we would end up having just `any` or `unknown` on the rejection side, as they are absorb any other types on unions (`any | T` is always `any`; `unknown | T` is always `unknown`). That is why we add an `unknownError` type instead of an `unknown` or `any` type on the rejection. The `unknownError` is a )_branded_ empty object. In consequence, you can not assume anything about it (as it's completely _unknown_ before runtime) and it won't be absorbed by other types (as it's _branded_).

Methods that does not take callbacks won't add the `unknownError`. For example:

```typescript
import { _Promise } from 'error-typed-promise';

const collage = _Promise.all([
    _Promise.resolve(4),
    _Promise.resolve('Hello!'),
    _Promise.reject(new CustomError()),
    _Promise.reject(new AnotherCustomError());
])

// collage has type: _Promise<[number, string, never, never], CustomError | AnotherCustomError>
```

### Converting from regular `Promise`s

```typescript
import { _Promise } from 'error-typed-promise';

declare const regularPromise: Promise<number>;

const errTypedPromise = _Promise.resolve(regularPromise);

// errTypedPromise has type: _Promise<number, unknownError>
```

Notice that the resolution type is preserved and the `unknownError` type is added on rejection (as we can not assume the `regularPromise` is not rejected).

### Converting to regular `Promise`s

Automatic conversion to regular `Promise`s **is not supported right now**:

```typescript
Promise.resolve(_Promise.resolve(3));
// The above expression has type Promise<_Promise<number, never>>
// instead of Promise<number>
```

Perhaps, we will include a workaround for this in the future.

In the meantime, you can explicitly set the `Promise` type:

```typescript
Promise.resolve<number>(_Promise.resolve(3));
// The above expression has type Promise<number>
```

You can also use the `UnpackResolved` utility for inferring the type from the actual `_Promise`:

```typescript
// Assume you have a _Promise<number, string>:
const _pNumberString: _Promise<number, string> = null as any;

Promise.resolve<UnpackResolved<typeof _pNumberString>>(_pNumberString);
// The above expression has type Promise<number>
```

### Using UnpackResolved and UnpackRejected

There are a couple of type functions available for getting the _resolved_/_rejection_ types from a `_Promise`:

```typescript
// ## UnpackResolved
// Unpacking the resolved value from a regular Promise
const pNumber = Promise.resolve(3);
type Number1 = UnpackResolved<typeof pNumber>; // number

// Unpacking the resolved value from a _Promise
const _pNumber = _Promise.resolve(3);
type Number2 = UnpackResolved<typeof _pNumber>; // number

// Unpacking the resolved value from a escalar
const numb = parseInt('4', 10);
type Number3 = UnpackResolved<typeof num>; // number

// ## UnpackRejected
// Unpacking the rejected value from a regular Promise
const pRejected = Promise.reject('Boo!');
type NotKwnownError = UnpackRejected<typeof pRejected>; // unknownError

// Unpacking the rejected value from a _Promise
const _pRejectedString = _Promise.reject('Boo!');
type String1 = UnpackRejected<typeof _pRejectedString>; // string

// Unpacking the rejected value from a escalar
const numb = parseInt('4', 10);
type Impossible = UnpackRejected<typeof num>; // never
```

### Drawbacks

- Using `async/await` is possible but will always transform your `_Promise`s into regular `Promise`s (and hence, will lost the rejection types). Therefore, avoiding `async/await` is recommended when using this library.
- This library adds all the methods of `Promise` and `PromiseConstructor` (to `_Promise` and `_PromiseConstructor`, respectively). It will even add the methods for which your version of JavaScript may have not support (depending on the version, obviously).

## Contributing

Issues reporting, and pull requests are welcomed. To develop, just clone the repository and add your changes. This library has tests made with `dtslint`. Please check that new and previous tests pass before sending the pull request.

## License

Licensed under MIT license. See more on [LICENSE](./LICENSE).
