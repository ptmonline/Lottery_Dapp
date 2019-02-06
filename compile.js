const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname + '/contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// console.log(solc.compile(source, 1));
// INFURA ENDPOINT = https://rinkeby.infura.io/v3/4404778bc8d64811b4f531e508d9817c

module.exports = solc.compile(source, 1).contracts[':Lottery'];