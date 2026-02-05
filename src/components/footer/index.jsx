import FooterColumn from './FooterColumn';
import SocialIcons from './SocailIcons';

export default function Footer() {
  return (
    <div className="our-footer flex flex-wrap px-[120px] py-10 bg-[#F3F2F2] w-full min-h-[323px] items-start justify-between">
      
      {/* Column 1: Logo + Description */}
      <div className="flex flex-col gap-4  items-baseline column-one-footer">
        <div className='w-[66px] h-[51px]'>
          <img
            src="/icons/logoicon.png"
            alt="Website Logo"
            className='w-full h-full object-contain'
          />
        </div>
        <p className="gray-color font-[500] text-[14px]">
          Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab. Soluta dolor quae Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae     
        </p>
      </div>

      {/* Column 2: Let's Us Help */}
      <div className=" ">
        <FooterColumn
          header="Let's Us Help"
          items={["My Account", "FAQs", "Categories", "All Products"]}
        />
      </div>

      {/* Column 3: Policies */}
      <div className="">
        <FooterColumn
          header="Policies"
          items={[
            "Refund Policy",
            "About Us",
            "Cancellation Policy",
            "Terms and Conditions",
            "Privacy Policy",
          ]}
        />
      </div>

      {/* Column 4: Send Email + Social */}
      <div className="flex flex-col gap-4 ">
        <h3 className="font-semibold text-lg">Send Email</h3>
        <div className="flex send-email-container flex-row justify-between items-center">
          <input
            type="email"
            placeholder="Email address"
            className="email-input "
          />
          <button className=" bg-[#BE968E] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors w-[135px] h-[46px] btn-send-email">
            Send
          </button>
        </div>
        <span className="font-medium text-gray-600 mt-4">Follow Us</span>
        <SocialIcons />
      </div>
    </div>
  );
}
