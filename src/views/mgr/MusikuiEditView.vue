<template>
    <div>
        musikui edit vue<br>
        id: {{ musikui_id }}
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    @Component
    export default class MusikuiMgrView extends Vue {

        get musikui_id(): number {
            return Number(this.$route.params.musikui_id)
        }

    }
</script>

<style lang="scss" scoped>
</style>
