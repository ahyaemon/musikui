<template>
    <button type="button" :disbled="disabled" :class="{disabled: disabled}">
        <slot/>
    </button>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"

    @Component
    export default class MPinkButtom extends Vue {
        @Prop() private disabled!: boolean
    }
</script>

<style lang="scss" scoped>
    button {
        border: none;
        color: white;
        font-weight: bold;
        padding: 10px 40px 10px 40px;
        margin: 10px;
        border-radius: 4px;
        background-color: rgb(245, 127, 127);
    }

    .disabled {
        background-color: rgb(170, 90, 90);
        color: gray;
    }
</style>
