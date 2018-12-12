<template>
    <h3 class="m-card-subtitle">
        <slot/>
    </h3>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"

    @Component
    export default class MCardSubtitle extends Vue {}
</script>

<style lang="scss" scoped>
    .m-card-subtitle {
        font-weight:normal;
        padding: 4px 0px 4px 10px;
        color: white;
        background: linear-gradient(90deg, #306138, white);
    }
</style>
