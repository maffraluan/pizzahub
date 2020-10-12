import React, { useContext } from 'react';
import { CenterContent, ButtonCenter } from '../components/Notification/styles'
import { Button } from '@thumbtack/thumbprint-react';
import { Container } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { QuestionsContext } from '../context/QuestionContext';

const Finalize: React.FC = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  };

  const contextValue = useContext(QuestionsContext);

  return (
    <div className={'app'}>
      <Container fluid>
        <Container>
          <div className={'container-bg'}>
            <div className={'center-content'}>
              <div className={'title-h3'}>
                <h3>PizzaHub</h3>
              </div>
              <div className={'form'}>
                <>
                  <CenterContent>
                    <span className={'span-text'}>Aqui estāo algumas informações sobre seu pedido.</span>
                  </CenterContent>

                  <CenterContent>
                    <span className={'span-text'}> {contextValue?.total} </span>
                  </CenterContent>

                  <CenterContent>
                    <strong className={'strong-text'}>
                      E com essa compra você recebeu:
                  </strong>
                    <strong>{contextValue?.score}</strong>
                  </CenterContent>

                  <ButtonCenter>
                    <Button onClick={handleClick}>Finalizar</Button>
                  </ButtonCenter>
                </>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Finalize;