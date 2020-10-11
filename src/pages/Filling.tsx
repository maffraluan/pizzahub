import React from 'react';
import FillingForm from '../components/Form/FillingForm';
import { Container } from 'semantic-ui-react';

import { ContainerUnFluid } from './styles'

const Filling: React.FC = (props) => {
  return (
    <div className={'app'}>
      <Container>
        <ContainerUnFluid>
          <div className={'container-bg'}>
            <div className={'center-content'}>
              <div className={'title-h3'}>
                <h3>PizzaHub</h3>
              </div>
              <div className={'form'}>
                <FillingForm />
              </div>
            </div>
          </div>
        </ContainerUnFluid>
      </Container>
    </div>
  );
};

export default Filling;