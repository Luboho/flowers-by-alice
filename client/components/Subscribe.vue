<template>
  <div class="border border-aliceBlue mt-48px container mx-auto sm:ml-0">
    <div class="p-24px">
      <h1>Keep up to date</h1>
      <p>Receive email with our articles, offers and products.</p>

      <div class="mt-24px">
      <p class="text-red-600 text-sm -ml-4" v-text="errors.email ? errors.email[0] : ''"></p>
        <form class="flex flex-col" @submit.prevent="submit">
          <!-- Email Input -->
            <div class="relative pt-6">
              <label for="email" class="absolute tracking-widest text-darkPurple text-xs pl-2 pt-2">
                  E-mail &nbsp; *
              </label>
                  <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="pt-8 rounded-t bg-gray-400 text-sm bg-opacity-25 w-full p-2 text-white outline-none focus:bg-opacity-75 focus:text-gold-500"
                      name="email"
                      placeholder="your-email@email.com"
                      value=""
                      autocomplete="email"
                      @click="clearErrors"
                  >

            </div>
          <button class="bg-alicePink tracking-wide rounded-b-lg transition duration-250 ease-in-out transform active:scale-75"
                  type="submit"><span class="text-gray-100"> Subscribe</span>
            <i class="material-icons text-gray-100 align-middle p-2">east</i>
          </button>
        </form>
        <p class="text-xs mt-24px text-gray-400 opacity-75">
          By subscribing you agree to email communications from Flowers by Alice. Privacy Policy
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",

  data: () => ({
    form: {
      email: ""
    },
    errors: []
  }),

  methods: {
    async submit(e) {
      try {
        await this.$axios.$get('sanctum/csrf-cookie');
        await this.$axios.post('/api/subscribe', {
          email: this.form.email
        }).then((resp) => this.$store.dispatch('uiMessages/getUiMessage', resp.data))
      } catch (e) {
        if(e.response.data.errors) {
          this.errors = e.response.data.errors;
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

</style>
