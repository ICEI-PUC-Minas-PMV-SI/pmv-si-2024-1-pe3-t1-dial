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

/*============ LOGIN ==================*/

document.addEventListener("DOMContentLoaded", function() {
  const $ = (elemento) => document.querySelector(elemento);

  $("#kc-form-login").addEventListener("submit", function(ev) {
      ev.preventDefault();

      const string = localStorage.getItem("usuario");
      if (!string) {
          alert("Usuário não cadastrado! Cadastre-se antes de fazer login.");
          return;
      }

      const usuarioCadastrado = JSON.parse(string);
      const { senha } = usuarioCadastrado;

      const dadosCorretos = senha === $("#password").value;

      if (!dadosCorretos) {
          alert("Senha incorreta! Verifique seus dados.");
          return;
      }

      setTimeout(function() {
          alert('Agora podemos ouvir Músicas!!!');
      });

      alert("Bem-vindo ao Dial");

      if (localStorage.getItem("token") == null) {
          window.location.href = "music1.html";
      }
  });
});
