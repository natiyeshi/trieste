import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 bg-[#FF6B00]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated with Trieste</h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter to receive the latest updates, tips, and special offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white"
            />
            <Button className="bg-white text-[#FF6B00] hover:bg-white/90">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
