import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <AiOutlineMail />
            <span>example@hotmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <span>1300853150</span>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <FaFacebook className="text-white hover:text-blue-500 transition" />
          <FaInstagram className="text-white hover:text-purple-500 transition" />
          <FaTwitter className="text-white hover:text-blue-400 transition" />
          <FaYoutube className="text-white hover:text-red-600 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
