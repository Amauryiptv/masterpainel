function gerarCliente() {
  const nome = document.getElementById('clienteNome').value;
  if (nome) addLog(`Cliente "${nome}" gerado com sucesso.`);
}

function gerarTeste() {
  const nome = document.getElementById('testeNome').value;
  if (nome) addLog(`Teste grátis para "${nome}" criado.`);
}

function gerarRevendedor() {
  const nome = document.getElementById('revNome').value;
  if (nome) addLog(`Revendedor "${nome}" criado.`);
}

function addLog(msg) {
  const log = document.getElementById('log');
  const item = document.createElement('li');
  item.textContent = msg;
  log.appendChild(item);
}