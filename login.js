const CHAVE_CREDENCIAL = "A7F9C2D8E4B1";

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const credencial = document.getElementById("credencial").value.trim().toUpperCase();
  const erro = document.getElementById("erro");

  if (credencial !== CHAVE_CREDENCIAL) {
    erro.textContent = "Credencial inválida. Verifique a chave de acesso.";
    return;
  }

  localStorage.setItem("pp_nome_usuario", nome);
  localStorage.setItem("pp_autorizado", "true");
  window.location.href = "portal.html";
});