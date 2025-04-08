const FrequentAsked = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 font-montserrat">
      <h1 className="text-center text-5xl font-semibold font-lora">
        Some Frequently Asked Questions
      </h1>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 mt-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold text-[18px]">
          How do I create an account?
        </div>
        <div className="collapse-content text-slate-500 font-semibold">
          Click the "SignIn" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[18px]">
          How does this platform help travelers plan their trips?
        </div>
        <div className="collapse-content text-slate-500 font-semibold">
          Our system provides comprehensive destination details, including
          attractions, accommodations, maps, and travel tips. You can explore
          personalized recommendations, view ratings and reviews, and even
          manage your bookings all in one place — making trip planning seamless
          and stress-free.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-[18px]">
          Can I explore destinations based on my interests or travel style?
        </div>
        <div className="collapse-content text-[16px] text-slate-500 font-semibold">
          Yes! Our platform features smart filtering options where you can
          explore destinations based on interests like adventure, nature,
          cultural heritage, or budget-friendly trips. This helps you find
          exactly what you're looking for, faster
        </div>
      </div>
    </div>
  );
};

export default FrequentAsked;
