import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can we interview developers?",
    answer: "Within 72 hours of your signup, we'll deliver a curated shortlist of 3–5 pre-vetted engineers. You can start interviews immediately; most teams schedule first calls within 5–7 days.",
  },
  {
    question: "What if a developer isn't the right match?",
    answer: "We offer a 30-day risk-free trial. If they're not the fit you need, we instantly replace them with another developer. No questions, no friction.",
  },
  {
    question: "Do developers overlap US time zones?",
    answer: "Yes. We guarantee at least 4 hours of daily overlap with your timezone. Most developers actively adjust schedules to maximize collaboration with US-based teams.",
  },
  {
    question: "Do you support both full-time and contract roles?",
    answer: "Absolutely. Whether you need a developer for 6 months, a full-time hire, or a specific project sprint, we structure engagements to match your exact needs.",
  },
  {
    question: "Can we scale up and down easily?",
    answer: "Yes. You can add developers, scale down, or pivot requirements without penalty. We handle all HR, compliance, and payroll changes seamlessly on your behalf.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-slate-900/50 px-6 rounded-2xl border border-white/10 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
