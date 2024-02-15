import { Button } from 'components/Button/Button';
import {
  Accent,
  ButtonWrapper,
  MyNoticesWrapper,
  Text,
  TextWrapper,
} from './MyNotices.styled';

export const MyNotices = () => {
  return (
    <MyNoticesWrapper>
      <ButtonWrapper>
        <Button
          type={'button'}
          text={'My favorite pets'}
          width={'142px'}
          height={'48px'}
        />

        <Button
          type={'button'}
          text={'Viewed'}
          width={'142px'}
          height={'48px'}
          whitebackground="true"
        />
      </ButtonWrapper>
      <TextWrapper>
        <Text>
          Oops, <Accent>looks like there aren't any furries</Accent> on our
          adorable page yet. Do not worry! View your pets on the "find your
          favorite pet" page and add them to your favorites.
        </Text>
      </TextWrapper>
    </MyNoticesWrapper>
  );
};
