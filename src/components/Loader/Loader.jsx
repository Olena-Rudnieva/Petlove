import { LoaderWrapper, StyledLoader } from './Loader.styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Loader = () => {
  const percentage = 100;

  return (
    <LoaderWrapper>
      <StyledLoader>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            //   rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            //   strokeLinecap: 'butt',

            // Text size
            //   textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            //   pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(246, 184, 61, ${percentage / 100})`,
            textColor: '#F6B83D',
            trailColor: '#FFF4DF',
            backgroundColor: '#FFF',
          })}
        />
      </StyledLoader>
    </LoaderWrapper>
  );
};
