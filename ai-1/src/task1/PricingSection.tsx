import PricingCard from "./PricingCard"

const PricingSection = () => {
    return (
        <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Pricing</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <PricingCard
          plan="Standard"
          price="100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
        />
        <PricingCard
          plan="Pro"
          price="200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured
        />
        <PricingCard
          plan="Expert"
          price="500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
        />
      </div>
    </section>
    )
}

export default PricingSection;