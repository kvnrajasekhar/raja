"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaUnderline } from "react-icons/fa";

/* ─────────────────────────────────────────────
   Global Styles + Keyframes
───────────────────────────────────────────────*/
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

    html, body, #__next, main {
      margin: 0 !important;
      padding: 0 !important;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #06080f !important;
    }

    @keyframes cursor-blink {
      0%,100% { opacity: 1; }
      50%      { opacity: 0; }
    }
    @keyframes linkedin-glow {
      0%,100% { box-shadow: 0 0 16px #0a66c270, 0 0 40px #0a66c230; }
      50%      { box-shadow: 0 0 28px #0a66c2aa, 0 0 70px #0a66c250; }
    }
    @keyframes monitor-flicker {
      0%,97%,100% { opacity: 1; }
      98%          { opacity: 0.88; }
      99%          { opacity: 1; }
    }
    @keyframes float-up-fade {
      0%   { transform: translateY(0) scaleX(1);       opacity: 0; }
      15%  { opacity: 0.85; }
      80%  { opacity: 0.2; }
      100% { transform: translateY(-42px) scaleX(0.2); opacity: 0; }
    }
    @keyframes type-bounce {
      0%,100% { transform: translateY(0px); }
      50%     { transform: translateY(-3px); }
    }
    @keyframes ambient-drift {
      0%,100% { transform: translate(0,0) scale(1); }
      33%     { transform: translate(25px,-18px) scale(1.04); }
      66%     { transform: translate(-18px,12px) scale(0.97); }
    }

    .cursor-blink   { animation: cursor-blink 1s step-end infinite; }
    .linkedin-btn   { animation: linkedin-glow 2.5s ease-in-out infinite; }
    .monitor-screen { animation: monitor-flicker 10s infinite; }
    .ambient        { animation: ambient-drift 20s ease-in-out infinite; }

    .steam-1 { animation: float-up-fade 2.4s ease-in-out infinite; animation-delay: 0.0s; }
    .steam-2 { animation: float-up-fade 2.4s ease-in-out infinite; animation-delay: 0.6s; }
    .steam-3 { animation: float-up-fade 2.4s ease-in-out infinite; animation-delay: 1.2s; }
    .steam-4 { animation: float-up-fade 2.4s ease-in-out infinite; animation-delay: 1.8s; }

    .key-a { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.00s; }
    .key-b { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.07s; }
    .key-c { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.14s; }
    .key-d { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.21s; }
    .key-e { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.28s; }
    .key-f { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.10s; }
    .key-g { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.18s; }
    .key-h { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.25s; }
    .key-i { animation: type-bounce 0.4s ease-in-out infinite; animation-delay: 0.05s; }
  `}</style>
);

/* ─────────────────────────────────────────────
   Full-Screen SVG Workspace
───────────────────────────────────────────────*/
const WorkspaceScene = () => (
  <svg
    viewBox="0 0 1280 720"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "block",
    }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0d1225" />
        <stop offset="100%" stopColor="#050810" />
      </linearGradient>
      <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1c1f32" />
        <stop offset="100%" stopColor="#0f1018" />
      </linearGradient>
      <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22253a" />
        <stop offset="100%" stopColor="#141620" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0b0f1c" />
        <stop offset="100%" stopColor="#080c17" />
      </linearGradient>
      <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#252d5a" />
        <stop offset="100%" stopColor="#161b38" />
      </linearGradient>
      <linearGradient id="standGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#141620" />
        <stop offset="50%" stopColor="#1e2030" />
        <stop offset="100%" stopColor="#141620" />
      </linearGradient>
      <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="wallGlow" cx="50%" cy="38%" r="55%">
        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="floorReflect" cx="50%" cy="0%" r="80%">
        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* ── FULL BACKGROUND ── */}
    <rect width="1280" height="720" fill="url(#bg)" />
    <rect width="1280" height="720" fill="url(#wallGlow)" />

    {/* Ambient blobs */}
    <ellipse className="ambient" cx="200" cy="200" rx="380" ry="260" fill="#1e3a8a" opacity="0.07" />
    <ellipse className="ambient" cx="1080" cy="520" rx="320" ry="220" fill="#4c1d95" opacity="0.06"
      style={{ animationDelay: "-10s" }} />

    {/* Wall / floor horizon */}
    <line x1="0" y1="460" x2="1280" y2="460" stroke="#0f1228" strokeWidth="2" />
    <rect x="0" y="460" width="1280" height="260" fill="#030508" opacity="0.7" />
    <rect x="0" y="460" width="1280" height="260" fill="url(#floorReflect)" />

    {/* Subtle grid on floor */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
      <line key={`fg-${i}`} x1={160 * i} y1="460" x2={640 + 160 * i - 640} y2="720"
        stroke="#0f1228" strokeWidth="1" opacity="0.4"
        x={`${i * 160}`} />
    ))}

    {/* ── DESK ── */}
    {/* Desk surface */}
    <rect x="80" y="480" width="1120" height="24" rx="5" fill="url(#deskGrad)" />
    <rect x="80" y="480" width="1120" height="4" rx="2" fill="#2a2e45" opacity="0.6" />
    <rect x="80" y="504" width="1120" height="9" rx="2" fill="#0b0d14" />
    {/* Desk reflection of monitor glow */}
    <ellipse cx="640" cy="490" rx="340" ry="14" fill="#3b82f6" opacity="0.06" />
    {/* Desk legs */}
    <rect x="130" y="513" width="20" height="140" rx="4" fill="#0d0f18" />
    <rect x="1130" y="513" width="20" height="140" rx="4" fill="#0d0f18" />
    {/* Cross bar */}
    <rect x="136" y="610" width="1008" height="8" rx="3" fill="#0a0b13" />

    {/* ── MONITOR STAND ── */}
    <rect x="570" y="462" width="140" height="22" rx="6" fill="#0e1018" />
    <rect x="572" y="462" width="136" height="6" rx="3" fill="#181a26" />
    <rect x="613" y="358" width="54" height="108" rx="5" fill="url(#standGrad)" />
    <rect x="621" y="358" width="10" height="108" rx="3" fill="#22253a" opacity="0.4" />

    {/* ── MONITOR BEZEL ── */}
    <rect x="110" y="80" width="1060" height="388" rx="16" fill="url(#bezelGrad)" />
    <rect x="110" y="80" width="1060" height="5" rx="3" fill="#2a2e45" opacity="0.4" />
    <rect x="110" y="80" width="12" height="388" rx="6" fill="#1a1c28" />
    <rect x="1158" y="80" width="12" height="388" rx="6" fill="#1a1c28" />

    {/* ── SCREEN ── */}
    <rect x="126" y="94" width="1028" height="360" rx="9" fill="url(#screenGrad)" className="monitor-screen" />
    <rect x="126" y="94" width="1028" height="360" rx="9" fill="url(#screenGlow)" />

    {/* Scanlines on screen */}
    <rect x="126" y="94" width="1028" height="360" rx="9" fill="none"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)"
      }} />

    {/* Power LED */}
    <circle cx="639" cy="473" r="4.5" fill="#3b82f6" opacity="0.8" />
    <circle cx="639" cy="473" r="8" fill="#3b82f6" opacity="0.12" />

    {/* ── TERMINAL TITLE BAR ── */}
    <rect x="126" y="94" width="1028" height="30" rx="9" fill="#10132a" />
    <rect x="126" y="112" width="1028" height="12" fill="#10132a" />

    {/* Traffic lights */}
    <circle cx="152" cy="109" r="7" fill="#ff5f57" />
    <circle cx="176" cy="109" r="7" fill="#febc2e" />
    <circle cx="200" cy="109" r="7" fill="#28c840" />

    {/* Tab */}
    <rect x="228" y="96" width="180" height="24" rx="5" fill="#181c35" />
    <text x="318" y="113" fill="#4a5280" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono, monospace">portfolio — zsh</text>

    {/* Bar center label */}
    <text x="640" y="114" fill="#2b2f50" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace">~/projects/portfolio/v2 · node portfolio.js</text>

    {/* ── CODE CONTENT ── */}
    {/* Section label */}
    <text x="150" y="160" fill="#3b4070" fontSize="12" fontFamily="JetBrains Mono, monospace">/* ── Portfolio V2 — Under Active Development ── */</text>

    {/* Line 1 */}
    <text x="130" y="185" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">1</text>
    <text x="158" y="185" fill="#6272a4" fontSize="13" fontFamily="JetBrains Mono, monospace">❯ </text>
    <text x="182" y="185" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace">node</text>
    <text x="232" y="185" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">portfolio.js</text>

    {/* Line 2 */}
    <text x="130" y="208" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">2</text>
    <text x="158" y="208" fill="#44475a" fontSize="13" fontFamily="JetBrains Mono, monospace">// Initializing developer workspace...</text>

    {/* Line 3 — const dev */}
    <text x="130" y="231" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">3</text>
    <text x="158" y="231" fill="#ff79c6" fontSize="13" fontFamily="JetBrains Mono, monospace">const </text>
    <text x="215" y="231" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">dev </text>
    <text x="253" y="231" fill="#ff79c6" fontSize="13" fontFamily="JetBrains Mono, monospace">= </text>
    <text x="277" y="231" fill="#8be9fd" fontSize="13" fontFamily="JetBrains Mono, monospace">new </text>
    <text x="323" y="231" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace">Rajasekhar</text>
    <text x="406" y="231" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">();</text>

    {/* Line 4 — workOn */}
    <text x="130" y="254" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">4</text>
    <text x="158" y="254" fill="#8be9fd" fontSize="13" fontFamily="JetBrains Mono, monospace">dev</text>
    <text x="182" y="254" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">.</text>
    <text x="195" y="254" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace">workOn</text>
    <text x="245" y="254" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">(</text>
    <text x="255" y="254" fill="#f1fa8c" fontSize="13" fontFamily="JetBrains Mono, monospace">"portfolio-v2"</text>
    <text x="367" y="254" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">);</text>

    {/* Line 5 — status update */}
    <text x="130" y="277" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">5</text>
    <text x="158" y="277" fill="#8be9fd" fontSize="13" fontFamily="JetBrains Mono, monospace">dev</text>
    <text x="182" y="277" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">.</text>
    <text x="195" y="277" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace">setStatus</text>
    <text x="270" y="277" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">(</text>
    <text x="280" y="277" fill="#f1fa8c" fontSize="13" fontFamily="JetBrains Mono, monospace">"crafting every pixel..."</text>
    <text x="480" y="277" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">);</text>

    {/* Line 6 — blank */}
    <text x="130" y="300" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">6</text>

    {/* Line 7 — output: building */}
    <text x="130" y="323" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">7</text>
    <text x="158" y="323" fill="#6272a4" fontSize="13" fontFamily="JetBrains Mono, monospace">▶ </text>
    <text x="183" y="323" fill="#bd93f9" fontSize="13" fontFamily="JetBrains Mono, monospace">Building  </text>
    <text x="262" y="323" fill="#f1fa8c" fontSize="13" fontFamily="JetBrains Mono, monospace">portfolio@2.0.0</text>
    <text x="444" y="323" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace"> ✓ compiled in 1.2s</text>

    {/* Line 8 — status crafting */}
    <text x="130" y="346" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">8</text>
    <text x="158" y="346" fill="#6272a4" fontSize="13" fontFamily="JetBrains Mono, monospace">▶ </text>
    <text x="183" y="346" fill="#ff79c6" fontSize="13" fontFamily="JetBrains Mono, monospace">status:</text>
    <text x="258" y="346" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace"> portfolio under update — back soon </text>

    {/* Line 9 — pages */}
    <text x="130" y="369" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">9</text>
    <text x="158" y="369" fill="#6272a4" fontSize="13" fontFamily="JetBrains Mono, monospace">▶ </text>
    <text x="183" y="369" fill="#50fa7b" fontSize="13" fontFamily="JetBrains Mono, monospace">✓ </text>
    <text x="205" y="369" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">Meanwhile Connect with me on</text>
    {/* Integrated Underlined & Hoverable Link */}
    <foreignObject x="400" y="348" width="120" height="35">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <a
          href="https://www.linkedin.com/in/kvnrs23"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#8be9fd',
            fontSize: '13px',
            fontFamily: "Avenir",
            textDecoration: 'underline',
            transition: 'color 0.2s ease, text-shadow 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            // Color & Glow: Matches your terminal green theme
            e.currentTarget.style.color = '#fff ';
            e.currentTarget.style.textShadow = '0 0 12px #0a66c2 ';
            e.currentTarget.style.textDecoration = 'none';

            // Button Feedback: Adds a "lift" effect and slightly increases scale
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';

            // Background Hint: Optional subtle highlight to define the "button" area
            e.currentTarget.style.backgroundColor = 'rgba(0, 119, 181)';
            e.currentTarget.style.padding = '2px 6px';
            e.currentTarget.style.borderRadius = '4px';
          }}

          onMouseLeave={(e) => {
            // Reset Color & Shadow
            e.currentTarget.style.color = '#8be9fd';
            e.currentTarget.style.textShadow = 'none';
            e.currentTarget.style.textDecoration = 'underline';

            // Reset Transformation
            e.currentTarget.style.transform = 'translateY(0) scale(1)';

            // Reset Background Hint
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.padding = '0px';
          }}
        >
          Linkedin
        </a>
      </div>
    </foreignObject>
    <text x="499" y="369" fill="#f8f8f2" fontSize="13" fontFamily="JetBrains Mono, monospace">here</text>


    {/* Line 10 — prompt + blinking cursor */}
    <text x="130" y="392" fill="#3a3f6a" fontSize="12" fontFamily="JetBrains Mono, monospace">10</text>
    <text x="158" y="392" fill="#6272a4" fontSize="13" fontFamily="JetBrains Mono, monospace">❯ </text>
    <rect x="182" y="380" width="10" height="16" rx="2" fill="#f8f8f2" opacity="0.9" className="cursor-blink" />

    {/* ── DESK ITEMS ── */}

    {/* Coffee mug */}
    <rect x="1110" y="446" width="46" height="38" rx="6" fill="url(#mugGrad)" />
    <path d="M 1156 452 Q 1178 452 1178 465 Q 1178 478 1156 478"
      stroke="#1a204e" strokeWidth="4.5" fill="none" strokeLinecap="round" />
    <ellipse cx="1133" cy="447" rx="23" ry="6.5" fill="#2e1f14" />
    <ellipse cx="1133" cy="447" rx="17" ry="4.5" fill="#3d2a1a" />
    <text x="1133" y="472" fill="#4a6fcc" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono, monospace">&lt;/&gt;</text>
    {/* Steam */}
    <ellipse className="steam-1" cx="1120" cy="442" rx="4" ry="6.5" fill="#93c5fd" opacity="0" />
    <ellipse className="steam-2" cx="1133" cy="437" rx="5" ry="8" fill="#bfdbfe" opacity="0" />
    <ellipse className="steam-3" cx="1146" cy="441" rx="4" ry="6.5" fill="#dbeafe" opacity="0" />
    <ellipse className="steam-4" cx="1126" cy="434" rx="2.5" ry="5" fill="#eff6ff" opacity="0" />

    {/* Notebook */}
    <rect x="148" y="455" width="82" height="56" rx="4" fill="#161828" transform="rotate(-4, 189, 483)" />
    <rect x="151" y="458" width="76" height="52" rx="3" fill="#1a1c30" transform="rotate(-4, 189, 483)" />
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1="155" y1={466 + i * 9} x2="223" y2={465 + i * 9}
        stroke="#252840" strokeWidth="1.5" transform="rotate(-4, 189, 483)" />
    ))}
    <text x="189" y="496" fill="#3b5bdb" fontSize="12" textAnchor="middle"
      fontFamily="JetBrains Mono, monospace" transform="rotate(-4, 189, 496)">TODO</text>

    {/* Pen */}
    <rect x="240" y="459" width="5" height="36" rx="2.5" fill="#3b82f6" transform="rotate(-10, 242, 477)" />
    <rect x="240" y="459" width="5" height="7" rx="1.5" fill="#1e3a8a" transform="rotate(-10, 242, 477)" />

{/* ── BEAUTIFIED IPHONE WITH SYNC PROGRESS ── */}
    <g transform="translate(958, 454)">
      
      {/* 1. Body/Chassis (Aluminum Frame) */}
      <rect x="0" y="0" width="30" height="38" rx="7" fill="#2d3446" stroke="#4a5568" strokeWidth="0.5" />

      {/* 2. OLED Screen */}
      <rect x="1.5" y="1.5" width="27" height="35" rx="6" fill="#080c14" />
      
      {/* 3. The Notch (Dynamic Island) */}
      <rect x="7" y="3" width="16" height="3.5" rx="2" fill="#111827" />
      <circle cx="10" cy="4.75" r="1.2" fill="#2d3446" /> 

      {/* 4. SYNC ICON & PROGRESS (Matches Monitor) */}
      <g transform="translate(7, 12)">
        {/* Tiny Sync Icon */}
        <path 
          d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" 
          fill="#3b82f6" 
          transform="scale(0.35)"
          className="cursor-blink"
        />
        {/* Tiny Progress Bar Container */}
        <rect x="0" y="8" width="16" height="1.5" rx="0.75" fill="#1e293b" />
        {/* Tiny Progress Bar Fill (Animated) */}
        <motion.rect 
          x="0" y="8" height="1.5" rx="0.75" fill="#3b82f6" 
          initial={{ width: 0 }}
          animate={{ width: 12 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: '0 0 4px #3b82f6' }}
        />
        <text x="0" y="14" fill="#475569" fontSize="3" fontFamily="JetBrains Mono, monospace">SYNCING...</text>
      </g>

      6. Home Indicator
      <rect x="7" y="34.5" width="16" height="1" rx="0.5" fill="#475569" opacity="0.6" />
      {/* <ellipse cx="15" cy="34" rx="3.5" ry="3.5" fill="#1a1e30" /> */}
    </g>

    {/* Keyboard */}
    <rect x="390" y="490" width="420" height="24" rx="6" fill="#10121e" />
    <rect x="394" y="493" width="412" height="17" rx="5" fill="#161828" />
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(i => (
      <rect key={`k1-${i}`}
        x={398 + i * 22} y={495} width="18" height="9" rx="2.5"
        fill={i % 3 === 0 ? "#20223a" : i % 3 === 1 ? "#1c1e35" : "#191b30"}
        className={`key-${String.fromCharCode(97 + (i % 9))}`} />
    ))}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
      <rect key={`k2-${i}`}
        x={406 + i * 22} y={506} width="18" height="5" rx="2"
        fill={i % 2 === 0 ? "#20223a" : "#191b30"}
        className={`key-${String.fromCharCode(97 + (i % 9))}`} />
    ))}

    {/* Ambient code particles */}
    <text x="62" y="300" fill="#3b82f6" fontSize="16" fontFamily="JetBrains Mono, monospace" opacity="0.08">{`{...}`}</text>
    <text x="1150" y="250" fill="#50fa7b" fontSize="14" fontFamily="JetBrains Mono, monospace" opacity="0.08">{`() =>`}</text>
    <text x="1190" y="380" fill="#ff79c6" fontSize="13" fontFamily="JetBrains Mono, monospace" opacity="0.07">{`<div>`}</text>
    <text x="55" y="420" fill="#f1fa8c" fontSize="13" fontFamily="JetBrains Mono, monospace" opacity="0.08">{`await`}</text>
    <text x="1170" y="440" fill="#bd93f9" fontSize="13" fontFamily="JetBrains Mono, monospace" opacity="0.07">{`async`}</text>
  </svg>
);

/* ─────────────────────────────────────────────
   Main Export
───────────────────────────────────────────────*/
export default function UnderUpdate() {
  return (
    <>
      <GlobalStyles />
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <WorkspaceScene />
      </div>
    </>
  );
}