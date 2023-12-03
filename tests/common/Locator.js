

const pageLocators = {
  TokenCreator: {
    MainNet: "//p[text()='Mainnet']",
    GhostNet: "//h6[text()='Ghostnet']",
    EnterApp: ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss11.jss12.MuiButton-containedSecondary",
    frame: "div.MuiGrid-root.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-center",
    ConnectWallet: "//span[text()='Connect Wallet']",
    CreateDAO: "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained jss37 jss38 MuiButton-containedSecondary']",
    GovernanceToken: "//span[normalize-space()='No, I need one']",
    TokenName: "//input[@placeholder='Contract Name']",
    TokenDescription: "//textarea[@placeholder='Type a description']",
    TotalSupply: "//input[@name='totalSupply']",
    Decimals: "//input[@name='decimals']",
    Symbol: "//input[@name='symbol']",
    Icon: "//input[@name='icon']",
    ContinueButton1: "//p[text()='Continue']",
    WalletAddress: "//input[@placeholder='Wallet address']",
    Amount: "//input[@placeholder='0']",
    ContinueButton2: "//p[text()='Continue']",
    launch: "//p[text()='Launch']",
    DeployText: "Governance token successfully deployed",
    ConsoleAddress: "//p[@class='MuiTypography-root-165 MuiTypography-body1-167 MuiTypography-colorTextSecondary-191']",
    ErrorText: "Required",
  },

  DAOCreate: {
    CreateDAO: "//span[text()='Create DAO']",
    GovernanceToken: "//span[text()='Yes, I have one']",
    FullDAO: "//p[normalize-space()='Full DAO']",
    ContinueButton1: "//p[text()='Continue']",
    DAOName: "//input[@name='name']",
    TokenAddress: "//input[@name='governanceToken.address']",
    TokenID: "//input[@name='governanceToken.tokenId']",
    Description: "//textarea[@placeholder='Type a description']",
    GuardianAddress: "//input[@placeholder='tz1PXn....']",
    ContinueButton2: "//p[text()='Continue']",
    VotingDays: "//input[@name='votingBlocksDay']",
    VotingHours: "//input[@name='votingBlocksHours']",
    VotingMinutes: "//input[@name='votingBlocksMinutes']",
    ExecutionDays: "//input[@name='proposalFlushBlocksDay']",
    ExecutionHours: "//input[@name='proposalFlushBlocksHours']",
    ExecutionMinutes: "//input[@name='proposalFlushBlocksMinutes']",
    ThresholdExpiryDays: "//input[@name='proposalExpiryBlocksDay']",
    ThresholdExpiryHours: "//input[@name='proposalExpiryBlocksHours']",
    ThresholdExpiryMinutes: "//input[@name='proposalExpiryBlocksMinutes']",
    Slider: "span[role='slider']",
    RequireStake: "//input[@name='proposeStakeRequired']",
    MinAmount: "//input[@name='minXtzAmount']",
    MaxAmount: "//input[@name='maxXtzAmount']",
    ContinueButton3: "//p[text()='Continue']",
    QuorumThreshold: "//input[@name='quorumThreshold']",
    QuorumChange: "//input[@name='quorumChange']",
    MinQuorumAmount: "//input[@name='minQuorumAmount']",
    QuorumMaxChange: "//input[@name='quorumMaxChange']",
    MaxQuorumAmount: "//input[@name='maxQuorumAmount']",
    ContinueButton4: "//p[text()='Continue']",
    ContinueButton5: "//p[text()='Continue']",
    SelfDeployed: " //p[text()='Self-Deployed']",
    Managed: "//p[text()='Managed']",
    DeployDAO: "//p[text()='Deploy DAO']",
    DAOText: "Go to my DAO",
    ErrorText: "Required",
    ConsoleDAOName: "//h6[@class='MuiTypography-root-165 jss703 MuiTypography-subtitle1-176 MuiTypography-colorTextSecondary-191']",
  },

  AcceptDelegation: {
    EditButton: "//p[text()='Edit']",
    AcceptButton: "//input[@value='ACCEPT_DELEGATIONS']",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "Delegate transaction confirmed",
  },

  TokenStaking: {
    User: "//p[text()='User']",
    Deposit: "//span[text()='Deposit']",
    PassAmount: "//input[@placeholder='0']",
    UseMax: "//p[text()='Use Max']",
    Submit: "//span[text()='Submit']",
    TransactionText: "Deposit transaction confirmed",
    Balance: "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-space-between']",
  },


  OffChainPoll: {
    // DAO: `//p[text()='${DAOName}']`,
    Proposal: "//p[text()='Proposals']",
    cycle: "//p[text()='Creating']",
    NewProposal: "//span[text()='New Proposal']",
    OffChainPoll: "//p[text()='Off Chain Poll']",
    ProposalTitle: "input[placeholder='Proposal Title*']",
    ShortDescription: "textarea[placeholder='Short description']",
    ExternalLink: "input[placeholder='External Link']",
    multipleChoice: "input[value='1']",
    Choice1: "input[placeholder='Choice 1']",
    AddChoice: ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall",
    Choice2: "input[placeholder='Choice 2']",
    Choice3: "input[placeholder='Choice 3']",
    DD: "input[placeholder='DD']",
    HH: "input[placeholder='HH']",
    MM: "input[placeholder='MM']",
    CreateProposalButton: "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary']",
    CreateText: "Proposal created",
  },

  VoteOnOffChainPoll: {
    ProposalTitle: "//h4[text()='GOV']",
    Choice1: "//p[text()='Democracy']",
    Choice2: "//p[text()='Exploration']",
    CastYourVote: "//span[text()='Cast your vote']",
    VoteDone: "Your vote has been submitted",
  },

  CorrectVoteCount: {
    VoteCount: "div[class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'] p[class='MuiTypography-root MuiTypography-body1 MuiTypography-colorSecondary']",
    Options: "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-6']",
  },

  TransferToken: {
    Treasury: "//p[text()='Treasury']",
    NewTransfer: "//span[text()='New Transfer']",
    Recipient: "input[placeholder='Type an Address Here']",
    Asset: "//input[@class='MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd']",
    Amount: "input[placeholder='0']",
    AgoraPostID: "input[placeholder='Type an Agora Post ID']",
    SubmitButton: "//span[normalize-space()='Submit']",
    TransactionText: "Registry proposal transaction confirmed",
  },

  ChangeConfiguration: {
    DAOConfiguration: "//p[text()='DAO Configuration']",
    ProposalFee: "//input[@name='frozen_extra_value']",
    ReturnedTokenPercentage: "//input[@name='returnedPercentage']",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "",
  },

  TransferNFT: {
    DAO: "",
    NFTs: "//span[text()='NFTs']",
  },

  EditRegistry: {
    Registry: "//p[text()='Registry']",
    NewItem: "//span[text()='New Item']",
    BatchTransfer: "//input[@type='checkbox']",
    Key: "//input[@placeholder='Type a Key']",
    Value: "//textarea[@placeholder='Type a value']",
    Submit: "//span[text()='Submit']",
    TransactionText: "Registry proposal transaction confirmed",

  },

  AddLambda: {
    AddLambda: "//p[text()='Add Lambda']",
    TestBox: ".npm__react-simple-code-editor__textarea",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "Add Lambda proposal transaction confirmed",

  },

  RemoveLambda: {
    RemoveLambda: "//p[text()='Remove Lambda']",
    SearchBox: "#combo-box-demo",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "Remove Lambda proposal transaction confirmed",
  },

  ExecuteLambda: {
    ExecuteLambda: "//p[text()='Execute Lambda']",
    SearchBox: "#combo-box-demo",
    Dropdown: "//button[@class='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator']",
    LambdaArgumentsCode: "(//textarea[@class='npm__react-simple-code-editor__textarea'])[2]",
    LambdaParams: "(//textarea[@class='npm__react-simple-code-editor__textarea'])[3]",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "Execute Lambda proposal transaction confirmed",
  },

  ChangeDelegate: {
    ChangeDelegate: "//p[text()='Change Delegate']",
    NewDelegateAddress: "input[placeholder=' tz1...']",
    SubmitButton: "//span[text()='Submit']",
    TransactionText: "Delegation change proposal transaction confirmed",
  },

  ChangeGuardian: {
    ChangeGuardian: "//p[text()='Change Guardian']",
    WalletAddress: "input[placeholder=' tz1...']",
    SubmitButton: '//span[text()="Submit"]',
    TransactionText: "Guardian change proposal transaction confirmed",
  },

  VoteOnProposal: {
    VotingCycle: "//p[text()='Voting']",
    OnChainButton: "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text jss417']",
    Active: "//p[text()='Active']",
    Pending: "//p[text()='Pending']",
    NoQuorum: "//p[text()='No Quorum']",
    Expired: "//p[text()='Expired']",
    Rejected: "//p[text()='Rejected']",
    VoteFor: "//span[text()='Vote For']",
    VoteAgainst: "//span[text()='Vote Against']",
    UseMax: "//p[text()='Use Max']",
    Amount: "//input[@placeholder='Type an Amount']",
    Submit: "//span[text()='Submit']",
    View: "//span[text()='View']",
    Support: ".MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-wrap-xs-nowrap.MuiGrid-align-items-xs-baseline.MuiGrid-grid-md-12",
    Oppose: ".MuiGrid-root.MuiGrid-container.MuiGrid-wrap-xs-nowrap.MuiGrid-align-items-xs-center.MuiGrid-grid-md-12",
    TransactionText: "Vote transaction confirmed",
  },

  ProposalExecution: {
    PassedExecutable: "//p[text()='Passed - Executable']",
    Passed: "//p[text()='Passed']",
    NoQuorum: "//p[text()='No Quorum']",
    Expired: "//p[text()='Expired']",
    DropProposal: "//span[text()='Drop Proposal']",
    PercentageText: "//p[@class='MuiTypography-root jss1339 jss1340 MuiTypography-body1']",
    DropExpired: "//span[text()='Drop Expired']",
    Execute: "//span[text()='Execute']",
    TransactionText: "Execute proposal transaction confirmed",
  },

  ProposalDrop: {
    ProposalDrop: "//span[text()='Drop Proposal']",
    TransactionText: "Drop proposal transaction confirmed",
  },

  UnStakingToken: {
    UnStakeVotes: "//span[text()='Unstake Votes']",
    TransactionText: "Execute transaction confirmed",
  },

  TokenWithdrawal: {
    Withdraw: "//span[text()='Withdraw']",
    Amount: "//input[@placeholder='0']",
    UseMax: "//p[text()='Use Max']",
    Submit: "//span[text()='Submit']",
    TransactionText: "Withdrawal transaction confirmed",
    AvailableBalance: "0",
  }

}


export { pageLocators };
