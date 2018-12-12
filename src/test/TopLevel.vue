<template>
    <div>
        TopLevel
        <hr/>
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