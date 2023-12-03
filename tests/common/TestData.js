const TezosTestData = {

    TokenCreator: {
        TokenName: `New${Math.floor(+new Date() / 1000)}Token`,
        TokenDescription: "My Silver Descriptions",
        TC02TokenDescription: "",
        SupplyToken: "1000000",
        Decimals: "11",
        Symbol: "$",
        Icon: "Picture.PNG",
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Amount: "1000000",
    },

    DAOCreate: {
        DAOName: `New${Math.floor(+new Date() / 1000)}DAO`,
        TokenID: "0",
        TokenAddress: "KT1VPiQUCrYSzicaNa5yWhndt7K19HYUCGzP",
        GuardianAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Description: "A DAO focused on funding and promoting open-source projects related to sustainability and renewable energy.",
        TC04DAODescription: "",
        VotingDays: '00',
        VotingHours: '00',
        VotingMinutes: "08",
        ExecutionDays: "00",
        ExecutionHours: "00",
        ExecutionMinutes: "01",
        ThresholdExpiryDays: "01",
        ThresholdExpiryHours: "00",
        ThresholdExpiryMinutes: "00",
        QuorumThreshold: '2',
        QuorumChange: '2',
        MinQuorumAmount: '1',
        QuorumMaxChange: '19',
        MaxQuorumAmount: '90',
        RequiredStake: "10",
        MinAmount: "1",
        MaxAmount: "200000",
    },

    OffChainPoll: {
        ProposalTitle: "GOV",
        ShortDescription: "This proposal aims to conduct an off-chain poll to gather community input on potential upgrades to the Tezos governance process.",
        ExternalLink: "https://tezos-gov-upgrades.com",
        Choice1: "Democracy",
        Choice2: "Exploration",
        DD: "00",
        HH: "00",
        MM: "20",
    },

    ChangeConfiguration: {
        ProposalFee: "14",
        ReturnedTokenPercentage: "63"
    },

    ChangeGuardian: {
        WalletAddress: "tz1hhjjjnCe7ePEKGRaArKzqyKpgQtrTK3RD",
    },

    ChangeDelegate: {
        NewDelegateAddress: "tz1LY2KJKKkXbA7EoN8K2rd8X1GDgcfj5zy6",
    },

    TransferToken: {
        RecipientAddress: "tz1MBFA5nJgPgkp1ThXHcSs4YLuUrHmUM1Ef",
        Asset: "$",
        Amount: "12",
        AgoraPostID: "0",
    },

    EditRegistry: {
        Key: "Home ",
        Value: "Documents",
    },

    AddLambda: {
        MichelsonCode: "Extract the lambda and an integer from the parameter",
    },

    RemoveLambda: {
        SearchText: "transfer_proposal",
    },

    ExecuteLambda: {
        LambdaArgumentsCode: "Write Michelson Code For the Input",
        LambdaParams: "Enter the values for the given params in a JSON/JavaScript Object format.",
    },

    VoteOnProposal: {
        Amount: "300000",
    },


    TokenStaking: {
        Amount: "20"
    },

    TokenWithdrawal: {
        Amount: "50",
    },
}

export { TezosTestData };

