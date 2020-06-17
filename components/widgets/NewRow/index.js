import React from 'react';
import { Box, Text } from 'rebass';
import { useTranslation } from '../../../i18n';
import { NewWrapper, RankTitle, Title } from './elements';

function NewRow({ data }) {
  const { t } = useTranslation();
  return (
    <NewWrapper flexWrap="wrap" mt={2}>
      <Box width={2 / 20} px={4}>
        <RankTitle>{data.rank}</RankTitle>
      </Box>
      <Box width={9 / 20} px={4}>
        <Title>{data.title}</Title>
      </Box>
      <Box width={1 / 5} px={4}>
        <Text>{`${data.points} ${t('news-comments')}`}</Text>
      </Box>
      <Box width={1 / 5} px={4}>
        <Text>{`${data.comments} ${t('news-points')}`}</Text>
      </Box>
    </NewWrapper>
  )
}

export default NewRow;
