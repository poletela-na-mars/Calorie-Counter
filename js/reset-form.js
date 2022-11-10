import {
    ageInput,
    genderMaleInput,
    heightInput,
    inputsGroup,
    resetButton,
    resultBlock,
    submitButton,
    weightInput
} from "./main.js";

const minPhysicalActivityInput = document.querySelector('#activity-minimal');

const onResetButtonClick = () => {
    resetSexSwitcher();
    resetFields();
    resetPhysicalActivity();
    disableSubmitButton();
    disableResetButton();
    hideResult();
};

const resetSexSwitcher = () => {
    genderMaleInput.checked = true;
};

const resetFields = () => {
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
};

const resetPhysicalActivity = () => {
    minPhysicalActivityInput.checked = true;
};

const disableSubmitButton = () => {
    submitButton.disabled = true;
};

const disableResetButton = () => {
    resetButton.disabled = true;
};

const hideResult = () => {
    resultBlock.classList.add('counter__result--hidden');
};

const onFieldsInput = () => {
    resetButton.disabled = !(ageInput.value !== '' || heightInput.value !== '' || weightInput.value !== '');
};

const resetForm = () => {
    inputsGroup.addEventListener('input', onFieldsInput);
    resetButton.addEventListener('click', onResetButtonClick);
};

export {resetForm};