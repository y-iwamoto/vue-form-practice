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

export const getBirthDate = (state) => {
    const {year, month ,date} = state.basicInfoForm ? state.basicInfoForm : {}
    const birthdate = (year && month && date) ? `${year}年${month}月${date}日` : '';
    return birthdate;
}