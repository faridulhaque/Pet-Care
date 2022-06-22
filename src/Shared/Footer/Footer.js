import React from "react";

const Footer = () => {
  return (
    <div>
      <footer style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="bg-secondary">
        <div>
          <p className='text-center text-primary'>©Pet Care 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
