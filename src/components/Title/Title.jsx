import './Title.css'
import Emoji from '../../assest/images/emoji_hi.png'
const Title = ()=>{
    return(
        <div className='TitleBox'>
            <p className="title">WELCOME</p>
            <img className='emoji' src={Emoji} alt="" srcset="" />
        </div>
    )
}

export default Title