# B12.sol

This library provides simply solidity wrappers for the hash function, BLS12-381
and BLS12-377 precompiles found in CIP-20, 30, and 31. These EIPs are not
active on mainnet at time of writing, and require specialized client software
to execute.

## Building

- `$ npm i`
- `$ npm compile`

## Tests

Connect a node an RPC with the Donut hard fork active. Ensure that your node
has an **unlocked** **funded** account. The tests will deploy contracts and then
run the test vectors.

- `$ npm run test`

## Status

These libraries are in a very early state and should be considered
**unreliable**.

## Design notes

This work builds largely on prior work
[here](https://github.com/ralexstokes/deposit-verifier/blob/master/deposit_verifier.sol).
We take advantage of Solidity's memory layout for fixed-size arrays to
set up the input ranges for the precompile calls. We prep the inputs for the
precompile by copying struct attributes to specific elemets of the array.

To avoid unnecessary memory growth, we explicitly de-allocate memory. However,
we do not currently 0 it. This leaves dirty memory in the input slots, which may
interfere with code that assumes struct members or arrays elements in memory
are 0-initialized.
