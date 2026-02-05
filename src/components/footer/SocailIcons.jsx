import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  const icons = [
    { icon: <FaFacebookF size={20} />, name: "Facebook" },
    { icon: <FaTwitter size={20} />, name: "Twitter" },
    { icon: <FaInstagram size={20} />, name: "Instagram" },
    { icon: <FaLinkedinIn size={20} />, name: "LinkedIn" },
    { icon: <FaWhatsapp size={20} />, name: "WhatsApp" },
    { icon: <FaTelegramPlane size={20} />, name: "Telegram" },

  ];

  return (
    <div className="flex gap-3 mt-2">
      {icons.map((item, index) => (
        <a
          key={index}
          href="#"
          aria-label={item.name}
          className="text-gray-600 hover:text-[#BE968E] transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
