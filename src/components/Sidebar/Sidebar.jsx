import './Sidebar.scss';
import SpotifyLogo from '../../icons/SpotifyLogo';
import HomeIconActive from '../../icons/HomeIconActive';
import SearchIconUnactive from '../../icons/SearchIconUnactive';
import LibraryIconUnactive from '../../icons/LibraryIconUnactive';
import AddIcon from '../../icons/AddIcon';
import HeartIcon from '../../icons/HeartIcon';

export default function Sidebar() {
  return (
    <nav className='sidebar'>
      <div className='sidebar__logo'>
        <button className='nav-button'>
          <a href='#'>
            <SpotifyLogo />
          </a>
        </button>
      </div>
      <ul className='sidebar__nav'>
        <li>
          <button className='nav-button'>
            <a href=''>
              <span class='icon'>
                <HomeIconActive />
              </span>{' '}
              Home
            </a>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <a href=''>
              <span class='icon'>
                <SearchIconUnactive />
              </span>{' '}
              Search
            </a>
          </button>
        </li>
        <li>
          <a href=''>
            <span class='icon'>
              <LibraryIconUnactive />
            </span>{' '}
            Your Library
          </a>
        </li>
      </ul>
      <div className='sidebar__playlists'>
        <h3>PLAYLISTS</h3>
        <ul className='sidebar__nav'>
          <li>
            <button className='nav-button'>
              <a href=''>
                <span class='icon'>
                  <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOZJREFUaIHt2TEOgyAUxvFH0yMwO3lHjuBhPAmDCQOzCysDs8vrbOpAU0rjx/dLXAhN3z8S00ajqioDefx7gN4YjI7B6BiMjsHoGIyOwegYjI7BvxRjlGmaTlcIoecI8uz5ZcdxSErpba0nHml0DEbHYHQMRtfkh0fOuWpfKeVyrfbz1tqP5rpiWrxbMsZ8PUiNFq/BhjvSDEbX5KG1rmvVvn3fxTl3WluWReZ5bjFGHe1o2zYVkdPlve85gg53pBmMjsHoGIyOweia/D28k+HuMIPRMRgdg9ExGB2D0TEYHYPRDRf8ApEVE595+BQRAAAAAElFTkSuQmCC'
                    alt='add icon'
                  />
                </span>{' '}
                Create Playlist
              </a>
            </button>
          </li>
          <li>
            <button className='nav-button'>
              <a href=''>
                <span class='icon'>
                  <img
                    src='data:image/png;base64,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'
                    alt='heart icon'
                  />
                </span>{' '}
                Liked Songs
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
