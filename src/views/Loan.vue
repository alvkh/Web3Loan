<template>
  <!-- hedaer -->
  <navbar1></navbar1>
  <transition>
    <div v-if="timer" class="loadwraps">
      <div class="dot"></div>
      <div class="outline"><span></span></div>
    </div>
  </transition>
  <div class="flex flex-col gap-4 relative mt-[150px]">
    <img src="../assets/img/section6.png" class="absolute top-0" alt="" />
    <p
      data-aos="fade-right"
      class="text-[42px] text-center lg:text-start lg:leading-8 font-Oswald-Bold tracking-wider w-[90%] mx-auto text-gray-200"
    >
      Get Your Loan Eazy and Fast
    </p>
    <p
      data-aos="fade-right"
      class="text-[14px] text-center lg:text-start font-Oswald-Regular tracking-wider text-blue-400 lg:w-[90%] lg:mx-auto"
    >
      Here You Can Check Pricese and Changes Today
    </p>
    <div class="flex lg:flex-row flex-col p-2 gap-4 lg:w-[95%] mx-auto">
      <div
        data-aos="fade-right"
        class="flex z-10 flex-col p-6 gap-2 bg-black bg-opacity-35 lg:w-[30%] rounded-xl border border-gray-700"
      >
        <div class="flex justify-between px-2 items-center">
          <p class="text-[18px] font-Oswald-Bold tracking-wider text-gray-300">
            Big Bang Token
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="42"
            viewBox="0 0 122 42"
            fill="none"
          >
            <path
              d="M3.56493 16.7979C2.04382 17.8834 1.24602 18.5995 0 19.9975V41.1948H122V0C121.308 1.74626 120.234 2.71064 118.435 3.1996C117.389 3.48383 116.733 3.03684 115.662 3.1996C114.015 3.45001 113.337 4.47792 111.701 4.79939C110.031 5.12773 108.919 4.14798 107.344 4.79939C105.081 5.73573 105.724 8.5014 103.779 9.99874C102.18 11.2298 100.71 10.8881 99.026 11.9985C97.832 12.786 97.574 13.8549 96.2532 14.3982C94.6774 15.0464 93.4942 14.9881 91.8961 14.3982C89.7363 13.601 89.4066 11.7831 87.9351 9.99874C86.8065 8.63023 86.4141 7.65379 85.1623 6.39919C83.6691 4.90255 82.8806 3.54885 80.8052 3.1996C78.7298 2.85035 77.9004 3.06628 75.6558 4.79939C73.4113 6.53251 67.3377 9.99874 67.3377 9.99874C67.3377 9.99874 63.1126 11.3319 61.7922 11.9985C60.4719 12.6651 60.3437 11.9985 59.4156 11.9985C56.9406 11.9985 55.1858 13.3082 53.0779 11.9985C52.1464 11.4197 51.8539 10.7965 51.0974 9.99874C49.8092 8.64024 49.2761 7.69771 47.9286 6.39919C46.4955 5.01822 45.8734 3.74509 43.9675 3.1996C42.6281 2.81623 41.742 2.81623 40.4026 3.1996C38.4967 3.74509 38.0061 5.17227 36.4416 6.39919C34.609 7.83629 33.4966 8.53069 31.6883 9.99874C30.7468 10.7631 30.2859 11.277 29.3117 11.9985C27.8571 13.0758 26.9616 13.5785 25.3506 14.3982C22.9901 15.5993 21.5499 17.5476 19.013 16.7979C17.5284 16.3591 17.3037 14.9156 15.8442 14.3982C14.2386 13.8291 13.1886 14.3982 11.487 14.3982C10.0948 14.3982 9.2843 14.1081 7.92208 14.3982C6.02557 14.8021 5.14774 15.6683 3.56493 16.7979Z"
              fill="url(#paint0_linear_3276_90062)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3276_90062"
                x1="61"
                y1="0"
                x2="61"
                y2="33.6688"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00BA88" />
                <stop offset="1" stop-color="#00BA88" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          class="flex justify-between items-center px-2 border-t border-gray-500"
        >
          <p class="font-Oswald-Regular tracking-wider text-green-400 pt-4">
            Price : 1.02$
          </p>
          <p class="font-Oswald-Regular tracking-wider text-green-400 pt-4">
            24H : 5.02%
          </p>
        </div>
        <p
          v-if="showmore == false"
          @click="showmore = true"
          class="px-2 font-Oswald-Medium cursor-pointer text-blue-500 tracking-wider"
        >
          Show More Detail
        </p>
        <p
          v-else
          @click="showmore = false"
          class="px-2 font-Oswald-Medium text-red-500 tracking-wider cursor-pointer"
        >
          Dont Show
        </p>
      </div>
      <transition name="show">
        <div
          v-if="showmore"
          class="flex flex-col lg:flex-row z-10 p-4 justify-between gap-4 bg-black bg-opacity-35 lg:w-[70%] rounded-xl border border-gray-700"
        >
          <div class="flex flex-col gap-8 w-[80%] mx-auto lg:m-0 lg:w-[20%]">
            <p
              class="text-center font-Oswald-Medium p-2 border-b border-gray-700 text-[13px] tracking-wider uppercase"
            >
              Number of remaining tokens BGBT
            </p>
            <p
              class="text-center hover:scale-110 hover:text-blue-500 transition-all cursor-pointer font-Oswald-Regular"
            >
              199,000,000
            </p>
          </div>
          <div class="flex flex-col gap-8 lg:h-[80px] w-[80%] mx-auto lg:m-0 lg:w-[20%]">
            <p
              class="text-center font-Oswald-Medium p-2 border-b border-gray-700 text-[13px] tracking-wider uppercase"
            >
              The number of tokens used BGBT
            </p>
            <p
              class="text-center hover:scale-110 hover:text-blue-500 transition-all cursor-pointer font-Oswald-Regular"
            >
              1,000,000
            </p>
          </div>
          <div class="flex flex-col gap-8 lg:h-[80px] w-[80%] mx-auto lg:m-0 lg:w-[20%]">
            <p
              class="text-center font-Oswald-Medium p-2 border-b border-gray-700 text-[13px] tracking-wider uppercase"
            >
              Total number of users
            </p>
            <p
              class="text-center hover:scale-110 hover:text-blue-500 transition-all cursor-pointer font-Oswald-Regular"
            >
              1,120,028
            </p>
          </div>
          <div class="flex flex-col gap-8 lg:h-[80px] w-[80%] mx-auto lg:m-0 lg:w-[20%]">
            <p
              class="text-center font-Oswald-Medium p-2 border-b border-gray-700 text-[13px] tracking-wider uppercase"
            >
              Total assets of the platform
            </p>
            <p
              class="text-center hover:scale-110 hover:text-blue-500 transition-all cursor-pointer font-Oswald-Regular"
            >
              112,302 $
            </p>
          </div>
          <div class="flex flex-col gap-8 lg:h-[80px] w-[80%] mx-auto lg:m-0 lg:w-[20%]">
            <p
              class="text-center font-Oswald-Medium p-2 border-b border-gray-700 text-[13px] tracking-wider uppercase"
            >
              Loan payment percentage
            </p>
            <p
              class="text-center hover:scale-110 hover:text-blue-500 transition-all cursor-pointer font-Oswald-Regular"
            >
              90
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div
      data-aos="fade-up"
      class="lg:grid hidden z-10 p-4 grid-cols-5 justify-between gap-4 bg-black bg-opacity-35 w-[94%] mx-auto rounded-xl border border-gray-700"
    >
      <div class="col-span-1 flex flex-col gap-4">
        <p
          class="text-[18px] border-b p-2 font-Oswald-Medium tracking-wider text-gray-300 text-center border-r border-gray-800"
        >
          Token Name
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BTC
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          ETH
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
        <p
          class="text-[18px] font-Oswald-Regular tracking-wider text-gray-200 text-center border-r border-gray-800"
        >
          BNB
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <p
          class="text-[18px] p-2 font-Oswald-Medium tracking-wider text-gray-300 text-center border-r border-gray-800"
        >
          Bail price
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          42,756,025.25
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          2,114,122.25
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          276.25
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <p
          class="text-[18px] p-2 font-Oswald-Medium tracking-wider text-gray-300 text-center border-r border-gray-800"
        >
          Borrower Address
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          0xa56013553j49F4d8C...
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          0xa56013553j49F4d8C...
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          0xa56013553j49F4d8C...
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <p
          class="text-[18px] p-2 font-Oswald-Medium tracking-wider text-gray-300 text-center border-r border-gray-800"
        >
          Bail amount
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          0.16
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          22.02
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          11.22
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <p
          class="text-[18px] p-2 font-Oswald-Medium tracking-wider text-gray-300 text-center border-r border-gray-800"
        >
          Loan amountBGBT
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          2,256011.236
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          4,056233.36
        </p>
        <p
          class="text-[18px] font-Oswald-Bold tracking-wider text-blue-500 text-center border-r border-gray-800"
        >
          1,456,078.365
        </p>
      </div>
    </div>
  </div>
  <footer1></footer1>
</template>
<script setup>
import { ref, onMounted } from "vue";
import navbar1 from "@/components/navbar.vue";
import AOS from "aos";
import footer1 from "@/components/footer.vue";
const timer = ref(true);
const showmore = ref(true);
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
.show-enter-active,
.show-leave-active {
  transition: all 1s ease;
}

.show-enter-from,
.show-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>