
import './Home.scss';
import developer from '../../Assets/Images/IMG_4036-removebg-preview.png';
import mountain from '../../Assets/Images/IMG_4034-removebg-preview.png';


function Home() {

  return (<>
  <div className='home-container'>
  
    <div className='home-camilo-container'>
            <span className='home-camilo home-camilo__1'>C</span>
            <span className='home-camilo home-camilo__2'>a</span>
            <span className='home-camilo home-camilo__3'>m</span>
            <span className='home-camilo home-camilo__4'>i</span>
            <span className='home-camilo home-camilo__5'>l</span>
            <span className='home-camilo home-camilo__6'>o</span>
      </div>
            <div className='home-camilo-last-name'>
                    <span className='home-camilo  home-camilo__7'>J</span>
                    <span className='home-camilo  home-camilo__8'>o</span>
                    <span className='home-camilo  home-camilo__9'>r</span>
                    <span className='home-camilo  home-camilo__10'>q</span>
                    <span className='home-camilo  home-camilo__11'>u</span>
                    <span className='home-camilo  home-camilo__12'>e</span>
                    <span className='home-camilo  home-camilo__13'>r</span>
                    <span className='home-camilo  home-camilo__14'>a</span>
            </div>
            <h2 className='home-subtitle'>SOFTWARE ENGINEER</h2>
            <div 
            className='home-images-container'>
                <img alt='developer' className='developer' src={developer}/>
                <img alt='mountain' className='mountain' src={mountain}/>

            </div>

    </div>
    </> )
}

export default Home