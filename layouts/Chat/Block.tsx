
import React from 'react';
import styled from 'styled-components';

const BorderBlock = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding: 13px 0;
  & span {
    position: relative;
    display: inline-block;
    background-color: #b2c7d9;
    padding: 0 10px;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 2%;
    top: 50%;
    width: 96%;
    height: 1px;
    background-color: #727b83;
  }
`;

interface SeparationBlockProps {
    content: string;
  }

export const SeparationBlock: React.FC<SeparationBlockProps> = ({
    content
  }) => {
    return (
      <BorderBlock>
        <span>{content}</span>
      </BorderBlock>
    );
  };