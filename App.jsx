import React from 'react'
import "./global.css"
const App = () => {
  return (
    <div>
        <nav>
            <div id='div1'>
            <img src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png" alt="" />
            </div>
            <div id='div2'>
                <ul type="none">
                    <li>Home</li>
                    <li>ADMISSION</li>
                    <li>ABOUT US</li>
                    <li>COURSES</li>
                    <li>MBBS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div id='div3'>
                <ul type="none">
                    <li>CALL +919899880100</li>
                    
                    
                </ul>
            </div>
        </nav>
        <div id='my-carousel' >
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/10/28/18/02/songbird-8348139_1280.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/10/26/15/11/mercedes-8342911_1280.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

        {/* banner section */}
        <div id="banner-section">
<div id="banner-section-container"> 
            <div id="banner-child1">
                <aside className="b-child1-items1">WHO WE ARE</aside>
                <aside className="b-child1-items2">Knowledge will bring you the opportunity to make a difference.</aside>
                <aside className="b-child1-items3">We believe every student deserves the best education in their life and hence provide a portal where students can find top colleges in India and choose their dream vocation.
                    We offer complete assistance to students from admission counseling, college selections, educational loan assistance, career counseling, and vocation selection.</aside>
                <aside className="b-child1-items4">
                    Discover more
                </aside>
            </div>
            <div id="behind" >
            <div  id="banner-child2">
           
                <aside className='b-child2-items1'></aside>
                <img src="https://collegedakhla.com/wp-content/uploads/2023/03/1488259134phpShnPJa1-3.jpg" alt=""  class='b-child2-items2' />
                <aside className='b-child2-items2'></aside>
                </div> 
            </div>
  </div>
  <div id="three-div">
<div className='one-div'>
    <img id='graduate' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBf_okjZIzP56HVX77avarDC2_bsz_VQRDnB8-pUDkFr9XaHC" alt="" />
    <h6>University Selection</h6>

<p>University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.</p>
</div>
<div className='two-div'> 
<img id='graduate-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dnmjfps7jyF4btuGX0SPdnaBykJ9r98Ml8gQ9lXdeoznl_1d" alt="" />
<h6>Education Loan Assistance</h6>
<p>College Dakhla aims to encourage pupils to pursue their schooling in procuring economic assistance. To encourage students to maintain advanced schooling despite their financial openings.</p>
</div>
<div className='three-div'>
    <img id='graduate-3' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWbUB3pujZxtvmeJmGQRJOVvSNzo8OZRKmpQY60pF0GLDU7DJW" alt="" />
    <h6>Admission Guidance</h6> 
<p>We understand the stress of a student hence provide personalized direction, support, and counselling to him/her, in the order they know their dream of analyzing at most colleges of both India</p>
</div>
</div>
<div id='post'>
    <div className='past-child1'>
       
        <div className='green'><h3>Start Your Career with B.Tech Program.</h3><div className='btn1'>
            <img id='g-arrow' src="data:image/jpeg;base64,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" alt="" />
         
           
            </div></div>
      

<img id='post1' src="https://collegedakhla.com/wp-content/uploads/2023/03/btech.jpg" alt=""  />
    </div>
    <div className='post-child2'>
        <div className='red'><h3>Start Your Career with MBBS Program.</h3></div>
<img id='post2' src="https://collegedakhla.com/wp-content/uploads/2023/03/mbbs.jpg" alt=""   />
    </div>
</div>
        </div>

    </div>
   
    
  )
}

export default App