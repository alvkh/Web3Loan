<template>
    <div class="flex flex-col gap-10 bg-[#1E2431] w-full">
         <div class="grid grid-cols-12 w-[90%] mx-auto gap-4 p-6 border-b-2 py-20">
            <div class="col-span-3 flex flex-col gap-4"></div>
            <div class="col-span-3 flex flex-col gap-4">
                    <p class="text-[32px] font-Oswald-Bold tracking-wider p-4 border-b-2 ">Quick Links</p>
                    <div class="flex gap-9 font-Oswald-Bold text-[18px] items-center justify-center py-5">
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/">Home</router-link>
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/">Big Bang Loan</router-link>
                        <router-link class="hover:text-[#0058AD] tracking-wider transition-all" to="/">Contact Us</router-link>
                </div>
            </div>
            <div class="col-span-3 flex flex-col gap-4 ">
                <p class="text-[32px] font-Oswald-Bold tracking-wider p-4 border-b-2 ">Address</p>
                <p class="py-5 font-Oswald-Bold tracking-wider ps-4">Need Information</p>
            </div>
            <div class="col-span-3 flex flex-col gap-4">
                <p class="text-[32px] font-Oswald-Bold tracking-wider p-4 border-b-2 ">Support</p>
                <p class="py-5 font-Oswald-Bold tracking-wider ps-4">
                Example.Expample@Gmail.com
                </p>
            </div>
        </div>
        <div class="flex w-[80%] mx-auto justify-between font-Oswald-Bold tracking-wider py-5">
            <p>© 2024 - Arka - All Rights Reserved.</p>
            <p>Follow Us</p>
        </div>

        
    </div>
</template>