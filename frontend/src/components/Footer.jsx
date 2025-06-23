import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-2">For better experience, download the Swiggy app now</h2>
          <div className="flex space-x-2 mb-4">
            <a href="#" className="bg-orange-500 px-3 py-1 rounded">Download Android App</a>
            <a href="#" className="bg-orange-500 px-3 py-1 rounded">Download iOS App</a>
          </div>
          <p className="text-xs text-gray-400">© 2025 Swiggy Limited</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact us</h3>
          <ul className="space-y-1 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
            <li>Life at Swiggy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Explore with Swiggy</h3>
          <ul className="space-y-1 text-sm">
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Available in:</h3>
          <ul className="space-y-1 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>679 cities</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Social Links</h3>
          <div className="flex space-x-3">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;