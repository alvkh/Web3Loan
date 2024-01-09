<template>
  <!-- hedaer -->
  <navbar1></navbar1>
  <transition>
    <div v-if="timer" class="loadwraps">
      <div class="dot"></div>
      <div class="outline"><span></span></div>
    </div>
  </transition>
  <div class="flex flex-col mt-[200px] gap-10 w-[90%] mx-auto">
    <div class="flex lg:flex-row flex-col gap-10 lg:gap-0 w-full lg:justify-around lg:items-start">
      <div class="flex flex-col gap-6 lg:w-[33%] items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[48px] h-[48px] hover:text-blue-500 transition-all"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <div class="flex flex-col gap-1 items-center">
          <p class="text-[18px] font-Oswald-Medium tracking-wider">
            Customer SERVICE
          </p>
          <p class="text-[14px] text-blue-400 font-Oswald-Medium tracking-wider">
            0999 999 9999
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-6 lg:w-[33%] items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[48px] h-[48px] hover:text-blue-500 transition-all"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <div class="flex flex-col gap-1 items-center">
          <p class="text-[18px] font-Oswald-Medium tracking-wider">
            MAIL ADDRESS
          </p>
          <p class="text-[14px] text-blue-400 font-Oswald-Medium tracking-wider">
            example.example@gmail.com
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-6 lg:w-[33%] items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[48px] h-[48px] hover:text-blue-500 transition-all"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <div class="flex flex-col gap-1 items-center">
          <p class="text-[18px] font-Oswald-Medium tracking-wider">OFFICE</p>
          <p class="text-[14px] text-blue-400 font-Oswald-Medium tracking-wider">USA</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 py-10">
        <div class="flex lg:flex-row flex-col lg:p-6 justify-between gap-4">
            <input type="text" class="outline-none focus:outline-none p-4 rounded-lg font-Oswald-Regular bg-transparent border-gray-600 lg:w-[33%] border" placeholder="Full Name">
            <input type="text" class="outline-none focus:outline-none p-4 rounded-lg font-Oswald-Regular bg-transparent border-gray-600 lg:w-[33%] border" placeholder="Email Address">
            <input type="text" class="outline-none focus:outline-none p-4 rounded-lg font-Oswald-Regular bg-transparent border-gray-600 lg:w-[33%] border" placeholder="Phone Number">
        </div>
        <textarea name="" id="" cols="30"  rows="10" class="outline-none resize-none focus:outline-none p-4 rounded-lg font-Oswald-Regular bg-transparent border border-gray-600 w-[99%] mx-auto" placeholder="Your Message ..."></textarea>
        <button class="px-4 py-3 font-Oswald-Regular border-gray-700 border tracking-widest  w-fit rounded-3xl hover:bg-blue-500 transition-all  mx-auto text-gray-300 ">Send Message</button>
    </div>
  </div>
  <footer1></footer1>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AOS from 'aos'
import navbar1 from "@/components/navbar.vue";
import footer1 from "@/components/footer.vue";
const timer = ref(true);
onMounted(() => {
  setTimeout(() => {
    timer.value = false;
  }, 500);
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>