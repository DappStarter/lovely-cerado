require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name random noise equip good kangaroo army giggle'; 
let testAccounts = [
"0x1e6afa8993a333b026c51401e527001d21c3d9bfccfa2a40cb476ffb4c033326",
"0xeac72a1b5291529a262c870baed9a8becbace00edb3dfca39ef055a4b121b2a6",
"0x32f6f60c5f403142555375c0cb248e9331bc7f3bac829060814ab11c19bfae34",
"0x6931f0c8bfbf0a00ef22ec01b360ab1c5aa351a57d72d02642f5d2bb861417bf",
"0xe1fc74b338fa163a1196dbd3abe767ff80b9c83ff5286558d1bfa574b33d911a",
"0xd940e7274441189735784ba048510b12657e9353ef889b04bebe2419913d07d8",
"0xf4af6890bfdf64fcc3979ec453bb6deda344552e808e3ce234072e24500dea6e",
"0xdabe0dd5959efa1f083c0c2cb8ba24e10dd747ef747ec5747156fecb3f71697e",
"0x12ccf05979064fae5998870ddd96c9dba862187619106f9bcd44670e2e10529d",
"0x96a959dcdec4a2eaa15d5c604646dc57a08e93861385d74a68ac7ffb6c9894ff"
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
            version: '^0.5.11'
        }
    }
};
