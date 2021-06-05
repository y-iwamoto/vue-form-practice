export const getBasicInfo = (state) => {
    return state.basicInfoForm
    ? state.basicInfoForm
    : {}
}

export const getSurveyInfo = (state) => {
    return state.surveyForm
    ? state.surveyForm
    : {}
}

export const getCounselingInfo = (state) => {
    return state.counselingForm
    ? state.counselingForm
    : {}
}
