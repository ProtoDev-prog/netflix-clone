import './Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
const Footer = () => {
  return (
    <div className='footer-con'>
      <footer>
        <div className="icons">
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={youtube_icon} alt="" />
        </div>
        <div className="footer-links">
          <div className="col">
            <a href="">Audio Description</a>
            <a href="">Invester Relation</a>
            <a href="">Legal Notice</a>
          </div>
          <div className="col">
            <a href="">Audio Description</a>
            <a href="">Invester Relation</a>
            <a href="">Legal Notice</a>
          </div>
          <div className="col">
            <a href="">Audio Description</a>
            <a href="">Invester Relation</a>
            <a href="">Legal Notice</a>
          </div>
          <div className="col">
            <a href="">Audio Description</a>
            <a href="">Invester Relation</a>
            <a href="">Legal Notice</a>
          </div>
        </div>
        <p>1993-2025 Netflix.inc</p>
      </footer>
    </div>
  )
}

export default Footer