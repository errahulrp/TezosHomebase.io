# TezosHomeBase.io - Automated Playwright Tests

## Running Playwright Tests - Manual

To execute the automated tests for TezosHomeBase.io, follow these steps:

1. Visit the [GitHub Actions page for the Repository](https://github.com/errahulrp/TezosHomebase.io/actions).
   - All test scripts and cases are available here for testing the website without the need to repeatedly perform the same actions.
2. On the actions page, you'll find all executed workflows. Click on "**Run Playwright Tests**" to view the workflows carried out for the tests.
3. To start a workflow, select the "main" branch and click the "**Run Workflow**" button located above the workflows list. This action will run all test scripts sequentially.

## Reports for Test Scripts

Here are the reports for various test cases:

- **Token and DAO Creation (TC01):** 
  - [Token and DAO Creation Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-01/) - Involves Token and DAO creation using valid and invalid values.

- **Off-chain Proposal Creation (TC02):** 
  - [Off-chain Proposal Creation Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-02/) - Involves creating off-chain proposals, voting, and vote count.

- **Token Deposit (TC03):** 
  - [Token Deposit Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-03/) - Involves token deposits and delegation acceptance.

- **On-chain Proposal Creation (TC04):** 
  - [On-chain Proposal Creation Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-04/) - Involves the creation of on-chain proposals with valid transactions.

- **Voting on On-chain Proposals (TC05):** 
  - [Voting on On-chain Proposals Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-05/) - Involves voting on on-chain proposals and dropping proposals.

- **Token Withdrawal & Staking (TC06):** 
  - [Token Withdrawal & Staking Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-06/) - Involves verification of token withdrawal and staking.

- **Token Unstaking and Proposal Execution (TC07):** 
  - [Token Unstaking and Proposal Execution Report](https://errahulrp.github.io/TezosHomebase.io/tests/tc-07/) - Involves verification of token unstaking and proposal execution.

## Configuration Changes

The current value for the website configuration is:
[https://deploy-preview-629--tezos-homebase.netlify.app](https://deploy-preview-629--tezos-homebase.netlify.app/)
