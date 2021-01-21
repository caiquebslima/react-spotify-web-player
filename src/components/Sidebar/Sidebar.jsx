import './Sidebar.scss';
import SpotifyLogo from '../../assets/SpotifyLogo';
import HomeIconActive from '../../assets/HomeIconActive';
import SearchIconUnactive from '../../assets/SearchIconUnactive';
import LibraryIconUnactive from '../../assets/LibraryIconUnactive';
import AddIcon from '../../assets/AddIcon';
import HeartIcon from '../../assets/HeartIcon';

export default function Sidebar() {
  return (
    <nav className='sidebar'>
      <div className='sidebar__logo'>
        <button className='nav-button'>
          <a href='http://localhost:3000/'>
            <SpotifyLogo />
          </a>
        </button>
      </div>
      <ul className='sidebar__nav'>
        <li>
          <button className='nav-button'>
            <a href='http://localhost:3000/'>
              <span class='icon'>
                <HomeIconActive />
              </span>{' '}
              Home
            </a>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <a href='http://localhost:3000/'>
              <span class='icon'>
                <SearchIconUnactive />
              </span>{' '}
              Search
            </a>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <a href='http://localhost:3000/'>
              <span class='icon'>
                <LibraryIconUnactive />
              </span>{' '}
              Your Library
            </a>
          </button>
        </li>
      </ul>

      <h3>PLAYLISTS</h3>
      <ul className='sidebar__nav'>
        <li>
          <button className='nav-button'>
            <a href='http://localhost:3000/'>
              <span class='icon'>
                <AddIcon />
              </span>{' '}
              Create Playlist
            </a>
          </button>
        </li>
        <li>
          <button className='nav-button'>
            <a href='http://localhost:3000/'>
              <span class='icon'>
                <HeartIcon />
              </span>{' '}
              Liked Songs
            </a>
          </button>
        </li>
      </ul>
      <div className='sidebar__playlists'>
        <ul>
          <li>
            <a href='http://localhost:3000/'>Black Country New Road</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Discover Weekly</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Release Radar</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Your Top 20 Songs in 2020</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>
              Introduction to Modern Post Punk
            </a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Playlist</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Smooth Jazz</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Blackgaze</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Math Rock</a>
          </li>
          <li>
            <a href='http://localhost:3000/'>Dreamy Ballads</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
