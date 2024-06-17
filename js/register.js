/*============ MOSTRAR OU ESCONDER SENHA ================== */
function toggleShowPassword(id, showIconId, hideIconId) {
    const passwordElement = document.getElementById(id);
    const type = passwordElement.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordElement.setAttribute('type', type);
    const showPasswordIconElement = document.getElementById(showIconId);
    const hidePasswordIconElement = document.getElementById(hideIconId);
    if (type === 'text') {
        hidePasswordIconElement.style.display = 'inline';
        showPasswordIconElement.style.display = 'none';
    } else {
        showPasswordIconElement.style.display = 'inline';
        hidePasswordIconElement.style.display = 'none';
    }
}



/*============ FUNCIONALIDADE DOS REQUISITOS DO PASSWORD ================*/

function handleRegistrationPasswordChanged() {
    updatePasswordState('password', 'password-confirm');
}

function updatePasswordState(passwordFieldName, confirmPasswordFieldName) {
    const typedPassword = document.getElementById(passwordFieldName).value;
    const passwordConfirmationField = document.getElementById(confirmPasswordFieldName);
    const passwordRequirementItems = document.getElementsByClassName('passwordRequeriments-item');

    const validationResult = verifyPasswordRequirement(typedPassword);

    updatePasswordRequirementItemState(passwordRequirementItems[0], validationResult.minLengthFulfilled);

    updatePasswordRequirementItemState(passwordRequirementItems[1], validationResult.containsDigitFulfilled);

    updatePasswordRequirementItemState(
        passwordRequirementItems[2],
        validationResult.containsSpecialCharacterFulfilled
    );

    passwordConfirmationField.value = typedPassword;
}

function verifyPasswordRequirement(password) {
    //const containsLetter = /[A-Za-z]/g;
    const containsDigit = /\d/g;
    const containsSpecialCharacter = /[^A-Za-z0-9]/g;

    const minLengthFulfilled = password.length >= 8;
    const containsDigitFulfilled = containsDigit.test(password);
    const containsSpecialCharacterFulfilled = containsSpecialCharacter.test(password);
    const isValid = minLengthFulfilled && containsDigitFulfilled && containsSpecialCharacterFulfilled;

    const result = {
        minLengthFulfilled,
        containsDigitFulfilled,
        containsSpecialCharacterFulfilled,
        isValid,
    };

    return result;
}

function updatePasswordRequirementItemState(listItem, isFulfilled) {
    const fulfilledClass = 'fulfilled';
    if (isFulfilled) {
        listItem.classList.add(fulfilledClass);
    } else {
        listItem.classList.remove(fulfilledClass);
    }
}