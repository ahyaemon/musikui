<template>
    <div>
        This is Mgr.
        <p>
            <router-link :to="{ name: 'main1' }">main</router-link>
        </p>
        <hr>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class Mgr extends Vue {
    }
</script>