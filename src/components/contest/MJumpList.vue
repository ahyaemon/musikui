<template>
    <div>
        <p v-for="(musikui, imusikui) in musikuis" :key="imusikui" class="jump">
            <a href="#" v-scroll-to="'#a' + (imusikui + 1)" >
                <span>Q{{ imusikui + 1 }}(Lv. {{ musikui.level }} {{ musikui.difficulty }})へJump!!</span>
                <fas icon="dove"/>
            </a>
        </p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import { Component, Prop } from "vue-property-decorator"
    import MMusikuiCell from "./MMusikuiCell.vue"
    import Musikui from "@/domain/Musikui"

    @Component
    export default class MJumpList extends Vue {

        @Prop() private musikuis!: Musikui

    }
</script>

<style lang="scss" scoped>
    .jump {
        a {
            text-decoration: none;
        }
    }
</style>