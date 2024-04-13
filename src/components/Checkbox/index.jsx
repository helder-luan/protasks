import React from 'react';
import * as S from './styles.js';

export function Checkbox({ className, checked, ...props }) {
  return (
    <S.CheckboxContainer className={className}>
      <S.HiddenCheckbox checked={checked} />
      <S.StyledCheckbox checked={checked} {...props}>
        <S.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.Icon>
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
}
