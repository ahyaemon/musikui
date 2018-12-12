<template>
    <div>
        This is Main child index.
        <p>
            <router-link :to="{ name: 'main2' }">main child second </router-link>
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class MainChildIndex extends Vue {
    }
</script>