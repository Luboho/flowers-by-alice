<template>
  <div class="mx-0 h-auto mt-32">
    <div class="max-w-1800px m-24px sm:m-64px">
      <!-- Header -->
      <h1>Contact</h1>
      <p>
        Please submit your enquiry using the form below, we aim to reply within 24 hours.
      </p>
      <div class="flex justify-start items-center flex-wrap space-x-2">
        <p>
          Alternatively please call :
        </p>
        <a class="text-aliceBlue whitespace-nowrap" href="tel:+ 07971 876 547"> 07971 876 547</a>
      </div>
      <p>
        Best wishes
      </p>
      <p class="font-semibold text-lg ml-6">
        Alice
      </p>
    <!-- End of Header -->

    <!-- Contact Form -->
    <div class="mt-48px block mx-auto">
        <h1>Contact Form</h1>

        <form class="mx-auto font-overlock " @submit.prevent="submit">
          <div class="md:flex justify-between">
            <!-- First Name Input -->
            <div class="py-3">
              <label class="tracking-widest block mx-auto text-gray-400 text-sm w-full md:w-80"
                  for="name" >
                  First name
              </label>
                  <div>
                      <input
                          id="name"
                          v-model="form.name"
                          class="block mx-auto align-middle p-4 rounded bg-gray-200 text-sm bg-opacity-50 w-full md:w-80 text-darkPurple outline-none focus:shadow-inner focus:bg-opacity-75 focus:text-darkPurple"
                          type="name"
                          name="name"
                          value=""
                          placeholder="Jane"
                          autocomplete="name"
                          @click="clearErrors"
                      >
                      <p class="text-red-600 text-sm" v-text="errors.name ? errors.name[0] : ''"></p>
                  </div>
            </div>
              <!-- Last Name Input -->
              <div class="py-3">
                <label class="tracking-widest block mx-auto text-gray-400 text-sm w-full md:w-80"
                    for="surname" >
                    Last name
                </label>
                <div>
                    <input
                        id="surname"
                        v-model="form.surname"
                        class="block mx-auto align-middle p-4 rounded bg-gray-200 text-sm bg-opacity-50 w-full md:w-80 text-darkPurple outline-none focus:shadow-inner focus:bg-opacity-75 focus:text-darkPurple"
                        type="surname"
                        name="surname"
                        value=""
                        placeholder="Doe"
                        autocomplete="surname"
                        @click="clearErrors"
                    >
                    <p class="text-red-600 text-sm" v-text="errors.name ? errors.name[0] : ''"></p>
                </div>
            </div>
          </div>

          <div class="md:flex justify-between">
              <!-- Email Input -->
              <div class="py-3">
                <label class="tracking-widest block mx-auto text-gray-400 text-sm w-full md:w-80"
                    for="email" >
                    Email
                </label>
                <div>
                    <input
                        id="email"
                        v-model="form.email"
                        class="block mx-auto align-middle p-4 rounded bg-gray-200 text-sm bg-opacity-50 w-full md:w-80 text-darkPurple outline-none focus:shadow-inner focus:bg-opacity-75 focus:text-darkPurple"
                        type="email"
                        name="email"
                        value=""
                        placeholder="janedoe@email.com"
                        autocomplete="email"
                        @click="clearErrors"
                    >
                    <transition name="fade">
                      <p class="text-red-600 text-sm" v-text="errors.email ? errors.email[0] : ''"></p>
                    </transition>
                </div>
              </div>

            <!-- Mobile Num Selection -->
            <div class="py-3">
                <label class="tracking-widest block mx-auto text-gray-400 text-sm w-full md:w-80"
                    for="phone" >
                    Phone
                </label>
                <div>
                  <input
                      id="phone"
                      v-model="form.phone"
                      class="block mx-auto align-middle p-4 rounded bg-gray-200 text-sm bg-opacity-50 w-full md:w-80 text-darkPurple outline-none focus:shadow-inner focus:bg-opacity-75 focus:text-darkPurple"
                      name="phone"
                      value=""
                      placeholder="123 456 7890"
                      autocomplete="email"
                      @click="clearErrors"
                  >
                  <transition  name="fade">
                    <p class="text-red-600 text-sm" v-text="errors.phone ? errors.phone[0] : ''"></p>
                  </transition>
              </div>
            </div>

          </div>
        <!-- Message -->
            <div class="py-3 flex flex-col justify-start">
                <label class="tracking-widest block text-gray-400 text-sm w-full sm:w-80 md:w-full"
                    for="message" >
                    Message *
                </label>
                <div>
                  <textarea
                      id="message"
                      v-model="form.message"
                      class="block mx-auto align-middle p-4 rounded bg-gray-200 text-sm bg-opacity-50 w-full text-darkPurple outline-none focus:shadow-inner focus:bg-opacity-75 focus:text-darkPurple"
                      name="message"
                      rows="5"
                      placeholder="Here comes your message..."
                      @click="clearErrors"
                  ></textarea>
                  <transition name="fade">
                    <p class="text-red-600 text-sm" v-text="errors.message ? errors.message[0] : ''"></p>
                  </transition>
                </div>
                <div class="">
                    <button class="bg-alicePink block mx-auto sm:w-80 tracking-widest rounded py-3 px-6 my-2 transition duration-250 ease-in-out transform active:scale-75"
                            type="submit">
                            <span class="text-gray-100">
                              Submit
                            </span>
                    </button>
                </div>

            </div>
        </form>
    </div>
    <!-- End Contact Form -->

    <!-- Subscribe -->
        <Subscribe />
    </div>
  </div>
</template>

<script>
import Subscribe from './../components/Subscribe.vue'
export default {
  name: "Contact",
    components: {
      Subscribe
    },
    data: () => ({
        form: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: ""
        },
        errors:[],
    }),

    methods: {
        async submit(e) {
          if(this.form.email === "" || this.form.email === "") {
            this.errors = {
                            phone:["Please, let at least one contact detail for us."],
                            email: [ "Please, let at least one contact detail for us."]
                          }
          } else {
            try {
                await this.$axios.$get('sanctum/csrf-cookie');
                await this.$axios.post('/api/contact-us', {
                    name: this.form.name,
                    surname: this.form.surname,
                    email: this.form.email,
                    phone: this.form.phone,
                    message: this.form.message
                }).then(() => console.log)
                  .then(() => this.$router.replace({path: '/'}));
            } catch (e) {
                if(e.response.data.errors) {
                    this.errors = e.response.data.errors;
                }
            }
          }
        },
        clearErrors(e) {
            if(this.errors) {
                setTimeout(() => {
                const fieldName = [e.target.name][0];
                this.errors[fieldName] = "";
                }, 1000);
            }
        },
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
