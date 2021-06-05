export default {
    saveFormInfo(state, formObject) {
        state[formObject.requestKey] = formObject.formInfo;
    }
}