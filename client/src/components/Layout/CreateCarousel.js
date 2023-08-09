import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const data = [
    {
     image: require('../../resources/banner/shoes6.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
     image: require('../../resources/banner/men4.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
     image: require('../../resources/banner/women4.jpg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('../../resources/banner/shoes2.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
    {
      image:require('../../resources/banner/women1.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
    {
      image:require('../../resources/banner/shoes4.png'), 
      caption:"Caption",
      description:"Description Here"
     },
    {
      image:require('../../resources/banner/shoes5.jpg'), 
      caption:"Caption",
      description:"Description Here"
     },
   
  ]



function CreateCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-ride="carousel">
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[0].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[1].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[2].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[3].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[4].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={data[5].image}  
      alt="First slide"  
    />  
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CreateCarousel;