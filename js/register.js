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

/*=============== CADASTRO ==================== */

document.addEventListener("DOMContentLoaded", function() {
    const $ = (elemento) => document.querySelector(elemento);

    $("#kc-form-login").addEventListener("submit", function(ev) {
        ev.preventDefault();

        const email = $("#username").value;
        const senha = $("#password").value;
        const confirmaSenha = $("#password-confirm").value;

        // Verifica se a senha e a confirmação de senha são iguais
        if (senha !== confirmaSenha) {
            alert("Sua confirmação de senha não confere. Por favor, verifique.");
            return;
        }

        // Verifica se todos os campos estão preenchidos
        if (email.trim() === "" || senha.trim() === "" || confirmaSenha.trim() === "") {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        // Verifica se a senha atende aos requisitos mínimos
        if (!isPasswordValid(senha)) {
            alert("A senha deve ter pelo menos 8 caracteres, incluindo um número e um caractere especial.");
            return;
        }

        // Cria objeto de usuário cadastrado
        const usuarioCadastrado = {
            email,
            senha,
            confirmaSenha,
        };

        // Armazena o usuário no localStorage
        const string = JSON.stringify(usuarioCadastrado);
        localStorage.setItem("usuario", string);

        // Alerta de sucesso e redirecionamento para a página de login
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    });

    // Função auxiliar para verificar se a senha atende aos requisitos
    function isPasswordValid(password) {
        // Pelo menos 8 caracteres, um número (0-9) e um caractere especial
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex.test(password);
    }
});
