import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import travelFlatlayImage from "@/assets/travel-flatlay.jpg"
import emailjs from "@emailjs/browser"

const FinalCTA = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email to continue the journey.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    const { error } = await supabase.from("emails").insert({ email })

    setLoading(false)

    if (error) {
      toast({
        title: "Submission failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "✨ You're on the list",
        description: "We’ll walk beside you — every step of her becoming.",
        className:
          "bg-white/80 backdrop-blur-md text-gray-800 border border-gray-200 shadow-lg rounded-xl px-6 py-4 font-inter",
      })
      setEmail("")
      sendEmailNotification(email)
    }
  }


  const sendEmailNotification = async (email: string) => {
    try {
      await emailjs.send(
        "mirago_index",      // 替换为 EmailJS 控制台中的 Service ID
        "template_zcu50ng",     // 替换为模板 ID
        {
          name: email,          // 显示为订阅用户
          time: new Date().toLocaleString()
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      console.log("Email notification sent successfully.")
    } catch (err) {
      console.error("Email notification failed:", err)
    }
  }

  return (
    <section id="email-capture" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${travelFlatlayImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
          Ready for Her Next Becoming?
        </h2>
        <p className="font-inter text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Life is a collection of experiences — and this one is yours.
        </p>

        {/* Email Signup */}
        <div className="max-w-md mx-auto">
          <div className="flex gap-3 mb-8">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background/50 border-border/50 backdrop-blur-sm font-inter"
              disabled={loading}
            />
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={loading}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-inter px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden"
            >
              <span className="relative z-10">
                {loading ? "Submitting..." : "Begin the Journey"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-golden-hour to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
          <p className="font-inter text-sm text-muted-foreground">
            Join the waitlist for early access to Mirago
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
