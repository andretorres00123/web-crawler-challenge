import React from 'react';
import { Box, Flex } from 'rebass';
import { connect } from 'react-redux';
import { Loader, Title } from '../../elements';
import { useTranslation } from '../../../i18n';
import NewRow from '../NewRow';

function NewList({ news, loading }) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <Box mt={4}>
        <Loader />
      </Box>
    );
  }

  const getColumnName = (width, text) => (
    <Box width={width} px={4}>
      <Title fontSize="16px" color="darkGray">{text}</Title>
    </Box>
  );

  return (
    <Box my={5} px={['20px', '40px', '160px']}>
      <Flex flexWrap="wrap" mt={2}>
        {getColumnName(1 / 10, t('news-column-name-rank'))}
        {getColumnName(9 / 20, t('news-column-name-title'))}
        {getColumnName(1 / 5, t('news-column-name-comments'))}
        {getColumnName(1 / 5, t('news-column-name-points'))}
      </Flex>
      {news.map((item) => (
        <NewRow key={item.id} data={item} />
      ))}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  news: state.news.list,
  loading: state.news.loading,
});

export default connect(mapStateToProps)(NewList);
