import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="contact-details bg-cyan-50 rounded-md py-5 px-4 flex flex-col">
      <h2 className="text-3xl">Contact Information</h2>
      <p className="text-gray-400 text-sm py-3">Fill up the form and our Team will get back to you within 24 hours</p>
      <p className="flex items-center gap-3 h-12 px-4 mb-3 rounded-3xl text-lg hover:bg-cyan-100">
        <FaPhoneAlt />
        <a href=":tel">+91 70332 49582</a>
      </p>
      <p className="flex items-center gap-3 h-12 px-4 mb-3 rounded-3xl text-lg hover:bg-cyan-100">
        <FaEnvelope />
        <a href=":email">mrvikashkumar396@gmail.com</a>
      </p>
      <p className="flex items-center gap-3 h-12 px-4 mb-3 rounded-3xl text-lg hover:bg-cyan-100">
        <FaLocationArrow />
        <a href="/">India</a>
      </p>
      <ul className="social-links flex gap-3 mt-auto">
        <li>
          <a href="/" className="flex items-center justify-center hover:bg-cyan-100 w-10 h-10 rounded-full">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center justify-center hover:bg-cyan-100 w-10 h-10 rounded-full">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center justify-center hover:bg-cyan-100 w-10 h-10 rounded-full">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center justify-center hover:bg-cyan-100 w-10 h-10 rounded-full">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
