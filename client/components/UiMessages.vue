<template>
    <div class="w-screen h-auto absolute">
        <transition name="show">
            <div v-if="uiMessage">
                <div class="flex justify-center fixed z-50 w-screen">
                    <div class="fixed top-5 text-white text-center rounded-lg text-xs px-6 z-30 py-3 bg-opacity-75"
                        :class="bgColor">
                        {{ msg }}
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "UiMessages",
    data: () => ({
        bgColor: "",
        showMsg: false
    }),
    computed: {
        ...mapState({
            uiMessage: state => state.uiMessages.uiMessage.data
        }),
        msg() {
            let colorized;
                if(this.uiMessage) {

                if(this.uiMessage.errors) {
                    colorized = this.uiMessage.errors
                } else if (this.uiMessage.success) {
                    colorized = this.uiMessage.success
                } else if (this.uiMessage.warning) {
                    colorized = this.uiMessage.warning
                } else if (this.uiMessage.message) {
                    colorized = this.uiMessage.message
                }
            }
            return colorized;
        }
    },
    watch: {
        uiMessage: {
            deep: true,
            handler(newVal, oldVal) {
                if(newVal) {
                    if(this.uiMessage.errors) {
                        this.bgColor = "bg-red-600";
                    } else if (this.uiMessage.success) {
                        this.bgColor = "bg-green-600" ;
                    } else if (this.uiMessage.warning) {
                        this.bgColor = "bg-yellow-500";
                    } else if(this.uiMessage.message) {
                        this.bgColor = "bg-red-500";
                    }
                    // Remove Message
                    this.removeUiMessage();
                }
            }
        }
    },
    methods: {
        removeUiMessage() {
            if(this.msg) {
                setTimeout(() => {
                    this.$store.dispatch('uiMessages/getUiMessage', {})
                }, 7000);
            }
        }
    },
}
</script>

<style>
.show-enter-active,
.show-leave-enter {
    transform: translateX(0);
    transition: all .3s linear;
}
.show-enter,
.show-leave-to {
    transform: translateX(100%);
}
</style>

