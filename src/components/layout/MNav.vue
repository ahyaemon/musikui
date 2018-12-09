<template>
    <header id="luxbar" class="luxbar-static">
        <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox" v-model="checked"/>
        <div class="luxbar-menu luxbar-menu-left luxbar-menu-dark">
            <ul class="luxbar-navigation" @click="close_menu">
                <li class="luxbar-header">
                    <router-link to="/" class="luxbar-brand">虫食い算やろうぜ！！</router-link>
                    <label class="luxbar-hamburger luxbar-hamburger-spin"
                    id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                </li>
                <li v-for="(link, ilink) in links" :key="ilink" class="luxbar-item">
                    <router-link :to="link.url">{{ link.title }}</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
    import "luxbar/build/luxbar.min.css"
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"

    @Component
    export default class MNav extends Vue {

        @Prop() private links!: any[]
        private checked: boolean = false

        private close_menu() {
            this.checked = false
        }

    }
</script>

<style lang="scss" scoped>
    header {
        border-bottom: solid 5px #BA6262;
    }

    .luxbar-brand {
        padding: 18px 0px 18px 10px;
    }
</style>