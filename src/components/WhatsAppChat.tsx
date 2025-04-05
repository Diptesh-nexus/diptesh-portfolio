
import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919604623765'; // Format: country code + number without +

  useEffect(() => {
    setIsFormValid(name.trim() !== '' && message.trim() !== '');
  }, [name, message]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setName('');
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button 
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-darkGreen hover:bg-neonGreen'
        }`}
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquare size={24} className={isHovered ? 'text-black' : 'text-white'} />
        )}
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-matteBlack border border-softGreen/30 rounded-lg shadow-xl animate-fade-in overflow-hidden">
          <div className="bg-darkGreen p-4">
            <h3 className="text-white font-bold">Chat with Me on WhatsApp</h3>
            <p className="text-gray-200 text-sm">Fill out the form to start a conversation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-softGreen text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-softGreen text-sm mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 bg-charcoal border border-softGreen/20 rounded text-white focus:border-neonGreen focus:outline-none"
                rows={3}
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-2 rounded font-medium ${
                isFormValid 
                  ? 'bg-neonGreen text-black hover:bg-softGreen' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              } transition-colors`}
              disabled={!isFormValid}
            >
              Start Chat
            </button>
          </form>
          
          <div className="bg-charcoal/70 p-3 text-center">
            <p className="text-gray-400 text-xs">I'll respond as soon as possible!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
