import React, { useState, useEffect, useContext } from 'react';
import { Checkbox, Button } from '@thumbtack/thumbprint-react';
import { useHistory } from 'react-router-dom';
import { questionBeef, scoreBeef, questionVegetarian, scoreVegetarian, questionVegan, scoreVegan } from '../../ultis/Filtered';
import { QuestionsContext } from '../../context/QuestionContext';

const FillingForm: React.FC = () => {
  const [isBeef, setIsBeef] = useState<boolean>(false);
  const [vegetarian, setIsVegetarian] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);

  const contextValue = useContext(QuestionsContext);

  let history = useHistory();
  function handleClick() {
    if (isBeef === false && vegetarian === false && isVegan === false) {
      alert('Escolha uma opçāo!')
    } else {
      contextValue?.setScore(contextValue.score);
      history.push("/finalize");
    }
  };
  function handleBack() {
    history.push('/size');
  };

  useEffect(() => {
    contextValue?.setScore(contextValue.score);
  }, [contextValue?.score]);

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
    contextValue?.setScore(contextValue.score + scoreBeef)
  };

  /* onChangeVegetarian */
  const onChangeVegetarian = () => {
    setIsVegetarian(!vegetarian);
    contextValue?.setScore(contextValue.score + scoreVegetarian)
  };

  /* OnChangeBeef */
  const onChangeIsVegan = () => {
    setIsVegan(!isVegan);
    contextValue?.setScore(contextValue.score + scoreVegan)
  };


  return (
    <>
      <div className={'checkbox-view'}>
        <h3>Aqui estāo algumas informações sobre seu pedido.</h3>

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