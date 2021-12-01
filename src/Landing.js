import img1 from "./images/background.png";
import img2 from "./images/icon1.png";
import img3 from "./images/border1.png";
import img4 from "./images/search.png";
import Box from "./Box";
import Buton from "./Buton.js";

const Landing = () => {
  return (<>
    
      <div className="landing-image">
        
      </div>
    
    <div className="home-section-1 text-white bg-color">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 pt-5">
          <img src={img2} className="img-fluid"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 p-4">
        <div className="mt-3 text-sm-start text-md-end">
           <Box/>
         </div>
         <div className="mt-3 text-end text-lg-start text-md-start">
           <Box/>
         </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mt-5 p-4 ">
         <div className="mt-3 text-lg-end text-start text-md-end">
           <Box/>
         </div>
         <div className="mt-3 text-lg-end text-end text-md-start">
           <Box/>
         </div>
        </div>
      </div>
    </div>
    <div className="bg-color pb-4">
    <img src={img3} className="img-fluid"></img>
    </div>
    <div className="bg-color text-white ">
    <div className="container">
    <div className="row ">
  <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-4">
      <h1 className="my-3">LOREM IPSUM</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt dolor ex, a cursus massa facilisis et. Donec laoreet mi vel congue molestie. Ut mi ipsum, efficitur suscipit est ac, tempor pulvinar diam. Ut ut enim at erat faucibus hendrerit. Sed ut ipsum sed arcu sodales placerat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt dolor ex, a cursus massa facilisis et. faucibus hendrerit. Sed ut ipsum sed arcu sodales placerat. . 
      </p>
      <Buton/>
  </div>
  <div className="col-12 col-sm-12 col-md-12 col-lg-6">
  <img src={img4} className="img-fluid"></img>
  </div>
</div>
    </div>
    </div>
  </>

  )
}
export default Landing;