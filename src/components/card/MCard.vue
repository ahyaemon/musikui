<template>
    <div class="m-card">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"

    @Component
    export default class MCard extends Vue {}
</script>

<style lang="scss" scoped>
    .m-card {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 4px;
    }
</style>
