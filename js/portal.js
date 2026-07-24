const autorizado = localStorage.getItem("pp_autorizado");
const nome = localStorage.getItem("pp_nome_usuario");

if (autorizado !== "true" || !nome) {
  window.location.href = "index.html";
}

document.getElementById("nomeUsuario").textContent = nome;

document.getElementById("sair").addEventListener("click", () => {
  localStorage.removeItem("pp_nome_usuario");
  localStorage.removeItem("pp_autorizado");
  window.location.href = "index.html";
});

document.getElementById("copiarLink").addEventListener("click", async () => {
  const link = document.getElementById("formsLink").href;
  const mensagem = document.getElementById("mensagem");

  try {
    await navigator.clipboard.writeText(link);
    mensagem.textContent = "Link copiado com sucesso.";
  } catch {
    mensagem.textContent = "Não foi possível copiar automaticamente: " + link;
  }
});
