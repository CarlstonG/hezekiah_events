import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import React from "react";

function WhyChooseUs() {
  const chooseUsData = [
    {
      icon: "/images/c_1.png",
      title: "Best Price Guarantee",
      desription: "Book with us, we are number 1",
    },
    {
      icon: "/images/c_2.png",
      title: "Best Price Guarantee",
      desription: "Elite Organizers",
    },
    {
      icon: "/images/c_3.png",
      title: "Best Price Guarantee",
      desription: "Free consultation!",
    },
  ];

  const ourStats = [
    {
      item: "Years Experience",
      value: "12",
    },
    {
      item: "Distention Collaboration",
      value: "320+",
    },
    {
      item: "Satisfied Customer",
      value: "67+",
    },
  ];
  return (
    <section id="whyus">
      <div className="flex flex-col gap-8 md:flex-row justify-around">
        <div>
          <img src="/images/choose_us.png" alt="choose us" />
        </div>
        <div>
          <Header title="Why Choose Us?" description="Plan Your Trip With Us" />

          <div className="relative">
            {chooseUsData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div>
                  <img src={item.icon} alt="choose us icon" />
                </div>
                <div>
                  <p className="text-[28px] font-medium">{item.title}</p>
                  <p className="text-[#000000b0]">{item.desription}</p>
                </div>
              </div>
            ))}

            <div className="hidden md:block absolute right-0">
              <img src="/images/plane.png" alt="plane" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row-reverse justify-around items-center">
        <div>
          <img src="/images/choose_us_2.png" alt="choose us" />
        </div>
        <div>
          <Header
            title="Why Choose Us?"
            description="Choose Dream Events with Us!"
          />

          <p className="my-8">
          We are committed to value, service and style. Book now and let's create your event that last a lifetime. Hezekiah!
          </p>

          <MainButton text="About Us" classes="w-[150px]" />

          <div className="flex flex-col gap-8 md:gap-16 md:flex-row ">
            {ourStats.map((item, index) => (
              <div key={index} className="">
                <p className="text-[58px] font-bold">{item.value}</p>
                <p className="text-secondary">{item.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
