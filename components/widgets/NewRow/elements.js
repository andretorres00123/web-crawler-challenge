import styled from 'styled-components';
import { Text, Flex } from 'rebass';

export const NewWrapper = styled(Flex)`
  bottom-border: 1px solid #F0F0F0;
`;

export const RankTitle = styled(Text)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.primary};
`;



