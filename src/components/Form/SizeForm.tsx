import React, { useState, useEffect, useContext } from 'react';
import { Checkbox, Button } from '@thumbtack/thumbprint-react';
import { useHistory } from 'react-router-dom';
import { question4pieces, score4Pieces, question8pieces, score8Pieces, question12pieces, score12Pieces } from '../../ultis/Filtered';
import { QuestionsContext } from '../../context/QuestionContext';

const SizeForm: React.FC = () => {
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  const contextValue = useContext(QuestionsContext);

  let history = useHistory();
  function handleClick() {
    if (small === false && medium === false && large === false) {
      alert('Escolha uma opçāo!')
    } else {
      history.push("/filling");
    }
  };

  function handleBack() {
    history.push('/');
  };

  useEffect(() => {
    contextValue?.setScore(contextValue.score);
  }, [contextValue?.score]);


  if (small && medium) {
    setLarge(large);
    setSmall(false);
    setMedium(false);
  }
  if (small && large) {
    setMedium(medium);
    setSmall(false);
    setLarge(false);
  }
  if (large && medium) {
    setSmall(small);
    setMedium(false);
    setLarge(false);
  }

  /*  * onChange4Pieces */
  const onChange4Pieces = () => {
    setSmall(!small);
    contextValue?.setTotal(contextValue.total + question4pieces);
    contextValue?.setScore(contextValue.score + score4Pieces)
  };

  /* onChange8Pieces */
  const onChange8Pieces = () => {
    setMedium(!medium);
    contextValue?.setTotal(contextValue.total + question8pieces);
    contextValue?.setScore(contextValue.score +score8Pieces)
  };

  /* onChange12Pieces */
  const onChange12Pieces = () => {
    setLarge(!large);
    contextValue?.setTotal(contextValue.total + question12pieces);
    contextValue?.setScore(contextValue.score +score12Pieces)
  };

  return (
    <>
      <div className={'checkbox-view'}>
        <h3>Aqui estāo algumas informações sobre seu pedido.</h3>

        <strong>Escolha o tamanho!</strong>
      </div>

      <div>
        <Checkbox
          id="small"
          isChecked={small}
          value={score4Pieces}
          name="small"
          labelPadding="4px 0"
          onChange={onChange4Pieces}
        >
          {question4pieces}
        </Checkbox>
        <Checkbox
          id="medium"
          isChecked={medium}
          value={score8Pieces}
          name="medium"
          labelPadding="4px 0"
          onChange={onChange8Pieces}
        >
          {question8pieces}
        </Checkbox>
        <Checkbox
          id="large"
          isChecked={large}
          value={score12Pieces}
          name="large"
          labelPadding="4px 0"
          onChange={onChange12Pieces}
        >
          {question12pieces}
        </Checkbox>
      </div>
      <div className={'mt-5'}>
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleClick}>Avançar</Button>
      </div>
    </>
  );
};

export default SizeForm;