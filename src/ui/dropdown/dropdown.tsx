import { FC, useState } from 'react';
import { IConstant } from '@/types';
import {
  Backdrop,
  Content,
  StyledItem,
  Trigger,
  Wrapper,
} from './dropdown.styled';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

interface IProps {
  initialValue: IConstant;
  align?: 'left' | 'right';
  options: IConstant[];
  onSelect: (value: string) => void;
}

export const Dropdown: FC<IProps> = ({
  initialValue,
  align = 'left',
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<IConstant>(initialValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (newOption: IConstant) => {
    if (newOption.value === selectedOption.value) {
      return;
    }

    setSelectedOption(newOption);
    onSelect(newOption.value);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Trigger onClick={() => setIsOpen(prevState => !prevState)}>
        {selectedOption.label}
        <ChevronIcon
          style={{
            transform: `rotate(${isOpen ? '-180' : '0'}deg)`,
            transitionDuration: '0.25s',
          }}
        />
      </Trigger>
      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />
          <Content align={align}>
            {options.map(item => (
              <StyledItem
                key={item.value}
                active={item.value === selectedOption.value}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </StyledItem>
            ))}
          </Content>
        </>
      )}
    </Wrapper>
  );
};
