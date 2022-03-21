import styled from 'styled-components';
import { font12, font14 } from '@styles/fonts';
import { flexbox } from '@styles/commonStyles';

interface FormProps {
  isChecked: boolean;
}

export const Form = styled.form<FormProps>`
  ${flexbox({ flex: 'inline-flex', jc: 'center', ai: 'center' })};
  cursor: pointer;

  position: relative;
  height: ${({ theme }) => `${theme.size.buttonHeight}px`};
  padding-left: ${({ theme }) => `${theme.gap.base * 3}px`};
  padding-right: 13.5px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.blue : 'white'};
  font-family: 'Roboto', sans-serif;
  ${font12(500)};
  color: inherit;

  span {
    padding-right: ${({ theme }) => `${theme.gap.base * 3}px`};
    color: ${({ isChecked }) => (isChecked ? 'white' : 'inherit')};
  }

  svg {
    fill: ${({ isChecked, theme }) =>
      isChecked ? 'white' : theme.colors.gray};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.skyBlue};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ isChecked }) => isChecked && 'padding: 0px 8px'};

    span {
      padding-right: ${({ theme }) => `${theme.gap.base * 2}px`};
    }
  }
`;
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
`;
export const DropboxSet = styled.div`
  ${flexbox({ jc: 'start', ai: 'center' })};
  gap: 10px;
`;
