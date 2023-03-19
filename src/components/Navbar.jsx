import './Navbar.css'
import Logo from '../assets/enochojotisa1.png'
import Playstore from '../assets/playstore.png'
import Applestore from '../assets/applestore.png'
    

export default function Navbar () {
    function click () {
        document.getElementById("sidebar").style.left = "0"
        document.getElementById("sidebar").style.visibility = "visible"
    }
    function close () {
        document.getElementById("sidebar").style.left = "-100vw"
    }
    return(
        <nav>
           <section className='logo'>
                <img src={Logo} alt="Logo" className='logo-img'/>
                <span className='logo-name'>
                    <span className='akewi'>
                        AKEWI 
                    </span>
                    <span className='Authors-name'>
                        By Enoch Ojotisa
                    </span>
                </span>
           </section>
           <section className='button-container'>
                <button>Log In</button>
                <button>Sign Up</button>
           </section>
            <section id='sidebar'>
                <div className='top-sidebar'>
                    <div className='ts-1'>
                    <img src={Logo} alt="Logo" className='logo-img'/>
                    <span className='logo-name'>
                        <span className='akewi'>
                            AKEWI 
                        </span>
                        <span className='Authors-name'>
                            By Enoch Ojotisa
                        </span>
                    </span>
                    </div>
                   <div className='ts-2'>
                   <button className="fa-solid fa-xmark" onClick={close} id="close"></button>
                   </div>
                  
                </div>
                <div className='second-sidebar'>
                    <input type="text" placeholder='Search' className='sidebar-input'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='third-sidebar'>
                    <article className='ts-3'>
                        <h3>Create New Post</h3>
                        <h3>Manage proflie</h3>
                        <h3>My Bookstore</h3>
                        <h3>My Events</h3>
                        <h3>Donate</h3>
                        <h3>Help/Support</h3>
                        <h3>Settings</h3>
                    </article>
                    <article className='ts-4'>
                        <h3>Drafts</h3>
                        <h3>Notification</h3>
                        <h3>Post a book</h3>
                        <h3>Post an event</h3>
                        <h3>Saved Posts</h3>
                    </article>
                </div>
              
               <hr/>
               <div className='available'>Available On </div>
               <div className='img-div'>
                    <img src={Playstore} alt="playstore" className='sidebar-img'/>
               </div>
               <div className='img-div2'>
                    <img src={Applestore} alt="playstore" className='sidebar-img'/>
               </div>
               <div className='bottom'>
                <hr />
                <h3 className='social'>Social</h3>
                    <span className='social-img'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    </span> 
                    <p className='copyright'>Copyright 2023 Enoch Ojotisa</p>
               </div>
              
            </section>
           <button className="fa-solid fa-bars" id='offcanvas' onClick={click}></button>
           
        </nav>
    )
}