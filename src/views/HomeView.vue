<script setup>
import navbar from "@/components/navbar.vue";
import json from '../json/landing.json'
import Web3 from 'web3'
import AOS from 'aos'
import footer1 from '../components/footer.vue'
import Offer1 from "../components/Offer1.vue"
import Offer2 from "../components/Offer2.vue"
import Offer3 from "../components/Offer3.vue"
import Offer4 from "../components/Offer4.vue"
import { onMounted, ref } from "vue";
const web3 = new Web3(window.ethereum)
console.log(window.ethereum);
const timer = ref(true);
onMounted(() => {
  AOS.init();
  setTimeout(() => {
    timer.value = false;
  }, 500);
});
</script>

<template>
  <transition>
    <div v-if="timer" class="loadwraps">
      <div class="dot"></div>
      <div class="outline"><span></span></div>
    </div>
  </transition>
  <div class="flex flex-col w-full gap-32 mt-[150px] overflow-x-hidden">
    <!-- navbar -->
    <navbar></navbar>
    <!-- navbar Ended -->
    <!-- Contant -->
    <div class="   w-[90%] mx-auto flex  gap-10">
      <div class="w-[49%] flex flex-col gap-10">
        <h2 data-aos="fade-right" data-aos-delay="1000" class="text-[48px] font-Oswald-Regular tracking-wider text-white">
          Highly Profitable
          <span class="font-Oswald-Bold text-[#0058AD] animate-pulse">
            Big Bang Dapp
          </span>
          Platform
        </h2>
        <p data-aos="fade-right" data-aos-delay="1000" class="text-[14px] font-Oswald-Regular leading-7 text-[#ACB4C2]">
          Keeping cryptocurrencies in a secure platform has been the concern of
          small and large traders since its inception. <br>
           While keeping
          cryptocurrencies in a secure space on the blockchain platform, we have
          tried to provide profits as well as instant loans to cryptocurrency
          owners. <br>
           Big Bang is a platform (Blockchain-based contract) to keep
          cryptocurrencies and protect people's assets from market fluctuations
          in order to prevent unpredictable losses, as well as an instant
          lending platform. This platform has a native token called Big Bang. <br>

          which is for an immediate loan as well as a suitable alternative for
          your assets in order to avoid possible losses
        </p>
        <div class="flex gap-8 items-center">
          <button class="w-[160px] text-[18px] bg-[#0058AD]  transition-all  font-Oswald-Regular tracking-wider px-5 py-4 rounded-3xl">Take Loan</button>
          <button class="w-[200px] text-[18px] bg-[#303030] hover:bg-[#0058AD] transition-all border font-Oswald-Regular tracking-wider px-5 py-4 rounded-3xl">More Information?</button>
        </div>
      </div>
      <div class="w-[44%] relative flex flex-col">
        <div class="w-full wow fade">
                    <div class="relative z-30 wow fadeInUp" data-wow-delay="0.8s">
                        <img class="imagerotate1" src="../assets/img/hero-Artizzens-1.png" alt="" >
                   </div>
                   <div class="relative z-10 wow fadeInUp" data-wow-delay="0.9s">
                       <img class="imagerotate2" src="../assets/img/hero-Artizzens-2.png" alt="" >
                   </div>
                   <div class="relative z-10 wow fadeInUp" data-wow-delay="1s">
                        <img class="imagerotate3" src="../assets/img/hero-Artizzens-3.png" alt="" >
                   </div>
                   <div class="relative z-10 wow fadeInUp" data-wow-delay="1.1s">
                        <img class="imagerotate4" src="../assets/img/hero-Artizzens-4.png" alt="" >
                   </div>
                   <div class="relative z-10 wow fadeInUp" data-wow-delay="1.2s">
                        <img class="imagerotate5" src="../assets/img/hero-Artizzens-5.png" alt="" >
                   </div>
                   <div class="relative z-10 wow fadeInUp" data-wow-delay="1.3s">
                        <img class="imagerotate6" src="../assets/img/hero-Artizzens-6.png" alt="" >
                   </div>
                   <div class="relative z-20 wow fadeInUp" data-wow-delay="1.4s">
                        <img class="imagerotate7" src="../assets/img/section3.png" alt="" >
                    </div>
                    <div class="relative z-20 wow fadeInUp" data-wow-delay="1.5s">
                        <img class="imagerotate8" src="../assets/img/section3.png" alt="" >
                    </div>
                   <div class="boslukhm"></div>
        </div>
      </div>
    </div>
    <div class=" flex flex-col">
    <img src="../assets/img/section4.png" alt="">
    <div class="flex relative w-full justify-between gap-10" >
        <img class="absolute top-[-200px] left-0" src="../assets/img/section.png" alt="">
      <div class="flex flex-col w-[50%] ps-10 gap-8">
        <p class="text-[42px] font-Oswald-Regular tracking-wider"> <span class=" font-Oswald-Bold text-blue-400"> Big Bang </span> Offer A simple deal</p>
        <p data-aos="fade-right" class="text-[14px] font-Oswald-Regular text-[#ACB4C2]">When you buy cryptocurrency in an exchange, two situations happen, for example, if you buy some bitcoin,
you naturally wait for the price of bitcoin to increase and sell the bitcoin at a suitable price and make a profit. <br>
And the other situation is that the price of Bitcoin will decrease, and if this happens, <br> you can do three types of
behavior:</p>
          <div data-aos="fade-right" class="flex flex-col gap-1">
            <p class="font-Oswald-Medium text-blue-300 text-[24px]">First Scenario</p>
          <p class="text-[14px] font-Oswald-Regular text-[#ACB4C2]">In the first case, sell Bitcoin and further reduction will be prevented and you will suffer less loss.</p>
          </div>
          <div data-aos="fade-right" class="flex flex-col gap-1">
            <p class="font-Oswald-Medium text-blue-300 text-[24px]">Seccond Scenario</p>
          <p class="text-[14px] font-Oswald-Regular text-[#ACB4C2]">In the second case, hold Bitcoin and wait for the market to rise and the price of Bitcoin to increase, which is
                                good, but it may take a long time and your capital will not be released for a long time.</p>
          </div>
          <div data-aos="fade-right" class="flex flex-col gap-1 ">
            <p class="font-Oswald-Medium text-blue-300 text-[24px]">Third Scenario</p>
          <p class="text-[14px] font-Oswald-Regular text-[#ACB4C2]">The third way is to deposit bitcoins in a lending platform. This allows you to keep your bitcoins and not sell
                                them in falling markets and not lose money.
                                In this case, you receive a loan equal to the value of Bitcoin and you can buy Bitcoin at the new price and start
                                a new transaction.
                                The third option, that is, receiving a loan, is the best choice for a trader, because it prevents possible losses
                                and starts a new transaction, and at the same time earns double the profit.</p>
          </div>
      </div>
      <div class="flex flex-col w-[50%] " data-aos="fade-left">
        <img src="../assets/img/hero-Artizzens-8.png" alt="">
      </div>
    </div>
    </div>
    <div class="flex flex-col relative w-full gap-20">
    <p data-aos="fade-up" class="text-[28px] font-Oswald-Bold tracking-wider text-center text-white py-8">
      So What We Offer ?
    </p>
    <img class="absolute top-0 left-0" src="../assets/img/section5.png" alt="">
    <div class="grid grid-cols-12 w-[90%] gap-10 mx-auto">
      <div class="lg:col-span-6 sm:col-span-full flex flex-col gap-10">
      <Offer1 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">increase in the price of Bitcoin</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">The first profit from the increase in the price of Bitcoin, which is the collateral, and the second profit from your new transaction, which is the loan received. Note: There are famous platforms that have been useful for small and large traders, but they also have disadvantages</p>
      </Offer1>
      <Offer3 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">Voting System</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">The Big Bang platform is flexible. Big Bang members can increase or decrease the percentage of loans by voting.</p>
      </Offer3>
      <Offer4 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">Market Fluctuations</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">The biggest concern of people when borrowing from platforms is market fluctuations and the seizure of their collateral. If you have ever taken a loan and for example deposited Bitcoin as collateral, you have noticed that your collateral will be confiscated when the price of Bitcoin decreases. This happens because the value of your collateral (Bitcoin) is equal to the value of the loan amount.
</p>
      </Offer4>
      </div>
      <div class="lg:col-span-6 sm:col-span-full flex flex-col gap-10 w-full">
      <Offer2 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">Not Confiscated !!
</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">Also, on the Big Bang platform, people's collateral is not confiscated even when the markets are down. In Big Bang, due to the fact that users' collateral is chained, the value of the collateral does not decrease, and therefore the collateral of individuals is never confiscated.

</p>
      </Offer2>
      <Offer1 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">Amount of loans
</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">Another problem that exists in lending platforms is the amount of loans they pay. Lending platforms pay 80% of its value for Bitcoin, which is very valuable, and 40% for Dogecoin. This problem does not exist in the Big Bang platform.

</p>
      </Offer1>
      <Offer3 data-aos="fade-up" data-aos-delay="200">
        <p class="card-title font-Oswald-Bold tracking-wider">Learn More ?
</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">Click <a class="font-Oswald-Bold text-blue-500 uppercase underline" href="#">here</a> to learn more about Big Bang and its future goals. And you can also be aware of the news and goals of the Big Bang project through Instagram and Twitter.</p>
      </Offer3>
      </div>
    
    </div>
    <div class="flex justify-between relative w-[90%] mx-auto py-12">
      <img src="../assets/img/section6.png" class="absolute top-0" alt="">
      <div class="flex w-20% flex-col bg-black bg-opacity-20 p-4 rounded-xl border border-gray-900 z-10  gap-1 items-center font-Oswald-Bold text-[24px]">
        <p>100000</p>
        <p class="text-[18px] text-gray-300 hover:text-blue-500 transition-all">Current major bitcoin (BTC)</p>
      </div>
      <div class="flex w-[20%] bg-black bg-opacity-20 p-4 rounded-xl border border-gray-900 z-10 flex-col gap-1 items-center font-Oswald-Bold text-[24px]">
        <p>100000</p>
        <p class="text-[18px] text-gray-300 hover:text-blue-500 transition-all">Tokens Used
</p>
      </div>
      <div class="flex w-[20%] bg-black bg-opacity-20 p-4 rounded-xl border border-gray-900 z-10 flex-col gap-1 items-center font-Oswald-Bold text-[24px]">
        <p>100000</p>
        <p class="text-[18px] text-gray-300 hover:text-blue-500 transition-all">Bitcoins Sold
</p>
      </div>
      <div class="flex w-[20%] flex-col gap-1 bg-black bg-opacity-20 p-4 rounded-xl border border-gray-900 z-10 items-center font-Oswald-Bold text-[24px]">
        <p>100000</p>
        <p class="text-[18px] text-gray-300 hover:text-blue-500 transition-all">Worldwide
</p>
      </div>
    </div>
    <div class="flex flex-col gap-10 w-[90%] mx-auto ">
      <h3 class="text-center font-Oswald-Bold text-[38px] ">Big Bang Featurs</h3>
      <Offer1 data-aos="fade-right"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title1 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text1 }}
          </p>
      </Offer1>
      <Offer2 data-aos="fade-left"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title2 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text2 }}
          </p>
      </Offer2>
      <Offer3 data-aos="fade-right"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title3 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text3 }}
          </p>
      </Offer3>
      <Offer4 data-aos="fade-left"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title4 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text4 }}
          </p>
      </Offer4>
      <Offer1 data-aos="fade-right"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title5 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text5 }}
          </p>
      </Offer1>
      <Offer2 data-aos="fade-left"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title6 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text6 }}
          </p>
      </Offer2>
      <Offer3 data-aos="fade-right"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title7 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text7 }}
          </p>
      </Offer3>
      <Offer4 data-aos="fade-left"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title8 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text8 }}
          </p>
      </Offer4>
      <Offer1 data-aos="fade-right"  data-aos-delay="200" :key="i">
        <p class="card-title font-Oswald-Bold tracking-wider">{{ json.EN.title9 }}</p>
        <p class="card-description font-Oswald-Regular text-[14px] tracking-wider text-gray-500">
          {{ json.EN.text9 }}
          </p>
      </Offer1>
    </div>
    </div>
    <footer1></footer1>
  </div>
</template>
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
