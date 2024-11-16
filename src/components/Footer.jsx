import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 bg-[#191919] text-white p-3">
        <div className="container grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <p>+2349111133111</p>
          </div>
          <div className="">Home</div>
          <div className="flex items-center gap-3">
            <Phone size={18} />
            <p>+2349111133111</p>
          </div>
          <div className="">About</div>
          <div className="flex items-center gap-3">
            <Mail size={18} />
            <p>Findmycrib@gmail.com</p>
          </div>
          <div className="">Contact</div>
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <p>Lagos, Nigeria.</p>
          </div>
          <div className="">All Listings</div>
        </div>
      </footer>
    </>
  );
}
