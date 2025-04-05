
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
            
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center mr-4">
                  <Mail size={20} className="text-neonGreen" />
                </div>
                <div>
                  <h4 className="text-softGreen font-medium">Email</h4>
                  <a href="mailto:dipteshmahajan@outlook.com" className="text-gray-300 hover:text-white transition-colors">
                    dipteshmahajan@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center mr-4">
                  <Phone size={20} className="text-neonGreen" />
                </div>
                <div>
                  <h4 className="text-softGreen font-medium">Phone</h4>
                  <a href="tel:+919604623765" className="text-gray-300 hover:text-white transition-colors">
                    +91 9604623765
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center mr-4">
                  <Linkedin size={20} className="text-neonGreen" />
                </div>
                <div>
                  <h4 className="text-softGreen font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/diptesh-mahajan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    linkedin.com/in/diptesh-mahajan
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-neonGreen" />
                </div>
                <div>
                  <h4 className="text-softGreen font-medium">Location</h4>
                  <p className="text-gray-300">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-softGreen mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-softGreen mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-softGreen mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-softGreen mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-3 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-neonGreen text-black rounded font-medium hover:bg-softGreen transition-colors"
              >
                Send Message
              </button>
            </form>
            
            <p className="mt-4 text-gray-400 text-sm">
              You can also connect with me directly through WhatsApp using the chat button at the bottom right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
