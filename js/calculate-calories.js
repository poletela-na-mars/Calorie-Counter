import {
    resultBlock, submitButton, inputsGroup,
    ageInput, heightInput, weightInput, genderMaleInput,
    caloriesNorm, caloriesMaximal, caloriesMinimal
} from "./script.js";

const activityInput = document.querySelector('.radios-group');
let activityIndex = 1.2;

const onFieldsInput = () => {
    submitButton.disabled = !(ageInput.value !== '' && heightInput.value !== '' && weightInput.value !== '');
};

const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    calculateValues();
    resultBlock.classList.remove('counter__result--hidden');
};

const calculateValues = () => {
    activityInput.addEventListener('change', (evt) => {
        switch (evt.target.id) {
            case 'activity-minimal':
                activityIndex = 1.2;
                break;
            case 'activity-low':
                activityIndex = 1.375;
                break;
            case 'activity-medium':
                activityIndex = 1.55;
                break;
            case 'activity-high':
                activityIndex = 1.725;
                break;
            case 'activity-maximal':
                activityIndex = 1.9;
                break;
        }
    });
    const sexIndex = genderMaleInput.checked ? 5 : -161;
    const savedWeight = ((10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) + sexIndex)
        * activityIndex;
    const incWeight = savedWeight * 1.15;
    const decWeight = savedWeight * 0.85;

    caloriesNorm.textContent = String(Math.round(savedWeight));
    caloriesMaximal.textContent = String(Math.round(incWeight));
    caloriesMinimal.textContent = String(Math.round(decWeight));
};

const calculateCalories = () => {
    inputsGroup.addEventListener('input', onFieldsInput);
    submitButton.addEventListener('click', onSubmitButtonClick);
};

export {calculateCalories};