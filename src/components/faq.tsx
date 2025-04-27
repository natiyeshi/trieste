import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "You can sign up for our 14-day free trial without providing any payment information. You'll have full access to all features during this period. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically downgrade to the free version with limited features.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a limit to how many team members I can add?",
      answer:
        "The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer:
        "Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information and to verify your organization's status.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All plans include email support. The Professional plan includes priority email support with faster response times. The Enterprise plan includes 24/7 phone and email support, as well as a dedicated account manager.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-[#FF6B00]">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Trieste and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
