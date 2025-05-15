import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar"; // Keep the import
import ReactMarkdown from "react-markdown";
import "./css/Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const authToken = localStorage.getItem("token");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/chatbot/message",
        { message: input },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiMessage = { role: "assistant", content: response.data };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Could not reach the AI." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <Navbar page="chatbot" /> {/* Add Navbar here */}
      <div className="chatbot-container">
        <h2>Chat With AI</h2>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.role === "user" ? "user-message" : "ai-message"
              }`}
            >
              {msg.role === "assistant" ? (
                <ReactMarkdown
                  components={{
                    // Optional: Customize markdown rendering
                    strong: ({ node, ...props }) => (
                      <strong style={{ fontWeight: 600, color: "rgb(21, 21, 100)" }} {...props} />
                    ),
                  }}
                >
                  {typeof msg.content === "string" ? msg.content : "Invalid response"}
                </ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;