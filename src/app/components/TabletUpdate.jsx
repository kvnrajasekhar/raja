"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaExclamationTriangle } from "react-icons/fa";

export const TabletUpdate = () => {
  const logs = [
    "Initializing deployment...",
    "Checking dependencies",
    "Pulling latest commit from origin/main",
    "Commit: feat(ui): improve terminal layout",
    "Installing packages...",
    "Optimizing assets",
    "Bundling modules",
    "Generating static pages",
    "Running performance checks",
  ];

  const [visibleLogs, setVisibleLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let index = 0;

    const logInterval = setInterval(() => {
      if (index < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[index]]);
        setProgress((p) => p + 100 / logs.length);
        index++;
      } else {
        clearInterval(logInterval);

        setTimeout(() => {
          setIsError(true);
        }, 800);
      }
    }, 800);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Tablet Frame */}
      <div
        style={{
          width: "900px",
          height: "600px",
          background: "#1a1a1a",
          borderRadius: "32px",
          padding: "18px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000",
            borderRadius: "24px",
            padding: "30px",
            overflow: "hidden",
            display: "flex",
            justifyContent: isError ? "center" : "flex-start",
            alignItems: isError ? "center" : "flex-start",
          }}
        >
          <AnimatePresence mode="wait">
            {!isError ? (
              <motion.div
                key="terminal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  width: "100%",
                  color: "#00ff9c",
                  fontFamily: "monospace",
                  fontSize: "15px",
                }}
              >
                <div style={{ marginBottom: "14px", color: "#fff" }}>
                  ~/portfolio
                </div>

                <div style={{ marginBottom: "20px" }}>
                  ❯ npm run deploy
                </div>

                {visibleLogs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: "6px" }}
                  >
                    {log}
                  </motion.div>
                ))}

                {/* Progress Bar */}
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    background: "#222",
                    borderRadius: "10px",
                    marginTop: "20px",
                  }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      background: "#00ff9c",
                      borderRadius: "10px",
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    textAlign: "center",
                    padding: "32px 30px",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,184,108,0.25)",
                    background: "rgba(251,133,7,0.08)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 10px 40px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        padding: "14px",
                        borderRadius: "50%",
                        background: "rgba(255,184,108,0.12)",
                        boxShadow: "0 0 25px rgba(255,184,108,0.25)",
                      }}
                    >
                      <FaExclamationTriangle size={34} color="#ffb86c" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      color: "#ffb86c",
                      fontSize: "20px",
                      marginBottom: "10px",
                      letterSpacing: "0.4px",
                    }}
                  >
                    Deployment Paused
                  </h2>

                  {/* Message */}
                  <p
                    style={{
                      color: "#d6d6d6",
                      lineHeight: 1.7,
                      fontSize: "15px",
                    }}
                  >
                    The portfolio is currently
                    <span
                      style={{
                        color: "#ff5555",
                        fontWeight: "600",
                        marginLeft: "6px",
                      }}
                    >
                      under update
                    </span>
                    .
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      width: "60%",
                      margin: "20px auto",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                    }}
                  />

                  {/* LinkedIn */}
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                    }}
                  >
                    Meanwhile connect on
                    <a
                      href="https://www.linkedin.com/in/kvnrs23"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#8be9fd",
                        marginLeft: "6px",
                        textDecoration: "none",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      LinkedIn
                      <FaLinkedin size={15} />
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}