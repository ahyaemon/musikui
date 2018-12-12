<template>
    <div>
        This is Mgr child second.
        <p>
            <router-link :to="{ name: 'mgr1' }">mgr child index</router-link>
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