<template>
    <FormWrapper>
        <template v-slot:form_title>
            <FormTitle :step="step" :imageName="imageName" :message="message" />
        </template>
        <template v-slot:form_main>
            <Label>-性別-</Label>
            <InputContent :content="getBasicInfo.sex"/>
            <Label>-生年月日-</Label>
            <InputContent :content="getBirthDate"/>
            <Label>現在生命保険に加入されていますか？</Label>
            <InputContent :content="getSurveyInfo.insurance"/>
            <Label>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</Label>
            <InputContent :content="getSurveyInfo.hospitalizing"/>
            <Label>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことありますか?</Label>
            <InputContent :content="getSurveyInfo.hospitalized"/>
            <Label>-ご相談内容-</Label>
            <InputContent :content="getCounselingInfo.counseling"/>
        </template>
        <template v-slot:form_transition>
            <TransitionButtons
                :backLink="backLink"
                :backButtonName="backButtonName"
                :nextLink="nextLink"
                :nextButtonName="nextButtonName"
                :requestKey="requestKey"
                @save-form="requestsaveFormInfo"
            />
        </template>

    </FormWrapper>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import FormWrapper from '../parts/FormWrapper';
import InputContent from '../parts/InputContent';
import Label from '../parts/Label';
import FormTitle from '../parts/FormTitle';
import TransitionButtons from '../parts/TransitionButtons';
export default {
    name: 'Confirmation',
    components: {
        FormWrapper,
        Label,
        FormTitle,
        InputContent,
        TransitionButtons,
    },
    methods: mapActions(['requestsaveFormInfo']),
    computed: mapGetters(['getBasicInfo', 'getSurveyInfo', 'getCounselingInfo', 'getBirthDate']),
    data() {
        return {
            step: "STEP4",
            imageName:"file-lines",
            message: "以下の内容をご確認ください",
            backLink: "/counseling",
            backButtonName: "前へ戻る",
            requestKey: "",
            nextLink: "/basic_info",
            nextButtonName: "送信",

        }
    }
}
</script>