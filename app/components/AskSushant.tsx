"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Reveal from "./Reveal";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What technologies does Sushant use?",
  "Tell me about Heallio.",
  "What projects has Sushant built?",
  "Where has Sushant worked?",
  "What AI work has Sushant done?",
  "What kind of roles is he looking for?",
];

function getActionLink(text: string) {
  const lowerText = text.toLowerCase();
  if (
    lowerText.includes("sk0261901@gmail.com") ||
    lowerText.includes("email sushant") ||
    lowerText.includes("contact sushant")
  ) {
    return {
      label: "Email Sushant",
      url: "mailto:sk0261901@gmail.com",
    };
  }
  if (lowerText.includes("github")) {
    return {
      label: "View GitHub",
      url: "https://github.com/sk2678",
    };
  }

  if (lowerText.includes("linkedin")) {
    return {
      label: "View LinkedIn",
      url: "https://linkedin.com/in/sushant-kapil-195b5428b",
    };
  }

  if (lowerText.includes("heallio")) {
    if (
      lowerText.includes("live") ||
      lowerText.includes("demo") ||
      lowerText.includes("api")
    ) {
      return {
        label: "View Heallio API",
        url: "https://sushant-heallio-3.onrender.com/docs",
      };
    }

    return {
      label: "View Heallio GitHub",
      url: "https://github.com/sk2678/Heallio-AI-Health-Dashboard",
    };
  }

  if (lowerText.includes("pixcrypt")) {
    if (
      lowerText.includes("live") ||
      lowerText.includes("demo")
    ) {
      return {
        label: "View Live Project",
        url: "https://sushant-pixcrypt.onrender.com",
      };
    }

    return {
      label: "View PixCrypt GitHub",
      url: "https://github.com/sk2678/PixCrypt-Image-Security",
    };
  }

  return null;
}

function getFollowUpSuggestions(text: string) {
  const lowerText = text.toLowerCase();

  if (lowerText.includes("heallio")) {
    return [
      "What technologies does it use?",
      "What problem does it solve?",
    ];
  }

  if (lowerText.includes("pixcrypt")) {
    return [
      "What technologies does it use?",
      "Is PixCrypt live?",
    ];
  }

  if (lowerText.includes("devforge")) {
    return [
      "What technologies does it use?",
      "Tell me more about DevForge-AI.",
    ];
  }

  if (lowerText.includes("insurance")) {
    return [
      "What technologies does it use?",
      "What is the future scope?",
    ];
  }

  if (
    lowerText.includes("skills") ||
    lowerText.includes("technologies") ||
    lowerText.includes("tech stack")
  ) {
    return [
      "Which projects use FastAPI?",
      "What AI work has Sushant done?",
    ];
  }

  if (
    lowerText.includes("experience") ||
    lowerText.includes("digiflute")
  ) {
    return [
      "What did Sushant work on?",
      "What technologies did he use?",
    ];
  }

  return [
    "Tell me about Heallio.",
    "What projects has Sushant built?",
  ];
}

export default function AskSushant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState("");

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  const askQuestion = async (value: string) => {
    const trimmedQuestion = value.trim();

    if (!trimmedQuestion || isThinking) {
      return;
    }

    setQuestion("");
    setError("");

    const userMessage: Message = {
      role: "user",
      content: trimmedQuestion,
    };

    setMessages((previous) => [...previous, userMessage]);
    setIsThinking(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          conversation: messages.slice(-6),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Something went wrong."
        );
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer,
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(
        "Ask Sushant AI request failed:",
        error
      );

      setError(
        "The AI assistant could not process the question right now."
      );
    } finally {
      setIsThinking(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(question);
  };

  const clearConversation = () => {
    setMessages([]);
    setQuestion("");
    setError("");
  };

  return (
    <section
      id="ask-ai"
      className="content-section ask-ai-section"
    >
      <div className="section-container">
        <Reveal>
          <div className="ask-ai-card">
            {/* ================================
                HEADER
            ================================= */}

            <div className="ask-ai-header">
              <div>
                <p className="section-label">
                  AI PORTFOLIO ASSISTANT
                </p>

                <h2>
                  Ask <span>Sushant AI.</span>
                </h2>

                <p className="ask-ai-description">
                  Curious about Sushant&apos;s work, skills
                  or projects? Ask the portfolio assistant.
                </p>
              </div>

              <div className="ai-header-actions">
                <div className="ai-status">
                  <span></span>
                  AI ONLINE
                </div>

                {messages.length > 0 && (
                  <button
                    type="button"
                    className="clear-chat-button"
                    onClick={clearConversation}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* ================================
                BODY
            ================================= */}

            <div className="ask-ai-body">
              {/* ================================
                  SUGGESTIONS
              ================================= */}

              <div className="suggestion-list">
                <p className="suggestion-label">
                  TRY ASKING
                </p>

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    className="suggestion-button"
                    onClick={() =>
                      askQuestion(suggestion)
                    }
                    disabled={isThinking}
                  >
                    <span>{suggestion}</span>
                    <span>↗</span>
                  </button>
                ))}
              </div>

              {/* ================================
                  CHAT
              ================================= */}

              <div className="ai-chat">
                {/* Chat header */}

                <div className="ai-chat-header">
                  <div className="ai-avatar">
                    SK
                  </div>

                  <div>
                    <strong>Sushant AI</strong>
                    <span>
                      Portfolio knowledge base
                    </span>
                  </div>
                </div>

                {/* Chat content */}

                <div className="ai-chat-content">
                  {/* Empty state */}

                  {messages.length === 0 &&
                    !isThinking &&
                    !error && (
                      <div className="ai-empty-state">
                        <div className="ai-icon">
                          ✦
                        </div>

                        <p>
                          Ask me anything about
                          Sushant&apos;s portfolio.
                        </p>
                      </div>
                    )}

                  {/* Messages */}

                  {messages.map((message, index) => {
                    const actionLink =
                      message.role === "assistant"
                        ? getActionLink(message.content)
                        : null;

                    const isLatestAssistantMessage =
                      message.role === "assistant" &&
                      index === messages.length - 1 &&
                      !isThinking;

                    return (
                      <div
                        key={`${message.role}-${index}`}
                        className={`ai-message ${
                          message.role === "user"
                            ? "ai-user-message"
                            : "ai-assistant-message"
                        }`}
                      >
                        {/* Message author */}

                        <span>
                          {message.role === "user"
                            ? "You"
                            : "Sushant AI"}
                        </span>

                        {/* Message content */}

                        <p>{message.content}</p>

                        {/* Action link */}

                        {actionLink && (
                          <a
                            href={actionLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ai-action-link"
                          >
                            {actionLink.label}
                            <span>↗</span>
                          </a>
                        )}

                        {/* Follow-up suggestions */}

                        {isLatestAssistantMessage && (
                          <div className="ai-follow-up">
                            <span>
                              Explore further
                            </span>

                            <div className="ai-follow-up-list">
                              {getFollowUpSuggestions(
                                message.content
                              ).map((suggestion) => (
                                <button
                                  key={suggestion}
                                  type="button"
                                  onClick={() =>
                                    askQuestion(
                                      suggestion
                                    )
                                  }
                                >
                                  {suggestion}
                                  <span>↗</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Thinking animation */}

                  {isThinking && (
                    <div className="ai-message ai-assistant-message">
                      <span>Sushant AI</span>

                      <div className="ai-thinking">
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                    </div>
                  )}

                  {/* Error message */}

                  {error && !isThinking && (
                    <div className="ai-message ai-assistant-message">
                      <span>Sushant AI</span>

                      <p>{error}</p>
                    </div>
                  )}

                  {/* Auto-scroll target */}

                  <div ref={chatBottomRef} />
                </div>

                {/* ================================
                    INPUT
                ================================= */}

                <form
                  className="ai-input-area"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    value={question}
                    onChange={(event) =>
                      setQuestion(event.target.value)
                    }
                    placeholder="Ask about my work..."
                    aria-label="Ask Sushant AI"
                    disabled={isThinking}
                  />

                  <button
                    type="submit"
                    aria-label="Send question"
                    disabled={
                      !question.trim() || isThinking
                    }
                  >
                    ↗
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}