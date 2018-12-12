<template>
    <div>
        This is Main child second.
        <p>
            <router-link :to="{ name:'main1' }">main child index</router-link>
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class MainChildSecond extends Vue {
    }
</script>