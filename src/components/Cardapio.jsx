import React, { useEffect, useState } from 'react';
import './Cardapio.css';

function Cardapio() {
  const [produtos, setProdutos] = useState([]);
  const [pedido, setPedido] = useState({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarCardapio() {
      try {
        const response = await fetch('./JSON/cardapio.json');
        if (!response.ok) {
          throw new Error(`Erro ao carregar o arquivo JSON: ${response.statusText}`);
        }
        const data = await response.json();
        setProdutos(data.CARDAPIO.PRODUTOS);
        setCarregando(false); // Dados carregados
      } catch (error) {
        console.error(error);
        setCarregando(false); // Caso erro, também remova o "carregando"
      }
    }
    carregarCardapio();
  }, []);

  const atualizarQuantidade = (id, delta) => {
    setPedido((prevPedido) => {
      const atualizado = { ...prevPedido };
      atualizado[id] = (atualizado[id] || 0) + delta;
      if (atualizado[id] < 0) atualizado[id] = 0;
      return atualizado;
    });
  };

  const fecharPedido = () => {
    let total = 0;
    const resumo = produtos
      .filter((produto) => pedido[produto.id] && pedido[produto.id] > 0)
      .map((produto) => {
        const quantidade = pedido[produto.id] || 0;
        const subtotal = quantidade * produto.preco;
        total += subtotal;
        return (
          <tr key={produto.id}>
            <td className="descricao">{produto.descricao}</td>
            <td>{quantidade}</td>
            <td>R${subtotal.toFixed(2)}</td>
          </tr>
        );
      });

    return (
      <div>
        <h3>Resumo do Pedido:</h3>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{resumo}</tbody>
        </table>
        <h4>Total: R${total.toFixed(2)}</h4>
      </div>
    );
  };

  return (
    <div className="cardapio">
      <h2 className="titulo">Cardápio</h2>
      <div className="conteudo">
        {carregando ? (
          <div className="loading">Carregando...</div> // Indicador de carregamento
        ) : (
          <div className="produtos">
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.descricao}</td>
                    <td>R${produto.preco.toFixed(2)}</td>
                    <td>
                      <button onClick={() => atualizarQuantidade(produto.id, -1)}>-</button>
                      <input type="number" value={pedido[produto.id] || 0} readOnly />
                      <button onClick={() => atualizarQuantidade(produto.id, 1)}>+</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="resumo">
          {fecharPedido()}
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
