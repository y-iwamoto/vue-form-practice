<template>
    <FormWrapper>
        <template v-slot:form_title>
            <FormTitle :step="step" :imageName="imageName" :message="message" />
        </template>
        <template v-slot:form_main>
            <Label>現在生命保険に加入されていますか？</Label>
            <RadioButtonForm
            v-model="SurveyForm.insurance"
            name="insurance"
            :options="options"/>
            <transition name="hospitalizing">
                <div v-if="SurveyForm.insurance">
                    <Label>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</Label>
                    <RadioButtonForm
                    v-model="SurveyForm.hospitalizing"
                    name="hospitalizing"
                    :options="options"/>
                </div>
            </transition>
            <transition name="hospitalized">
                <div v-if="SurveyForm.hospitalizing">
                    <Label>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことありますか?</Label>
                    <RadioButtonForm
                    v-model="SurveyForm.hospitalized"
                    name="hospitalized"
                    :options="options"/>
                </div>
            </transition>

        </template>
        <template v-slot:form_transition>
            <TransitionButtons
                :backLink="backLink"
                :backButtonName="backButtonName"
                :nextLink="nextLink"
                :nextButtonName="nextButtonName"
            />
        </template>
    </FormWrapper>
</template>
<script>
import FormTitle from '../parts/FormTitle';
import FormWrapper from '../parts/FormWrapper';
import Label from '../parts/Label';
import RadioButtonForm from '../parts/RadioButtonForm';
import TransitionButtons from '../parts/TransitionButtons';
export default {
    name: 'Survey',
    components: {
        FormTitle,
        FormWrapper,
        Label,
        RadioButtonForm,
        TransitionButtons
    },
    data() {
        return {
            step: "STEP2",
            imageName:"",
            message: "以下にお答えください",
            backLink: "/basic_info",
            backButtonName: "前へ戻る",
            nextLink: "/counseling",
            nextButtonName: "次に進む",
            SurveyForm: {
                insurance: "",
                hospitalizing: "",
                hospitalized: "",
            },
            options: [
                {
                    label: "はい",
                    value: "はい"
                },
                {
                    label: "いいえ",
                    value: "いいえ"
                }

            ]

        }
    }
}
</script>
<style scoped>
.hospitalizing-enter-active, .hospitalizing-leave-active,
.hospitalized-enter-active, .hospitalized-leave-active
 {
  transition: opacity .5s
}

.hospitalizing-enter, .hospitalizing-leave-to,
.hospitalized-enter, .hospitalized-leave-to {
  opacity: 0
}
</style>