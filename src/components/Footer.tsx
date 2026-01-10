import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    // With native form submission to Formspree, we just need to manage the UI state
    setIsSubmitting(true);
    
    // Success/error handling will be managed by Formspree's redirect or response
    // The form will be reset after successful submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000); // Reset loading state after 2 seconds
  };

  return (
    <footer className="bg-[#3d3845] text-white">
      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* ABOUT US */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">
              About Us
            </h4>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
              omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo
              errem partiendo ex cum.
            </p>

            {/* Newsletter */}
            <h4 className="text-sm tracking-widest uppercase mt-12 mb-4">
              Subscribe to Our Newsletter
            </h4>

            <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email*"
                className="w-full bg-transparent border-b border-white/30 py-2 pr-10 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-white/60 hover:text-white transition"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h4>
            
            <form action="https://formspree.io/f/mnjnewyl" method="POST" className="space-y-4 max-w-sm" target="_blank">
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your Name*"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="Your Email*"
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Your Message*"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center gap-2 text-sm uppercase tracking-wider hover:text-white/80 transition disabled:opacity-50"
                onClick={(e) => {
                  // Set submitting state
                  setIsSubmitting(true);
                  // Reset any previous messages
                  setSubmitError("");
                  
                  // Show success message after form submission
                  setTimeout(() => {
                    setIsSubmitting(false);
                    setSubmitSuccess(true);
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                      setSubmitSuccess(false);
                    }, 5000);
                  }, 2000);
                }}
              >
                <span>Send</span>
                <Send size={14} />
              </button>
              
              {isSubmitting && (
                <div className="text-sm text-white/60">Sending...</div>
              )}
              
              {submitSuccess && (
                <div className="p-3 bg-green-500/20 text-green-400 text-sm rounded mt-2">
                  Message sent successfully!
                </div>
              )}
              
              <small>
                <p className="text-xs text-white/60 mt-4">
                  Messages sent through this form will be delivered to the email associated with <br />
                  <a href="https://formspree.io/f/mnjnewyl" target="_blank" rel="noopener noreferrer" className="underline">
                    https://formspree.io/f/mnjnewyl
                  </a>
                </p>
              </small>
            </form>
          </div>

          {/* INSTAGRAM (TITLE ONLY AS IN IMAGE) */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">
              Instagram
            </h4>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-[#35303d]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* LOGO AND NAVIGATION */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="font-heading italic text-xl tracking-wide">
                fleur<span className="text-white/60">~</span>
              </div>
              
              {/* NAV */}
              <nav className="flex gap-6 text-xs text-white/55">
                <a href="#" className="hover:text-white uppercase">Home</a>
                <a href="#" className="hover:text-white uppercase">About</a>
                <a href="#" className="hover:text-white uppercase">Portfolio</a>
                <a href="#" className="hover:text-white uppercase">Blog</a>
                <a href="#" className="hover:text-white uppercase">Contact</a>
              </nav>
            </div>

            {/* CREDIT */}
            <div className="text-xs text-white/45">
              Made with Ashrithn
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
