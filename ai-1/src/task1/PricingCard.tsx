type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard = ({ plan, price, features, isFeatured }: PricingCardProps) => {
  return (
    <div
      tabIndex={0}
      className={`
        w-full max-w-sm flex flex-col justify-between rounded-lg border
        ${isFeatured ? "bg-blue-800 text-white border-transparent" : "bg-white text-gray-800 border-gray-300"}
        shadow-md transform transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        sm:w-auto
      `}
    >
      <div className="p-6">
        <h3 className={`text-lg font-semibold text-center mb-2 ${isFeatured ? "text-white" : "text-gray-700"}`}>
          {plan}
        </h3>
        <p className={`text-4xl font-bold text-center mb-6 ${isFeatured ? "text-white" : "text-gray-800"}`}>
          ${price}
        </p>
        <ul className="space-y-4 text-sm text-center">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`border-t pt-2 ${index === features.length - 1 ? "border-b pb-4" : ""} 
                ${isFeatured ? "border-white/30" : "border-gray-300"} 
                ${isFeatured ? "text-white" : "text-gray-700"}`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <button
          className={`
            w-full py-2 text-sm font-semibold rounded-md
            ${isFeatured ? "bg-white text-blue-800 hover:bg-gray-100" : "bg-transparent text-blue-800 hover:underline"}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transition-all duration-200
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default PricingCard;