import './assets/main.css'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import AOS from 'aos'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { readContract } from "@wagmi/core";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue'
import { mainnet, arbitrum } from 'viem/chains'

// 1. Get projectId
const projectId = '5fe1fd8f3beb8b4b2cad13c2d9a57d53'

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const chains = [mainnet, arbitrum]
  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })



  const USDTAddress = "0x858C3e0e5B6281d3FcFfdD8d42b1332c7E8FaF9d";
  const USDTAbi = [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "from", type: "address" },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokens",
          type: "uint256",
        },
      ],
      name: "Borrowed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "_to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "_tokens",
          type: "uint256",
        },
      ],
      name: "Repaid",
      type: "event",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_addressToken", type: "address" },
        { internalType: "address", name: "_myaddress", type: "address" },
      ],
      name: "BalanceyourWallet",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "BigBangPriceEstimate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_addresstoken", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "Borrow",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_address", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "BorrowCalculation",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_myaddress", type: "address" },
        { internalType: "address", name: "addressToken", type: "address" },
      ],
      name: "BorrowedAccountBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
      name: "Change_manager",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_myaddress", type: "address" },
        { internalType: "address", name: "addressToken", type: "address" },
      ],
      name: "CollateralAccountBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "string", name: "_Instagram", type: "string" },
        { internalType: "string", name: "Web", type: "string" },
        { internalType: "string", name: "_Twitter", type: "string" },
        { internalType: "string", name: "_Telegram", type: "string" },
      ],
      name: "ContactSupport",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_addressToken", type: "address" },
      ],
      name: "ContractBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "DecreaseLoanLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "DecreaseTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_myaddress", type: "address" },
        { internalType: "address", name: "addressToken", type: "address" },
      ],
      name: "ExpirationDateMyLoan",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "IncreaseLoanLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "IncreaseTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Instagram",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Loan_limit",
      outputs: [{ internalType: "uint80", name: "", type: "uint80" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "Myaddress", type: "address" }],
      name: "MyvotDecreaseLoanLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "Myaddress", type: "address" }],
      name: "MyvotDecreaseTimeLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "Myaddress", type: "address" }],
      name: "MyvotIncreaseLoanLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "Myaddress", type: "address" }],
      name: "MyvotIncreaseTimeLimit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "AddressTokenBGB", type: "address" },
      ],
      name: "NativeTokenRegistrationBGB",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_addressToken", type: "address" },
      ],
      name: "RemoveToken",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_addresstoken", type: "address" },
        { internalType: "uint256", name: "valueborrow", type: "uint256" },
      ],
      name: "Repay",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_addressOwner", type: "address" },
        { internalType: "address", name: "_addressToken", type: "address" },
        { internalType: "uint256", name: "valueborrow", type: "uint256" },
      ],
      name: "RepayCalculation",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_Addresstoken", type: "address" },
      ],
      name: "SearchAccount",
      outputs: [{ internalType: "address", name: "c", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "SearchAccountToken",
      outputs: [
        { internalType: "address", name: "A", type: "address" },
        { internalType: "address", name: "B", type: "address" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_tokenAddress", type: "address" },
        { internalType: "address", name: "chainlink", type: "address" },
      ],
      name: "Set_token",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint8", name: "_feeOwner", type: "uint8" },
        { internalType: "uint256", name: "votefee", type: "uint256" },
        { internalType: "uint136", name: "_lowestPrice", type: "uint136" },
        { internalType: "uint256", name: "_highestPrice", type: "uint256" },
      ],
      name: "SettingCosts",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_addressOwner", type: "address" },
      ],
      name: "ShowOwnerShare",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Telegram",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Time_limit",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "TotalAssets",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "TotalTokensUsed",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "TotalUser",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Twitter",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "VotingDecreaseLoanLimit",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "VotingDecreaseTimeLimit",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "VotingIncreaseLoanLimit",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "VotingIncreaseTimeLimit",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "Website",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_addresstoken", type: "address" },
      ],
      name: "WithdrawSmallAmounts",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "WithdrawalOwnerShare",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "_borrow",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_addressOwner", type: "address" },
        { internalType: "address", name: "addressToken", type: "address" },
        { internalType: "uint256", name: "valueborrow", type: "uint256" },
      ],
      name: "confiscate",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_tokenAddress", type: "address" },
      ],
      name: "getLatestPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  const data = readContract({
    address: USDTAddress,
    abi: USDTAbi,
    functionName: 'symbol',
  })
const app = createApp(App)
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })
app.use(createPinia())
app.use(AOS.init())
app.use(modal)
app.use(router)

app.mount('#app')
