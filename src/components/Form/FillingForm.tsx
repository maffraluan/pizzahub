import React, { useState, useEffect } from 'react';
import { Checkbox, Button } from '@thumbtack/thumbprint-react';
import { useHistory } from 'react-router-dom';
import { questionBeef, scoreBeef, questionVegetarian, scoreVegetarian, questionVegan, scoreVegan } from '../../ultis/Filtered';

const FillingForm: React.FC = () => {
  const [isBeef, setIsBeef] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [vegetarian, setIsVegetarian] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);

  let history = useHistory();
  function handleClick() {
    if (isBeef === false && vegetarian === false && isVegan === false) {
      alert('Escolha uma opçāo!')
    } else {
      setScore(10);
      history.push("/finalize");
    }
  };
  function handleBack() {
    history.push('/size');
  };

  useEffect(() => {
    setScore(score);
  }, [score]);

  if (vegetarian && isVegan) {
    setIsBeef(isBeef);
    setIsVegetarian(false);
    setIsVegan(false);
  } 
  if (isVegan && isBeef) {
    setIsVegetarian(vegetarian);
    setIsBeef(false);
    setIsVegan(false);
  }
  if (vegetarian && isBeef) {
    setIsVegan(isVegan);
    setIsBeef(false);
    setIsVegetarian(false);
  }

 /*  * OnChangeBeef */
  const onChangeBeef = () => {
    setIsBeef(!isBeef);
    setScore(scoreBeef)
  };

  /* onChangeVegetarian */
  const onChangeVegetarian = () => {
    setIsVegetarian(!vegetarian);
    setScore(scoreVegetarian)
  };

  /* OnChangeBeef */
  const onChangeIsVegan = () => {
    setIsVegan(!isVegan);
    setScore(scoreVegan)
  };


  return (
    <>
      <div className={'checkbox-view'}>
        <h3>Aqui estao algumas informacoes sobre seu pedido.</h3>

        <strong>Escolha o Recheio!</strong>
      </div>

      <div>
        <Checkbox
          id="beef"
          isChecked={isBeef}
          name="isBeef"
          value={scoreBeef}
          labelPadding="4px 0"
          onChange={onChangeBeef}
        >
          {questionBeef}
            </Checkbox>
        <Checkbox
          id="vegetarian"
          isChecked={vegetarian}
          name="vegetarian"
          value={scoreVegetarian}
          labelPadding="4px 0"
          onChange={onChangeVegetarian}
        >
          {questionVegetarian}
            </Checkbox>
        <Checkbox
          id="isVegan"
          isChecked={isVegan}
          name="isVegan"
          value={scoreVegan}
          labelPadding="4px 0"
          onChange={onChangeIsVegan}
        >
          {questionVegan}
            </Checkbox>
      </div>
      <div className={'mt-5'}>
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleClick}>Avançar</Button>
      </div>
    </>
  );
};

export default FillingForm;