const CyberShield = () => {
  return (
    <div className="relative w-28 h-32 md:w-36 md:h-40">
      {/* Multi-layered outer glow */}
      <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-150 animate-pulse" />
      <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full scale-125" />
      
      {/* Main SVG Shield */}
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full relative z-10 drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Advanced gradient definitions */}
        <defs>
          <linearGradient id="shieldGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="70%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="advancedGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="innerShadow">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="2" result="shadow" />
            <feComposite in="SourceGraphic" in2="shadow" operator="over" />
          </filter>
        </defs>

        {/* Outer energy field */}
        <path
          d="M50 2 L93 18 L93 56 C93 84 72 105 50 118 C28 105 7 84 7 56 L7 18 Z"
          stroke="url(#shieldGradient)"
          strokeWidth="0.5"
          fill="none"
          strokeOpacity="0.3"
          className="animate-[pulse_4s_ease-in-out_infinite]"
        />

        {/* Shield base shape with enhanced styling */}
        <path
          d="M50 5 L90 20 L90 55 C90 80 70 100 50 115 C30 100 10 80 10 55 L10 20 Z"
          stroke="url(#shieldGradient)"
          strokeWidth="2.5"
          fill="url(#innerGlow)"
          filter="url(#advancedGlow)"
        />

        {/* Inner shield layer 1 */}
        <path
          d="M50 10 L84 23 L84 54 C84 76 67 94 50 107 C33 94 16 76 16 54 L16 23 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Inner shield layer 2 */}
        <path
          d="M50 15 L78 26 L78 53 C78 72 64 87 50 98 C36 87 22 72 22 53 L22 26 Z"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          fill="none"
          strokeDasharray="4 2"
        />

        {/* Advanced circuit grid - top section */}
        <g stroke="url(#circuitGradient)" strokeWidth="0.8" strokeOpacity="0.7">
          {/* Left circuit cluster */}
          <path d="M20 30 L30 30 L30 38 L38 38" fill="none" />
          <path d="M25 30 L25 42" fill="none" />
          <path d="M30 34 L36 34" fill="none" />
          <circle cx="20" cy="30" r="2" fill="hsl(var(--primary))" className="animate-[pulse_2s_ease-in-out_infinite]" />
          <circle cx="38" cy="38" r="1.5" fill="hsl(var(--secondary))" />
          <circle cx="25" cy="42" r="1" fill="hsl(var(--primary))" />
          <rect x="34" y="32" width="4" height="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          
          {/* Right circuit cluster */}
          <path d="M80 30 L70 30 L70 38 L62 38" fill="none" />
          <path d="M75 30 L75 42" fill="none" />
          <path d="M70 34 L64 34" fill="none" />
          <circle cx="80" cy="30" r="2" fill="hsl(var(--primary))" className="animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
          <circle cx="62" cy="38" r="1.5" fill="hsl(var(--secondary))" />
          <circle cx="75" cy="42" r="1" fill="hsl(var(--primary))" />
          <rect x="62" y="32" width="4" height="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </g>

        {/* Central security core */}
        <g filter="url(#advancedGlow)">
          {/* Outer rotating ring */}
          <circle
            cx="50"
            cy="55"
            r="24"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            strokeOpacity="0.4"
            strokeDasharray="8 4 2 4"
            className="animate-[spin_20s_linear_infinite]"
          />
          
          {/* Secondary ring */}
          <circle
            cx="50"
            cy="55"
            r="20"
            stroke="hsl(var(--secondary))"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.6"
          />
          
          {/* Inner tech circle */}
          <circle
            cx="50"
            cy="55"
            r="16"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="url(#coreGlow)"
            fillOpacity="0.3"
          />
          
          {/* Hexagonal security frame */}
          <polygon
            points="50,39 62,47 62,63 50,71 38,63 38,47"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.8"
          />
          
          {/* Inner hexagon */}
          <polygon
            points="50,44 57,49 57,61 50,66 43,61 43,49"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            fill="hsl(var(--secondary))"
            fillOpacity="0.1"
          />

          {/* Advanced lock icon */}
          <g>
            {/* Lock body */}
            <rect
              x="44"
              y="53"
              width="12"
              height="10"
              rx="1"
              fill="hsl(var(--primary))"
              fillOpacity="0.9"
            />
            {/* Lock shackle */}
            <path
              d="M46 53 L46 49 C46 46 48 44 50 44 C52 44 54 46 54 49 L54 53"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Keyhole */}
            <circle cx="50" cy="57" r="1.5" fill="hsl(var(--background))" />
            <path d="M49 58 L50 62 L51 58" fill="hsl(var(--background))" />
          </g>
        </g>

        {/* Data flow lines - left */}
        <g stroke="hsl(var(--secondary))" strokeWidth="0.6" strokeOpacity="0.5">
          <path d="M22 55 L32 55" fill="none" strokeDasharray="2 2" />
          <path d="M24 60 L34 60" fill="none" strokeDasharray="2 2" />
          <path d="M26 65 L36 65" fill="none" strokeDasharray="2 2" />
        </g>

        {/* Data flow lines - right */}
        <g stroke="hsl(var(--secondary))" strokeWidth="0.6" strokeOpacity="0.5">
          <path d="M78 55 L68 55" fill="none" strokeDasharray="2 2" />
          <path d="M76 60 L66 60" fill="none" strokeDasharray="2 2" />
          <path d="M74 65 L64 65" fill="none" strokeDasharray="2 2" />
        </g>

        {/* Bottom circuit patterns */}
        <g stroke="url(#circuitGradient)" strokeWidth="0.8" strokeOpacity="0.6">
          {/* Left bottom */}
          <path d="M25 75 L35 75 L35 85 L28 85 L28 90" fill="none" />
          <circle cx="25" cy="75" r="1.5" fill="hsl(var(--primary))" />
          <circle cx="28" cy="90" r="1" fill="hsl(var(--secondary))" />
          
          {/* Right bottom */}
          <path d="M75 75 L65 75 L65 85 L72 85 L72 90" fill="none" />
          <circle cx="75" cy="75" r="1.5" fill="hsl(var(--primary))" />
          <circle cx="72" cy="90" r="1" fill="hsl(var(--secondary))" />
          
          {/* Center bottom */}
          <path d="M45 95 L50 100 L55 95" fill="none" />
          <circle cx="50" cy="100" r="1.5" fill="hsl(var(--primary))" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
        </g>

        {/* Corner accent nodes */}
        <g fill="hsl(var(--primary))">
          <circle cx="50" cy="8" r="1.5" className="animate-[pulse_2s_ease-in-out_infinite]" />
          <circle cx="87" cy="25" r="1" />
          <circle cx="13" cy="25" r="1" />
        </g>

        {/* Scanning line effect */}
        <line
          x1="15"
          y1="55"
          x2="85"
          y2="55"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          className="animate-[pulse_3s_ease-in-out_infinite]"
        />

        {/* Binary/digital markers */}
        <g fill="hsl(var(--primary))" fillOpacity="0.4" fontSize="3" fontFamily="monospace">
          <text x="18" y="50">01</text>
          <text x="78" y="50">10</text>
          <text x="18" y="72">11</text>
          <text x="78" y="72">00</text>
        </g>

        {/* Animated pulse rings */}
        <circle
          cx="50"
          cy="55"
          r="28"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.2"
          className="animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"
        />
        <circle
          cx="50"
          cy="55"
          r="32"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.5"
          fill="none"
          strokeOpacity="0.15"
          className="animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]"
        />
      </svg>
    </div>
  );
};

export default CyberShield;
