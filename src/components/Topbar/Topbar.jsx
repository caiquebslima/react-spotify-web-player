import './Topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
      <nav className='topbar__nav'>
        <button id='left'>
          <svg
            role='img'
            focusable='false'
            height='24'
            width='24'
            viewBox='0 0 24 24'
            class='Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss'
          >
            <polyline
              points='16 4 7 12 16 20'
              fill='none'
              stroke='#fff'
            ></polyline>
          </svg>
        </button>
        <button id='right'>
          <svg
            role='img'
            focusable='false'
            height='24'
            width='24'
            viewBox='0 0 24 24'
            class='Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss'
          >
            <polyline
              points='8 4 17 12 8 20'
              fill='none'
              stroke='#fff'
            ></polyline>
          </svg>
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
    </div>
  );
}
