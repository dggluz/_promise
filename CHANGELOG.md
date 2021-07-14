# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2021-07-14
### Fixed

- Fixed release build.

## [1.1.0] - 2021-07-14
### Fixed

- Fixed inference error related to `tap` and `tapCatch`.
- Fixed `UnpackResolved` (necessary after the previous fix, as `_Promise` is no longer a subtype of `PromiseLike`).

### Changed

- Updated `dtslint` version.

### Added

- Exposed `UnpackResolved` and `UnpackRejected` as part of the library.

## [1.0.2] - 2021-07-02
### Fixed

- Fixed `package.json` error.

## [1.0.1] - 2021-05-24
### Fixed

- Instance's `.then` and `.catch` typings were rewritten with a fix.
- A couple of test cases were added
- `unknownError` is being exported.
- DocBlocks were improved.


## [1.0.0] - 2020-12-15
### Added

- All `Promise`'s API methods were added. First working version.

