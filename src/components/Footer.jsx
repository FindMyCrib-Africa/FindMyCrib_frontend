import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 bg-[#191919] text-white p-3">
        <div className="container block md:grid md:grid-cols-3 md:gap-8">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone size={18} />
            <p>+2349111133111</p>
          </div>
          <div className="text-center">Home</div>
          <div className="flex items-center gap-3 md:justify-end justify-center">
            <FaFacebookF size={18} />
            <p>Facebook</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone size={18} />
            <p>+2349111133111</p>
          </div>
          <div className="text-center">Saved Properties</div>
          <div className="flex items-center gap-3 md:justify-end justify-center">
            <FaXTwitter size={18} />
            <p>Twitter</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Mail size={18} />
            <p>Findmycrib@gmail.com</p>
          </div>
          <div className="text-center">All Listings</div>
          <div className="flex items-center gap-3 md:justify-end justify-center">
            <FaLinkedin size={18} />
            <p>Linkedin</p>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MapPin size={18} />
            <p>Lagos, Nigeria.</p>
          </div>
          <div className="text-center">Saved Properties</div>
          <div className="flex items-center gap-3 md:justify-end justify-center">
            <FaInstagram size={18} />
            <p>Instagram</p>
          </div>
        </div>
      </footer>
    </>
  );
}
