"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaExclamationTriangle } from "react-icons/fa";

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
export const MobileUpdate = () => {

  const [visibleLogs, setVisibleLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let index = 0;

    const logInterval = setInterval(() => {
      if (index < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[index]]);
        setProgress((p) => p + (100 / logs.length));
        index++;
      } else {
        clearInterval(logInterval);
        // Show error panel after logs finish
        setTimeout(() => setIsError(true), 800);
      }
    }, 800);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div
      style={{
        height: "100dvh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#06080f",
        overflow: "hidden"
      }}
    >
      <svg
        viewBox="0 0 390 844"
        style={{
          height: "100dvh",
          width: "100vw",
          maxWidth: "420px"
        }}
      >
        {/* PHONE FRAME */}
        <rect x="3" y="3" width="384" height="838" rx="60" fill="#141723" stroke="#2c3147" strokeWidth="3" />

        {/* SCREEN */}
        <rect x="12" y="12" width="366" height="820" rx="50" fill="#000" />

        {/* TERMINAL BG */}
        <rect x="20" y="20" width="350" height="804" rx="40" fill="#0b0f1c" />

        {/* DYNAMIC ISLAND */}
        <rect x="135" y="40" width="120" height="36" rx="18" fill="#000" />

        {/* TERMINAL CONTENT */}
        <foreignObject x="40" y="110" width="310" height="650">
          <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#d6d6d6", fontSize: "14px" }}>


            <AnimatePresence>
              {!isError ? (
                <motion.div key="logs" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>
                  <div style={{ color: "#6c77a8", marginBottom: 10 }}>~/portfolio</div>
                  <div style={{ color: "#ff79c6", marginBottom: 15 }}>❯ npm run deploy</div>

                  {visibleLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{
                        marginBottom: '6px',

                      }}
                    >
                      {log}
                    </motion.div>
                  ))}

                  <div style={{ marginTop: 20, width: "100%", height: "4px", background: "#1b2033", borderRadius: "2px" }}>
                    <motion.div
                      style={{ height: "100%", background: "#50fa7b" }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </motion.div>
              ) : ( <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}> 
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '40px',
                    padding: '20px',
                    border: '1px solid #eea65965',
                    borderRadius: '15px',
                    background: '#fb850714'
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                    <FaExclamationTriangle size={40} color="#ffb86c" />
                  </div>

                  <h2 style={{ color: '#ffb86c', fontSize: '18px', marginBottom: '10px' }}>
                    Deployment Paused
                  </h2>

                  <p style={{ color: '#d6d6d6', lineHeight: '1.6', fontSize: '15px' }}>
                    The portfolio is currently
                    <span style={{ color: '#ff5555' }}> under update</span>.
                  </p>

                  <p style={{ marginTop: '20px', color: '#94a3b8' }}>
                    Meanwhile, connect to my
                    <a
                      href="https://www.linkedin.com/in/kvnrs23"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#8be9fd',
                        textDecoration: 'underline',
                        marginLeft: '6px',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      LinkedIn <FaLinkedin size={14} />
                    </a>
                  </p>
                </motion.div>
              </div>
              )}
            </AnimatePresence>

            {/* Cursor */}
            {!isError && (
              <div style={{ marginTop: 15 }}>
                <span style={{ color: "#50fa7b" }}>$</span>
                <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  █
                </motion.span>
              </div>
            )}
          </div>
        </foreignObject>

        {/* HOME BAR */}
        <rect x="140" y="810" width="110" height="5" rx="3" fill="#2b3047" />
      </svg>
    </div>
  );
};