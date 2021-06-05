<template>
    <FormWrapper>
        <template v-slot:form_title>
            <FormTitle :step="step" :imageName="imageName" :message="message" />
        </template>
        <template v-slot:form_main>
            <div>
                <Label>-性別-</Label>
                <RadioButtonForm
                v-model="basicInfoForm.sex"
                name="sex"
                :options="sexOptions"/>
            </div>

            <Label>-生年月日-</Label>
            <div class="field is-horizontal">
                <SelectForm
                v-model="basicInfoForm.year"
                name="basicInfoForm.year"
                :options="yearOptions"/>
                <span class="is-flex is-justify-content-center is-align-items-center ml-1 mr-2">年</span>
                <SelectForm
                v-model="basicInfoForm.month"
                name="basicInfoForm.month"
                :options="monthOptions"/><span class="is-flex is-justify-content-center is-align-items-center ml-1 mr-2">月</span>
                <SelectForm
                v-model="basicInfoForm.date"
                name="basicInfoForm.date"
                :options="dateOptions"/><span class="is-flex is-justify-content-center is-align-items-center ml-1 mr-2">日</span>
            </div>
        </template>
        <template v-slot:form_transition>
            <TransitionButtons
                :backLink="backLink"
                :backButtonName="backButtonName"
                :nextLink="nextLink"
                :nextButtonName="nextButtonName"
                :formInfo="basicInfoForm"
                :requestKey="requestKey"
                @save-form="requestsaveFormInfo"
            />
        </template>

    </FormWrapper>
</template>
<script>
import { mapActions } from 'vuex'
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
    methods: mapActions(['requestsaveFormInfo']),
    data() {
        return {
            step: "STEP1",
            imageName:"address-card",
            message: "お客様の情報を入力してください",
            backLink: "",
            backButtonName: "",
            nextLink: "/survey",
            nextButtonName: "次に進む",
            requestKey: "basicInfoForm",
            basicInfoForm: {
                sex: '',
                year: "1991",
                month: "4",
                date: "1"
            },
            sexOptions: [
                {
                    label: "男性",
                    value: "男性"
                },
                {
                    label: "女性",
                    value: "女性"
                }
            ],
        }
    }
  }

</script>
