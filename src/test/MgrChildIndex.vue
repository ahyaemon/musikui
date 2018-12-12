<template>
    <div>
        This is Mgr child index.
        <p>
            <router-link :to="{ name: 'mgr2' }">mgr child second </router-link>
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class MgrChildIndex extends Vue {
    }
</script>