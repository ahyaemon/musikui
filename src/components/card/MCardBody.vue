<template>
    <div class="m-card-body">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"

    @Component
    export default class MCardBody extends Vue {}
</script>

<style lang="scss" scoped>
    .m-card-body {
        padding: 10px;
    }
</style>
