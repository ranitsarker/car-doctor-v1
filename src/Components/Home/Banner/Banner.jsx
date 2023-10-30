import bannerImg1 from '../../../assets/images/banner/1.jpg';
import bannerImg2 from '../../../assets/images/banner/2.jpg';
import bannerImg3 from '../../../assets/images/banner/3.jpg';
import bannerImg4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[520px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerImg1} className="object-cover w-full rounded-lg" />
                <div className="rounded-lg w-full absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-4 md:w-1/2 md:pl-12 pl-4'>
                    <h2 className='text-6xl'>Your Car Best Friend</h2>
                    <p>Trust our expertise to keep your vehicle running smoothly and safely.</p>
                    <div>
                    <button className="btn mr-4 bg-[#ff3811] text-white hover:text-black border-[#ff3811]">Discover More</button>
                      <button className="btn btn-outline text-white">Latest Project</button>
                    </div>

                  </div>
                  </div>
                  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerImg2} className="object-cover w-full rounded-lg" />
                <div className="rounded-lg w-full absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-4 md:w-1/2 md:pl-12 pl-4'>
                    <h2 className='text-6xl'>On-Demand Car Care</h2>
                    <p>We are here when your car needs a doctor. Fast, reliable, and convenient.</p>
                    <div>
                    <button className="btn mr-4 bg-[#ff3811] text-white hover:text-black border-[#ff3811]">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>

                  </div>
                  </div>
                  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerImg3} className="object-cover w-full rounded-lg" />
                <div className="rounded-lg w-full absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-4 md:w-1/2 md:pl-12 pl-4'>
                    <h2 className='text-6xl'>Diagnose, Repair, Thrive</h2>
                    <p>Experience top-notch car care that keeps your vehicle in its prime.</p>
                    <div>
                    <button className="btn mr-4 bg-[#ff3811] text-white hover:text-black border-[#ff3811]">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>

                  </div>
                  </div>
                  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerImg4} className="object-cover w-full rounded-lg" />
                <div className="rounded-lg w-full absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className='text-white space-y-4 md:w-1/2 md:pl-12 pl-4'>
                    <h2 className='text-6xl'>Your Car Health, Our Priority</h2>
                    <p>Count on us to provide the TLC your car deserves, one appointment at a time.</p>
                    <div>
                      <button className="btn mr-4 bg-[#ff3811] text-white hover:text-black border-[#ff3811]">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>

                  </div>
                  </div>
                  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div> 
            </div>
        </>
    );
};

export default Banner;