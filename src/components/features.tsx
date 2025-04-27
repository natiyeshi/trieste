import { CheckCircle, BarChart2, Users, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <BarChart2 className="h-10 w-10 text-[#FF6B00]" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your business performance with our powerful analytics tools.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#FF6B00]" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team members in real-time, no matter where they are.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#FF6B00]" />,
      title: "Automation Tools",
      description: "Automate repetitive tasks and focus on what matters most for your business growth.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#FF6B00]" />,
      title: "Task Management",
      description: "Keep track of all your tasks and projects in one place with our intuitive interface.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-[#FF6B00]">Features</span> for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to manage and grow your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
