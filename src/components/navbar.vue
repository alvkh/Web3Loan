<template>
    <div class="flex items-center z-50  w-full justify-between shadow-lg shadow-black p-4 text-white fixed top-0 left-0 bg-[#1E2431] ">
        <div class="flex gap-4 items-center">
            <img class="w-20 h-20 img-fade rounded-full" src="../assets/img/main.png" alt="Logo">
            <h1 class="text-[24px] animate-pulse font-Oswald-Bold text-[#0058AD]">Logo</h1>
        </div>
        <div class="flex gap-9 font-Oswald-Bold text-[18px] items-center">
            <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/">Home</router-link>
            <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/loan">Big Bang Loan</router-link>
            <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/contactus">Contact Us</router-link>
        </div>
        <button class="bg-transparent text-[18px] hover:bg-[#0058AD] transition-all border font-Oswald-Regular tracking-wider border-[#303030] px-5 py-3 rounded-3xl"> Connect Wallet </button>
    </div>
</template>
<style></style>