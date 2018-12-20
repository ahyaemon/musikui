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
    $red: rgb(110, 43, 43);
    .m-card-subtitle {
        font-weight:bold;
        padding: 4px 0px 4px 10px;
        color: $red;
        &:after {
            content:"";
            display:block;
            height:2px;
            width:100%;
            background: linear-gradient(90deg, $red, white);
        }
    }
</style>
