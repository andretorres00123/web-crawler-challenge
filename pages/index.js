import { Box } from 'rebass';
import HomeHeader from '../components/widgets/HomeHeader';

function Home() {
  return (
    <Box>
      <HomeHeader />
    </Box>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
