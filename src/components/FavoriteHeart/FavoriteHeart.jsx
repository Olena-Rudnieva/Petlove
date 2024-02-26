import { Heart, IconEmpty, IconFavorite } from './FavoriteHeart.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import // addFavoriteNotices,
// removeFavoriteNotices,
'../../redux/notices/noticesOperations';
import { selectFavorites } from '../../redux/notices/noticesSelectors';
import { useEffect } from 'react';

// import { toast } from 'react-toastify';

export const FavoritesHeart = ({ item }) => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const isFavorite = false;

  // const isFavorite = favorites?.some(
  //   favoritePet => item._id === favoritePet._id
  // );

  useEffect(() => {
    // const updatedIsFavorite = favorites?.some(
    //   favoritePet => item._id === favoritePet._id
    // );
    // setIsFavorite(updatedIsFavorite);
  }, [favorites, item._id]);

  const handleToggleHeart = () => {
    if (isLoggedIn) {
      // isFavorite
      //   ? dispatch(removeFavoriteNotices(item._id))
      //   : dispatch(addFavoriteNotices(item._id));
      // toast.success(
      //   isFavorite ? 'Removed from favorites' : 'Added to favorites'
      // );
    } else {
      console.log('Test');
      // toast.warn('Please log in to use this functionality.');
    }
    console.log(item._id);
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
