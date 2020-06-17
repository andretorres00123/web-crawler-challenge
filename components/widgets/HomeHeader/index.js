import { Flex, Box, Text } from 'rebass';
import { Title } from '../../elements';
import { withTranslation } from '../../../i18n';

function HomeHeader({ t }) {
  return (
    <Flex justifyContent="center" alignItems="baseline">
      <Box>
        <Title>
          {t('home-title')}
        </Title>
        <Text textAlign="center">{` ${t('home-title-author')}`}</Text>
      </Box>
    </Flex>
  );
}

export default withTranslation('common')(HomeHeader);
