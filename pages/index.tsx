import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Layout from '@/components/layout';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

interface ApiImage {
  id: string;
  image_url: string; // Assuming the API response includes 'image_url' for the image path
}

export default function Home() {
  const [images, setImages] = useState<ApiImage[]>([]);

  useEffect(() => {
    // Fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await fetch('https://dashboard.seylanteens.com/api/get-completed-images');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setImages(data.images || []); // Adjust based on actual API structure
      } catch (error) {
        console.error('Failed to fetch images:', error);
        setImages([]); // Fallback to empty array
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <Layout>
        <div className={`container-fluid m-0 p-0 ${styles.background_home}`}>
          <div className={`home_slider_container p-0 m-0 position-relative ${styles.hero_container}`}>
            <div>
              <div className={`home_slider_image_container image1 p-0 m-0 ${styles.hero_image_container}`}>
                <div className={`d-flex justify-content-center align-items-end pb-5 w-100 ${styles.hero_container}`} style={{ minHeight: '100vh' }}>
                  <div className={`d-flex flex-column justify-content-center align-items-center ${styles.home_txt_container}`}>
                    {/* <Image
                      src={'/seylan/final_page/ai_image.png'}
                      height={500}
                      width={500}
                      alt=''
                      className='img-fluid genZ-img'
                    /> */}
                    <h2
                      className="text-center px-2 text-white d-flex justify-content-center"
                      style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        width: '67%',
                      }}
                    >
                      <div className="text-xl see-future py-3" style={{ maxWidth: '500px' }}>
                        <div>Your Future, Your Freedom</div>
                        <div className="font-bold">
                          See It Now!
                        </div>
                      </div>
                    </h2>
                    <p className="text-center px-2 text-white text-xl" style={{ width: '67%' }}>
                      Imagine your financial future and watch it come to life. Enter your details,
                      and our AI will create a vision of your financial freedom!
                    </p>
                    <Link
                      href="/getUserDetails"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <button type="submit" className="mt-3 mb-5 submit-btn-home">
                        See Your Future!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container-fluid m-0 ${styles.background_slider} p-0`}>
          <div className={`slider_container p-0 m-0 position-relative ${styles.slider_container}`}>
            <Link
              className="gallery_link"
              href='/imageSwiper'
            >
              <h3>Gallery</h3>
            </Link>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              navigation
              spaceBetween={0}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 0 },
                480: { slidesPerView: 1, spaceBetween: 0 },
                640: { slidesPerView: 2, spaceBetween: 0 },
                1024: { slidesPerView: 4, spaceBetween: 0 },
                1336: { slidesPerView: 4, spaceBetween: 0 },
              }}
            >
              {images.map((image) => (
                //  style={{ padding: '10px' }}
                <SwiperSlide key={image.id}>
                  <Link href="#">
                    <Image
                      src={image.image_url}
                      alt={`Image ${image.id}`}
                      width={250}
                      height={250}
                      className="img-fluid" // rounded-3
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Layout>
    </>
  );
}
