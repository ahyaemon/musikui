<template>
    <button type="button">
        <slot/>
    </button>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"

    @Component
    export default class MPinkButtom extends Vue {}
</script>

<style lang="scss" scoped>
    button {
        border: none;
        color: white;
        font-weight: bold;
        padding: 10px 40px 10px 40px;
        margin: 10px;
        border-radius: 4px;
        background-color: rgb(145, 72, 72);
    }
</style>
