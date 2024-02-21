import { Heart, IconEmpty, IconFavorite } from './FavoriteHeart.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import {
  addFavoriteNotices,
  removeFavoriteNotices,
} from '../../redux/notices/noticesOperations';

// import { toast } from 'react-toastify';

export const FavoritesHeart = ({ notice }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const favorites = user.noticesFavorites;
  console.log(favorites);
  console.log(notice);
  // const isFavorite = favorites?.some(
  //   favoritePet => notice._id === favoritePet.id
  // );

  const isFavorite = true;

  const handleToggleHeart = () => {
    if (isLoggedIn) {
      isFavorite
        ? dispatch(removeFavoriteNotices(notice.id))
        : dispatch(addFavoriteNotices('6589436d05a6bcd9b9379422'));
      // toast.success(
      //   isFavorite ? 'Removed from favorites' : 'Added to favorites'
      // );
    } else {
      console.log('Test');
      // toast.warn('Please log in to use this functionality.');
    }
  };

  return (
    <Heart type="button" onClick={handleToggleHeart}>
      {isFavorite ? (
        <IconFavorite>
          <use href={sprite + '#icon-heart'}></use>
        </IconFavorite>
      ) : (
        <IconEmpty>
          <use href={sprite + '#icon-heart'}></use>
        </IconEmpty>
      )}
    </Heart>
  );
};
