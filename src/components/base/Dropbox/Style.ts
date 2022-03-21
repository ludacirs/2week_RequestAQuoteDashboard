import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { font14 } from '@styles/fonts';

export const Dropbox = styled.div`
  ${flexbox({ fd: 'column', ai: 'start' })};
  position: absolute;
  top: 32px;
  left: 0;
  min-width: 130px;
  padding: ${({ theme }) => `${theme.gap.base * 4}px ${theme.gap.base * 3}px`};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background-color: white;
  ${font14(500)};
  gap: ${({ theme }) => `${theme.gap.base * 2}px`};
  z-index: 1;
  cursor: default;
`;

export const DropboxSet = styled.div`
  ${flexbox({ jc: 'start', ai: 'center' })};
  gap: 10px;
  > * {
    cursor: pointer;
  }
`;
