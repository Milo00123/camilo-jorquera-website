import React from 'react';
import './Home.scss';
import developer from '../../Assets/Images/IMG_4036-removebg-preview.png';
import mountain from '../../Assets/Images/IMG_4034-removebg-preview.png';
// import bike from '../../Assets/Images/IMG_4035-removebg-preview.png';

function Home() {
  return (<>
  <div className='home-container'>
  
    <div className='home-camilo-container'>
            <span className='home-camilo home-camilo__name'>C</span>
            <span className='home-camilo home-camilo__name'>a</span>
            <span className='home-camilo home-camilo__name'>m</span>
            <span className='home-camilo home-camilo__name'>i</span>
            <span className='home-camilo home-camilo__name'>l</span>
            <span className='home-camilo home-camilo__name'>o</span>
      </div>
            <div className='home-camilo-last-name'>
                    <span className='home-camilo home-camilo__last'>J</span>
                    <span className='home-camilo home-camilo__last'>o</span>
                    <span className='home-camilo home-camilo__last'>r</span>
                    <span className='home-camilo home-camilo__last'>q</span>
                    <span className='home-camilo home-camilo__last'>u</span>
                    <span className='home-camilo home-camilo__last'>e</span>
                    <span className='home-camilo home-camilo__last'>r</span>
                    <span className='home-camilo home-camilo__last'>a</span>
            </div>
            <h2 className='home-subtitle'>SOFTWARE ENGINEER</h2>
            <div className='home-images-container'>
                <img  className='developer' src={developer}/>
                <img  className='mountain' src={mountain}/>
                {/* <img  className='bike' src={bike}/> */}
            </div>

    </div>
    </> )
}

export default Home