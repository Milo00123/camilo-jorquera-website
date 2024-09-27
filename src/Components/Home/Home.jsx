import React from 'react';
import './Home.scss';
import developer from '../../Assets/Images/IMG_4036-removebg-preview.png';
import mountain from '../../Assets/Images/IMG_4034-removebg-preview.png';
// import bike from '../../Assets/Images/IMG_4035-removebg-preview.png';

function Home() {
  return (<>
  <div className='home-container'>
      <div className='Hi-there-container'>
            <span className='home-letter home-letter__1'>H</span>
            <span className='home-letter home-letter__2'>i  </span>
            <span className='home-letter home-letter__3'>t</span>
            <span className='home-letter home-letter__4'>h</span>
            <span className='home-letter home-letter__5'>e</span>
            <span className='home-letter home-letter__6'>r</span>
            <span className='home-letter home-letter__7'>e</span>
            <span className='home-letter home-letter__8'>!  </span>
            <span className='home-letter home-letter__9'>🙃</span>
      </div>
        <div className='I-am-container'>
            <span className='sub-title sub-title__1'>I </span>
            <span className='sub-title sub-title__2'> a</span>
            <span className='sub-title sub-title__3'>m </span>
        </div>
    <div className='home-camilo-container'>
            <span className='home-camilo home-camilo__1'>C</span>
            <span className='home-camilo home-camilo__2'>a</span>
            <span className='home-camilo home-camilo__3'>m</span>
            <span className='home-camilo home-camilo__4'>i</span>
            <span className='home-camilo home-camilo__5'>l</span>
            <span className='home-camilo home-camilo__6'>o</span>
      </div>
            <div className='home-camilo-last-name'>
                    <span className='home-camilo home-camilo__7'>J</span>
                    <span className='home-camilo home-camilo__8'>o</span>
                    <span className='home-camilo home-camilo__9'>r</span>
                    <span className='home-camilo home-camilo__10'>q</span>
                    <span className='home-camilo home-camilo__11'>u</span>
                    <span className='home-camilo home-camilo__12'>e</span>
                    <span className='home-camilo home-camilo__13'>r</span>
                    <span className='home-camilo home-camilo__14'>a</span>
            </div>

            <div className='home-images-container'>
                <img  className='developer' src={developer}/>
                <img  className='mountain' src={mountain}/>
                {/* <img  className='bike' src={bike}/> */}
            </div>

    </div>
    </> )
}

export default Home