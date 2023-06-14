import LazyLoad from "react-lazy-load";

function Gallery(){
    return (<>
    <div className="section">
        <div className="container width">
        <div className="title">
                <h4>Gallery</h4>
            </div>
            <div className="gallerybox">
                <div>
                    <LazyLoad>
                    <img src="photo/banner-1.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-2.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-3.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-4.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-5.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-6.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <LazyLoad>
                    <img src="photo/gallery-7.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-8.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-9.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-10.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-11.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-12.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-13.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-14.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-15.jpg" alt="" />
                    </LazyLoad>
                </div>
                <div>
                <LazyLoad>
                    <img src="photo/gallery-16.jpg" alt="" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Gallery;