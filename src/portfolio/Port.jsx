import React from 'react';
import { Link } from 'react-scroll';

const MyComponent1 = () => {
  return (
    <div>
      <button>
        <Link
          to="Homepage"  // Replace "sectionId" with the actual ID of the section you want to scroll to
          smooth={true}
          duration={500}  // Adjust the duration of the scroll animation (in milliseconds) as needed
        >
          See Demo
        </Link>
      </button>

  
      
    </div>
  );
};

export default MyComponent;
