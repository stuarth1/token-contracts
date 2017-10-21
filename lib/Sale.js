var { contracts }   = require('../dist/combined.json');
var Web3      = require('web3');
var web3      = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

module.exports = {
    createSale: function (owner, freezeBlock, startBlock, endblock){
        var c = contractSplitter();
        var sale = c.Sale;
        var factory = web3.eth.contract(JSON.parse(sale.abi));
        var options = { from: web3.eth.accounts[0], value: 0, data: "0x" + sale.bin, gas: 200000000 };   
        return new Promise((resolve, reject) => {
            factory.new(owner, freezeBlock, startBlock, endblock, options, (err, contract) => {
                if (!err) {
                    if (contract.address) resolve(contract);
                }
                else reject(err);
            });
        }) 
    },
    distributeTimeLockedTokens: function(address, beneficiaries, tokens, vestingStartDates, vestingDurations){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], gas: 200000000 }
            instance.distributeTimeLockedTokens(beneficiaries, tokens, vestingStartDates, vestingDurations, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    configureWallet: function(address, wallet){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], gas: 2000000 }
            instance.configureWallet(wallet, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
     configureWalletAs: function(sender, address, wallet){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: sender, gas: 2000000 }
            instance.configureWallet(wallet, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    setSetupComplete: function(address){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], gas: 2000000 }
            instance.setSetupComplete(options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    setSetupCompleteAs: function(sender, address){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from:sender, gas: 2000000 }
            instance.setSetupComplete(options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    purchaseTokens: function(address, buyer, ether){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: buyer, value: ether, gas: 2000000 }
            instance.purchaseTokens(options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    addWhitelistAs: function(sender, address, whitelistAddresses, amounts){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: sender, value: ether, gas: 2000000 }
            instance.addWhitelist(whitelistAddresses, amounts, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
	addWhitelist: function(address, whitelistAddresses, amounts){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], value: ether, gas: 2000000 }
            instance.addWhitelist(whitelistAddresses, amounts, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
	emergencyToggle: function(address){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], value: ether, gas: 2000000 }
            instance.emergencyToggle(options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
	changeStartBlock: function(address, newStartBlock){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], value: ether, gas: 2000000 }
            instance.changeStartBlock(newStartBlock, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
	changePrice: function(address, newPrice){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], value: ether, gas: 2000000 }
            instance.changePrice(newPrice, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
	changeOwner: function(address, newOwner){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: web3.eth.accounts[0], value: ether, gas: 2000000 }
            instance.changeOwner(newOwner, options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    lockUnsoldTokens: function(sender, address){
    	var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
    	return new Promise((resolve, reject) => {
            var options = { from: sender, value: ether, gas: 2000000 }
            instance.lockUnsoldTokens(options, async (err, txHash) => {
                if(!err) {
                    const mined = await onConfirmation(txHash);
                    if(mined) resolve(txHash);
                    else reject(txHash);
                }
                else reject(err)
            })
        })
    },
    at: function(address){
        var c = contractSplitter();
        var sale = c.Sale;
        var instance = web3.eth.contract(JSON.parse(sale.abi)).at(address);    
        return new Promise((resolve, reject) => {
            if(instance){
                resolve(instance);
            }else{
                reject("unable to create instance from address");
            }
        }); 
    }
}

function contractSplitter(){
    var c = {};
    Object.keys(contracts).forEach((contract) => {
        if (contract.split(':').length > 1)
            c[contract.split(':')[1]] = contracts[contract]
    });
    return c;
}

function onConfirmation(txHash){
    return new Promise((resolve, reject) => {
        var breakout = false;
        var timeout = setInterval(()=>{
            breakout = true;
            clearTimeout(timeout);
        },500000)
        var txCheck = setInterval(()=>{            
            if(web3.eth.getTransaction(txHash).blockNumber !== null){
                resolve(true);
                clearTimeout(txCheck);
                clearTimeout(timeout);
            }else if(breakout){
                resolve(false);
                clearTimeout(txCheck);
                clearTimeout(timeout);
            }
        },1000)
    })
}