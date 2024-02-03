import { Heart, IconEmpty, IconFavorite } from './FavoriteHeart.styled';
import sprite from '../../images/sprite.svg';
// import { useDispatch, useSelector } from 'react-redux';

// import { toast } from 'react-toastify';

export const FavoritesHeart = ({ teacher }) => {
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const favoritePets = useSelector(selectFavorites);
  //   const isFavorite = favoritePets?.some(
  //     favoritePet => pet.name === favoritePet.name
  //   );

  const isFavorite = true;

  //   const handleToggleHeart = () => {
  //     if (isLoggedIn) {
  //       isFavorite
  //         ? dispatch(removeFavorite(pet))
  //         : dispatch(addFavorite(pet));
  //       toast.success(
  //         isFavorite ? 'Removed from favorites' : 'Added to favorites'
  //       );
  //     } else {
  //       toast.warn('Please log in to use this functionality.');
  //     }
  //   };

  return (
    <Heart type="button" /*onClick={handleToggleHeart}*/>
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
