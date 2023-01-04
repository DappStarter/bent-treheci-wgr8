require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot elbow crawl pave property hard light army giggle'; 
let testAccounts = [
"0x82346aea0c849478c838854c407990d1663e904397285a2b7a91dfa6e495b322",
"0xe5d520994fa7d359b7feefcabd5dbef6b0117a734660e404b7fbf268fa61eb21",
"0x1431bb0c8568fa06e3c78a6cbd4257d35fb0b91c34f966adfae2badcb096af4b",
"0x86bbc87c6322beb1598bba7f4a3b2096e0a0174ea22b9319d29daca3b6d9b1a7",
"0x62c69085cb0e21a620d0c0a2dc7ceb5a5cc925847066701abbffb74fda6f7037",
"0x46e3f5e3623fa88ef8f06af79fefd9f6644ffac58085fea6267a88deec788018",
"0x47ee1af085320a81720d2489974afdf833fd2c414f3f4e9bcf63c6e350beae1c",
"0x1425524666afc53dd3b904b3216abc1f7f92dfdfeafd1765c7e683877ad038f4",
"0x99c01b0f901ff79152f31d857022eb5a5de59b61bbfdee612aebee0bad1a77a4",
"0xc210d9aec0bd103a0a21c3862a9fd86dce24a6daf56ceeea95dc0108d453aa4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

