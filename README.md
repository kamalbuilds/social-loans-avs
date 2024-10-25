# SUCL - Social-based under-collaterized Loans

Brevis is a smart ZK coprocessor that empowers smart contracts to read from the full historical on-chain data, such as states, transactions, and events, from Ethereum and other chains, decode them with developer-specified logic, and run customizable computations in a completely trustless way. 

## Problem This Solves

Traditional lending systems require over-collateralization, often making loans inaccessible for individuals with limited capital. Furthermore, decentralized finance (DeFi) protocols usually lack sufficient context to assess creditworthiness beyond just wallet balances or assets locked on-chain. This leaves a significant portion of users excluded from financial services and limits the scope for flexible lending solutions.

## Solution
SUCL introduces social-based under-collateralized loans by leveraging the Brevis ZK coprocessor, which allows us to read historical on-chain data and events, such as transaction histories, account ages, and network behavior. With zero-knowledge proofs (ZKPs), SUCL can verify trustless proofs of creditworthiness based on past behavior without compromising user privacy.

By doing so, SUCL unlocks a new model of lending that minimizes risks for lenders and enhances accessibility for borrowers without the need for significant collateral.

## How It Works
Proving Creditworthiness:
Borrowers submit proofs of their account age or transaction history using Brevis-powered ZK proofs. These proofs are processed and validated trustlessly on-chain.

Loan Request and Verification:
The borrower’s verified proofs are submitted to the SUCL smart contract, which determines eligibility for under-collateralized loans. Social metrics or account activity becomes a proxy for collateral.

Loan Disbursal:
Once the proof is verified, the smart contract facilitates the loan, automating the process without the need for traditional financial intermediaries.

Monitoring and Repayment:
The system monitors repayment behavior and adjusts the borrower’s future lending eligibility based on performance.

## Features

* Social-Based Credit Assessment: Uses on-chain social behavior and account metrics as a form of credit scoring.

* Under-Collateralized Lending: Borrowers can access loans without having to lock excessive collateral.

* Zero-Knowledge Privacy: Ensures user privacy with ZKPs while enabling transparent verification.

* Cross-Chain Compatibility: Works across multiple blockchains, leveraging Brevis for seamless data access.

* Automated Loan Processes: Smart contracts manage loans from request to repayment.

* Lender Security: On-chain proofs ensure lenders only extend loans to verified borrowers, minimizing risks.


## Environment Requirements

- Go >= 1.20
- Node.js LTS

## [Prover](./prover)

The prover service is a standalone process that is run on a server, preferably as a systemd managed process so that it can be auto restarted if any crash happens. The prover service is designed to be used in conjunction with [brevis-network/brevis-sdk-typescript](https://github.com/brevis-network/brevis-sdk-typescript). 

### Start Prover (for testing)

```bash
cd prover
make start
```

### Start Prover with Systemd (in production on linux server)

You may want to have a process daemon to manage the prover services in production. The [Makefile](prover/Makefileefile) in the project root contains some convenience scripts. 

To build, init systemd, and start both prover processes, run the following command. Note it requires sudo privilege because we want to use systemd commands

```bash
cd prover
make deploy
```

# [App](./app)

The Node.js project in ./app is a simple program that does the following things:

1. call the Go prover with some transaction data to generate an account age proof
2. call Brevis backend service and submit the account age proof
3. wait until the final proof is submitted on-chain and our contract is called

## How to Run

```bash
cd app
npm run start [TransactionHash]
```
Example for Normal Flow
```bash
npm run start 0x02869126ca667c76e819078d5326feb5d17f276ce5786de47e78334f15530e74
```

Example for Brevis Partner Flow
```bash
npm run start 0x02869126ca667c76e819078d5326feb5d17f276ce5786de47e78334f15530e74 TEST_ACCOUNT_AGE_KEY 0xeec66d9b615ff84909be1cb1fe633cc26150417d
```
>[!NOTE]
>Brevis partner key **IS NOT** required to submit request to Brevis Gateway

# [Contracts](./contracts)

The app contract [AccountAge.sol](./contracts/contracts/AccountAge.sol) is called
after you submit proof is submitted to Brevis when Brevis'
systems submit the final proof on-chain.
It does the following things when handling the callback:

1. checks the proof was associated with the correct vk hash
2. decodes the circuit output
3. emit a simple event

## Init

```bash
cd contracts
npm install
```

## Test

```bash
npm run test
```

## Deploy

Rename `.env.template` to `.env`. Fill in the required env vars.

```bash
npx hardhat deploy --network sepolia --tags AccountAge
```