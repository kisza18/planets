<template>
  <div
    class="navbar w-full bg-transparent border-b-2 border-opacity-20 md:border-none"
  >
    <div
      class="flex items-center justify-between px-6 py-5 tracking-tighter md:justify-center lg:hidden"
    >
      <a href="/" class="text-3xl font-bold text-white leading-none md:py-3"
        >THE PLANETS</a
      >
      <div class="md:hidden">
        <button
          class="hamburger hamburger--squeeze"
          :class="{ active: hamburger }"
          @click="toggleHam"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <ul
      class="flex flex-col text-white px-4 absolute z-10 w-full bg-background-color overflow-hidden"
    >
      <transition style="transition-delay: 0.1s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/mercury"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-mercury-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >MERCURY</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.12s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/venus"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-venus-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >VENUS</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.14s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/earth"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-earth-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >EARTH</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.16s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/mars"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-mars-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >MARS</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.18s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/jupiter"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-jupiter-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >JUPITER</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.2s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/saturn"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-saturn-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >SATURN</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.22s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/uranus"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-uranus-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >URANUS</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
      <transition style="transition-delay: 0.24s">
        <router-link
          v-if="hamburger"
          @click="toggleHam"
          to="/neptune"
          class="flex justify-between items-center border-b-2 border-opacity-20 px-3 py-4"
        >
          <div class="flex items-center">
            <span class="w-5 h-5 bg-neptune-color rounded-full mr-5"></span>
            <span class="text-xl font-mono font-bold tracking-wider" href=""
              >NEPTUNE</span
            >
          </div>
          <i class="fal fa-chevron-right text-xs"></i>
        </router-link>
      </transition>
    </ul>

    <!-- desktop nav -->
    <div class="border-b-2 border-opacity-20">
      <div
        class="desktop_nav hidden md:flex items-center justify-between text-gray-400 pb-6 pt-1 lg:pt-0 px-10 lg:pb-0 mx-auto"
      >
        <a
          href="/"
          class="text-3xl font-bold text-white leading-none hidden lg:flex"
          >THE PLANETS</a
        >
        <div
          class="hidden md:flex items-center justify-evenly w-full lg:w-auto"
        >
          <router-link
            to="/mercury"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >MERCURY</span
              >
            </div>
          </router-link>
          <router-link
            to="/venus"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >VENUS</span
              >
            </div>
          </router-link>
          <router-link
            to="/earth"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >EARTH</span
              >
            </div>
          </router-link>
          <router-link
            to="/mars"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >MARS</span
              >
            </div>
          </router-link>
          <router-link
            to="/jupiter"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >JUPITER</span
              >
            </div>
          </router-link>
          <router-link
            to="/saturn"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >SATURN</span
              >
            </div>
          </router-link>
          <router-link
            to="/uranus"
            class="cta_links flex justify-between items-center mr-8 lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >URANUS</span
              >
            </div>
          </router-link>
          <router-link
            to="/neptune"
            class="cta_links flex justify-between items-center lg:border-t-4 lg:border-transparent lg:py-6"
          >
            <div class="flex items-center">
              <span class="text-md font-mono font-bold tracking-wider" href=""
                >NEPTUNE</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburger: false,
    };
  },
  methods: {
    toggleHam() {
      this.hamburger = !this.hamburger;
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.active:hover {
  opacity: 0.7;
}
.hamburger.active .hamburger-inner,
.hamburger.active .hamburger-inner::before,
.hamburger.active .hamburger-inner::after {
  background-color: #fff;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: 0px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 28px;
  height: 3px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -6px;
}
.hamburger-inner::after {
  bottom: -6px;
}
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.075s 0.12s ease, opacity 0.075s ease;
}
.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.075s 0.12s ease,
    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--squeeze.active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--squeeze.active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease;
}
.hamburger--squeeze.active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.075s ease,
    transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.v-enter-from {
  transform: translateX(500px);
}
.v-enter-active {
  transition: all 0.7s ease-out;
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-from {
  /* transform: translateX(0); */
  opacity: 1;
}
.v-leave-active {
  transition: all 0.2s ease-out;
}
.v-leave-to {
  /* transform: translateX(600px); */
  opacity: 0;
}

.desktop_nav {
  max-width: 1500px;
}

a {
  transition: 0.3s ease-in;
}
a:hover {
  color: white;
  transition: 0.3s ease-in;
}
@media screen and (min-width: 1024px) {
  .cta_links {
    position: relative;
  }
  .cta_links::after {
    content: "";
    position: absolute;
    border-top: 5px solid #419db9;
    top: -5px;
    left: 50%;
    right: 50%;
    transition: all 500ms;
  }
  .cta_links:hover::after {
    right: 0;
    left: 0;
  }
  .router-link-active {
    border-top: 4px solid #419db9;
    color: white;
  }
}
.router-link-active {
  color: white;
}
</style>
