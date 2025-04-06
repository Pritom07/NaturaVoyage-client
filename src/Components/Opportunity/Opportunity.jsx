import { GiLifeJacket } from "react-icons/gi";
import { GiPriceTag } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";

const Opportunity = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 pl-5 pr-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-4 xl:mt-1">
          <img src="/Images/tourist.png" className="w-full" />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <h1 className="text-4xl md:text-6xl font-lora font-semibold text-center">
            Great opportunity for adventure and travels
          </h1>
          <div className="-ml-[90%] mt-4">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-middle bg-slate-200 p-5 rounded-full">
                  <GiLifeJacket className="text-green-500 text-3xl" />
                </div>
                <div className="timeline-end timeline-box border-2 border-green-500 m-2 ml-3">
                  <h1 className="font-lora text-2xl font-semibold">
                    Safety first always
                  </h1>
                  <p className="mt-1 font-montserrat text-slate-500 font-semibold text-justify text-[13px]">
                    Our top priority is your well-being — we ensure every
                    adventure is backed by expert planning, reliable gear, and
                    24/7 support.From the moment your journey begins, we ensure
                    that every part of your adventure is planned with care and
                    responsibility. Our experienced guides, secure transport,
                    and emergency support systems are in place so you can
                    explore with confidence and peace of mind.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle bg-slate-200 p-5 rounded-full">
                  <GiPriceTag className="text-green-500 text-3xl" />
                </div>
                <div className="timeline-end timeline-box border-2 border-green-500 m-2 ml-3">
                  <h1 className="font-lora text-2xl font-semibold">
                    Low price and friendly
                  </h1>
                  <p className="mt-1 font-montserrat text-slate-500 font-semibold text-justify text-[13px]">
                    Experience unforgettable journeys at budget-friendly rates,
                    guided by warm, welcoming experts who treat you like
                    family.We believe that great travel experiences shouldn’t
                    come with a high price tag. That’s why we offer
                    budget-friendly packages without compromising on quality.Our
                    team is always ready with a smile to assist you, ensuring a
                    warm, welcoming, and affordable experience every step of the
                    way.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle bg-slate-200 p-5 rounded-full">
                  <FaGlobeAfrica className="text-green-500 text-3xl" />
                </div>
                <div className="timeline-end timeline-box border-2 border-green-500 m-2 ml-3">
                  <h1 className="font-lora text-2xl font-semibold">
                    Trusted travel guide
                  </h1>
                  <p className="mt-1 font-montserrat text-slate-500 font-semibold text-justify text-[13px]">
                    With years of experience and thousands of happy travelers,
                    we’re your trusted companion for discovering the world with
                    confidence.Our local guides know every hidden gem, and we’re
                    committed to providing honest, insightful, and unforgettable
                    tours that leave you with memories for a lifetime.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* new one */}
      </div>
    </div>
  );
};

export default Opportunity;
