### Setup

NOTE: Due to RAM requirements, if you want to run this on a laptop, your need a modified celo-blockchain version with the `maxValidator` const set to a low value (e.g. 5).  For actual testnet use, we will need to run this on a VM with enough RAM.

1. Install rust
2. Clone the following repos as siblings in the same directory:
  - https://github.com/kobigurk-clabs/plumo-prover and check out the branch lucasege/cip22
  - https://github.com/kobigurk-clabs/ethers-rs and check out the branch kobigurk-clabs/validator_keys
  - https://github.com/celo-org/celo-bls-snark-rs and check out master
4. In plumo-prover, `cargo build --release`
5. Make sure your network (mycelo, testnet, baklava) has been running for at least one full epoch after Donut activation and is accessible at http://localhost:8545 (if not, override the url using the flag)

### Running the test

1. Determine the arguments to use:
   --epoch-duration epoch size
   --start-block an epoch block after donut activation
   --end-block the next epoch bock after --start-block
   --maximum-validators 150 (unless you changed it)
   --maximum-non-signers maximum validators minus quorum size, where quorum size is ceil(# validators * 2 / 3)
   --node-url full node running RPC and including the istanbul API, besides the usual ones (if not http://localhost:8545)
2. Run `./target/release/plumo` with the arguments listed above.  If it run successfully without an error, we're good.

