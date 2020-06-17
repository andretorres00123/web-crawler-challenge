import React from 'react';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import HomeHeader from '../components/widgets/HomeHeader';
import NewsList from '../components/widgets/NewsList';
import Actions from '../statemanagement/actions';

class Home extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  componentDidMount() {
    const { getAllNews } = this.props;
    getAllNews();
  }

  render() {
    return (
      <Box>
        <HomeHeader />
        <NewsList />
      </Box>
    );
  }
}

const { getAllNews } = Actions;

export { Home };

export default connect(null, {
  getAllNews,
})(Home);
