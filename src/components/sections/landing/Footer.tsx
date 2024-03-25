import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="text-white bg-primary py-16 px-4" id="footer">
      <div className=" flex flex-col md:flex-row justify-between gap-16">
        <div>
          <p className="text-[34px] font-bold">Hezekiah Events</p>
          <p className="mt-4 mb-8">
           Book with us! We are committed to value, service and style. Book now and let's create your event that last a lifetime. Hezekiah!
          </p>

          <div className="flex gap-4">
            <div>
              <Link href="#" target="_blank">
              <img src="/images/facebook_app_symbol.png" alt="social icon" />
              </Link>
              
            </div>
            <div>
              <img src="/images/linkedin.png" alt="social icon" />
            </div>
            <div>
              <img src="/images/twitter.png" alt="social icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full">
          <div>
            <p className="font-semibold text-[28px]">Services</p>
            <div className="flex flex-col gap-4 mt-4">
              <p>About Us</p>
              <p>Dentations</p>
              <p>Services</p>
              <p>Our Blog</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[28px]">Contact</p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/maps_and_flags.png" alt="location icon" />
                </div>
                <p>Negros Oriental Philippines</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/call_icon.png" alt="location icon" />
                </div>
                <p>+63 9876543210</p>
              </div>

              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/envelop.png" alt="location icon" />
                </div>
                <p>support@hezekiah.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center pt-32">
        Hezekiah©2024 all right reserve
      </p>
    </div>
  );
}

export default Footer;
