<template>
    <FormWrapper>
        <template v-slot:form_title>
            <FormTitle :step="step" :imageName="imageName" :message="message" />
        </template>
        <template v-slot:form_main>
            <Label>-性別-</Label>
            <RadioButtonForm
            v-model="basicInfoForm.sex"
            name="sex"
            :options="sexOptions"/>

            <Label>-生年月日-</Label>
            <div>
                <SelectForm
                v-model="basicInfoForm.year"
                name="basicInfoForm.year"
                :options="yearOptions"/>年
                <SelectForm
                v-model="basicInfoForm.month"
                name="basicInfoForm.month"
                :options="monthOptions"/>月
                <SelectForm
                v-model="basicInfoForm.date"
                name="basicInfoForm.date"
                :options="dateOptions"/>日
            </div>
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
import RadioButtonForm from '../parts/RadioButtonForm';
import SelectForm from '../parts/SelectForm';
import FormTitle from '../parts/FormTitle';
import FormWrapper from '../parts/FormWrapper';
import TransitionButtons from '../parts/TransitionButtons';
import Label from '../parts/Label';
import {YmdMixin} from '../../utils';

export default {
    name: 'BasicInfo',
    components: {
        RadioButtonForm,
        SelectForm,
        FormTitle,
        FormWrapper,
        TransitionButtons,
        Label
    },
    mixins:[YmdMixin],
    data() {
        return {
            step: "STEP1",
            imageName:"",
            message: "お客様の情報を入力してください",
            backLink: "",
            backButtonName: "",
            nextLink: "/survey",
            nextButtonName: "次に進む",
            basicInfoForm: {
                sex: '',
                year: "1991",
                month: "4",
                date: "1"
            },
            sexOptions: [
                {
                    label: "男性",
                    value: "man"
                },
                {
                    label: "女性",
                    value: "woman"
                }
            ],
        }
    }
  }

</script>