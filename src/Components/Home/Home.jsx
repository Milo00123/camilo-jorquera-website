
import './Home.scss';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import spiningSound from '../../Assets/Audios/paper-spin.mp3'

function Home() {
        const navigate = useNavigate();
        const audioRef = useRef(new Audio(spiningSound));

        const playSound = () => {
          
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        };
        const stopSound = () => {
                audioRef.current.pause();
              };
  return (<>
  <div className='home-container'>
  <div className='home-light-container'>
                <div 
                onMouseLeave={stopSound}
                onMouseEnter={playSound}
                 className='light'></div>
            </div>
    <div onClick={()=>navigate('/about')} className='home-camilo-container'>
            <span className='home-camilo home-camilo__1'>C</span>
            <span className='home-camilo home-camilo__2'>A</span>
            <span className='home-camilo home-camilo__3'>M</span>
            <span className='home-camilo home-camilo__4'>I</span>
            <span className='home-camilo home-camilo__5'>L</span>
            <span className='home-camilo home-camilo__6'>O</span>
      </div>
            <div onClick={()=>navigate('/about')} className='home-camilo-last-name'>
                    <span className='home-camilo  home-camilo__7'>J</span>
                    <span className='home-camilo  home-camilo__8'>O</span>
                    <span className='home-camilo  home-camilo__9'>R</span>
                    <span className='home-camilo  home-camilo__10'>Q</span>
                    <span className='home-camilo  home-camilo__11'>U</span>
                    <span className='home-camilo  home-camilo__12'>E</span>
                    <span className='home-camilo  home-camilo__13'>R</span>
                    <span className='home-camilo  home-camilo__14'>A</span>
            </div>
            <h2 className='home-subtitle'>SOFTWARE ENGINEER</h2>
            <div className='light-container'>
            <div className='light__three'></div>
              <div className='light__two'></div>
              <div className='light__four'></div>
            </div>

    </div>
    </> )
}

export default Home