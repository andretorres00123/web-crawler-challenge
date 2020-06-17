import React from 'react';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import NewRow from '../NewRow';

function NewList({ news, loading }) {

  if (loading) {
    return (
      <Box mt={4}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box mt={4} px={['20px', '40px', '160px']}>
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
