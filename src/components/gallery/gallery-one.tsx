import Image, { StaticImageData } from "next/image";
import gallery_thumb_1 from "@/assets/img/gallary/gallary-thumb-1.jpg";
import gallery_thumb_2 from "@/assets/img/gallary/gallary-thumb-2.jpg";
import gallery_thumb_3 from "@/assets/img/gallary/gallary-thumb-3.jpg";
import gallery_thumb_4 from "@/assets/img/gallary/gallary-thumb-4.jpg";

function GalleryItem({img, id}:{img:string; id:number}) {
  return (
    <div className={`tp-gallary-3-item-${id} wow fadeInUp`} data-wow-delay={`.${id}s`}>
      <img src={img} alt="gallery-img" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
    </div>
  );
}

export default function GalleryOne() {
  return (
    <div className="gallary-area tp-gallary-3-wrap pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-30">
            <GalleryItem img="/assets/img/Images/School Images (17).jpg" id={1} />
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <GalleryItem img="/assets/img/Images/School Images (18).JPG" id={2} />
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <GalleryItem img="/assets/img/Images/School Images (19).JPG" id={3} />
          </div>
          <div className="col-lg-3 col-md-6 mb-30">
            <GalleryItem img="/assets/img/Images/School Images (20).JPG" id={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
