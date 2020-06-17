import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

export default function Loader({ loading }) {
  return (
    <Wrapper>
      <ClipLoader
        size={150}
        color={"orange"}
        loading={loading}
      />
    </Wrapper>
  );
}
