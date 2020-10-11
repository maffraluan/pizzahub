import React from 'react';
import { CenterContent, ButtonCenter } from '../components/Notification/styles'
import { Button } from '@thumbtack/thumbprint-react';
import { Container } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Finalize: React.FC = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  };
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
                    <span className={'span-text'}>Aqui estao algumas informacoes sobre seu pedido.</span>
                  </CenterContent>

                  <CenterContent>
                    <span className={'span-text'}>Pizza Vegana, 8 pedacos. Deve ser algo romantico, hein?!. </span>
                  </CenterContent>

                  <CenterContent>
                    <strong className={'strong-text'}>
                      E com esse compra voce recebeu:
                  </strong>
                    <strong>85 pontos</strong>
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