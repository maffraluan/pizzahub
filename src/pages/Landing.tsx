import React from 'react';
import NotificationPop from '../components/Notification/NotificationPop'
import PastaForm from '../components/Form/PastaForm';
import { Container } from 'semantic-ui-react';

import { ContainerUnFluid } from './styles'

const Landing: React.FC = (props) => {
  return (
    <div className={'app'}>
      <NotificationPop />
      <Container>
        <ContainerUnFluid>
          <div className={'container-bg'}>
            <div className={'center-content'}>
              <div className={'title-h3'}>
                <h3>PizzaHub</h3>
              </div>
              <div className={'form'}>
                <PastaForm />
              </div>
            </div>
          </div>
        </ContainerUnFluid>
      </Container>
    </div>
  );
};

export default Landing;