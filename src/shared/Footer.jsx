import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Us  */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">CONTACT US</h2>
            <p>123 ABC Street, Unit 21, Bangladesh</p>
            <p>+88 1234567890</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 22:00</p>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-bold mb-2">Follow US</h2>
            <p className="mb-2">Join us on social media</p>
            <div className="flex justify-center md:justify-end gap-4 text-xl">
              <a href="#" className="hover:text-primary">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-primary">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-primary">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="bg-black text-center py-3 text-sm">
          Copyright © CulinaryCloud. All rights reserved.
        </div>
      </footer>

      {/* Font Awesome CDN (for social icons)  */}
      <script
        src="https://kit.fontawesome.com/your-kit-code.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default Footer;
