import React from 'react';
import Image from 'next/image'; // Import the Image component
import heroImg1 from '../public/img/gallery/3.png'; // Import your image files
import heroImg2 from '../public/img/gallery/4.png';
import heroImg3 from '../public/img/gallery/5.png';


const ImageGallery = () => {
    return (
      <div className="text-center">
        <div className="flex justify-center">
          {/* Use the Image component for each image */}
          <div className="mx-4">
            <Image src={heroImg1} width={350} height={350} alt="Image 1" className="object-cover rounded-md" />
          </div>
          <div className="mx-4">
            <Image src={heroImg2} width={350} height={350} alt="Image 2" className="object-cover rounded-md" />
          </div>
          <div className="mx-4">
            <Image src={heroImg3} width={350} height={350} alt="Image 3" className="object-cover rounded-md" />
          </div>
        </div>
      </div>
    );
  }
  
  export default ImageGallery;
  