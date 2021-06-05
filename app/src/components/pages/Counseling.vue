<template>
    <FormWrapper>
        <template v-slot:form_title>
            <FormTitle :step="step" :imageName="imageName" :message="message" />
        </template>
        <template v-slot:form_main>
            <Label>-ご相談内容-</Label>
            <Textarea
            v-model="CounselingForm.counseling"
            name="counseling"
            :rows="10"
            :cols="50"
        ></Textarea>
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
import FormWrapper from '../parts/FormWrapper';
import FormTitle from '../parts/FormTitle';
import Label from '../parts/Label';
import Textarea from '../parts/TextArea';
import TransitionButtons from '../parts/TransitionButtons';
export default {
    name: 'Counseling',
    components: {
        FormWrapper,
        FormTitle,
        Label,
        Textarea,
        TransitionButtons
    },
    data() {
        return {
            step: "STEP3",
            imageName:"clipboard-list",
            message: "ご相談内容をご記入ください",
            backLink: "/survey",
            backButtonName: "前へ戻る",
            nextLink: "/basic_info",
            nextButtonName: "次に進む",
            CounselingForm: {
                counseling: ''
            }
        }
    }
}
</script>