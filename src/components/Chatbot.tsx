// src/components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const suggestions = [
    "What is Faruk's educational background?",
    "Tell me about his work at Odeabank.",
    "What technologies does he use?",
    "Explain the Quanto Option project."
  ];

  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I am Faruk's AI Assistant. Ask me anything about his projects, experience, or education." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref for the scrollable container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic (FIXED)
  useEffect(() => {
    // Sadece mesaj sayısı 1'den fazlaysa (kullanıcı veya AI yazdıysa) kaydır.
    // İlk açılışta (mesaj sayısı 1 iken) hiçbir şey yapma.
    if (messages.length > 1 && chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.result }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please check your API key." }]);
      }

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      
      {/* Chat Container */}
      <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[600px]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isLoading ? "bg-yellow-400 animate-bounce" : "bg-green-400"}`}></div>
            <div>
                <span className="font-semibold tracking-wide block leading-none">Ask Anything About Faruk</span>
                <span className="text-[10px] text-slate-400 font-light">Powered by GPT-4o</span>
            </div>
          </div>
        </div>

        {/* Messages Area (Scrollable) */}
        <div 
            ref={chatContainerRef} // Ref buraya taşındı
            className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-4 scroll-smooth"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[85%] text-sm leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-slate-800 text-white self-end ml-auto rounded-br-none"
                  : "bg-white border border-slate-200 text-slate-700 self-start rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="self-start bg-slate-100 text-slate-500 p-3 rounded-lg text-xs italic animate-pulse">
              Generating response...
            </div>
          )}
        </div>

        {/* Suggestions Area */}
        <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2">
                {suggestions.map((s, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => handleSend(s)}
                        disabled={isLoading}
                        className="text-xs bg-white border border-slate-300 text-slate-600 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition disabled:opacity-50"
                    >
                        {s}
                    </button>
                ))}
            </div>
        </div>

        {/* Input Area */}
        <form onSubmit={onSubmit} className="p-4 bg-white border-t border-slate-200 flex gap-3">
          <input
            type="text"
            className="flex-1 bg-slate-100 text-slate-900 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-slate-800 outline-none transition placeholder:text-slate-400"
            placeholder="Ask a question about Faruk..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}