// ScrollDown.tsx
"use client"
import React from 'react';
import styled from 'styled-components';

interface ScrollDownProps {
  color?: string;
  sizex?: number;
  sizey?: number;
  onClick?: () => void;
}

const ScrollDownContainer = styled.div<{ color: string; sizex: number; sizey: number }>`
  --color: ${props => props.color};
  --sizeX: ${props => props.sizex}px;
  --sizeY: ${props => props.sizey}px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: calc(var(--sizeX) / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;
  cursor: pointer;
  transform:scale(0.75);

  &::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }
    40% {
      opacity: 1;
      height: 10px;
    }
    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }
    100% {
      height: 3px;
      opacity: 0;
    }
  }
`;

const Chevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChevronDown = styled.span<{ color: string }>`
  margin-top: -6px;
  position: relative;
  border: solid ${props => props.color};
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  &:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  &:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;

const ScrollDown: React.FC<ScrollDownProps> = ({
  color = '#fff',
  sizex = 30,
  sizey = 50,
  onClick
}) => {
  return (
    <ScrollDownContainer
      color={color}
      sizex={sizex}
      sizey={sizey}
      onClick={onClick}
    >
      <Chevrons>
        <ChevronDown color={color} />
        <ChevronDown color={color} />
        <ChevronDown color={color} />
      </Chevrons>
    </ScrollDownContainer>
  );
};

export default ScrollDown;