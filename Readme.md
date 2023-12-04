# TezosHomeBase - Automated Playwright Tests

## Running Playwright Tests - Manual

1. Visit Github action page for the Repo here
https://github.com/errahulrp/TezosHomebase.io/actions

Here, all the test scripts and cases are available to test the website without repeatedly performing the same actions.
2. All of the workflows that were executed on this repository are displayed on the actions page. Click on "**Run Playwright Tests**" to see all the workflows carried out for the tests.
3. To start a workflow, select the "main" branch by clicking the "**Run Workflow"** button located above all other workflows and click “Run Workflow” All test scripts will be run sequentially by doing this.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/3a6ca742-ee18-4a98-be6e-909c92541f3a/5b5e1f6d-dbcb-4f02-854f-8f0cbce6af1e/Untitled.png)
    

Once the all the tests are executed their reports will be deployed on the GitHub Pages. You can access the reports generated for each test case on the following URL scheme: 

```bash

https://errahulrp.github.io/TezosHomebase.io/tests/tc-01/
```

## **Reports for Tests Scripts**

**Report for TC01-Token creation:** 
This test case involves Token Creation by using valid values and invalid values.

https://errahulrp.github.io/TezosHomebase.io/tests/tc-01/

**Report for TC02: DAO creation:** 
This test case involves DAO Creation using valid values and invalid values

https://errahulrp.github.io/TezosHomebase.io/tests/tc-02/

**Report for TC03: On-chain Proposal creation:** 
This test case involves On-Chain proposal creation like Transfer Tokens, Transfer NFT, Edit Registry, DAO Configuration, Change Delegate and Change Guardian.

https://errahulrp.github.io/TezosHomebase.io/tests/tc-03/

**Report for TC04: Off-chain proposal creation & voting :** 
This test case involves off-chain proposal creation using valid values,  Voting on off-chain proposal and to verify if the Vote count visible is the correct vote count.

https://errahulrp.github.io/TezosHomebase.io/tests/tc-04/

**Report for TC05: Voting on On-chain proposals:** 
This test case involves voting on On-Chain proposals; Vote For or Vote Against and to check if the proposal can be executed or dropped based on the votes and Quorum Threshold

https://errahulrp.github.io/TezosHomebase.io/tests/tc-05/

**Report for TC06: Token Updations (Withdrawal, Staking & unstaking):** 
This test case involves verification of Token Withdrawal, Token staking and token Unstaking

https://errahulrp.github.io/TezosHomebase.io/tests/tc-06/

**Report for TC07: Token Updations (Withdrawal, Staking & unstaking):** 
This test case involves verification of Token Withdrawal, Token staking and token Unstaking

https://errahulrp.github.io/TezosHomebase.io/tests/tc-07/

---

## Configuration Changes

The current value for the same is
[https://deploy-preview-629--tezos-homebase.netlify.app](https://deploy-preview-629--tezos-homebase.netlify.app/)