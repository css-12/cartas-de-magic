import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import FlexBoxLista from '../../components/FlexBoxLista';
import FlexBoxItem from '../../components/FlexBoxItem';

const Carta = () => {
  const [carta, setCarta] = useState(null);

  useEffect(() => {
    async function pegarDados() {
      const response = await axios.get(
        'https://api.magicthegathering.io/v1/cards',
      );
      setCarta(response.data);
    }
    pegarDados();
  }, []);

  if (carta === null) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Cartas de Magic</h1>

      <FlexBoxLista>
        {carta.cards.map((item) => (
          <img className="img-carta" src={item.imageUrl} />
        ))}
      </FlexBoxLista>

      <div className="nome">
        <FlexBoxLista>
          {carta.cards.map((item) => (
            <FlexBoxItem key={item.name}>Nome: {item.name}</FlexBoxItem>
          ))}
        </FlexBoxLista>
      </div>

      <div className="tipo">
        <FlexBoxLista>
          {carta.cards.map((item) => (
            <FlexBoxItem key={item.type}>Tipo: {item.type}</FlexBoxItem>
          ))}
        </FlexBoxLista>
      </div>

      <div className="raridade">
        <FlexBoxLista>
          {carta.cards.map((item) => (
            <FlexBoxItem key={item.rarity}>Raridade: {item.rarity}</FlexBoxItem>
          ))}
        </FlexBoxLista>
      </div>

      <div className="set">
        <FlexBoxLista className="set">
          {carta.cards.map((item) => (
            <FlexBoxItem key={item.set}>Set: {item.set}</FlexBoxItem>
          ))}
        </FlexBoxLista>
      </div>
    </>
  );
};

export default Carta;
