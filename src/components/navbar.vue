<template>
  <div
    class="flex items-center z-50 !w-full justify-between shadow-lg shadow-black p-4 text-white fixed top-0 left-0 bg-[#1E2431]"
  >
    <div class="flex gap-4 items-center">
      <img
        class="w-20 h-20 img-fade rounded-full"
        src="../assets/img/main.png"
        alt="Logo"
      />
      <h1 class="text-[24px] lg:block hidden animate-pulse font-Oswald-Bold text-[#0058AD]">
        Logo
      </h1>
    </div>
    <div @click="visiable = true" class="flex lg:hidden">
      <menu1></menu1>
    </div>
    <div v-if="visiable" @click="visiable = false" class="w-screen h-screen bg-black fixed top-0 left-0 opacity-25" />
    <div v-if="visiable"  class="w-screen z-20 h-[50%] fixed top-0 left-0 items-center justify-center rounded-b-lg flex flex-col gap-4 bg-[#1E2431]">
      <router-link
        class="hover:text-[#0058AD] border-b border-gray-600 tracking-widest mx-auto p-2 font-Oswald-Bold text-center w-[80%] tracking-wider transition-all"
        to="/"
        >Home</router-link
      >
      <router-link
        class="hover:text-[#0058AD] border-b border-gray-600 tracking-widest mx-auto p-2 font-Oswald-Bold text-center w-[80%] tracking-wider transition-all"
        to="/loan"
        >Big Bang Loan</router-link
      >
      <router-link
        class="hover:text-[#0058AD] border-b border-gray-600 tracking-widest mx-auto p-2 font-Oswald-Bold text-center w-[80%] tracking-wider transition-all"
        to="/contactus"
        >Contact Us</router-link
      >
    <w3m-button class="mx-auto" />
    </div>
    <div class="lg:flex hidden gap-9 font-Oswald-Bold text-[18px] items-center">
      <router-link
        class="hover:text-[#0058AD] tracking-wider transition-all"
        to="/"
        >Home</router-link
      >
      <router-link
        class="hover:text-[#0058AD] tracking-wider transition-all"
        to="/loan"
        >Big Bang Loan</router-link
      >
      <router-link
        class="hover:text-[#0058AD] tracking-wider transition-all"
        to="/contactus"
        >Contact Us</router-link
      >
    </div>
    <w3m-button class="lg:block hidden" />
  </div>
</template>
<script setup>
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue'
import {} from '@web3modal/wagmi'
import menu1 from './icons/menu.vue';
import { mainnet, arbitrum,   } from 'viem/chains'
import { ethers } from "ethers";
import { ref } from 'vue';
const visiable = ref(false)
const modal = createWeb3Modal()


</script>
