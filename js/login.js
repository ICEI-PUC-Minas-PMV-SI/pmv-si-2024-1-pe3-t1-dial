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