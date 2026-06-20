import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9835384062?text=Hi%20Relax%20Yoga%20Centre%2C%20I%20would%20like%20to%20know%20more%20about%20your%20yoga%20programs."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] shadow-xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110 hover:shadow-green-500/60"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </span>
    </a>
  );
}
