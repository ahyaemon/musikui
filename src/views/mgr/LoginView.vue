<template>
    <div>
        <MCard>
            <MCardTitle>ログイン</MCardTitle>
            <MCardBody>
                <div>
                    <p>name</p>
                    <p><input type="text"/></p>
                </div>
                <div>
                    <p>pass</p>
                    <p><input type="password"/></p>
                </div>
                <MPinkButton @click.native="show_session">GO</MPinkButton>
            </MCardBody>
        </MCard>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { MCard, MCardTitle, MCardSubtitle, MCardBody } from "@/components/card"
    import { MPinkButton } from "@/components/button"

    @Component({
        components: {
            MCard,
            MCardTitle,
            MCardSubtitle,
            MCardBody,
            MPinkButton,
        },
    })
    export default class LoginView extends Vue {
    }
</script>

<style lang="scss" scoped>
</style>
