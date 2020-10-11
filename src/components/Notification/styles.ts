import styled from 'styled-components';

interface TopStateView { top: number}

export const TopStateView = styled.div<TopStateView>`
  background: var(--color-dark);
  color: var(--color-black);
  padding: 10px;
  position: absolute;
  top: ${({ top }) => top}px;
  right: 16px;
  z-index: 999;
  width: 320px;
  height: auto;
  transition: top 0.5s ease;

  @media (max-width: 462px) {
    right: 0;
    left: 140px;
  }
`;

export const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 8px 0px;
`;

export const ButtonCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;