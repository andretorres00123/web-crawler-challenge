import { Flex, Text } from 'rebass';
import { Title } from '../../elements';
import { withTranslation } from '../../../i18n';

function HomeHeader({ t }) {
  return (
    <Flex justifyContent="center" alignItems="baseline">
      <Title>
        {t('home-title')}
      </Title>
      <Text>{` ${t('home-title-author')}`}</Text>
    </Flex>
  );
}

export default withTranslation('common')(HomeHeader);
