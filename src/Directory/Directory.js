import { useEffect, useState } from 'react';
import ShapeGallery from '../ShapeGallery/ShapeGallery';
import './Directory.scss';

const Directory = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClickEvent = (event) => {
    const target = event.target.className;
    if (showSidebar && target === 'overlay') {
      toggleSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickEvent);
    return () => {
      window.removeEventListener('click', handleClickEvent);
    };
  });

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  return (
    <div className='Directory'>
      <svg xmlns="http://www.w3.org/2000/svg"
        id='hamburgerIcon'
        className={showSidebar ? 'sidebarShown' : 'sidebarHidden'}
        viewBox="0 96 960 960"
        onClick={toggleSidebar}
      >
        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
      </svg>
      <div id='sidebar' className={`sidebar ${showSidebar ? 'sidebarShown' : 'sidebarHidden'}`}>
        <a className='sidebarItem'>
          Shape Gallery
        </a>
        <a className='sidebarItem'>
          About
        </a>
      </div>
      { showSidebar && <div className='overlay' /> }
      <ShapeGallery />
    </div>
  );
};

export default Directory;