import '../style/navbar.css';
import logo from '../assets/logo1.png';


const Navbar2 = () => (
  <div className="scanEL__navbar">
    <div className="scanEL__navbar-links">
      <a href='/'>
        <div>
          <img className='ScannelLogo' src={logo} alt=""></img>
        </div></a>

    </div>

    <div className="scanEL__navbar-sign">

      <div className='auth_buttons'>
        <a href='/'><button className='singin_btn'>home</button></a>
      </div>

    </div>

  </div>
);

export default Navbar2;
