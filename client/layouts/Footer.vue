<template>
  <div class="h-auto bg-gray-200 pt-64px flex justify-center">
    <div class="w-screen px-24px md:px-64px">

      <div>
        <img class="mx-auto" src="/logo.png" alt="Flovers by Alice" title="Flowers by Alice">
      </div>
      <!-- Nav -->
        <div class="mt-48px font-overlockSC">
          <ul class="flex items-center flex-wrap justify-center space-x-6 text-aliceBlue text-sm">
            <!-- Expandable -->
            <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                  transition duration-250 ease-in-out"
                @mouseover="submenu = true" @mouseleave="submenu = false">
                <div class="flex items-center transition duration-300 ease-in-out transform active:scale-75">
                  <nuxt-link class=""
                            :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/' }"
                            to="/">Occassions
                  </nuxt-link>
                  <i class = "material-icons cursor-pointer">arrow_drop_down</i>
                </div>
                <transition name="slide">
                  <div v-if="submenu" class="expendable text-aliceBlue absolute px-10 pt-10 pb-5 bg-gray-200 bg-opacity-90 text-sm flex flex-col ml-7">
                    <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                      <nuxt-link to="/wedding" class="mb-2"
                                :class="{ 'border-b-2 border-alicePink text-alicePink': currentPath == '/wedding' }"
                                @click="isOpen = false" >Wedding
                      </nuxt-link>
                    </div>
                    <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                      <nuxt-link to="/workshop" class="my-2"
                                :class="{ 'border-b-2 border-alicePink text-alicePink': currentPath == '/workshop' }"
                                @click="isOpen = false" >Workshops
                      </nuxt-link>
                    </div>
                    <div class="transition hover:text-alicePink hover:font-bold font-medium duration-300 ease-in-out transform active:scale-75">
                      <nuxt-link to="/funeral" class="my-2"
                                :class="{ 'border-b-2 border-alicePink text-alicePink': currentPath == '/funeral' }"
                                @click="isOpen = false" >Funerals
                      </nuxt-link>
                    </div>
                  </div>
                </transition>
            </li>
            <!-- End of Expandable -->
            <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium transition duration-250 duration-300 ease-in-out transform active:scale-75">
                <a class="whitespace-nowrap" href="">Latest Events</a>
            </li>
            <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium transition duration-300  ease-in-out transform active:scale-75">
                <a href="#gallery">Gallery</a>
            </li>
            <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                  transition duration-250 ease-in-out transform active:scale-75">
                <nuxt-link class="whitespace-nowrap"
                          :class="{ 'border-b-2 border-alicePink text-alicePink': currentPath == '/home-design' }"
                          to="/home-design">Home Design</nuxt-link>
            </li>
            <li class="leading-10 -mt-1 hover:text-alicePink hover:font-bold font-medium
                                  transition duration-250 ease-in-out transform active:scale-75">
                <nuxt-link class=""
                          :class="{ 'border-b-2 border-alicePink text-alicePink': currentPath == '/contact' }"
                          to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      <!-- End of Nav -->
      <!-- Contact -->
        <div class="mt-48px font-overlock flex flex-wrap justify-evenly">
          <div class="my-2">
            <h1>Direct contact</h1>
            <div class="text-aliceBlue text-sm">
              <div class="flex justify-start place-items-center space-x-2">
                <i class = "text-2xl material-icons">alternate_email</i>
                <a href="'mailto:">admin@admin.com</a>
              </div>
              <div class="flex justify-start space-x-2 place-items-center text-aliceBlue">
                <i class = "text-2xl material-icons">phone_android</i>
                <a href="'tel':">3434234234</a>
              </div>
            </div>
          </div>
          <div class="my-2">
            <h1>Follow us</h1>
            <div class="text-aliceBlue text-sm">
              <div class="flex justify-start items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="-mb-2" height="36" width="32" viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/></svg>
                <a class="mt-1" href="https://www.facebook.com/FlowersAliceFlowers">Facebook</a>
              </div>
              <div class="flex justify-start space-x-2 mt-1 place-items-center  text-aliceBlue">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32" width="32" viewBox="-19.5036 -32.49725 169.0312 194.9835"><defs><radialGradient  id="c" fy="578.088" fx="158.429" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)" gradientUnits="userSpaceOnUse" xlink:href="#a" r="65" cy="578.088" cx="158.429"/><radialGradient id="d" fy="473.455" fx="147.694" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)" gradientUnits="userSpaceOnUse" xlink:href="#b"  r="65" cy="473.455" cx="147.694" /><linearGradient id="b"><stop stop-color="#3771c8" offset="0"/><stop offset=".128" stop-color="#3771c8"/><stop stop-opacity="0" stop-color="#60f" offset="1"/></linearGradient><linearGradient id="a"><stop stop-color="#fd5" offset="0"/><stop stop-color="#fd5" offset=".1"/><stop stop-color="#ff543e" offset=".5"/><stop stop-color="#c837ab" offset="1"/></linearGradient></defs><path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" fill="url(#c)"/><path d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" fill="url(#d)"/><path d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" fill="#fff"/></svg>
                <a href="https://www.instagram.com">Instagram</a>
              </div>
              <div class="flex justify-start space-x-2 content-center place-items-center  text-aliceBlue">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>
                <a href="https://twitter.com/?lang=en">Twitter</a>
              </div>
              <div class="flex justify-start space-x-2 content-center place-items-center  text-aliceBlue">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/></svg>
                <a href="https://youtube.com">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      <!-- End of Contact -->
      <!-- Subscribe -->
      <Subscribe />
      <!-- End of Subscribe -->
      <div class="flex flex-wrap justify-center pt-48px pb-24px text-xs text-gray-400 ">
        <p>© 2021 Flowers by Alice.</p>
        <p>Privacy Policy & Cookie Policy.</p>
        <p> Created and Designed by ZipZap-digital. </p>
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from './../components/Subscribe.vue'
export default {
  components: {
    Subscribe
  },
  data() {
    return {
      submenu: false
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
}
</script>

<style>
.expendable {
  transform-origin: top;
  transition: transform .4s ease-in-out;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
</style>
