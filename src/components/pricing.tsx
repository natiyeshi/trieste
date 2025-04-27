import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started",
      features: ["Basic analytics", "Up to 5 team members", "1,000 tasks per month", "Email support"],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Advanced analytics",
        "Up to 20 team members",
        "10,000 tasks per month",
        "Priority email support",
        "API access",
        "Custom integrations",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large organizations with complex requirements",
      features: [
        "Full analytics suite",
        "Unlimited team members",
        "Unlimited tasks",
        "24/7 phone & email support",
        "Advanced API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-[#FF6B00]">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`${plan.popular ? "border-[#FF6B00] shadow-lg relative" : "border-gray-200 shadow-sm"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#FF6B00]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#FF6B00] hover:bg-[#E05A00] text-white"
                      : "bg-white border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
