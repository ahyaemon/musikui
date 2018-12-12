<template>
    <div>
        This is Main.
        <p>
            <router-link :to="{ name: 'mgr1' }">mgr</router-link>
        </p>
        <hr>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"

    @Component
    export default class Main extends Vue {
    }
</script>