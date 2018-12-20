<template>
    <h2 class="m-card-title">
        <slot/>
    </h2>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"

    @Component
    export default class MCardTitle extends Vue {}
</script>

<style lang="scss" scoped>
    .m-card-title {
        padding: 4px 0px 4px 10px;
        color: white;
        background: linear-gradient(90deg, #5a3131, white);
        // background-color: #915d5d;
        // background: linear-gradient(90deg, #5a3131, white);
    }
</style>
