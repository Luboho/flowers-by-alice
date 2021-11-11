<template>
<transition name="fade">

  <div v-show="scrollNav" class="relative z-40">
  <nav id="nav" class="w-full block mx-auto left-0 bg-lightPink top-0 fixed h-20 p-6 shadow-lg ease-in-out transform transition-all duration-1000"
                :class="scrollNav ? 'translate-y-0' : '-translate-y-full'">
    <div class="flex align-items-center justify-between mx-auto max-w-1800px">

      <!-- Nav logo -->
      <div>
        <img class="w-36 h-auto -mt-5" src="/logo.png" alt="Flowers by Alice">
      </div>

      <!-- Mobile toggle / Burger icon -->
      <div class="md:hidden">
        <button class="transition duration-300 ease-in-out transform focus:scale-75"
                @click="drawer">
          <svg
            class="h-10 w-10 fill-current text-darkPurple"
            fill="none" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2"
            viewBox="0 0 32 40" x="0px" y="0px" stroke="currentColor">
                  <path d="M26,8H6a1,1,0,0,0,0,2H26a1,1,0,0,0,0-2ZM6,17H20a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Zm17,5H6a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden font-overlockSC md:block">
        <ul class="flex items-center space-x-6 text-aliceBlue text-lg">
          <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium transition duration-250 duration-300 ease-in-out transform active:scale-75">
              <a href="">Latest Events</a>
          </li>
          <!-- Expandable -->
          <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out"
              @mouseover="submenu = true" @mouseleave="submenu = false">
              <div class="transition duration-300 ease-in-out transform active:scale-75">
                <nuxt-link class=""
                          :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/' }"
                          to="/">Occassions
                </nuxt-link>
                <i class = "absolute top-8 left-8 material-icons">arrow_drop_down</i>
              </div>
              <transition name="slide">
                <div v-if="submenu" class="expendable text-aliceBlue absolute px-10 pt-10 pb-5 bg-lightPink bg-opacity-90 text-sm flex flex-col ml-7">
                  <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                    <nuxt-link :to="{ name: 'wedding'}" class="mb-2"
                              :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/wedding' }"
                              >Wedding
                    </nuxt-link>
                  </div>
                  <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                    <nuxt-link :to="{ name: 'workshop'}" class="my-2"
                               :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/workshop' }"
                               >Workshops
                    </nuxt-link>
                  </div>
                  <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                    <nuxt-link :to="{ name: 'funeral'}" class="my-2"
                              :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/funeral' }"
                              >Funerals
                    </nuxt-link>
                  </div>
                </div>
              </transition>
          </li>
          <!-- End of Expandable -->
          <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium transition duration-300  ease-in-out transform active:scale-75">
              <a href="#gallery">Gallery</a>
          </li>
          <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75">
              <nuxt-link class=""
                         :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/home-design' }"
                         to="/home-design">Home Design</nuxt-link>
          </li>
          <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75">
              <nuxt-link class=""
                         :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/contact' }"
                         to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Modal -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div v-show="isOpen" class="z-20 fixed w-screen h-screen top-0 left-0 right-0 bottom-0 transition-opacity" @keydown.esc="isOpen = false" >
            <div class="absolute inset-0 bg-black opacity-50" tabindex="0" @click="isOpen = false"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside class="z-40 p-5 not-sr-only md:sr-only transform top-0 left-0 w-64 bg-lightPink fixed h-screen overflow-auto ease-in-out transition-all duration-300"
             :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4 transition ease-in-out transform active:scale-75" @click=" isOpen = false">
            <svg
              class="w-6 h-6 text-darkPurple"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span class="flex w-full items-center p-4" @click="isOpen = false" >
        </span>

        <ul class="divide-y font-overlockSC text-aliceBlue">
          <li>
            <a href="#latest" class="my-4 inline-block hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75"
              @click="isOpen = false" >
              Latest events
            </a>
          </li>
          <!-- Expandable -->
          <li @mouseover="submenu = true" @mouseleave="submenu = false">
              <div class="flex items-center" @click="isOpen = false">
                <nuxt-link :to="{ name: 'index' }" class="my-4 inline-block hover:text-alicePink hover:font-bold font-medium transition duration-250 ease-in-out transform active:scale-75"
                           :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/' || currentPath == '/wedding' || currentPath == '/workshop' || currentPath == '/funeral' }"
                           >Occasions
                </nuxt-link>
                <i class = "material-icons">arrow_drop_down</i>
              </div>
              <transition name="slide">
                <div v-if="submenu" class="z-50 expendable text-aliceBlue absolute px-10 pt-10 pb-5 bg-lightPink bg-opacity-90 text-sm flex flex-col ml-7 border">
                  <div class="mb-2 hover:text-alicePink hover:font-bold font-medium transition duration-250 ease-in-out transform active:scale-75"
                       @click="isOpen = false">
                    <nuxt-link :to="{ name: 'wedding'}"
                               :class="{ 'text-alicePink': currentPath == '/wedding' }"
                               >Wedding
                    </nuxt-link>
                  </div>
                  <div class="my-2 hover:text-alicePink hover:font-bold font-medium transition duration-250 ease-in-out transform active:scale-75"
                       @click="isOpen = false">
                    <nuxt-link :to="{ name: 'workshop'}"
                               :class="{ 'text-alicePink': currentPath == '/workshop' }"
                               >Workshops
                    </nuxt-link>
                  </div>
                  <div class="my-2 hover:text-alicePink hover:font-bold font-medium transition duration-250 ease-in-out transform active:scale-75"
                       @click="isOpen = false">
                    <nuxt-link :to="{ name: 'funeral' }"
                               :class="{ 'text-alicePink': currentPath == '/funeral' }"
                               >Funerals
                    </nuxt-link>
                  </div>
                </div>
              </transition>
          </li>
          <!-- End of Expandable -->
          <li>
            <a href="#gallery" class="my-4 inline-block hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75"
                               @click="isOpen = false" >Gallery
            </a>
          </li>
          <li @click="isOpen = false" >
            <nuxt-link to="/home-design" class="my-4 inline-block hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75"
                       :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/home-design' }"
                       >Home design
            </nuxt-link>
          </li>
          <li @click="isOpen = false" >
            <nuxt-link to="/contact" class="my-4 inline-block hover:text-alicePink hover:font-bold font-medium
                                transition duration-250 ease-in-out transform active:scale-75"
                       :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/contact' }"
                       >Contact
            </nuxt-link>
          </li>
        </ul>

        <div class="follow mt-5">
          <h3 class="text-sm">Follow us:</h3>
          <div class="social flex justify-center space-x-5 mt-4 ">
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="twitter"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="facebook-f"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="instagram"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="youtube"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
        <!-- Nav logo -->
        <img class="w-36 mt-24px h-auto container mx-auto"  src="/logo.png" alt="Flowers by Alice">
      </aside>

    </div>
  </nav>
  </div>
</transition>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      onScrollUp: false,
      submenu: false
    };
  },
  computed: {
    ...mapState({
      scrollNav: state => state.nav.scrollNav
    }),
    currentPath() {
      return this.$route.path;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },

  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
    });
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.expendable {
  transform-origin: top;
  transition: transform .4s ease-in-out;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
</style>

