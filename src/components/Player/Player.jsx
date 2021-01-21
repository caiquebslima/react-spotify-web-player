import './Player.scss';
import LikeIcon from '../../assets/LikeIcon.jsx';
import ShuffleIcon from '../../assets/ShuffleIcon.jsx';
import PreviousIcon from '../../assets/PreviousIcon.jsx';
import PlayIcon from '../../assets/PlayIcon.jsx';
import SkipIcon from '../../assets/SkipIcon.jsx';
import RepeatIcon from '../../assets/RepeatIcon.jsx';
import QueueIcon from '../../assets/QueueIcon.jsx';
import DevicesIcon from '../../assets/DevicesIcon.jsx';
import VolumeIcon from '../../assets/VolumeIcon.jsx';

export default function Player() {
  return (
    <footer className='player'>
      <section className='player__left'>
        <div className='player__cover'>
          <img src='https://placeimg.com/56/56/any/50' alt='album cover' />
        </div>
        <div className='player__title'>
          <a href=''>
            <h3>Worship House</h3>
          </a>
          <a href=''>
            <p>Sprain</p>
          </a>
        </div>
        <div className='player__like'>
          <LikeIcon />
        </div>
      </section>
      <section className='player__center'>
        <div className='player__controls'>
          <button>
            <ShuffleIcon />
          </button>
          <button>
            <PreviousIcon />
          </button>
          <button className='play-icon'>
            <PlayIcon />
          </button>
          <button>
            <SkipIcon />
          </button>
          <button>
            <RepeatIcon />
          </button>
        </div>
        <div className='player__progress-bar'>
          <span>1:58</span>
          <div className='progress-bar'>
            <div className='bar'>
              <div className='bar__active'>
                <span className='bar__active--slider'></span>
              </div>
            </div>
          </div>
          <span>4:02</span>
        </div>
      </section>
      <section className='player__right'>
        <button>
          <QueueIcon />
        </button>
        <button>
          <DevicesIcon />
        </button>
        <button>
          <VolumeIcon />
        </button>
        <div className='volume-bar'>
          <div className='bar'>
            <div className='bar__active'>
              <span className='bar__active--slider'></span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
