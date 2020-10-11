import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { TopStateView, CenterContent, ButtonCenter } from './styles'

const NotificationPop: React.FC = () => {
  const [top, setTop] = useState(-400);

  const handleOpen = () => {
    setTop(20);
    setTimeout(() => {
      setTop(top)
    }, 8000);
  };

  useEffect(() => {
    handleOpen()
  }, []);

  return (
    <>
      <TopStateView top={top}>
        <CenterContent>
          <span className={'span-text'}>Promocao do dia e receba 125 pontos!
          Vamos aproveitar esse pedido magnifico?</span>
        </CenterContent>

        <CenterContent>
          <span className={'span-text'}>Pizza grande 12 pedacos deliciosos, metade vegano e metade vegetariano: </span>
        </CenterContent>

        <CenterContent>
          <strong className={'strong-text'}>
            Sao 125 pontos
          </strong>
        </CenterContent>

        <ButtonCenter>
          <Button
            size={'large'}
            primary>Checar</Button>
        </ButtonCenter>
      </TopStateView>
    </>
  );
};

export default NotificationPop;