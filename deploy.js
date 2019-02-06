const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'boring notice will obvious absurd eight blood machine oppose earth napkin coast',
    'https://rinkeby.infura.io/v3/4404778bc8d64811b4f531e508d9817c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log('Contract deployed to ', result.options.address);
};

deploy();

//Deployed at 0xa0D2989EC774fFC3B32561bd6d2bbf3b01200205