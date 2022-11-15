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
    const sexIndex = genderMaleInput.checked ? 5 : -161;
    const savedWeight = Math.round(((10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) + sexIndex)
        * activityIndex);
    const incWeight = Math.round(savedWeight * 1.15);
    const decWeight = Math.round(savedWeight * 0.85);

    caloriesNorm.textContent = String(savedWeight);
    caloriesMaximal.textContent = String(incWeight);
    caloriesMinimal.textContent = String(decWeight);
};

const calculateCalories = () => {
    inputsGroup.addEventListener('input', onFieldsInput);
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
    submitButton.addEventListener('click', onSubmitButtonClick);
};

export {calculateCalories};