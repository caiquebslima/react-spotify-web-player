import ArrowLeft from '../../assets/ArrowLeft';
import ArrowRight from '../../assets/ArrowRight';
import './Topbar.scss';

export default function Topbar() {
  return (
    <header className='topbar'>
      <nav className='topbar__nav'>
        <button id='left'>
          <ArrowLeft />
        </button>
        <button id='right'>
          <ArrowRight />
        </button>
      </nav>
      <div className='topbar__action'>
        <button>
          <figure>
            <img
              src='https://placeimg.com/28/28/animals?t=1607744347951'
              alt='user avatar'
            />
          </figure>
          <span>Caique Lima</span>
        </button>
      </div>
    </header>
  );
}
