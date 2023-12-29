<template>
<div class="container1 w-full opacity-75 ">

  <div class="gradient-cards1">
    <div class="card">
      <div class="container-card bg-blue-box flex flex-col gap-4">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4582)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4582)" stroke-width="2"></rect>
          <path d="M90.9405 64.775L88.0155 69.55L85.1155 64.775H80.0655L85.5155 72.85L79.5905 82H84.4905L88.0155 76.175L91.5155 82H96.4405L90.4905 72.85L95.9405 64.775H90.9405Z" fill="#87A1FF"></path>
          <path d="M44.9833 35.52L27.3433 43.92V52.53L35.1833 49.17V82H44.9833V35.52ZM71.37 35.52L53.73 43.92V52.53L61.57 49.17V82H71.37V35.52Z" fill="#87A1FF"></path>
          <defs>
            <linearGradient id="paint0_linear_1366_4582" x1="120.194" y1="119.827" x2="-13.1225" y2="17.1841" gradientUnits="userSpaceOnUse">
              <stop stop-color="#61A0FF" stop-opacity="0.7"></stop>
              <stop offset="0.489583" stop-color="#61A0FF" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#61A0FF" stop-opacity="0.7"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_1366_4582" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
              <stop stop-color="#87A1FF"></stop>
              <stop offset="1" stop-color="#16161D" stop-opacity="0.2"></stop>
            </radialGradient>
          </defs>
        </svg>
        <slot />

      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>


.container1 {
  padding: 0 !important;
  margin-right: auto;
  margin-left: auto;
}

.gradient-cards1 {
  gap: 32px;
}

.card {

  border: 0;
  width: 100%;
  margin-inline: auto;
}

.container-card {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(71deg, #080509, #1a171c, #080509);
  background-clip: padding-box;
  border-radius: 45px;
  padding: 40px;
  img {
    margin-bottom: 32px;
  }
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
  position: relative;
}

.bg-green-box::after,
.bg-white-box::after,
.bg-yellow-box::after,
.bg-blue-box::after {
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  content: "";
  z-index: -1;
  border-radius: 45px;
}

.bg-green-box::after {
  background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
}

.bg-white-box::after {
  background: linear-gradient(71deg, #121013, #b0afb0, #121013);
}

.bg-yellow-box::after {
  background: linear-gradient(71deg, #110e0e, #afa220, #110e0e);
}

.bg-blue-box::after {
  background: linear-gradient(71deg, #0c0a0e, #5f6fad, #0c0a0e);
}

.card-title {
  font-weight: 600;
  color: white;
  letter-spacing: -0.02em;
  line-height: 40px;
  font-style: normal;
  font-size: 28px;
  padding-bottom: 8px;
}

.card-description {
  font-weight: 600;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 13px;
}
</style>