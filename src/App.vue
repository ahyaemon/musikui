<template>
    <div>
        <!-- general と mgr の分岐-->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { Getter, Action } from "vuex-class"

    @Component
    export default class App extends Vue {
    }

</script>

<style lang="scss">
    @import "@/style/init.scss";
</style>
