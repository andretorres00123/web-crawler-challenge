import React, { Component } from 'react';
import { Flex } from 'rebass';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Radio } from 'react-radio-group';
import { ButtonsWrapper } from './elements';
import Actions from '../../../statemanagement/actions';
import { withTranslation } from '../../../i18n';

class FiltersBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'all',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    if (value === 'all') {
      this.props.getAllNews();
    } else {
      this.props.getNewsByFilter(value);
    }
    this.setState({ selectedFilter: value });
  }

  render() {
    const { selectedFilter } = this.state;
    const { t, loading } = this.props;

    return (
      <Flex justifyContent="center">
        <ButtonsWrapper
          name="filters"
          selectedValue={selectedFilter}
          onChange={this.handleChange}
        >
          <Radio value="all" disabled={loading} />
          {t('home-filters-all-value')}
          <Radio value="longTitles" disabled={loading} />
          {t('home-filters-long-titles-value')}
          <Radio value="shortTitles" disabled={loading} />
          {t('home-filters-short-titles-value')}
        </ButtonsWrapper>
      </Flex>
    );
  }
}

const { getAllNews, getNewsByFilter } = Actions;

const mapStateToProps = (state) => ({
  loading: state.news.loading,
});

export default compose(
  connect(mapStateToProps, {
    getAllNews,
    getNewsByFilter,
  }),
  withTranslation('common'),
)(FiltersBar);
