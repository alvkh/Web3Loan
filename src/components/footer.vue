<template>
    <div class="flex flex-col gap-4 text-gray-300 bg-[#1E2431] overflow-hidden bg-opacity-40 relative w-full">
        <img src="../assets/img/section6.png" class="absolute top-0" alt="">

         <div class="z-10 grid grid-cols-12 w-[90%] mx-auto gap-4 p-6 border-gray-700 border-b-2 ">
            <div class="lg:col-span-3 col-span-full lg:items-start items-center flex flex-col gap-4">
                <img class="rounded-full img-fade " src="../assets/img/main.png" alt="">
            </div>
            <div class="lg:col-span-3 col-span-full lg:items-start items-center flex flex-col gap-4">
                    <p class="text-[24px] font-Oswald-Bold tracking-wider p-4 border-b-2 border-gray-700 ">Quick Links</p>
                    <div class="flex p-4 gap-4 font-Oswald-Bold flex-col text-[14px] justify-center py-5">
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all lg:text-start text-center" to="/">Home</router-link>
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all lg:text-start text-center" to="/loan">Big Bang Loan</router-link>
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all lg:text-start text-center" to="/contactus">Contact Us</router-link>
                </div>
            </div>
            <div class="lg:col-span-3 col-span-full lg:items-start items-center flex flex-col gap-4 ">
                <p class="text-[24px] font-Oswald-Bold tracking-wider p-4 border-b-2 border-gray-700 ">Address</p>
                <p class="py-5 text-[14px] font-Oswald-Bold tracking-wider ps-4">Need Information</p>
            </div>
            <div class="lg:col-span-3 col-span-full lg:items-start items-center flex flex-col gap-4">
                <p class="text-[24px] font-Oswald-Bold tracking-wider p-4 border-b-2 border-gray-700 ">Support</p>
                <p class="py-5 text-[14px] font-Oswald-Bold tracking-wider ps-4">
                example.example@gmail.com
                </p>
            </div>
        </div>
        <div class="flex z-10 lg:w-[80%] text-[14px] mx-auto justify-between font-Oswald-Bold tracking-wider py-1 mb-4">
            <p>© 2024 - Arka - All Rights Reserved.</p>
            <div class="lg:flex hidden items-center gap-2">
                <p >Follow Us</p>
            </div>
        </div>

        
    </div>
</template>
<style>
.img-fade{
-webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 70%);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0, rgba(0,0,0,0) 95%);

}</style>