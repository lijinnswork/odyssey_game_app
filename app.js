// Local Development API Bridge
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') ? 'https://game-iimbx.netlify.app' : '';

// ─────────────────────────────────────────────
// ANIMATED MASCOT SVG
// ─────────────────────────────────────────────
window.getParrotSVG = function (width = "100%", height = "100%", state = "neutral") {
    // Add the state class to the SVG for smooth CSS transitions
    return `
    <svg viewBox="-18 -8 136 118" width="${width}" height="${height}" style="overflow: visible;" class="polly-svg ${state}">
        <defs>
            <linearGradient id="p-body" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#4ade80" />
                <stop offset="100%" stop-color="#16a34a" />
            </linearGradient>
            <linearGradient id="p-belly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#bbf7d0" />
                <stop offset="100%" stop-color="#4ade80" />
            </linearGradient>
            <linearGradient id="p-crest" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ef4444" />
                <stop offset="100%" stop-color="#b91c1c" />
            </linearGradient>
            <linearGradient id="p-tail" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fde047" />
                <stop offset="100%" stop-color="#eab308" />
            </linearGradient>
            <linearGradient id="p-beak" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
            <linearGradient id="p-wing" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#22c55e" />
                <stop offset="100%" stop-color="#15803d" />
            </linearGradient>
        </defs>

        <style>
            /* Smooth Transitions */
            .polly-svg .eyes-neutral { opacity: 1; transition: opacity 0.4s ease-in-out; }
            .polly-svg .eyes-happy { opacity: 0; transition: opacity 0.4s ease-in-out; }
            .polly-svg.happy .eyes-neutral { opacity: 0; }
            .polly-svg.happy .eyes-happy { opacity: 1; }

            /* Animation Speeds */
            .polly-svg .body-group { animation: mascot-hover 3s infinite ease-in-out; transform-origin: center; transition: animation-duration 0.5s; }
            .polly-svg.happy .body-group { animation-duration: 1s; }

            .polly-svg .tail-feather-1 { animation: mascot-tail-wag 1.5s infinite alternate ease-in-out; transform-origin: 50px 75px; transition: animation-duration 0.5s; }
            .polly-svg .tail-feather-2 { animation: mascot-tail-wag 1.5s infinite alternate ease-in-out; transform-origin: 45px 70px; transition: animation-duration 0.5s; }
            .polly-svg .tail-feather-3 { animation: mascot-tail-wag 1.5s infinite alternate ease-in-out; transform-origin: 55px 70px; transition: animation-duration 0.5s; }
            .polly-svg.happy .tail-feather-1, .polly-svg.happy .tail-feather-2, .polly-svg.happy .tail-feather-3 { animation-duration: 0.7s; }

            .polly-svg .wing-left { animation: mascot-wing-left 1.5s infinite ease-in-out; transform-origin: 25px 50px; transition: animation-duration 0.5s; }
            .polly-svg.happy .wing-left { animation-duration: 0.6s; }

            .polly-svg .wing-right { animation: mascot-wing-right 1.5s infinite ease-in-out; transform-origin: 75px 50px; transition: animation-duration 0.5s; }
            .polly-svg.happy .wing-right { animation-duration: 0.6s; }

            .polly-svg .head-group { animation: mascot-head-tilt 4s infinite ease-in-out; transform-origin: 50px 55px; transition: animation-duration 0.5s; }
            .polly-svg.happy .head-group { animation-duration: 1.5s; }
        </style>
        
        <g class="body-group">
            
            <!-- Tail Feathers -->
            <path class="tail-feather-1" d="M 42 75 Q 45 90 50 95 Q 55 90 58 75 Z" fill="url(#p-tail)" />
            <path class="tail-feather-2" d="M 35 70 Q 40 85 45 90 Q 45 80 45 70 Z" fill="url(#p-tail)" />
            <path class="tail-feather-3" d="M 65 70 Q 60 85 55 90 Q 55 80 55 70 Z" fill="url(#p-tail)" />

            <!-- Left Wing -->
            <path class="wing-left" d="M 25 50 Q -5 45 0 70 Q 15 75 25 58 Z" fill="url(#p-wing)" />
            <!-- Right Wing -->
            <path class="wing-right" d="M 75 50 Q 105 45 100 70 Q 85 75 75 58 Z" fill="url(#p-wing)" />

            <!-- Head & Body combined -->
            <g class="head-group">
                <!-- Main Body -->
                <rect x="25" y="25" width="50" height="55" rx="25" fill="url(#p-body)" />
                
                <!-- Crest Feathers -->
                <path d="M 45 25 Q 45 12 50 15 Q 55 12 55 25 Z" fill="url(#p-crest)"/>
                <path d="M 40 27 Q 38 15 45 20 Z" fill="url(#p-crest)"/>
                <path d="M 60 27 Q 62 15 55 20 Z" fill="url(#p-crest)"/>
                
                <!-- Belly -->
                <ellipse cx="50" cy="62" rx="18" ry="15" fill="url(#p-belly)" />

                <!-- White Face Mask -->
                <path d="M 30 40 Q 30 28 50 28 Q 70 28 70 40 Q 70 50 50 50 Q 30 50 30 40 Z" fill="#ffffff" opacity="0.95"/>
                
                <!-- Blush Cheeks -->
                <circle cx="35" cy="45" r="4.5" fill="#ff8da1" opacity="0.8"/>
                <circle cx="65" cy="45" r="4.5" fill="#ff8da1" opacity="0.8"/>

                <!-- Eyes Container -->
                <g class="eyes-neutral">
                    <circle cx="41" cy="38" r="6.5" fill="#1e1e1e" style="animation: mascot-blink 7s infinite; transform-origin: 41px 38px;"/>
                    <circle cx="59" cy="38" r="6.5" fill="#1e1e1e" style="animation: mascot-blink 7s infinite; transform-origin: 59px 38px;"/>
                    <!-- Eye Highlights (Gleam) -->
                    <circle cx="39.5" cy="36" r="2.5" fill="#ffffff" style="animation: mascot-blink 7s infinite; transform-origin: 39.5px 36px;"/>
                    <circle cx="57.5" cy="36" r="2.5" fill="#ffffff" style="animation: mascot-blink 7s infinite; transform-origin: 57.5px 36px;"/>
                    <circle cx="43" cy="39" r="1" fill="#ffffff" opacity="0.8" style="animation: mascot-blink 7s infinite; transform-origin: 43px 39px;"/>
                    <circle cx="61" cy="39" r="1" fill="#ffffff" opacity="0.8" style="animation: mascot-blink 7s infinite; transform-origin: 61px 39px;"/>
                </g>

                <g class="eyes-happy">
                    <path d="M 35 41 Q 41 33 47 41" stroke="#1e1e1e" stroke-width="4.5" fill="none" stroke-linecap="round" />
                    <path d="M 53 41 Q 59 33 65 41" stroke="#1e1e1e" stroke-width="4.5" fill="none" stroke-linecap="round" />
                </g>

                <!-- Beak -->
                <path d="M 45 42 Q 50 38 55 42 L 50 54 Z" fill="url(#p-beak)"/>
                <!-- Beak shadow/bottom -->
                <path d="M 48 42 Q 50 40 52 42 L 50 50 Z" fill="#b45309"/>
            </g>
        </g>
    </svg>
    `;
};

// --- ANIMATED COCOA GARFIELD MASCOT SVG ---
window.getGarfieldSVG = function (width = "100%", height = "100%", state = "neutral") {
    return `
    <svg viewBox="-18 -8 136 118" width="${width}" height="${height}" style="overflow: visible;" class="garfield-svg ${state}">
        <defs>
            <linearGradient id="g-body" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#cc6f36" />
                <stop offset="100%" stop-color="#994f24" />
            </linearGradient>
            <linearGradient id="g-belly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fff0e0" />
                <stop offset="100%" stop-color="#ffdcb8" />
            </linearGradient>
            <linearGradient id="g-ear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffa5a5" />
                <stop offset="100%" stop-color="#f28080" />
            </linearGradient>
            <linearGradient id="g-bell" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffd700" />
                <stop offset="100%" stop-color="#cc9b00" />
            </linearGradient>
            <linearGradient id="g-stripe" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#542b10" />
                <stop offset="100%" stop-color="#3b1d0a" />
            </linearGradient>
        </defs>

        <style>
            /* Smooth Transitions */
            .garfield-svg .eyes-neutral { opacity: 1; transition: opacity 0.4s ease-in-out; }
            .garfield-svg .eyes-happy { opacity: 0; transition: opacity 0.4s ease-in-out; }
            .garfield-svg.happy .eyes-neutral { opacity: 0; }
            .garfield-svg.happy .eyes-happy { opacity: 1; }

            .garfield-svg .mouth-neutral { opacity: 1; transition: opacity 0.3s ease-in-out; }
            .garfield-svg .mouth-happy { opacity: 0; transition: opacity 0.3s ease-in-out; }
            .garfield-svg.happy .mouth-neutral { opacity: 0; }
            .garfield-svg.happy .mouth-happy { opacity: 1; }

            .garfield-svg .paws-neutral { opacity: 1; transition: opacity 0.3s ease-in-out; }
            .garfield-svg .paws-happy { opacity: 0; transition: opacity 0.3s ease-in-out; }
            .garfield-svg.happy .paws-neutral { opacity: 0; }
            .garfield-svg.happy .paws-happy { opacity: 1; }

            .garfield-svg .tail-neutral { opacity: 1; transition: opacity 0.3s ease-in-out; }
            .garfield-svg .tail-happy { opacity: 0; transition: opacity 0.3s ease-in-out; }
            .garfield-svg.happy .tail-neutral { opacity: 0; }
            .garfield-svg.happy .tail-happy { opacity: 1; }

            /* Animation Speeds */
            .garfield-svg .body-group { animation: mascot-hover 3s infinite ease-in-out; transform-origin: center; transition: animation-duration 0.5s; }
            .garfield-svg.happy .body-group { animation-duration: 1s; }

            .garfield-svg .tail-neutral { animation: mascot-tail-wag 2s infinite alternate ease-in-out; transform-origin: 30px 75px; }
            .garfield-svg .tail-happy { animation: mascot-tail-wag 0.8s infinite alternate ease-in-out; transform-origin: 10px 65px; }

            .garfield-svg .ear-left { animation: mascot-ear-wiggle-left 4.5s infinite alternate ease-in-out; transform-origin: 26px 34px; }
            .garfield-svg .ear-right { animation: mascot-ear-wiggle-right 4.8s infinite alternate ease-in-out; transform-origin: 74px 34px; }

            .garfield-svg .head-group { animation: mascot-head-tilt 4s infinite ease-in-out; transform-origin: 50px 42px; transition: animation-duration 0.5s; }
            .garfield-svg.happy .head-group { animation-duration: 1.5s; }

            .garfield-svg.happy .paws-happy { animation: mascot-paws-wave 0.8s infinite alternate ease-in-out; transform-origin: 50px 60px; }

            @keyframes mascot-ear-wiggle-left {
                0%, 90%, 100% { transform: rotate(0deg); }
                93%           { transform: rotate(-6deg); }
                96%           { transform: rotate(4deg); }
                98%           { transform: rotate(-2deg); }
            }
            @keyframes mascot-ear-wiggle-right {
                0%, 92%, 100% { transform: rotate(0deg); }
                94%           { transform: rotate(6deg); }
                97%           { transform: rotate(-4deg); }
                99%           { transform: rotate(2deg); }
            }
            @keyframes mascot-paws-wave {
                0%   { transform: translateY(0px) rotate(0deg); }
                100% { transform: translateY(-3px) rotate(5deg); }
            }
        </style>

        <g class="body-group">
            <!-- Tail Groups (Switchable) -->
            <!-- Neutral Tail (Curled Left) -->
            <g class="tail-neutral">
                <path d="M 30 75 Q 15 85 8 72 Q 4 62 12 55 Q 20 48 20 60 Q 20 70 30 75 Z" fill="url(#g-body)" />
                <path d="M 23 72 Q 17 80 12 73" stroke="url(#g-stripe)" stroke-width="4" stroke-linecap="round" fill="none" />
                <path d="M 13 65 Q 9 70 8 62" stroke="url(#g-stripe)" stroke-width="4" stroke-linecap="round" fill="none" />
            </g>
            <!-- Happy Tail (Wagging Right) -->
            <g class="tail-happy">
                <path d="M 70 75 Q 85 85 92 72 Q 96 62 88 55 Q 80 48 80 60 Q 80 70 70 75 Z" fill="url(#g-body)" />
                <path d="M 77 72 Q 83 80 88 73" stroke="url(#g-stripe)" stroke-width="4" stroke-linecap="round" fill="none" />
                <path d="M 87 65 Q 91 70 92 62" stroke="url(#g-stripe)" stroke-width="4" stroke-linecap="round" fill="none" />
            </g>

            <!-- Main Body -->
            <ellipse cx="50" cy="72" rx="24" ry="20" fill="url(#g-body)" />
            <!-- Cream Belly -->
            <ellipse cx="50" cy="74" rx="15" ry="12" fill="url(#g-belly)" />

            <!-- Collar & Bell -->
            <rect x="36" y="60" width="28" height="4" rx="2" fill="url(#g-stripe)" />
            <circle cx="50" cy="65" r="5.5" fill="url(#g-bell)" />
            <circle cx="50" cy="65" r="1.5" fill="#4a2712" />
            <line x1="50" y1="66.5" x2="50" y2="70.5" stroke="#4a2712" stroke-width="1.5" />

            <!-- Paws Groups (Switchable) -->
            <!-- Neutral Paws (Sitting) -->
            <g class="paws-neutral">
                <!-- Left back paw -->
                <rect x="22" y="78" width="10" height="12" rx="5" fill="url(#g-belly)" />
                <line x1="25" y1="84" x2="25" y2="90" stroke="#4a2712" stroke-width="1.5" />
                <line x1="29" y1="84" x2="29" y2="90" stroke="#4a2712" stroke-width="1.5" />
                <!-- Right back paw -->
                <rect x="68" y="78" width="10" height="12" rx="5" fill="url(#g-belly)" />
                <line x1="71" y1="84" x2="71" y2="90" stroke="#4a2712" stroke-width="1.5" />
                <line x1="75" y1="84" x2="75" y2="90" stroke="#4a2712" stroke-width="1.5" />
                <!-- Left front paw -->
                <rect x="36" y="80" width="9" height="12" rx="4.5" fill="url(#g-belly)" />
                <line x1="39" y1="86" x2="39" y2="92" stroke="#4a2712" stroke-width="1.5" />
                <line x1="42" y1="86" x2="42" y2="92" stroke="#4a2712" stroke-width="1.5" />
                <!-- Right front paw -->
                <rect x="55" y="80" width="9" height="12" rx="4.5" fill="url(#g-belly)" />
                <line x1="58" y1="86" x2="58" y2="92" stroke="#4a2712" stroke-width="1.5" />
                <line x1="61" y1="86" x2="61" y2="92" stroke="#4a2712" stroke-width="1.5" />
            </g>
            <!-- Happy Paws (Waving) -->
            <g class="paws-happy">
                <!-- Left waving paw -->
                <rect x="30" y="52" width="10" height="14" rx="5" fill="url(#g-belly)" />
                <line x1="33" y1="52" x2="33" y2="58" stroke="#4a2712" stroke-width="1.5" />
                <line x1="37" y1="52" x2="37" y2="58" stroke="#4a2712" stroke-width="1.5" />
                <!-- Right waving paw -->
                <rect x="60" y="52" width="10" height="14" rx="5" fill="url(#g-belly)" />
                <line x1="63" y1="52" x2="63" y2="58" stroke="#4a2712" stroke-width="1.5" />
                <line x1="67" y1="52" x2="67" y2="58" stroke="#4a2712" stroke-width="1.5" />
                <!-- Left back sitting paw -->
                <rect x="22" y="78" width="10" height="12" rx="5" fill="url(#g-belly)" />
                <line x1="25" y1="84" x2="25" y2="90" stroke="#4a2712" stroke-width="1.5" />
                <!-- Right back sitting paw -->
                <rect x="68" y="78" width="10" height="12" rx="5" fill="url(#g-belly)" />
                <line x1="71" y1="84" x2="71" y2="90" stroke="#4a2712" stroke-width="1.5" />
            </g>

            <!-- Head group -->
            <g class="head-group">
                <!-- Ears (left/right) -->
                <path class="ear-left" d="M 28 34 L 16 10 Q 24 13 36 26 Z" fill="url(#g-body)" />
                <path class="ear-left" d="M 27 31 L 18 14 Q 24 16 33 24 Z" fill="url(#g-ear)" />

                <path class="ear-right" d="M 72 34 L 84 10 Q 76 13 64 26 Z" fill="url(#g-body)" />
                <path class="ear-right" d="M 73 31 L 82 14 Q 76 16 67 24 Z" fill="url(#g-ear)" />

                <!-- Hair Tuft -->
                <path d="M 45 22 Q 50 10 52 20 Q 57 10 55 22 Z" fill="url(#g-body)" />

                <!-- Main Head Base -->
                <ellipse cx="50" cy="42" rx="27" ry="21" fill="url(#g-body)" />

                <!-- Head Stripes -->
                <!-- Forehead -->
                <path d="M 47 21 L 48 26 L 46 26 Z" fill="url(#g-stripe)" />
                <path d="M 50 21 L 50 28 L 49 28 Z" fill="url(#g-stripe)" />
                <path d="M 53 21 L 52 26 L 54 26 Z" fill="url(#g-stripe)" />
                <!-- Left cheek stripes -->
                <path d="M 25 38 L 31 39 L 29 41 Z" fill="url(#g-stripe)" />
                <path d="M 24 43 L 30 44 L 28 46 Z" fill="url(#g-stripe)" />
                <!-- Right cheek stripes -->
                <path d="M 75 38 L 69 39 L 71 41 Z" fill="url(#g-stripe)" />
                <path d="M 76 43 L 70 44 L 72 46 Z" fill="url(#g-stripe)" />

                <!-- Cream Cheeks / Muzzle -->
                <ellipse cx="44" cy="48" rx="8" ry="6.5" fill="url(#g-belly)" />
                <ellipse cx="56" cy="48" rx="8" ry="6.5" fill="url(#g-belly)" />
                <!-- Whisker dots -->
                <circle cx="41" cy="48" r="0.6" fill="#4a2712" />
                <circle cx="43" cy="49" r="0.6" fill="#4a2712" />
                <circle cx="45" cy="48" r="0.6" fill="#4a2712" />
                <circle cx="59" cy="48" r="0.6" fill="#4a2712" />
                <circle cx="57" cy="49" r="0.6" fill="#4a2712" />
                <circle cx="55" cy="48" r="0.6" fill="#4a2712" />

                <!-- Nose -->
                <polygon points="48,43 52,43 50,46" fill="#e38a8a" />

                <!-- Mouths -->
                <!-- Neutral Mouth -->
                <path class="mouth-neutral" d="M 45 46 Q 47.5 49.5 50 46.5 Q 52.5 49.5 55 46" fill="none" stroke="#4a2712" stroke-width="1.8" stroke-linecap="round" />
                <!-- Happy Mouth -->
                <g class="mouth-happy">
                    <path d="M 45 46 C 46 52, 54 52, 55 46 Z" fill="#992424" />
                    <path d="M 48 49.5 C 49 51.5, 51 51.5, 52 49.5 Z" fill="#ff8a8a" />
                    <path d="M 45 46 Q 47.5 48.5 50 46.5 Q 52.5 48.5 55 46" fill="none" stroke="#4a2712" stroke-width="1.8" stroke-linecap="round" />
                </g>

                <!-- Blush Cheeks -->
                <ellipse cx="32" cy="46" rx="3" ry="2" fill="#ff8da1" opacity="0.6" />
                <ellipse cx="68" cy="46" rx="3" ry="2" fill="#ff8da1" opacity="0.6" />

                <!-- Eyes Container -->
                <!-- Neutral Eyes -->
                <g class="eyes-neutral">
                    <!-- Whites -->
                    <ellipse cx="40" cy="37" rx="6" ry="7" fill="#ffffff" stroke="#4a2712" stroke-width="1.5" style="animation: mascot-blink 7s infinite; transform-origin: 40px 37px;" />
                    <ellipse cx="60" cy="37" rx="6" ry="7" fill="#ffffff" stroke="#4a2712" stroke-width="1.5" style="animation: mascot-blink 7s infinite; transform-origin: 60px 37px;" />
                    <!-- Pupils -->
                    <ellipse cx="40" cy="37" rx="4.5" ry="5.5" fill="#1e1e1e" style="animation: mascot-blink 7s infinite; transform-origin: 40px 37px;" />
                    <ellipse cx="60" cy="37" rx="4.5" ry="5.5" fill="#1e1e1e" style="animation: mascot-blink 7s infinite; transform-origin: 60px 37px;" />
                    <!-- Gleams -->
                    <circle cx="38.5" cy="35" r="1.6" fill="#ffffff" style="animation: mascot-blink 7s infinite; transform-origin: 38.5px 35px;" />
                    <circle cx="58.5" cy="35" r="1.6" fill="#ffffff" style="animation: mascot-blink 7s infinite; transform-origin: 58.5px 35px;" />
                    <circle cx="41.5" cy="39" r="0.6" fill="#ffffff" opacity="0.8" style="animation: mascot-blink 7s infinite; transform-origin: 41.5px 39px;" />
                    <circle cx="61.5" cy="39" r="0.6" fill="#ffffff" opacity="0.8" style="animation: mascot-blink 7s infinite; transform-origin: 61.5px 39px;" />
                </g>
                <!-- Happy Eyes -->
                <g class="eyes-happy">
                    <path d="M 34 39 Q 40 31 46 39" stroke="#1e1e1e" stroke-width="4.2" fill="none" stroke-linecap="round" />
                    <path d="M 54 39 Q 60 31 66 39" stroke="#1e1e1e" stroke-width="4.2" fill="none" stroke-linecap="round" />
                </g>
            </g>
        </g>
    </svg>
    `;
};

// --- RESOLVE ACTIVE MASCOT SVG ---
window.getMascotSVG = function (width = "100%", height = "100%", state = "neutral") {
    if (gameState.selectedMascot === 'garfield') {
        return window.getGarfieldSVG(width, height, state);
    }
    return window.getParrotSVG(width, height, state);
};

window.getMascotAvatarSrc = function () {
    return (gameState.selectedMascot === 'garfield') ? 'garfield.png' : 'polly.png';
};

// App State for Chapter-Based System
const defaultState = {
    xp: 0,
    gems: 0,
    streak: 1,
    unlockedChapters: ['chapter1'],
    unlockedLevels: ['c1-l1'],
    completedQuestions: [],
    levelStats: {}, // Stores: { levelId: { score: N, total: M, passed: true } }
    rank: '-',
    userTitle: 'AI NOVICE',
    demoCompleted: false,
    lastPlayedDate: null,
    selectedIcon: null, // if null, uses landing-logo.png
    selectedMascot: 'polly'
};

const GAME_ICONS = [
    'smart_toy', 'psychology', 'school', 'terminal', 'science',
    'engineering', 'rocket_launch', 'sports_esports', 'workspace_premium', 'military_tech',
    'emoji_objects', 'memory', 'query_stats', 'public', 'explore'
];

function getAppLogo() {
    if (gameState.selectedIcon) {
        return `<span class="material-symbols-rounded" style="font-size: 1.8rem; color: var(--accent);">${gameState.selectedIcon}</span>`;
    }
    return `<img src="IIMBx_logo.png" alt="Odyssey by IIMBx" style="width: 100%; height: 100%; object-fit: contain; padding: 5%; background: white;" />`;
}

let gameState = { ...defaultState };
let currentUser = null;
let isOffline = false; // Initialize explicitly

// DOM Elements
const app = document.getElementById('app');

// Icons
const CHAPTER_ICONS = ['balance', 'rocket_launch', 'gavel'];
const LEVEL_ICONS = ['eco', 'architecture', 'psychology', 'bolt', 'school', 'biotech', 'work', 'public', 'lightbulb', 'star', 'explore', 'stars', 'workspace_premium'];

// Initialization
async function init() {
    // Sync Splash Loader mascot and text to the user's saved preference
    try {
        const splashLoader = document.querySelector('.splash-loader');
        if (splashLoader) {
            const savedUserStr = localStorage.getItem('saved_user');
            const guestStr = localStorage.getItem('guest_gamestate');
            let mascot = 'polly';
            let mascotName = 'Polly';
            
            if (savedUserStr) {
                try {
                    const savedUser = JSON.parse(savedUserStr);
                    if (savedUser && savedUser.selectedMascot === 'garfield') {
                        mascot = 'garfield';
                        mascotName = 'Garfield';
                    }
                } catch (e) {}
            }
            if (guestStr && mascot === 'polly') {
                try {
                    const guest = JSON.parse(guestStr);
                    if (guest && guest.selectedMascot === 'garfield') {
                        mascot = 'garfield';
                        mascotName = 'Garfield';
                    }
                } catch (e) {}
            }
            
            const textDiv = document.getElementById('splash-loading-text');
            if (textDiv) {
                textDiv.textContent = `Waking up ${mascotName}...`;
            }
            
            const svgContainer = document.getElementById('splash-mascot-container');
            if (svgContainer) {
                if (mascot === 'garfield' && typeof window.getGarfieldSVG === 'function') {
                    svgContainer.innerHTML = window.getGarfieldSVG('140px', '140px', 'neutral');
                } else if (typeof window.getParrotSVG === 'function') {
                    svgContainer.innerHTML = window.getParrotSVG('140px', '140px', 'neutral');
                }
            }
        }
    } catch (e) {
        console.warn("Failed to dynamically initialize splash loader mascot:", e);
    }

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/get-course-content');
        if (res.ok) {
            const data = await res.json();
            if (!data.needsSeeding && data.chapters) {
                window.courseData = data.chapters;

                // Migration: STRIP ALL legacy "Level N: " prefixes from data recursively
                window.courseData.forEach(ch => {
                    ch.levels.forEach(lvl => {
                        // Use regex to strip "Level \d+: " at the start, case-insensitively
                        while (lvl.title && /^Level \d+: /i.test(lvl.title)) {
                            lvl.title = lvl.title.replace(/^Level \d+: /i, '').trim();
                        }
                    });
                });

                if (data.pools) {
                    Object.keys(data.pools).forEach(k => window[k] = data.pools[k]);
                }
                console.log('Loaded robust course content from database.');
            }
        }
    } catch (e) {
        console.warn("Could not fetch remote course data. Defaulting to local content.js fallback.", e);
    }

    // Set theme based on local storage or default to light; force dark on mobile
    const savedTheme = localStorage.getItem('user_theme') || 'light';
    const isMobile = window.innerWidth < 1024;
    document.body.setAttribute('data-theme', isMobile ? 'dark' : savedTheme);
    updateThemeButtons();

    const savedUserStr = localStorage.getItem('saved_user');
    const loginTimeStr = localStorage.getItem('login_timestamp');

    if (savedUserStr && loginTimeStr) {
        const currentTime = new Date().getTime();
        const loginTime = parseInt(loginTimeStr, 10);
        const hoursPassed = (currentTime - loginTime) / (1000 * 60 * 60);

        if (hoursPassed >= 72) {
            // Session expired
            localStorage.removeItem('saved_user');
            localStorage.removeItem('login_timestamp');
            window.currentView = 'login';
            renderLoginScreen();
        } else {
            try {
                const savedUser = JSON.parse(savedUserStr);
                if (savedUser.isGuest) {
                    loginGuest(true);
                } else {
                    loginSuccess(savedUser, true);
                }
            } catch (e) {
                localStorage.removeItem('saved_user');
                localStorage.removeItem('login_timestamp');
                window.currentView = 'login';
                renderLoginScreen();
            }
        }
    } else {
        window.currentView = 'login';
        renderLoginScreen();
    }

    // Initial Panel Render or Hide
    updateDesktopPanels();

    // Sync theme button labels to current theme
    updateThemeButtons();

    // Background UI/Server Sync (Every 20s)
    setInterval(async () => {
        if (currentUser && !isOffline && window.currentView !== 'login') {
            await updateMiniLeaderboard();
        }
        if (typeof syncUIStats === 'function') syncUIStats();
    }, 20000);
}

// --- Desktop Panel Logic ---

// Banter Data
const AI_BANTER = [
    "Did you know? The first AI program was written in 1951 for playing Checkers.",
    "I'm learning from you just as much as you're learning from me. Okay, maybe not *just* as much.",
    "Keep going! Your neural network is forming new connections with every question.",
    "Fun Fact: 90% of the world's data was generated in just the last two years.",
    "You're crushing it! Or as we say in binary: 01011001 01100101 01110011!",
    "Remember to take breaks. Even supercomputers need to cool down sometimes.",
    "Is it just me, or is it getting smarter in here? Oh wait, that's you!",
    "Efficiency Tip: Consistent practice beats cramming. Your brain loves patterns.",
    "I'm analyzing your progress... verdict: 100% Awesome.",
    "Don't worry about mistakes. In AI training, we call that 'Loss Function Optimization'."
];

function updateDesktopPanels(refreshLeaderboard = false) {
    const left = document.getElementById('left-panel');
    const right = document.getElementById('right-panel');
    const layoutWrapper = document.getElementById('layout-wrapper');

    if (layoutWrapper) {
        if (window.currentView === 'activity' || window.currentView === 'admin') {
            layoutWrapper.classList.add('panel-collapsed');
        } else {
            layoutWrapper.classList.remove('panel-collapsed');
        }
    }

    // Hide mobile nav during gameplay/complete/login/loading so it doesn't overlap feedback panels/buttons
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        if (!currentUser || window.currentView === 'login' || window.currentView === 'activity' || window.currentView === 'complete') {
            mobileNav.style.setProperty('display', 'none', 'important');
        } else {
            // Let CSS media query handle display
            mobileNav.style.removeProperty('display');
        }
    }

    const desktopCoach = document.getElementById('desktop-coach-container');

    // Only render if logged in
    if (!currentUser || window.currentView === 'login' || window.currentView === 'admin') {
        if (left) left.innerHTML = '';
        if (right) right.innerHTML = '';
        if (desktopCoach) desktopCoach.style.display = 'none';
        return;
    } else {
        if (desktopCoach) {
            desktopCoach.style.display = 'flex';
            const headerAvatar = document.getElementById('desktop-coach-header-avatar');
            if (headerAvatar) {
                headerAvatar.src = window.getMascotAvatarSrc();
            }
            const welcomeAvatar = document.getElementById('desktop-coach-welcome-avatar');
            if (welcomeAvatar) {
                welcomeAvatar.src = window.getMascotAvatarSrc();
            }
            const mascotContainer = document.getElementById('polly-mascot-container');
            if (mascotContainer) {
                mascotContainer.innerHTML = window.getMascotSVG('100%', '100%');
            }
        }
    }

    // Calculate Progress
    const currentChapterId = gameState.unlockedChapters[gameState.unlockedChapters.length - 1] || 'chapter1';
    let totalLevels = 0;
    let completedLevels = 0;
    window.courseData.forEach(ch => {
        ch.levels.forEach(l => {
            totalLevels++;
            const idx = gameState.unlockedLevels.indexOf(l.id);
            const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
            if (isDone) completedLevels++;
        });
    });
    const progressPct = Math.round((completedLevels / totalLevels) * 100);

    // Partial Update Check: Only return early if the sidebar was rendered for the SAME user
    const sidebarPodium = document.getElementById('mini-leaderboard-podium');
    const sidebarUser = sidebarPodium?.getAttribute('data-for-user');

    if (sidebarPodium && sidebarUser === currentUser) {
        if (refreshLeaderboard) {
            updateMiniLeaderboard();
        }
        return;
    }

    // Full Render (Initial Load)
    left.innerHTML = `
        <!-- MINI PANEL: visible only when left panel is collapsed during level play -->
        <div class="panel-mini">
            <!-- Top group: Avatar + Username -->
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.6rem; padding-top: 1rem;">
                <div style="width: 44px; height: 44px; background: rgba(var(--primary-rgb), 0.15); border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
                    ${getAppLogo()}
                </div>
                <div style="font-size: 0.6rem; font-weight: 800; color: var(--text-secondary); text-align: center;
                            text-transform: uppercase; letter-spacing: 0.5px; width: 100%;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0 4px;">
                    ${currentUser}
                </div>
            </div>

            <!-- Bottom: Settings icon -->
            <div style="padding-bottom: 1rem;">
                <button id="mini-settings-btn" onclick="event.stopPropagation(); toggleMiniSettings(this);"
                    style="background: var(--surface-glass); border: 1px solid var(--border); border-radius: 50%;
                           width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
                           color: var(--text-secondary); cursor: pointer; transition: background 0.2s;"
                    onmouseover="this.style.background='var(--border)'"
                    onmouseout="this.style.background='var(--surface-glass)'">
                    <span class="material-symbols-rounded" style="font-size: 1.2rem;">settings</span>
                </button>
            </div>
        </div>

        <!-- FULL PANEL: visible normally, hidden when collapsed -->
        <div class="panel-full" style="padding: 1.25rem; display: flex; flex-direction: column; height: 100%; overflow-y: auto; gap: 1rem;">

            <!-- User Card -->
            <div style="background: var(--surface-glass); border: 1px solid var(--border); border-radius: var(--radius-m); padding: 1rem 1.25rem; display: flex; align-items: center; gap: 1rem;">
                <div onclick="openIconPicker()" style="width: 52px; height: 52px; background: rgba(var(--primary-rgb), 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; border: 2px solid var(--border); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='rgba(var(--primary-rgb), 0.2)'" onmouseout="this.style.background='rgba(var(--primary-rgb), 0.1)'">
                    ${getAppLogo()}
                </div>
                <div style="position: relative;">
                    <div style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); line-height: 1.2;">${currentUser}</div>
                    <div style="font-size: 0.7rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 0.2rem; display: flex; align-items: center; gap: 4px;">
                        <span id="current-user-title">${gameState.userTitle || 'AI NOVICE'}</span>
                    </div>
                </div>
            </div>

            <!-- Mini Leaderboard -->
            <div id="mini-leaderboard-card" style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-m); padding: 1.25rem; position: relative; overflow: hidden; flex: 1.5; display: flex; flex-direction: column; min-height: 350px;">

                ${currentUser === 'Guest' ? `
                <!-- GUEST OVERLAY -->
                <div style="position: absolute; inset: 0; background: rgba(5,10,30,0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 1.5rem; border-radius: var(--radius-m);">
                    <span class="material-symbols-rounded" style="font-size: 2.8rem; color: #C73528; margin-bottom: 0.75rem;">lock</span>
                    <h3 style="font-size: 1.05rem; color: #fff; margin-bottom: 0.3rem; font-weight: 800;">Login Required</h3>
                    <p style="color: rgba(209, 246, 255, 0.5); font-size: 0.82rem; margin-bottom: 1.25rem; line-height: 1.5;">Save progress to join the ranks.</p>
                    <button onclick="window.location.reload()" class="pulse-cta" style="background: var(--primary); color: white; border: none; padding: 0.55rem 1.4rem; border-radius: var(--radius-pill); font-weight: 700; cursor: pointer; font-size: 0.9rem;">Login / Register</button>
                </div>
                ` : ''}

                <div style="font-size: 0.75rem; font-weight: 900; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 0.95rem; opacity: 0.8; ${currentUser === 'Guest' ? 'filter: blur(4px);' : ''}">Top Players</div>

                <div id="mini-leaderboard-podium" data-for-user="${currentUser}" style="display: flex; align-items: flex-end; justify-content: center; gap: 0.4rem; height: 100px; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem; flex-shrink: 0; ${currentUser === 'Guest' ? 'filter: blur(4px);' : ''}">
                    <!-- Loading State -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.5;">
                        <span class="material-symbols-rounded" style="font-size: 2.8rem; color: var(--text-muted);">trophy</span>
                    </div>
                </div>

                <!-- Scrollable List Area -->
                <div id="mini-leaderboard-list" class="custom-scrollbar" style="display: flex; flex-direction: column; gap: 0.4rem; flex: 1; overflow-y: auto; margin-bottom: 1rem; padding-right: 4px; ${currentUser === 'Guest' ? 'filter: blur(4px);' : ''}">
                    <div class="skeleton-box" style="height: 32px; width: 100%; opacity: 0.2; border-radius: 8px;"></div>
                    <div class="skeleton-box" style="height: 32px; width: 100%; opacity: 0.13; border-radius: 8px;"></div>
                    <div class="skeleton-box" style="height: 32px; width: 100%; opacity: 0.07; border-radius: 8px;"></div>
                </div>

                <button onclick="renderLeaderboard()"
                    style="width: 100%; border: 1px solid var(--border); background: var(--bg-deep); color: var(--text-secondary); padding: 0.75rem; border-radius: 50px; font-weight: 800; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.6rem; flex-shrink: 0; ${currentUser === 'Guest' ? 'filter: blur(4px); pointer-events: none;' : ''}"
                    onmouseover="this.style.background='var(--border)'; this.style.transform='translateY(-1px)';"
                    onmouseout="this.style.background='var(--bg-deep)'; this.style.transform='translateY(0)';"
                    onmousedown="this.style.transform='translateY(0) scale(0.98)'"
                    onmouseup="this.style.transform='translateY(-1px) scale(1)'">
                    ${(['lijinns', 'admin.iimbx'].includes(currentUser)) ? 'Manage User Directory' : 'View Full Rankings'} 
                    <span class="material-symbols-rounded" style="font-size: 1.1rem;">${(['lijinns', 'admin.iimbx'].includes(currentUser)) ? 'group' : 'leaderboard'}</span>
                </button>
            </div>
 
            <!-- AI Insight Card -->
            <div id="sidebar-banter-container" style="background: rgba(var(--primary-rgb), 0.05); border: 1px solid var(--border); border-radius: var(--radius-m); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.6rem; position: relative; overflow: hidden;">
                <div style="font-size: 0.7rem; font-weight: 900; color: var(--accent); text-transform: uppercase; letter-spacing: 2px; display: flex; align-items: center; gap: 0.4rem;">
                    <span class="material-symbols-rounded" style="font-size: 1.1rem; color: var(--accent);">lightbulb</span> AI Insight
                </div>
                <div id="sidebar-banter-text" style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); font-weight: 600; font-family: 'Outfit', sans-serif;">
                    Loading insight...
                </div>
            </div>
 
            ${['lijinns', 'admin.iimbx'].includes(currentUser) ? `
            <!-- Admin Content Manager Button -->
            <button onclick="renderGodModeEditor()"
                style="width: 100%; padding: 0.9rem 1.1rem; background: rgba(199, 53, 40, 0.1); border: 1px solid rgba(199, 53, 40, 0.3); border-radius: 50px; color: #C73528; font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; transition: all 0.2s; cursor: pointer; margin-bottom: 0.5rem;"
                onmouseover="this.style.background='rgba(199, 53, 40, 0.2)'"
                onmouseout="this.style.background='rgba(199, 53, 40, 0.1)'">
                <span class="material-symbols-rounded" style="font-size: 1.2rem;">edit_document</span>
                Content Manager
            </button>
            ` : ''}
 
            <!-- Settings Button -->
            <div style="display: flex; flex-direction: column; gap: 0.5rem; position: relative;" id="settings-container">
                <button onclick="event.stopPropagation(); document.getElementById('settings-dropdown').classList.toggle('hidden')"
                    style="width: 100%; padding: 0.9rem 1.1rem; background: var(--surface-glass); border: 1px solid var(--border); border-radius: 50px; color: var(--text-secondary); font-weight: 700; font-size: 0.95rem; display: flex; align-items: center; gap: 0.75rem; transition: all 0.2s; cursor: pointer;"
                    onmouseover="this.style.background='var(--border)'"
                    onmouseout="this.style.background='var(--surface-glass)'">
                    <span class="material-symbols-rounded" style="font-size: 1.2rem;">settings</span>
                    Settings
                    <span style="margin-left: auto; font-size: 0.65rem; opacity: 0.45;">▲</span>
                </button>
                <div id="settings-dropdown" class="hidden" style="position: absolute; bottom: 100%; left: 0; right: 0; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem; padding: 0.75rem; background: var(--surface); border: 1px solid var(--border); border-radius: 20px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15); z-index: 1000;">
 
                    <div onclick="handleResetPassword(); document.getElementById('settings-dropdown').classList.add('hidden')" style="padding: 0.75rem 1rem; font-size: 0.88rem; cursor: pointer; border-radius: var(--radius-s); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);" onmouseover="this.style.background='var(--bg-deep)'" onmouseout="this.style.background='transparent'">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">lock</span> Change Password
                    </div>
                    <div onclick="showIntroDemo(true); document.getElementById('settings-dropdown').classList.add('hidden')" style="padding: 0.75rem 1rem; font-size: 0.88rem; cursor: pointer; border-radius: var(--radius-s); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);" onmouseover="this.style.background='var(--bg-deep)'" onmouseout="this.style.background='transparent'">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">explore</span> Show Me Around
                    </div>
                    <div onclick="openIconPicker(); document.getElementById('settings-dropdown').classList.add('hidden')" style="padding: 0.75rem 1rem; font-size: 0.88rem; cursor: pointer; border-radius: var(--radius-s); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);" onmouseover="this.style.background='var(--bg-deep)'" onmouseout="this.style.background='transparent'">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">face</span> Change Avatar
                    </div>
                    <div onclick="openMascotPicker(); document.getElementById('settings-dropdown').classList.add('hidden')" style="padding: 0.75rem 1rem; font-size: 0.88rem; cursor: pointer; border-radius: var(--radius-s); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary);" onmouseover="this.style.background='var(--bg-deep)'" onmouseout="this.style.background='transparent'">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">pets</span> Choose Mascot
                    </div>
                    <div style="height: 1px; background: var(--border); margin: 0.25rem 0;"></div>
                    <div onclick="handleLogout(); document.getElementById('settings-dropdown').classList.add('hidden')" style="padding: 0.75rem 1rem; font-size: 0.88rem; color: #C73528; cursor: pointer; border-radius: var(--radius-s); transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem;" onmouseover="this.style.background='rgba(199, 53, 40, 0.1)'" onmouseout="this.style.background='transparent'">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">logout</span> Logout
                    </div>
                </div>
            </div>

        </div>
    `;

    renderBanter();
    updateMiniLeaderboard();
    updateThemeButtons();

    // Close settings dropdown on outside click
    setTimeout(() => {
        const settingsBtn = document.querySelector('#settings-container button');
        const settingsDropdown = document.getElementById('settings-dropdown');
        if (settingsBtn && settingsDropdown) {
            const dropdownHandler = (e) => {
                if (!settingsDropdown.contains(e.target) && !settingsBtn.contains(e.target)) {
                    settingsDropdown.classList.add('hidden');
                    document.removeEventListener('click', dropdownHandler);
                }
            };
            document.addEventListener('click', dropdownHandler);
        }
    }, 10);
}


// Add hidden class style if not exists
if (!document.getElementById('sidebar-styles')) {
    const style = document.createElement('style');
    style.id = 'sidebar-styles';
    style.textContent = '.hidden { display: none !important; }';
    document.head.appendChild(style);
}

// --- Mini Settings Popup (for collapsed left panel) ---
// Uses position:fixed appended to body to escape overflow:hidden clipping
window.toggleMiniSettings = function (btn) {
    const existing = document.getElementById('mini-settings-popup');
    if (existing) { existing.remove(); return; }

    const rect = btn.getBoundingClientRect();
    const popup = document.createElement('div');
    popup.id = 'mini-settings-popup';
    popup.style.cssText = `
        position: fixed;
        bottom: ${window.innerHeight - rect.top + 8}px;
        left: ${rect.left}px;
        background: #143C63;
        border: 1px solid rgba(209, 246, 255, 0.15);
        border-radius: 14px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        box-shadow: 0 -8px 30px rgba(20, 60, 99, 0.5);
        z-index: 99999;
        animation: scaleIn 0.15s ease;
        min-width: 52px;
    `;
    popup.innerHTML = `
        <button onclick="handleResetPassword(); document.getElementById('mini-settings-popup')?.remove();"
            title="Change Password"
            style="background: rgba(209, 246, 255, 0.06); border: 1px solid rgba(209, 246, 255, 0.1); border-radius: 10px;
                   width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
                   color: rgba(209, 246, 255, 0.8); cursor: pointer; transition: background 0.2s;"
            onmouseover="this.style.background='rgba(209, 246, 255, 0.14)'"
            onmouseout="this.style.background='rgba(209, 246, 255, 0.06)'">
            <span class="material-symbols-rounded" style="font-size: 1.2rem;">lock</span>
        </button>
        <button onclick="showIntroDemo(true); document.getElementById('mini-settings-popup')?.remove();"
            title="Show Me Around"
            style="background: rgba(209, 246, 255, 0.06); border: 1px solid rgba(209, 246, 255, 0.1); border-radius: 10px;
                   width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
                   color: rgba(209, 246, 255, 0.8); cursor: pointer; transition: background 0.2s;"
            onmouseover="this.style.background='rgba(209, 246, 255, 0.14)'"
            onmouseout="this.style.background='rgba(209, 246, 255, 0.06)'">
            <span class="material-symbols-rounded" style="font-size: 1.2rem;">explore</span>
        </button>
        <button onclick="handleLogout(); document.getElementById('mini-settings-popup')?.remove();"
            title="Logout"
            style="background: rgba(199, 53, 40, 0.08); border: 1px solid rgba(199, 53, 40, 0.2); border-radius: 10px;
                   width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
                   color: #C73528; cursor: pointer; transition: background 0.2s;"
            onmouseover="this.style.background='rgba(199, 53, 40, 0.2)'"
            onmouseout="this.style.background='rgba(199, 53, 40, 0.08)'">
            <span class="material-symbols-rounded" style="font-size: 1.2rem;">logout</span>
        </button>
    `;
    document.body.appendChild(popup);

    // Close on outside click
    setTimeout(() => {
        const outsideClickListener = (e) => {
            if (!popup.contains(e.target) && e.target !== btn) {
                popup.remove();
                document.removeEventListener('click', outsideClickListener);
            }
        };
        document.addEventListener('click', outsideClickListener);
    }, 10);
};


// --- Right Panel (Banter) ---
renderBanter();

// --- Update Mini Leaderboard ---
updateMiniLeaderboard();

// Helper to sync local XP into fetched leaderboard data
function syncLeaderboardData(data) {
    // 0. Sanitize all incoming data so XP is never null/undefined
    data = data.map(u => ({
        ...u,
        xp: Math.max(0, parseInt(u.xp) || 0)
    }));

    if (!currentUser || currentUser === 'Guest') return data;

    // 1. Merge Local State for currentUser
    let userEntry = data.find(u => u.username === currentUser);
    if (userEntry) {
        userEntry.xp = Math.max(0, parseInt(gameState.xp) || 0); // Sync latest local XP
    } else {
        // Add new user entry if missing from DB
        data.push({ username: currentUser, xp: Math.max(0, parseInt(gameState.xp) || 0) });
    }

    // 2. Re-sort by XP
    data.sort((a, b) => b.xp - a.xp);

    // 3. Recalculate and Update gameState.rank
    const userIndex = data.findIndex(u => u.username === currentUser);
    if (userIndex !== -1) {
        gameState.rank = userIndex + 1;
    }

    // 4. Update Header/Banner Ranks immediately
    updateRankDisplay();

    return data;
}

async function updateMiniLeaderboard() {
    const podiumCont = document.getElementById('mini-leaderboard-podium');
    const listCont = document.getElementById('mini-leaderboard-list');
    if (!podiumCont || isOffline) return;

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/get-leaderboard', {
            method: 'POST',
            body: JSON.stringify({ username: currentUser })
        });
        let rawData = await res.json();
        const data = syncLeaderboardData(rawData);

        const top3 = data.slice(0, 3);
        const next10 = data.slice(3, 13);

        // Render Podium
        podiumCont.innerHTML = `
            <!-- 2nd -->
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.2rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 60px; text-align: center;">${top3[1] ? top3[1].username : '---'}</div>
                <div style="width: 100%; height: 40px; background: var(--silver-gradient); border-radius: 6px 6px 0 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; font-size: 1.1rem; box-shadow: 0 4px 12px rgba(156, 163, 175, 0.2);">2</div>
            </div>
            <!-- 1st -->
            <div style="flex: 1.2; display: flex; flex-direction: column; align-items: center; gap: 0.2rem;">
                <div style="font-size: 1.2rem; margin-bottom: -0.4rem; color: #FFD700;"><span class="material-symbols-rounded" style="font-variation-settings: 'FILL' 1;">emoji_events</span></div>
                <div style="font-size: 0.85rem; font-weight: 800; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 70px; text-align: center;">${top3[0] ? top3[0].username : '---'}</div>
                <div style="width: 100%; height: 65px; background: var(--gold-gradient); border-radius: 6px 6px 0 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; font-size: 1.6rem; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);">1</div>
            </div>
            <!-- 3rd -->
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.2rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 60px; text-align: center;">${top3[2] ? top3[2].username : '---'}</div>
                <div style="width: 100%; height: 25px; background: var(--bronze-gradient); border-radius: 6px 6px 0 0; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #fff; font-size: 1rem; box-shadow: 0 4px 10px rgba(120, 53, 15, 0.2);">3</div>
            </div>
        `;

        // Render List
        listCont.innerHTML = next10.map((u, i) => `
            <div class="leaderboard-row ${u.username === currentUser ? 'current-user' : ''}" 
                 style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; border-radius: 12px; font-size: 0.85rem; transition: all 0.2s;
                        background: ${u.username === currentUser ? 'rgba(var(--accent-rgb), 0.15)' : 'var(--bg-deep)'};
                        border: 1px solid ${u.username === currentUser ? 'var(--accent)' : 'var(--border)'};">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-weight: 800; color: var(--text-muted); width: 18px; font-size: 0.8rem;">${i + 4}</span>
                    <span class="leaderboard-username" style="color: ${u.username === currentUser ? 'var(--accent)' : 'var(--text-primary)'}; font-weight: ${u.username === currentUser ? '800' : '600'};">${u.username} ${u.username === currentUser ? '(You)' : ''}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <span style="font-weight: 900; color: var(--text-primary); font-size: 0.9rem;">${u.xp}</span>
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">XP</span>
                </div>
            </div>
        `).join('') || '<div style="text-align:center; padding: 1rem; font-size:0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">No more challengers</div>';

    } catch (e) {
        podiumCont.innerHTML = '<div style="font-size: 0.75rem; color: var(--error);">Error loading podium</div>';
    }
}

function renderBanter() {
    const textEl = document.getElementById('sidebar-banter-text');
    const container = document.getElementById('sidebar-banter-container');
    if (!textEl || !currentUser) return;

    // Pick a random banter line
    const banter = AI_BANTER[Math.floor(Math.random() * AI_BANTER.length)];

    if (window.currentView === 'activity') {
        const accuracy = currentLevelSession.totalQuestions > 0 ? Math.round((currentLevelSession.correctCount / currentLevelSession.totalQuestions) * 100) : 0;
        textEl.innerHTML = `<strong>Session Active:</strong> ${accuracy}% Accuracy | 💎 ${currentLevelSession.xpGained} Gained`;
        container.style.background = 'rgba(0, 200, 150, 0.05)';
        return;
    }

    textEl.innerHTML = banter;
    container.style.background = 'rgba(30, 58, 95, 0.05)';
}

// Reset Handlers
function handleResetPassword() {
    if (!currentUser || currentUser === 'Guest') {
        showModal({
            icon: '🔐',
            title: 'Not Available',
            message: 'Password change is only available for registered users.',
            confirmText: 'Okay',
            cancelText: null
        });
        return;
    }

    showModal({
        icon: 'lock',
        title: 'Change Password',
        message: '',
        confirmText: 'Change Password',
        cancelText: 'Cancel',
        confirmClass: 'btn-primary',
        customHtml: `
            <div style="display: flex; flex-direction: column; gap: 0.85rem; width: 100%; margin: 1rem 0;">
                <div id="cp-error" style="display: none; background: rgba(199,53,40,0.1); border: 1px solid var(--error); border-radius: var(--radius-s); padding: 0.65rem 1rem; color: var(--error); font-size: 0.9rem;"></div>
                <div>
                    <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.5px;">Current Password</label>
                    <input id="cp-current" type="password" placeholder="Enter current password" autocomplete="current-password"
                        style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-overlay); border: 1.5px solid var(--border); border-radius: var(--radius-s); color: var(--text-main); font-size: 1rem; font-family: inherit; box-sizing: border-box; outline: none; transition: border-color 0.25s ease-out;"
                        onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
                </div>
                <div>
                    <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.5px;">New Password</label>
                    <input id="cp-new" type="password" placeholder="At least 6 characters" autocomplete="new-password"
                        style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-overlay); border: 1.5px solid var(--border); border-radius: var(--radius-s); color: var(--text-main); font-size: 1rem; font-family: inherit; box-sizing: border-box; outline: none; transition: border-color 0.25s ease-out;"
                        onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
                </div>
                <div>
                    <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.5px;">Confirm New Password</label>
                    <input id="cp-confirm" type="password" placeholder="Repeat new password" autocomplete="new-password"
                        style="width: 100%; padding: 0.75rem 1rem; background: var(--bg-overlay); border: 1.5px solid var(--border); border-radius: var(--radius-s); color: var(--text-main); font-size: 1rem; font-family: inherit; box-sizing: border-box; outline: none; transition: border-color 0.25s ease-out;"
                        onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'"
                        onkeydown="if(event.key==='Enter') document.getElementById('cp-submit-trigger')?.click()">
                </div>
            </div>
        `,
        onConfirm: async () => {
            const current = document.getElementById('cp-current')?.value?.trim();
            const newPw = document.getElementById('cp-new')?.value;
            const confirm = document.getElementById('cp-confirm')?.value;
            const errEl = document.getElementById('cp-error');

            const showErr = (msg) => {
                if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; }
            };

            if (!current || !newPw || !confirm) return showErr('All fields are required.');
            if (newPw.length < 6) return showErr('New password must be at least 6 characters.');
            if (newPw !== confirm) return showErr('New passwords do not match.');
            if (newPw === current) return showErr('New password must differ from current password.');

            const btn = document.querySelector('.app-modal .btn-primary');
            if (btn) { btn.disabled = true; btn.textContent = 'Changing…'; }

            try {
                const res = await fetch(API_BASE + '/.netlify/functions/change-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: currentUser, currentPassword: current, newPassword: newPw })
                });
                const data = await res.json();

                if (data.success) {
                    window.closeModal();
                    showToast('✅ Password changed successfully!', 'success');
                } else {
                    if (btn) { btn.disabled = false; btn.textContent = 'Change Password'; }
                    showErr(data.error || 'Failed to change password.');
                }
            } catch (e) {
                if (btn) { btn.disabled = false; btn.textContent = 'Change Password'; }
                showErr('Network error. Please try again.');
            }

            return false; // prevent modal from closing automatically
        }
    });
}

function handleLogout() {
    localStorage.removeItem('saved_user');
    localStorage.removeItem('login_timestamp');
    renderLoginScreen();
}

window.toggleMobileSettings = function () {
    const modals = document.querySelectorAll('.app-modal');
    if (modals.length > 0) {
        modals.forEach(m => {
            if (!m.classList.contains('closing')) {
                m.classList.add('closing');
                m.style.pointerEvents = 'none'; // prevent click-eating during fade-out
                m.style.animation = 'fadeOut 0.2s ease-in forwards';
                const card = m.querySelector('div');
                if (card) card.style.animation = 'scaleOut 0.2s ease-in forwards';
            }
        });
        setTimeout(() => {
            modals.forEach(m => m.remove());
            let key = window.currentView;
            if (key === 'chapter' || key === 'activity' || key === 'complete' || key === 'admin') {
                key = 'home';
            } else if (key === 'leaderboard') {
                key = 'ranks';
            }
            updateMobileNav(key);
        }, 200);
        return;
    }

    updateMobileNav('settings');

    const avatarHtml = gameState.selectedIcon 
        ? `<span class="material-symbols-rounded" style="font-size: 3rem; color: var(--accent);">${gameState.selectedIcon}</span>`
        : `<img src="IIMBx_logo.png" style="width: 75%; height: 75%; object-fit: contain; background: white; padding: 5%; border-radius: 8px;" />`;

    showModal({
        icon: null,
        title: '',
        message: '',
        confirmText: 'Logout',
        cancelText: null,
        onConfirm: () => handleLogout(),
        cardStyle: 'height: 640px; display: flex; flex-direction: column; justify-content: space-between;',
        customHtml: `
            <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1; margin-bottom: 0.5rem; margin-top: -1rem;">
                <div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div id="profile-avatar-container" style="width: 86px; height: 86px; background: rgba(var(--accent-rgb), 0.1); border: 2px solid var(--accent); border-radius: var(--radius-l); display: flex; align-items: center; justify-content: center; position: relative;">
                            ${avatarHtml}
                            <div onclick="openIconPicker()" style="position: absolute; bottom: -12px; right: -12px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 0.5rem; cursor: pointer; display: flex; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.2s;" onmouseover="this.style.background='var(--bg-overlay)'" onmouseout="this.style.background='var(--bg-card)'">
                                <span class="material-symbols-rounded" style="font-size: 1.1rem; color: var(--text-main);">edit</span>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 0.5rem;">
                            <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.25rem; letter-spacing: -0.5px;">${isOffline ? 'Guest User' : currentUser}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">${gameState.userTitle || 'AI NOVICE'} • ${isOffline ? 'Not registered' : currentUser}</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="background: var(--bg-overlay); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span class="material-symbols-rounded" style="color: #FF8A3D; font-size: 1.8rem; text-shadow: 0 0 10px rgba(255,138,61,0.3);">local_fire_department</span>
                            <div>
                                <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Streak</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${gameState.streak || 0}</div>
                            </div>
                        </div>
                        <div style="background: var(--bg-overlay); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span class="material-symbols-rounded" style="color: #4A8BFF; font-size: 1.8rem; text-shadow: 0 0 10px rgba(74,139,255,0.3);">star</span>
                            <div>
                                <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Total XP</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${gameState.xp || 0}</div>
                            </div>
                        </div>
                        <div style="background: var(--bg-overlay); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span class="material-symbols-rounded" style="color: #35D18A; font-size: 1.8rem; text-shadow: 0 0 10px rgba(53,209,138,0.3);">diamond</span>
                            <div>
                                <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Gems</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${gameState.gems || 0}</div>
                            </div>
                        </div>
                        <div style="background: var(--bg-overlay); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                            <span class="material-symbols-rounded" style="color: #9B5CFF; font-size: 1.8rem; text-shadow: 0 0 10px rgba(155,92,255,0.3);">emoji_events</span>
                            <div>
                                <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Global Rank</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${gameState.rank && gameState.rank !== '-' ? '#' + gameState.rank : '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-bottom: 0.5rem;">
                    <button onclick="openMascotPicker()" class="btn-secondary" style="width: 100%; justify-content: flex-start; padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                        <span class="material-symbols-rounded">pets</span> Choose Mascot
                    </button>
                    <button onclick="handleResetPassword()" class="btn-secondary" style="width: 100%; justify-content: flex-start; padding: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                        <span class="material-symbols-rounded">lock</span> Change Password
                    </button>
                </div>
            </div>
        `
    });
}

window.openIconPicker = function () {
    showModal({
        icon: 'face',
        title: 'Choose Your Avatar',
        message: 'Select a game icon to represent you in the Odyssey.',
        confirmText: null,
        cancelText: 'Close',
        cardStyle: 'height: 580px; display: flex; flex-direction: column; justify-content: space-between;',
        customHtml: `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap: 1rem; width: 100%; margin: 1.5rem 0; flex: 1; overflow-y: auto; padding: 0.5rem;" class="custom-scrollbar">
                <!-- Default Option -->
                <div onclick="selectIcon(null)" 
                     style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: ${!gameState.selectedIcon ? 'rgba(var(--accent-rgb), 0.1)' : 'var(--bg-overlay)'}; border: 3px solid ${!gameState.selectedIcon ? 'var(--accent)' : 'var(--border)'}; border-radius: 16px; cursor: pointer; transition: all 0.2s;"
                     onmouseover="this.style.transform='scale(1.05)'; this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='scale(1)'; if('${gameState.selectedIcon}' !== 'null') this.style.borderColor='var(--border)'">
                    <img src="IIMBx_logo.png" style="width: 90%; height: 90%; object-fit: contain; background: white; padding: 5%; border-radius: 8px;" />
                </div>
                ${GAME_ICONS.map(icon => `
                    <div onclick="selectIcon('${icon}')" 
                         style="aspect-ratio: 1; display: flex; align-items: center; justify-content: center; background: ${gameState.selectedIcon === icon ? 'rgba(var(--accent-rgb), 0.1)' : 'var(--bg-overlay)'}; border: 3px solid ${gameState.selectedIcon === icon ? 'var(--accent)' : 'var(--border)'}; border-radius: 16px; cursor: pointer; transition: all 0.2s;"
                         onmouseover="this.style.transform='scale(1.05)'; this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='scale(1)'; if('${gameState.selectedIcon}' !== '${icon}') this.style.borderColor='var(--border)'">
                        <span class="material-symbols-rounded" style="font-size: 2.2rem; color: ${gameState.selectedIcon === icon ? 'var(--accent)' : 'var(--text-main)'};">${icon}</span>
                    </div>
                `).join('')}
            </div>
        `
    });
};

window.selectIcon = function (icon) {
    gameState.selectedIcon = icon;

    // Update both local storage and UI immediately
    localStorage.setItem('saved_user', JSON.stringify({ ...JSON.parse(localStorage.getItem('saved_user') || '{}'), selectedIcon: icon }));

    window.closeModal();

    const avatarContainer = document.getElementById('profile-avatar-container');
    if (avatarContainer) {
        avatarContainer.innerHTML = icon 
            ? `<span class="material-symbols-rounded" style="font-size: 3rem; color: var(--accent);">${icon}</span>`
            : `<img src="IIMBx_logo.png" style="width: 75%; height: 75%; object-fit: contain; background: white; padding: 5%; border-radius: 8px;" />`;
        avatarContainer.innerHTML += `
            <div onclick="openIconPicker()" style="position: absolute; bottom: -12px; right: -12px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 0.5rem; cursor: pointer; display: flex; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.2s;" onmouseover="this.style.background='var(--bg-overlay)'" onmouseout="this.style.background='var(--bg-card)'">
                <span class="material-symbols-rounded" style="font-size: 1.1rem; color: var(--text-main);">edit</span>
            </div>
        `;
    }

    // Clear left panel to force a full re-render and bypass early return
    const leftPanel = document.getElementById('left-panel');
    if (leftPanel) leftPanel.innerHTML = '';

    updateDesktopPanels(true); // Force refresh
    if (typeof syncUIStats === 'function') syncUIStats();
    saveProgress();
    showToast('✅ Avatar updated!', 'success');
};

window.openMascotPicker = function () {
    showModal({
        icon: 'pets',
        title: 'Choose Your Mascot',
        message: 'Select your AI learning companion to guide you through the Odyssey.',
        confirmText: null,
        cancelText: 'Close',
        cardStyle: 'min-height: var(--mascot-modal-min-height, 620px); display: flex; flex-direction: column; justify-content: space-between;',
        customHtml: `
            <div style="display: flex; gap: 1.5rem; width: 100%; margin: 1.5rem 0; flex: 1; align-items: center; justify-content: center;" class="mascot-picker-container">
                <!-- Polly -->
                <div onclick="selectMascot('polly')" 
                     style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: ${gameState.selectedMascot !== 'garfield' ? 'rgba(var(--accent-rgb), 0.1)' : 'var(--bg-overlay)'}; border: 3px solid ${gameState.selectedMascot !== 'garfield' ? 'var(--accent)' : 'var(--border)'}; border-radius: 20px; padding: 1.5rem; cursor: pointer; transition: all 0.2s; text-align: center; gap: 0.75rem;"
                     onmouseover="this.style.transform='scale(1.03)'; this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='scale(1)'; if(gameState.selectedMascot === 'garfield') this.style.borderColor='var(--border)'">
                    <div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;">
                        ${window.getParrotSVG('100px', '100px')}
                    </div>
                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary);">Polly the Parrot</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">The vibrant, wise learning bird (Default)</div>
                </div>
                <!-- Garfield -->
                <div onclick="selectMascot('garfield')" 
                     style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: ${gameState.selectedMascot === 'garfield' ? 'rgba(var(--accent-rgb), 0.1)' : 'var(--bg-overlay)'}; border: 3px solid ${gameState.selectedMascot === 'garfield' ? 'var(--accent)' : 'var(--border)'}; border-radius: 20px; padding: 1.5rem; cursor: pointer; transition: all 0.2s; text-align: center; gap: 0.75rem;"
                     onmouseover="this.style.transform='scale(1.03)'; this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='scale(1)'; if(gameState.selectedMascot !== 'garfield') this.style.borderColor='var(--border)'">
                    <div style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;">
                        ${window.getGarfieldSVG('100px', '100px')}
                    </div>
                    <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary);">Garfield Cat</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">The playful, cute ginger cat companion</div>
                </div>
            </div>
        `
    });
};

window.selectMascot = function (mascotId) {
    gameState.selectedMascot = mascotId;

    // Update local storage immediate state
    const savedUser = JSON.parse(localStorage.getItem('saved_user') || '{}');
    savedUser.selectedMascot = mascotId;
    localStorage.setItem('saved_user', JSON.stringify(savedUser));

    window.closeModal();

    // Update static avatars in the DOM if they exist
    const headerAvatar = document.getElementById('desktop-coach-header-avatar');
    if (headerAvatar) {
        headerAvatar.src = window.getMascotAvatarSrc();
    }
    const welcomeAvatar = document.getElementById('desktop-coach-welcome-avatar');
    if (welcomeAvatar) {
        welcomeAvatar.src = window.getMascotAvatarSrc();
    }

    // Refresh dynamic coach floating FAB mascot container if it exists
    const mascotContainer = document.getElementById('polly-mascot-container');
    if (mascotContainer) {
        mascotContainer.innerHTML = window.getMascotSVG('100%', '100%');
    }

    // Clear left panel to force a full re-render and bypass early return
    const leftPanel = document.getElementById('left-panel');
    if (leftPanel) leftPanel.innerHTML = '';

    updateDesktopPanels(true); // Force refresh

    // Dynamic mobile view re-rendering
    if (window.innerWidth < 1024) {
        if (window.currentView === 'chat' && typeof window.renderMobileChat === 'function') {
            window.renderMobileChat();
        } else if ((window.currentView === 'home' || window.currentView === 'journey') && typeof window.renderChapters === 'function') {
            window.renderChapters();
        } else if (window.currentView === 'chapter' && typeof window.renderLevels === 'function') {
            window.renderLevels(window.currentChapterId || gameState.unlockedChapters[gameState.unlockedChapters.length - 1] || 'chapter1');
        } else if (window.currentView === 'leaderboard' && typeof window.renderLeaderboard === 'function') {
            window.renderLeaderboard();
        }
    }

    if (typeof syncUIStats === 'function') syncUIStats();
    saveProgress();

    setTimeout(() => {
        if (typeof window.showPollyBubble === 'function') {
            if (mascotId === 'garfield') {
                window.showPollyBubble("Hey! I'm Garfield, your new companion! Let's learn! 🐾");
            } else {
                window.showPollyBubble("Hey! I'm Polly, back to help you master AI! ✨");
            }
        }
    }, 500);
};
function updateMobileNav(activeKey) {
    if (activeKey !== 'settings') {
        window.closeModal();
    }
    // activeKey: 'home' | 'chat' | 'ranks' | 'settings'
    const map = { home: 'nav-home', chat: 'nav-chat', ranks: 'nav-ranks', settings: 'nav-settings' };
    Object.entries(map).forEach(([key, id]) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        if (key === activeKey) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// Expose banter refresh for fun
window.refreshBanter = renderBanter;

// Theme Toggle
function updateThemeButtons() {
    const theme = document.body.getAttribute('data-theme') || 'light';
    // Button should show what you will SWITCH TO (opposite of current)
    const nextIcon = theme === 'light' ? 'dark_mode' : 'light_mode';
    const nextText = theme === 'light' ? 'Dark Mode' : 'Light Mode';

    document.querySelectorAll('.theme-toggle-icon').forEach(el => {
        el.textContent = nextIcon;
    });
    document.querySelectorAll('.theme-toggle-text').forEach(el => {
        el.textContent = nextText;
    });

    // Update floating toggle if it exists (legacy support)
    const floatToggle = document.getElementById('floating-theme-toggle');
    if (floatToggle) floatToggle.innerHTML = nextIcon;
}

window.toggleTheme = function () {
    if (window.innerWidth < 1024) return; // Strictly no light theme in mobile mode
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('user_theme', newTheme);
    updateThemeButtons();
}

// Re-enforce theme on resize (e.g. rotating tablet into phone-width)
;(function () {
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            const savedTheme = localStorage.getItem('user_theme') || 'light';
            document.body.setAttribute('data-theme', savedTheme);
        }
        updateThemeButtons();
    });
})();

// --- Global Stat Tooltips (Portal Approach) ---
window.showStatTooltip = function (el, text) {
    // Remove any existing tooltip first
    window.hideStatTooltip();

    const rect = el.getBoundingClientRect();
    const tooltip = document.createElement('div');
    tooltip.id = 'global-stat-tooltip';
    tooltip.className = 'stat-tooltip-popup';
    tooltip.innerHTML = text;

    // Apply basic styles needed for placement
    // Rest of styles will be in CSS
    Object.assign(tooltip.style, {
        position: 'fixed',
        left: (rect.left + rect.width / 2) + 'px',
        bottom: (window.innerHeight - rect.top + 10) + 'px',
        transform: 'translateX(-50%)',
        zIndex: '100000',
        pointerEvents: 'none'
    });

    document.body.appendChild(tooltip);
};

window.hideStatTooltip = function () {
    const existing = document.getElementById('global-stat-tooltip');
    if (existing) existing.remove();
};

let currentSavePromise = Promise.resolve();

// Persistence
async function saveProgress(refreshLeaderboard = false) {
    if (!currentUser) return;

    // Use a sequential execution queue for database saves to completely prevent parallel race conditions
    const previousPromise = currentSavePromise;
    let resolveSave;
    currentSavePromise = new Promise((resolve) => { resolveSave = resolve; });

    try {
        await previousPromise;
    } catch (e) {
        console.error("Previous save failed, continuing:", e);
    }

    if (isOffline) {
        localStorage.setItem('guest_gamestate', JSON.stringify(gameState));
        updateDesktopPanels(refreshLeaderboard);
        updateRankDisplay();
        resolveSave();
        return;
    }

    // Persist session to local storage as well for fast restores/reloads
    // (Ensure we keep the username flag if it was there)
    const savedUserStr = localStorage.getItem('saved_user');
    if (savedUserStr) {
        try {
            const savedUser = JSON.parse(savedUserStr);
            localStorage.setItem('saved_user', JSON.stringify({ ...savedUser, ...gameState }));
        } catch (e) {
            localStorage.setItem('saved_user', JSON.stringify(gameState));
        }
    } else {
        localStorage.setItem('saved_user', JSON.stringify(gameState));
    }

    try {
        const response = await fetch(API_BASE + '/.netlify/functions/save-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: currentUser,
                xp: gameState.xp, // REQUIRED for backend leaderboard and DB updates
                streak: gameState.streak,
                unlockedChapters: gameState.unlockedChapters,
                unlockedLevels: gameState.unlockedLevels,
                completedQuestions: gameState.completedQuestions,
                levelStats: gameState.levelStats,
                userTitle: gameState.userTitle || 'AI EXPLORER',
                demoCompleted: gameState.demoCompleted,
                selectedIcon: gameState.selectedIcon
            })
        });

        const result = await response.json();
        if (result.success) {
            gameState.rank = result.rank || '-';
            if (typeof syncUIStats === 'function') syncUIStats();
            updateDesktopPanels(refreshLeaderboard); // Sync side panel stats
        }
    } catch (error) {
        console.error('Save failed:', error);
    } finally {
        resolveSave();
    }
}

function updateRankDisplay() {
    let text = '-';
    if (isOffline) {
        text = 'Guest';
    } else if (gameState.rank && gameState.rank !== '-') {
        text = `#${gameState.rank}`;
    } else if (['lijinns', 'admin.iimbx'].includes(currentUser)) {
        text = 'Admin';
    }

    // Update Header Rank (if it exists)
    const headerRank = document.getElementById('header-rank');
    if (headerRank) headerRank.textContent = text;

    // Update Banner Rank (Center panel)
    const bannerRank = document.getElementById('banner-rank-value');
    if (bannerRank) {
        bannerRank.textContent = text;
        // Dynamically update gold coloring for top ranks
        if (gameState.rank && gameState.rank <= 3) {
            bannerRank.classList.add('rank-gold-text');
        } else {
            bannerRank.classList.remove('rank-gold-text');
        }
    }
}

window.syncUIStats = function () {
    // 1. Update Header XP 
    const headerXp = document.getElementById('header-xp-value');
    if (headerXp) headerXp.textContent = gameState.xp || 0;

    // 2. Update Header Gems
    const headerGems = document.getElementById('header-gems-value');
    if (headerGems) headerGems.textContent = gameState.gems || 0;

    // 3. Update Rank Text globally
    updateRankDisplay();

    // 4. Update the side panel user titles
    const titleEls = document.querySelectorAll('#current-user-title');
    titleEls.forEach(el => el.textContent = gameState.userTitle || 'AI NOVICE');
}


async function loadProgress(username) {
    // Offline Logic
    if (isOffline) {
        const saved = localStorage.getItem('guest_gamestate');
        if (saved) {
            const data = JSON.parse(saved);
            gameState = {
                ...defaultState,
                ...data,
                rank: '-' // Guests don't have leaderboard rank
            };
            console.log("Loaded Guest State:", gameState);
        } else {
            gameState = { ...defaultState };
        }
        recalculateStats();
        return;
    }

    try {
        const response = await fetch(API_BASE + '/.netlify/functions/get-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        const data = await response.json();

        // Robust merge with default state
        // NOTE: xp and gems are intentionally NOT trusted from DB — they are always
        // re-derived from levelStats by recalculateStats() to prevent stale mismatches.
        gameState = {
            ...defaultState,
            ...data,
            xp: 0,   // Will be overwritten by recalculateStats()
            gems: 0, // Will be overwritten by recalculateStats()
            levelStats: data.levelStats || gameState.levelStats || {},
            // Ensure array integrity and prevent empty lists from locking everything
            unlockedChapters: (data.unlockedChapters && data.unlockedChapters.length > 0)
                ? data.unlockedChapters : (gameState.unlockedChapters || ['chapter1']),
            unlockedLevels: (data.unlockedLevels && data.unlockedLevels.length > 0)
                ? data.unlockedLevels : (gameState.unlockedLevels || ['c1-l1']),
            completedQuestions: data.completedQuestions || [],
            rank: data.rank || '-',
            userTitle: data.userTitle || 'AI NOVICE'
        };

        // Migration logic for old users (Unit -> Chapter/Level)
        if (data.unlockedUnits && (!data.unlockedLevels || data.unlockedLevels.length === 0)) {
            console.log("Migrating old user data...");
            data.unlockedUnits.forEach(unitId => {
                const match = unitId.match(/unit(\d+)/);
                if (match) {
                    const unitNum = parseInt(match[1]);
                    // Old structure had up to 10 units mapping to 5 levels? 
                    // Let's at least cap it to the available levels in Chapter 1
                    const ch1 = window.courseData.find(c => c.id === 'chapter1');
                    if (ch1 && unitNum <= ch1.levels.length) {
                        const levelId = `c1-l${unitNum}`;
                        if (!gameState.unlockedLevels.includes(levelId)) {
                            gameState.unlockedLevels.push(levelId);
                        }
                    }
                }
            });
        }
        validateProgressionIntegrity();
        recalculateStats();
    } catch (error) {
        console.error('Load failed:', error);
        gameState = { ...defaultState };
        validateProgressionIntegrity();
        recalculateStats();
    }

    // Ensure at least Chapter 1 and Level 1 are ALIVE
    if (!gameState.unlockedChapters.includes('chapter1')) gameState.unlockedChapters.push('chapter1');
    if (!gameState.unlockedLevels.includes('c1-l1')) gameState.unlockedLevels.push('c1-l1');

    // Validate one more time in case the fallback pushed state changes
    validateProgressionIntegrity();

    console.log("Final Game State Loaded:", {

        chapters: gameState.unlockedChapters,
        levels: gameState.unlockedLevels,
        xp: gameState.xp
    });

}

// Utilities

// Progression Integrity Validator
function validateProgressionIntegrity() {
    if (!window.courseData) return;

    // Standard baseline
    const validLevels = ['c1-l1'];
    const validChapters = ['chapter1'];

    let stopExploring = false;

    // Admins usually have full access, but for tracking/logic we still validate
    // If the user wants strict logic, we apply it.

    for (let i = 0; i < window.courseData.length; i++) {
        if (stopExploring) break;
        const chapter = window.courseData[i];

        let allLevelsInChapterPassed = true;
        for (let j = 0; j < chapter.levels.length; j++) {
            const level = chapter.levels[j];
            const stats = gameState.levelStats[level.id];

            if (stats && stats.passed) {
                // If passed, definitely unlocked and allowed
                if (!validLevels.includes(level.id)) validLevels.push(level.id);

                // Unlock NEXT level in this chapter
                if (j + 1 < chapter.levels.length) {
                    const nextId = chapter.levels[j + 1].id;
                    if (!validLevels.includes(nextId)) validLevels.push(nextId);
                }
            } else {
                // Not passed yet. 
                // Is it ALREADY unlocked? If it was unlocked by previous logic or server, 
                // and it's the sequential next, it's fine.
                // But we stop unlocking anything BEYOND the sequential "next".
                allLevelsInChapterPassed = false;
                stopExploring = true;
                break;
            }
        }

        if (allLevelsInChapterPassed) {
            // Chapter fully mastered => Unlock next chapter and its first level
            if (i + 1 < window.courseData.length) {
                const nextChapter = window.courseData[i + 1];
                if (!validChapters.includes(nextChapter.id)) validChapters.push(nextChapter.id);

                const firstLvlId = nextChapter.levels[0].id;
                if (!validLevels.includes(firstLvlId)) validLevels.push(firstLvlId);
            }
        }
    }

    // Merge unlocked lists strictly to sequence without destroying DB records
    validLevels.forEach(id => {
        if (!gameState.unlockedLevels.includes(id)) gameState.unlockedLevels.push(id);
    });
    validChapters.forEach(id => {
        if (!gameState.unlockedChapters.includes(id)) gameState.unlockedChapters.push(id);
    });

    // Safety fallback
    if (!gameState.unlockedChapters.includes('chapter1')) gameState.unlockedChapters.push('chapter1');
    if (!gameState.unlockedLevels.includes('c1-l1')) gameState.unlockedLevels.push('c1-l1');
}

// Stats Recalculation (Derived from Level Data)
function recalculateStats() {
    let totalXP = 0;
    let totalGems = 0;
    let passedCount = 0;
    let totalAvailableLevels = 0;

    if (!window.courseData) {
        // Ensure xp/gems are never left as null even if courseData isn't loaded yet
        gameState.xp = gameState.xp || 0;
        gameState.gems = gameState.gems || 0;
        return;
    }

    window.courseData.forEach(chapter => {
        // Multiplier based on chapter index
        const chapterIdx = window.courseData.indexOf(chapter);
        const multiplier = chapterIdx + 1; // Chapter 1 = 1x, etc.

        chapter.levels.forEach((level, levelIdx) => {
            totalAvailableLevels++;
            const stats = gameState.levelStats[level.id];
            
            // Check if level is explicitly passed in stats, OR if it's implicitly passed via unlockedLevels
            const idx = gameState.unlockedLevels.indexOf(level.id);
            const implicitlyPassed = idx !== -1 && idx < gameState.unlockedLevels.length - 1;
            
            if ((stats && stats.passed) || implicitlyPassed) {
                passedCount++;

                // 1. Calculate XP (Based on best score)
                const baseXP = (levelIdx + 1) * 10;
                const xpPerQ = baseXP * multiplier;
                // If stats exist use them, otherwise assume an 80% passing score
                const safeScore = stats && stats.score ? parseInt(stats.score) : Math.floor(level.questions.length * 0.8) || 8;
                totalXP += safeScore * xpPerQ;

                // 2. Calculate Gems (Fixed reward once per level)
                totalGems += baseXP * multiplier;
            }
        });
    });

    // Update state, guarding against NaN
    gameState.xp = Math.max(0, parseInt(totalXP) || 0);
    gameState.gems = Math.max(0, parseInt(totalGems) || 0);

    // Derived Title Logic
    const progressPercent = totalAvailableLevels > 0 ? (passedCount / totalAvailableLevels) * 100 : 0;
    let newTitle = "AI Novice";
    if (progressPercent >= 20) newTitle = "AI Explorer";
    if (progressPercent >= 40) newTitle = "AI Interpreter";
    if (progressPercent >= 60) newTitle = "AI Practitioner";
    if (progressPercent >= 80) newTitle = "AI Strategist";
    if (progressPercent >= 100) newTitle = "AI Expert";

    gameState.userTitle = newTitle;

    console.log("Stats Recalculated:", {
        totalXP,
        totalGems,
        passedCount,
        progressPercent,
        newTitle
    });

    if (typeof syncUIStats === 'function') syncUIStats();
}

function addXP(amount) {
    // Note: With the new system, we update levelStats instead of directly adding XP.
    // This function is kept for backward compatibility and visual effects.
    triggerXPAnimation(amount, false);
}

function removeXP(amount) {
    triggerXPAnimation(amount, true);
}

// (Function unlockNextIfNeeded removed as its logic is now correctly handled in renderLevelComplete)

// Render: Login
function renderLoginScreen() {
    window.currentView = 'login';
    currentUser = null;
    isOffline = false;
    document.body.classList.add('login-mode');
    updateDesktopPanels(); // Clear panels
    app.innerHTML = `
        <div class="welcome-wrapper" style="display: flex; height: 100%; width: 100%;">
            <!-- Left Side: Hero (Centered & Branded) -->
            <div class="desktop-visible login-hero" style="flex: 1; border-radius: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 4rem; border-right: 1px solid rgba(209, 246, 255, 0.1);">
                <div style="width: 100%; max-width: 350px; margin-bottom: 2rem;">
                    <img src="landing-logo.png" alt="IIMBx Logo" style="width: 100%; height: auto; object-fit: contain; background: white; padding: 0.1rem 0.2rem; border-radius: var(--radius-m); display: block;" />
                </div>

                <div style="font-size: 4rem; font-weight: 800; line-height: 1.1; margin-bottom: 0.5rem; color: white;">
                    Odyssey
                </div>
                <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-muted); margin-bottom: 2rem; letter-spacing: 1px;">
                    by IIMBx
                </div>

                <div style="font-size: 1.4rem; font-weight: 700; color: var(--accent); letter-spacing: 3px; text-transform: uppercase;">
                    Quest · Learn · Lead
                </div>
            </div>

            <!-- Right Side: Login Form -->
            <div class="login-form-container" style="flex: 1; padding: 3rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                <h2 style="margin-bottom: 0.5rem; font-size: 2rem;">Get Started</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">Create your profile to start learning.</p>
                
                <div style="width: 100%; max-width: 320px;">
                    <input 
                        type="text" 
                        id="username-input" 
                        class="input-field" 
                        placeholder="What's your name?" 
                        maxlength="15"
                        oninput="updateLoginButton()"
                        style="width: 100%; text-align: center; font-size: 1.2rem; padding: 1.2rem; margin-bottom: 0.5rem;">
                    
                    <div id="login-error" style="color: var(--error); margin-bottom: 1rem; min-height: 1.5rem; font-size: 0.9rem;"></div>

                    <button id="login-btn" class="btn-primary" onclick="handleAuthCheck()" style="width: 100%; font-size: 1.1rem; justify-content: center;">Continue</button>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; flex-direction: column; align-items: center;">
                        <button onclick="loginGuest()" style="background: none; border: none; color: var(--text-muted); font-size: 0.9rem; cursor: pointer; text-decoration: underline; opacity: 0.7; transition: opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7">
                            Or play as Guest  
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update button text based on input
window.updateLoginButton = function () {
    const input = document.getElementById('username-input');
    const btn = document.getElementById('login-btn');
    const username = input.value.trim();

    if (username.length >= 5) {
        btn.textContent = `Let's begin, ${username}`;
        btn.classList.add('pulse-cta');
    } else {
        btn.textContent = 'Continue';
        btn.classList.remove('pulse-cta');
    }
}

// Step 1: Check if user exists
async function handleAuthCheck() {
    const input = document.getElementById('username-input');
    const username = input.value.trim();
    const errorDiv = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    // Validation
    if (username.length < 5) {
        errorDiv.textContent = "Please enter at least 5 characters.";
        return;
    }
    if (!/^[a-zA-Z0-9_\-.]+$/.test(username)) {
        errorDiv.textContent = "Letters, numbers, underscore (_), hyphen (-) and dot (.) only, please.";
        return;
    }

    btn.textContent = 'Checking...';
    btn.disabled = true;

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/auth-check', {
            method: 'POST',
            body: JSON.stringify({ username })
        });
        const data = await res.json();

        if (data.error) {
            errorDiv.textContent = data.error === 'Check failed' ? 'Database connection failed. Please check setup.' : data.error;
        } else if (data.exists && data.hasPassword) {
            renderAuthModal('login', username);
        } else if (data.exists && !data.hasPassword) {
            // Old user migrating to password system
            renderAuthModal('register', username);
        } else {
            renderAuthModal('register', username);
        }

        btn.textContent = 'Continue';
        btn.disabled = false;
    } catch (e) {
        console.error(e);
        errorDiv.textContent = "Connection failed. Try again.";
        btn.textContent = 'Continue';
        btn.disabled = false;
    }
}

// Step 2: Render Auth Popup
function renderAuthModal(type, username) {
    const isLogin = type === 'login';
    const title = isLogin ? 'Welcome back!' : 'Create Account';
    const icon = isLogin ? 'lock' : 'eco';

    // Create Modal HTML
    const modalHtml = `
        <div class="modal-overlay" id="auth-overlay">
            <div class="auth-modal">
                <div class="auth-icon"><span class="material-symbols-rounded" style="font-size: 3rem;">${icon}</span></div>
                <h2 style="margin-bottom: 0.5rem; font-size: 1.8rem;">${title}</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                    ${isLogin ? `Enter password for <strong>${username}</strong>` : `Set a secure password for <strong>${username}</strong>`}
                </p>

                <input type="password" id="p1" class="password-input" placeholder="Password" autofocus>
                ${!isLogin ? `<input type="password" id="p2" class="password-input" placeholder="Confirm Password">` : ''}

                <div id="auth-msg" style="color: var(--error); margin-bottom: 1rem; font-size: 0.9rem; min-height: 1.2rem;"></div>

                <div style="display: flex; gap: 1rem;">
                    <button class="btn-secondary" onclick="closeAuthModal()" style="flex: 1;">Cancel</button>
                    <button class="btn-primary" onclick="submitAuth('${type}', '${username}')" style="flex: 1;">
                        ${isLogin ? 'Login' : 'Register'}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Append to body
    const div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);

    // Focus first input
    setTimeout(() => document.getElementById('p1').focus(), 100);
}

function closeAuthModal() {
    const el = document.getElementById('auth-overlay');
    if (el) el.remove();
}

function hideStatTooltip() {
    const tt = document.getElementById('stat-tooltip');
    if (tt) tt.remove();
}


// --- Toast System ---
window.showToast = function (message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: 'check_circle',
        error: 'error',
        info: 'info'
    };

    toast.innerHTML = `
        <span class="material-symbols-rounded toast-icon">${icons[type] || 'notifications'}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto remove after delay
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 400);
    }, 1500);
};


// Step 3: Handle Submit
async function submitAuth(type, username) {
    const p1 = document.getElementById('p1').value;
    const p2 = document.getElementById('p2') ? document.getElementById('p2').value : null;
    const msg = document.getElementById('auth-msg');

    // Validation
    if (!p1) {
        msg.textContent = "Password cannot be empty.";
        return;
    }
    if (type === 'register') {
        if (p1.length < 6) {
            msg.textContent = "Password must be at least 6 characters.";
            return;
        }
        if (p1 !== p2) {
            msg.textContent = "Passwords do not match!";
            return;
        }
    }

    const endpoint = type === 'login' ? 'auth-login' : 'auth-register';

    try {
        const res = await fetch(`${API_BASE}/.netlify/functions/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify({ username, password: p1 })
        });
        const data = await res.json();

        if (data.success && data.user) {
            // Success!
            closeAuthModal();
            const isNewRegistration = (type === 'register');
            loginSuccess(data.user, false, isNewRegistration);
        } else {
            msg.textContent = data.error || "Authentication failed";
        }
    } catch (e) {
        msg.textContent = "System error. Please try again.";
        console.error(e);
    }
}

// Temporary Admin Control Bypass

// Offline / Guest Mode

window.loginGuest = function (isRestore = false) {
    isOffline = true;
    currentUser = 'Guest';

    // Load from local storage
    loadProgress('Guest');

    // Check if new guest
    if (gameState.unlockedChapters.length === 0) {
        gameState.unlockedChapters = ['chapter1'];
        gameState.unlockedLevels = ['c1-l1'];
    }

    // Streak/Date handled via unified lastPlayedDate in gameState
    // (Calculation happens when they actually play)

    // Do NOT persist guest sessions — reload should always go to login
    localStorage.removeItem('saved_user');
    localStorage.removeItem('login_timestamp');

    if (isRestore) {
        document.body.classList.remove('login-mode');
        updateDesktopPanels();
        renderChapters();
        return;
    }

    // Success Animation
    app.innerHTML = `
        <div class="animate-fade-in" style="padding: 2.5rem; text-align: center; display: flex; flex-direction: column; height: 100%; justify-content: center; gap: 1.5rem;">
            <div class="login-hero-icon" style="font-size: 5rem; animation: pop 0.6s ease-in-out; justify-content: center;">
                <span class="material-symbols-rounded" style="font-size: 5rem; color: var(--success);">eco</span>
            </div>
            <div class="login-hero-polly" style="width: 120px; height: 120px; margin: 0 auto; filter: drop-shadow(0 10px 25px rgba(0,0,0,0.3)); animation: mascot-hover 3s infinite ease-in-out; justify-content: center; align-items: center;">
                ${window.getMascotSVG('100%', '100%', 'happy')}
            </div>
            <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Welcome, Traveler.</h2>
            <p style="color: var(--text-muted); font-size: 1.2rem; line-height: 1.6;">
                Guest mode activated.<br>Your progress is safe on this device.
            </p>
        </div>
    `;

    setTimeout(() => {
        document.body.classList.remove('login-mode');
        updateDesktopPanels();
        renderChapters();

        // Auto-show demo ONLY on first guest session on this device (Desktop only)
        if (!localStorage.getItem('guest_demo_shown')) {
            localStorage.setItem('guest_demo_shown', 'true');
            if (window.innerWidth >= 1024) {
                setTimeout(showIntroDemo, 1000);
            }
        }
    }, 1800);
}

// Admin Login handled via regular credentials since migration to DB



function loginSuccess(user, isRestore = false, isNewRegistration = false) {
    currentUser = user.username;
    isOffline = false; // Reset offline state on real login

    // Update State
    // Intelligent Chapter Derivation (Backend lacks persistent chapter tracking)
    let chapters = user.unlockedChapters || [];
    if (!chapters || chapters.length === 0) chapters = ['chapter1'];

    // Chapter derivation is now handled strictly by validateProgressionIntegrity()
    // which runs after state is built — no guessing from level prefixes

    gameState = {
        ...defaultState,
        ...user,
        xp: 0,   // Will be overwritten by recalculateStats()
        gems: 0, // Will be overwritten by recalculateStats()
        streak: user.streak || 1,
        lastPlayedDate: user.lastPlayedDate || null,
        levelStats: user.levelStats || {},
        // Ensure arrays
        unlockedLevels: user.unlockedLevels || ['c1-l1'],
        unlockedChapters: chapters,
        completedQuestions: user.completedQuestions || [],
        demoCompleted: user.demoCompleted || false
    };

    // Derive XP/Gems from levelStats (same pattern as loadProgress)
    recalculateStats();

    // Enforce strict sequential progression — corrects any inconsistent unlock state
    validateProgressionIntegrity();

    localStorage.setItem('saved_user', JSON.stringify(user));
    localStorage.setItem('login_timestamp', new Date().getTime().toString());

    if (isRestore) {
        // Session restore = returning user, never auto-show demo
        document.body.classList.remove('login-mode');
        updateDesktopPanels();
        renderChapters();

        // Perform full background progression sync with database to ensure zero discrepancies between devices
        loadProgress(currentUser).then(() => {
            console.log("Restored session synchronized with Neon database successfully.");
            updateDesktopPanels(true);
            if (window.currentView === 'home' || window.currentView === 'journey') {
                renderChapters();
            }
        }).catch(err => {
            console.error("Failed to background sync restored session:", err);
        });
        return;
    }

    // Show confirmation message
    const isAdmin = ['lijinns', 'admin.iimbx'].includes(currentUser);

    app.innerHTML = isAdmin ? `
        <div class="animate-fade-in" style="padding: 2.5rem; text-align: center; display: flex; flex-direction: column; height: 100%; justify-content: center; gap: 1.5rem;">
            <div style="font-size: 5rem; animation: pop 0.6s ease-in-out;"><span class="material-symbols-rounded" style="font-size: 5rem; color: var(--error);">admin_panel_settings</span></div>
            <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Admin Mode</h2>
            <p style="color: var(--text-muted); font-size: 1.2rem; line-height: 1.6;">
                Admin environment activated.
            </p>
        </div>
    ` : `
        <div class="animate-fade-in" style="padding: 2.5rem; text-align: center; display: flex; flex-direction: column; height: 100%; justify-content: center; gap: 1.5rem;">
            <div class="login-hero-icon" style="font-size: 5rem; animation: pop 0.6s ease-in-out; justify-content: center;">🌱</div>
            <div class="login-hero-polly" style="width: 120px; height: 120px; margin: 0 auto; filter: drop-shadow(0 10px 25px rgba(0,0,0,0.3)); animation: mascot-hover 3s infinite ease-in-out; justify-content: center; align-items: center;">
                ${window.getMascotSVG('100%', '100%', 'happy')}
            </div>
            <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Welcome, ${currentUser}.</h2>
            <p style="color: var(--text-muted); font-size: 1.2rem; line-height: 1.6;">
                Let's unlock the mind of machines.
            </p>
        </div>
    `;

    // Transition to home after brief moment
    setTimeout(() => {
        document.body.classList.remove('login-mode');
        updateDesktopPanels(); // Ensure panels show up
        renderChapters();

        // Auto-show demo ONLY on first registration, never on returning login (Desktop only)
        if (isNewRegistration && window.innerWidth >= 1024) {
            setTimeout(showIntroDemo, 1000);
        }
    }, 1800);
}

// Render: Header
function renderHeader(backAction = null, title = "Odyssey by IIMBx") {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    return `
        <header style="padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; background: transparent; z-index: 100;">
            <div style="display: flex; align-items: center; gap: 0.75rem; min-width: 0; flex: 1;">
                ${backAction ? `<button onclick="${backAction}" style="font-size: 1.4rem; color: var(--text-primary); background: var(--bg-overlay); border: 1px solid var(--border); cursor: pointer; border-radius: 50px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.2s;" onmouseover="this.style.background='var(--border)'" onmouseout="this.style.background='var(--bg-overlay)'"><span class="material-symbols-rounded" style="font-size:1.2rem">arrow_back</span></button>` : ''}
                <div class="${!backAction ? 'mobile-hide-title' : ''}" style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0;">
                <div id="header-xp" class="xp-container" style="display: flex; align-items: center; gap: 0.4rem; background: var(--bg-overlay); padding: 0.5rem 1rem; border-radius: 50px; transition: all 0.3s ease; border: 1px solid var(--border);">
                    <span class="material-symbols-rounded" style="color: var(--success); font-size: 1.2rem;">bolt</span>
                    <span id="header-xp-value" style="font-weight: 700; color: var(--text-primary);">${gameState.xp || 0}</span>
                </div>
                <div id="header-gems" class="xp-container" style="display: flex; align-items: center; gap: 0.4rem; background: var(--bg-overlay); padding: 0.5rem 1rem; border-radius: 50px; transition: all 0.3s ease; border: 1px solid var(--border);">
                    <span class="material-symbols-rounded" style="color: var(--accent); font-size: 1.2rem;">diamond</span>
                    <span id="header-gems-value" style="font-weight: 700; color: var(--text-primary);">${gameState.gems || 0}</span>
                </div>
                <!-- Mini Rank Tag in Header -->
                <div id="header-rank-container" style="background: var(--bg-overlay); padding: 0.53rem 0.8rem; border-radius: 50px; border: 1px solid var(--border); display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-rounded" style="color: var(--accent); font-size: 1rem;">trophy</span>
                    <span id="header-rank" style="font-weight: 800; color: var(--text-primary); font-size: 0.85rem;">#${gameState.rank}</span>
                </div>
                <button onclick="toggleTheme()" title="Toggle theme"
                    style="width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center; background: var(--bg-overlay); border: 1px solid var(--border); border-radius: 50%; cursor: pointer; transition: all 0.2s; flex-shrink: 0;"
                    onmouseover="this.style.background='var(--border)'"
                    onmouseout="this.style.background='var(--bg-overlay)'">
                    <span id="header-theme-icon" class="material-symbols-rounded theme-toggle-icon" style="font-size: 1.2rem; color: var(--text-primary);">${isLight ? 'dark_mode' : 'light_mode'}</span>
                </button>
            </div>
        </header>
    `;
}


// Render: Unified Dashboard Bar (The requested horizontal span)
function renderHomeBanner() {
    const currentChapterId = gameState.unlockedChapters[gameState.unlockedChapters.length - 1] || 'chapter1';

    // Calculate total progress
    let totalLevels = 0;
    let completedLevels = 0;
    window.courseData.forEach(ch => {
        ch.levels.forEach(l => {
            totalLevels++;
            const idx = gameState.unlockedLevels.indexOf(l.id);
            const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
            if (isDone) completedLevels++;
        });
    });

    const progressPct = Math.round((completedLevels / totalLevels) * 100);

    // Determines Rank text color
    const rankColorClass = gameState.rank <= 3 ? 'rank-gold-text' : 'text-main';

    return `
        <!-- Unified Dashboard Stats Bar -->
        <div id="dashboard-stats-banner" class="dashboard-stats-banner animate-scale-in">

            <!-- Stats Row -->
            <div class="stats-row">

                <!-- XP -->
                <div class="stat-item" onmouseenter="showStatTooltip(this, 'XP (Experience Points) - earned by completing questions.<br>Higher XP = Deeper Mastery')" onmouseleave="hideStatTooltip()">
                    <div class="stat-icon-bg" style="background: var(--bg-overlay);">
                        <span class="material-symbols-rounded" style="color: var(--success); font-size: 1.2rem;">bolt</span>
                    </div>
                    <div>
                        <div class="stat-label">XP</div>
                        <div class="stat-value">${gameState.xp || 0}</div>
                    </div>
                </div>

                <!-- Gems -->
                <div class="stat-item" onmouseenter="showStatTooltip(this, 'Gems - bonus rewards for completing levels and chapters.')" onmouseleave="hideStatTooltip()">
                    <div class="stat-icon-bg" style="background: var(--bg-overlay);">
                        <span class="material-symbols-rounded" style="color: var(--accent); font-size: 1.2rem;">diamond</span>
                    </div>
                    <div>
                        <div class="stat-label">Gems</div>
                        <div class="stat-value">${gameState.gems || 0}</div>
                    </div>
                </div>

                <!-- Rank -->
                <div class="stat-item" onmouseenter="showStatTooltip(this, 'Rank - your position on the global leaderboard based on total XP.<br>Click to view rankings.')" onmouseleave="hideStatTooltip()" onclick="renderLeaderboard()" style="cursor: pointer;">
                    <div class="stat-icon-bg" style="background: var(--bg-overlay);">
                        <span class="material-symbols-rounded" style="color: var(--accent); font-size: 1.2rem;">trophy</span>
                    </div>
                    <div>
                        <div class="stat-label">Rank</div>
                        <div id="banner-rank-value" class="stat-value ${rankColorClass}">#${gameState.rank}</div>
                    </div>
                </div>

                <!-- Streak -->
                <div class="stat-item" onmouseenter="showStatTooltip(this, 'Streak - number of consecutive days you have practised.<br>Keep it up every day to grow it!')" onmouseleave="hideStatTooltip()">
                    <div class="stat-icon-bg" style="background: var(--bg-overlay);">
                        <span class="material-symbols-rounded" style="color: var(--streak); font-size: 1.2rem;">local_fire_department</span>
                    </div>
                    <div>
                        <div class="stat-label">Streak</div>
                        <div class="stat-value">${gameState.streak}</div>
                    </div>
                </div>

            </div>

            <!-- Progress Bar (full width, below stats) -->
            <div class="stats-progress">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
                    <span class="stats-label-progress">Overall Progress</span>
                    <span class="stats-value-progress">${progressPct}%</span>
                </div>
                <div class="progress-bar-container" style="height: 6px;">
                    <div class="progress-bar-fill" style="width: ${progressPct}%; background: var(--primary);"></div>
                </div>
            </div>

        </div>
    `;
}

// Render: Mobile-only stats panel (shown above chapter cards on mobile)
function renderMobileStatsPanel() {
    let totalLevels = 0;
    let completedLevels = 0;
    window.courseData.forEach(ch => {
        ch.levels.forEach(l => {
            totalLevels++;
            const idx = gameState.unlockedLevels.indexOf(l.id);
            const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
            if (isDone) completedLevels++;
        });
    });
    const progressPct = totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0;
    const rankText = isOffline ? 'Guest' : (gameState.rank && gameState.rank !== '-' ? `#${gameState.rank}` : '-');
    const isTopRank = gameState.rank && gameState.rank <= 3;

    return `
    <div class="mobile-stats-panel" aria-label="Your stats">
        <!-- Stat chips row -->
        <div class="msp-chips">
            <div class="msp-chip">
                <span class="material-symbols-rounded msp-chip-icon" style="color:var(--success);">bolt</span>
                <div class="msp-chip-body">
                    <span class="msp-chip-label">XP</span>
                    <span class="msp-chip-value" id="msp-xp-value">${gameState.xp || 0}</span>
                </div>
            </div>
            <div class="msp-chip">
                <span class="material-symbols-rounded msp-chip-icon" style="color:var(--accent);">diamond</span>
                <div class="msp-chip-body">
                    <span class="msp-chip-label">Gems</span>
                    <span class="msp-chip-value" id="msp-gems-value">${gameState.gems || 0}</span>
                </div>
            </div>
            <div class="msp-chip" onclick="renderLeaderboard()" style="cursor:pointer;">
                <span class="material-symbols-rounded msp-chip-icon" style="color:${isTopRank ? '#FFD700' : 'var(--accent)'};">emoji_events</span>
                <div class="msp-chip-body">
                    <span class="msp-chip-label">Rank</span>
                    <span class="msp-chip-value ${isTopRank ? 'rank-gold-text' : ''}" id="msp-rank-value">${rankText}</span>
                </div>
            </div>
            <div class="msp-chip">
                <span class="material-symbols-rounded msp-chip-icon" style="color:var(--streak);">local_fire_department</span>
                <div class="msp-chip-body">
                    <span class="msp-chip-label">Streak</span>
                    <span class="msp-chip-value">${gameState.streak || 1}</span>
                </div>
            </div>
        </div>
        <!-- Progress bar -->
        <div class="msp-progress">
            <div class="msp-progress-header">
                <span class="msp-progress-label">Overall Progress</span>
                <span class="msp-progress-pct">${progressPct}%</span>
            </div>
            <div class="msp-progress-track">
                <div class="msp-progress-fill" style="width:${progressPct}%;"></div>
            </div>
            <div class="msp-progress-sub">${completedLevels} of ${totalLevels} levels mastered</div>
        </div>
    </div>
    `;
}

// ─────────────────────────────────────────────
// MOBILE AI COACH CHAT INTERFACE
// ─────────────────────────────────────────────
window.renderMobileChat = function () {
    window.currentView = 'chat';
    updateMobileNav('chat');

    // Gather context
    const userName = (isOffline ? 'Learner' : currentUser.split('@')[0]);
    const xp = gameState.xp || 0;
    const streak = gameState.streak || 1;
    const gems = gameState.gems || 0;

    // Find active level directly based on unlocked levels
    const activeLevelId = gameState.unlockedLevels.length > 0 
        ? gameState.unlockedLevels[gameState.unlockedLevels.length - 1] 
        : 'c1-l1';

    const activeChapter = window.courseData.find(c => c.levels.some(l => l.id === activeLevelId));
    const activeLevel = activeChapter?.levels.find(l => l.id === activeLevelId);
    const chapterIdx = activeChapter ? window.courseData.indexOf(activeChapter) : 0;
    const hue = 210 + chapterIdx * 40;

    // Progress
    let totalLvls = 0, doneLvls = 0;
    window.courseData.forEach(c => c.levels.forEach(l => {
        totalLvls++;
        const idx = gameState.unlockedLevels.indexOf(l.id);
        if (idx !== -1 && idx < gameState.unlockedLevels.length - 1) {
            doneLvls++;
        } else if (gameState.levelStats[l.id]?.passed) {
            doneLvls++;
        }
    }));
    const pct = Math.round((doneLvls / totalLvls) * 100);

    const greetings = ['Hey', 'Hello', 'Hi', 'Welcome back,'];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const encouragements = [
        "You're on a roll! Keep pushing 🔥",
        "Every level gets you closer to mastery 🎯",
        "Consistency is key - you've got this 💪",
        "Let's keep the momentum going! 🚀"
    ];
    const enc = encouragements[Math.floor(Math.random() * encouragements.length)];

    const app = document.getElementById('app');
    app.innerHTML = `
        <div id="chat-screen" style="
            display: flex; flex-direction: column;
            height: 100dvh; background: #080c18;
            font-family: 'Inter', sans-serif;
            padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px));
            box-sizing: border-box;
        ">
            <!-- Header -->
            <div style="padding: 1rem 1.25rem 0.75rem; display: flex; align-items: center; gap: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, hsl(${hue},80%,55%), hsl(${hue + 30},80%,40%)); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px hsla(${hue},80%,55%,0.4);">
                    ${window.getMascotSVG('28px', '28px')}
                </div>
                <div>
                    <div style="font-weight: 800; color: #fff; font-size: 0.95rem;">Odyssey Coach</div>
                    <div style="font-size: 0.72rem; color: #4ade80; display: flex; align-items: center; gap: 0.3rem; font-weight: 600;">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background: #4ade80; display: inline-block;"></span> Online
                    </div>
                </div>
            </div>

            <!-- Chat messages -->
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 1rem 1rem 1.5rem; display: flex; flex-direction: column; gap: 1rem; scroll-behavior: smooth;">

                <!-- AI Greeting -->
                <div class="chat-bubble-ai" style="animation-delay: 0s;">
                    <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem;">${greeting}, ${userName}! 👋</div>
                    <div style="color: rgba(255,255,255,0.75); font-size: 0.92rem; line-height: 1.5;">${enc}</div>
                </div>

                <!-- Stats Bubble -->
                <div class="chat-bubble-ai" style="animation-delay: 0.15s;">
                    <div style="font-size: 0.78rem; color: rgba(255,255,255,0.5); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.6rem;">Your Progress Today</div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.75rem;">
                        <div style="text-align: center; background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.2); border-radius: 12px; padding: 0.6rem 0.3rem;">
                            <div style="font-size: 1.2rem; font-weight: 900; color: #4ade80; font-family: 'Outfit';">${xp}</div>
                            <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">⚡ XP</div>
                        </div>
                        <div style="text-align: center; background: rgba(251,146,60,0.1); border: 1px solid rgba(251,146,60,0.2); border-radius: 12px; padding: 0.6rem 0.3rem;">
                            <div style="font-size: 1.2rem; font-weight: 900; color: #fb923c; font-family: 'Outfit';">${streak}</div>
                            <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">🔥 Streak</div>
                        </div>
                        <div style="text-align: center; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.2); border-radius: 12px; padding: 0.6rem 0.3rem;">
                            <div style="font-size: 1.2rem; font-weight: 900; color: #a78bfa; font-family: 'Outfit';">${gems}</div>
                            <div style="font-size: 0.62rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">💎 Gems</div>
                        </div>
                    </div>
                    <!-- Mini progress bar -->
                    <div style="font-size: 0.75rem; color: rgba(255,255,255,0.45); margin-bottom: 0.35rem;">${doneLvls} of ${totalLvls} levels complete</div>
                    <div style="height: 5px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden;">
                        <div style="height: 100%; width: ${pct}%; background: linear-gradient(90deg, hsl(${hue},80%,55%), hsl(${hue + 30},80%,65%)); border-radius: 10px; transition: width 0.8s ease;"></div>
                    </div>
                </div>

                ${activeLevel ? `
                <!-- Next Level Card -->
                <div class="chat-bubble-ai" style="animation-delay: 0.3s;">
                    <div style="font-size: 0.92rem; color: rgba(255,255,255,0.7); margin-bottom: 0.75rem; line-height: 1.4;">
                        Ready to continue? Your next level is waiting 👇
                    </div>
                    <div onclick="renderQuestionList('${activeChapter.id}', '${activeLevel.id}')"
                        style="background: linear-gradient(135deg, hsl(${hue},75%,42%), hsl(${hue + 25},80%,32%)); border-radius: 16px; padding: 1rem 1.1rem; cursor: pointer; position: relative; overflow: hidden; transition: transform 0.15s;"
                        onmousedown="this.style.transform='scale(0.97)'" onmouseup="this.style.transform='scale(1)'"
                        ontouchstart="this.style.transform='scale(0.97)'" ontouchend="this.style.transform='scale(1)'">
                        <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); margin-bottom: 0.3rem;">Next Level</div>
                        <div style="font-size: 1.15rem; font-weight: 900; color: #fff; margin-bottom: 0.15rem;">${activeLevel.title}</div>
                        <div style="font-size: 0.82rem; color: rgba(255,255,255,0.65);">${activeChapter.title.split(': ')[1] || activeChapter.title}</div>
                        <div style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;">
                            <span class="material-symbols-rounded" style="color: #fff; font-size: 1.4rem; font-variation-settings: 'FILL' 1; margin-left: 2px;">play_arrow</span>
                        </div>
                    </div>
                </div>

                <!-- Quick action buttons -->
                <div class="chat-bubble-ai" style="animation-delay: 0.45s;">
                    <div style="font-size: 0.88rem; color: rgba(255,255,255,0.65); margin-bottom: 0.6rem;">Or explore other options:</div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button onclick="renderChapters()" style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); border-radius: 20px; padding: 0.45rem 0.9rem; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: background 0.15s; -webkit-tap-highlight-color: transparent;" onmousedown="this.style.background='rgba(255,255,255,0.14)'" onmouseup="this.style.background='rgba(255,255,255,0.07)'">🗺️ View Journey</button>
                        <button onclick="renderLeaderboard()" style="background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); border-radius: 20px; padding: 0.45rem 0.9rem; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: background 0.15s; -webkit-tap-highlight-color: transparent;" onmousedown="this.style.background='rgba(255,255,255,0.14)'" onmouseup="this.style.background='rgba(255,255,255,0.07)'">🏆 Leaderboard</button>
                    </div>
                </div>
                ` : `
                <div class="chat-bubble-ai" style="animation-delay: 0.3s;">
                    <div style="font-size: 0.95rem; color: rgba(255,255,255,0.75); line-height: 1.5;">
                        🎉 Amazing - you've completed all available levels! Check back soon for new content.
                    </div>
                </div>
                `}
            </div>

            <!-- Chat input bar (decorative + functional) -->
            <div style="position: fixed; bottom: calc(72px + env(safe-area-inset-bottom, 0px)); left: 0; right: 0; padding: 0.75rem 1rem; background: rgba(8,12,24,0.95); backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.07);">
                <div style="display: flex; align-items: center; gap: 0.6rem; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; padding: 0.65rem 1rem;">
                    <input id="chat-user-input" placeholder="Ask your coach anything..." style="flex: 1; background: none; border: none; outline: none; color: #fff; font-size: 0.9rem; font-family: 'Inter', sans-serif;" />
                    <button onclick="sendChatMessage()" style="background: linear-gradient(135deg, hsl(${hue},80%,55%), hsl(${hue + 20},80%,45%)); border: none; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px hsla(${hue},80%,50%,0.4);">
                        <span class="material-symbols-rounded" style="color: #fff; font-size: 1.1rem; font-variation-settings: 'FILL' 1;">send</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Scroll to bottom
    setTimeout(() => {
        const msgs = document.getElementById('chat-messages');
        if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 100);
};

// Handle chat message sends (simple echo + coach response)
window.sendChatMessage = function () {
    const input = document.getElementById('chat-user-input');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    input.value = '';

    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;

    // User bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble-user';
    userBubble.textContent = text;
    msgs.appendChild(userBubble);

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-bubble-ai';
    typing.innerHTML = `<div class="chat-typing"><span></span><span></span><span></span></div>`;
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    // Simple contextual reply
    setTimeout(() => {
        const lower = text.toLowerCase();
        let reply = "I'm here to help! Tap the level card above to start learning, or navigate the Journey Map from the Home tab.";
        if (lower.includes('xp') || lower.includes('score')) reply = `You currently have ${gameState.xp || 0} XP. Keep answering questions correctly to earn more! ⚡`;
        else if (lower.includes('streak')) reply = `Your current streak is ${gameState.streak || 1} day${(gameState.streak || 1) > 1 ? 's' : ''}. Log in daily to keep it going! 🔥`;
        else if (lower.includes('gem')) reply = `You have ${gameState.gems || 0} gems 💎. Earn them by completing levels with high accuracy.`;
        else if (lower.includes('help') || lower.includes('what') || lower.includes('how')) reply = "Use the Journey Map (Home tab) to see all your levels. Tap a level node to start. Complete questions to unlock the next level! 🗺️";
        else if (lower.includes('next') || lower.includes('start')) reply = "Tap the level card just above to jump straight in! I'll be cheering you on 🚀";

        typing.innerHTML = reply;
        msgs.scrollTop = msgs.scrollHeight;
    }, 900);
};

// Render: Chapters Selection (HOME)
window.renderChapters = function () {
    document.body.classList.remove('game-active');
    window.currentView = 'home';
    updateDesktopPanels();
    updateMobileNav('home');
    let html = renderHeader(null, "Odyssey by IIMBx");

    html += `
        <div class="main-scroll-area" style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem;">
            ${renderHomeBanner()}
            <div class="mobile-stats-panel-wrapper">${renderMobileStatsPanel()}</div>
            <div style="font-weight: 800; color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: -0.5rem;">Explore Chapters</div>
    `;

    // Animation class only for first render
    const animClass = 'animate-scale-in';

    // --- Determine "active chapter" ---
    // It's the last unlocked chapter that is not 100% complete.
    // If all unlocked chapters are done, fall back to the last unlocked one.
    const unlockedChapters = window.courseData.filter(c => gameState.unlockedChapters.includes(c.id));
    let activeChapterId = unlockedChapters.length > 0 ? unlockedChapters[0].id : null;
    for (const c of unlockedChapters) {
        const allDone = c.levels.every(l => {
            const idx = gameState.unlockedLevels.indexOf(l.id);
            return (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
        });
        if (!allDone) {
            activeChapterId = c.id; // keep updating — it'll end up being the last in-progress chapter
        }
    }

    window.courseData.forEach((chapter, index) => {
        const isUnlocked = gameState.unlockedChapters.includes(chapter.id);
        const isActive = chapter.id === activeChapterId;
        const levels = chapter.levels;
        // Calc Chapter Progress
        const totalLevels = levels.length;
        const levelsPassed = levels.filter(l => {
            const idx = gameState.unlockedLevels.indexOf(l.id);
            return (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
        }).length;
        const progressPercent = Math.round((levelsPassed / totalLevels) * 100);

        const statusIcon = isUnlocked ? (progressPercent === 100 ? 'check_circle' : 'lock_open') : 'lock';

        // All chapters now use the primary blue/indigo theme
        const variantClass = `card-variant-1 `;

        // Determine action text and target action (used both for card onclick and optional button)
        let actionText = "Start Chapter";
        let actionIcon = "play_arrow";
        let targetAction = `renderQuestionList('${chapter.id}', '${chapter.levels[0].id}')`;

        if (progressPercent === 100) {
            actionText = "Replay Chapter";
            actionIcon = "replay";
            targetAction = `renderLevels('${chapter.id}')`;
        } else if (progressPercent > 0) {
            actionText = "Resume Chapter";
            actionIcon = "play_circle";
            const pendingLevel = chapter.levels.find(l => {
                const idx = gameState.unlockedLevels.indexOf(l.id);
                const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
                return !isDone;
            });
            if (pendingLevel) {
                targetAction = `renderQuestionList('${chapter.id}', '${pendingLevel.id}')`;
            }
        }

        html += `
        <div ${isActive ? 'id="active-chapter-card"' : ''} class="chapter-card ${animClass} ${variantClass} ${!isUnlocked ? 'locked' : ''}"
            onclick="${isUnlocked ? `renderLevels('${chapter.id}')` : ''}"
            style="border-radius: var(--radius-m); padding: 2rem; position: relative; cursor: ${isUnlocked ? 'pointer' : 'default'}; transition: all 0.3s ease; overflow: hidden;">
                
                <div class="${!isUnlocked ? 'locked-content-blur' : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 60px; height: 60px; background: var(--bg-overlay); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: ${isUnlocked ? 'var(--accent)' : 'var(--text-muted)'};">
                                <span class="material-symbols-rounded" style="font-size: inherit;">${CHAPTER_ICONS[index] || 'menu_book'}</span>
                            </div>
                            <div>
                                <span class="chapter-label" style="color: var(--accent);">Chapter ${index + 1}</span>
                                <h3 style="margin: 0; font-size: 1.6rem; letter-spacing: -0.5px;">${chapter.title.split(': ')[1] || chapter.title}</h3>
                            </div>
                        </div>
                        <div style="font-size: 1.8rem; color: ${isUnlocked ? 'var(--success)' : 'var(--text-muted)'}; opacity: 0.8;"><span class="material-symbols-rounded" style="font-size: inherit;">${statusIcon}</span></div>
                    </div>
                    
                    <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem; ${!isUnlocked ? 'opacity: 0.5' : ''}">${chapter.description}</p>
                    
                    ${isUnlocked ? `
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; ${isActive ? 'margin-bottom: 1.5rem;' : ''}">
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem;">
                            <span style="color: var(--text-muted); font-weight: 600;">Course Mastery</span>
                            <span style="font-weight: 900; color: ${progressPercent === 100 ? 'var(--success)' : 'var(--text-main)'}; font-size: 1.1rem;">${progressPercent}%</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-bar-fill ${isUnlocked && progressPercent > 0 ? 'progress-glow' : ''}" style="width: ${progressPercent}%; border-radius: 10px;"></div>
                        </div>
                        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; font-weight: 600;">${levelsPassed} of ${totalLevels} Levels completed</div>
                    </div>
                    ${isActive ? `
                    <!-- Action Button — shown only on the active chapter -->
                    <button onclick="event.stopPropagation(); ${targetAction}" class="btn-primary" style="margin-top: 1rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border: none; color: #FFFFFF; padding: 0.75rem 1.5rem; border-radius: var(--radius-pill); font-weight: 700; box-sizing: border-box; cursor: pointer;">
                        <span class="material-symbols-rounded" style="font-size: 1.2rem;">${actionIcon}</span>
                        ${actionText}
                    </button>
                    ` : ''}
                    ` : ''}
                </div>

                ${!isUnlocked ? `
                <div style="position: absolute; inset: 0; z-index: 2; display: flex; align-items: center; justify-content: center;">
                    <div style="background: var(--bg-card); padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); border: 1px solid var(--border); box-shadow: var(--shadow-premium); display: flex; align-items: center; gap: 0.75rem;">
                        <span class="material-symbols-rounded" style="color: var(--text-muted); font-size: 1.2rem;">lock</span>
                        <span style="font-size: 0.9rem; color: var(--text-main); font-weight: 600;">Complete Previous Chapter</span>
                    </div>
                </div>` : ''}
            </div>
        `;
    });

    html += '</div>'; // Close main-scroll-area

    // --- Home FAB ---
    if (activeChapterId) {
        const activeChapter = window.courseData.find(c => c.id === activeChapterId);
        const chapterNum = window.courseData.findIndex(c => c.id === activeChapterId) + 1;
        if (activeChapter) {
            const fakeLevelsPassed = activeChapter.levels.filter(l => {
                const idx = gameState.unlockedLevels.indexOf(l.id);
                return (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
            }).length;
            const fakePct = Math.round((fakeLevelsPassed / activeChapter.levels.length) * 100);

            let fabText, fabIcon, fabAction;
            if (fakePct === 0) {
                fabText = `Begin Chapter ${chapterNum}`;
                fabIcon = 'play_arrow';
                fabAction = `renderQuestionList('${activeChapter.id}', '${activeChapter.levels[0].id}')`;
            } else {
                fabText = `Resume Chapter ${chapterNum}`;
                fabIcon = 'play_circle';
                const pendingLevel = activeChapter.levels.find(l => {
                    const idx = gameState.unlockedLevels.indexOf(l.id);
                    const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
                    return !isDone;
                });
                fabAction = pendingLevel
                    ? `renderQuestionList('${activeChapter.id}', '${pendingLevel.id}')`
                    : `renderLevels('${activeChapter.id}')`;
            }

            if (chapterNum > 1) {
                // Ensure the container is positioned perfectly in the bottom center, clearing mobile nav and not overlapping the right-side coach.
                const mobileNavOffset = window.innerWidth < 1024 ? 'calc(72px + env(safe-area-inset-bottom, 0px))' : '2rem';
                html += `
                <div id="home-fab-container" style="position: fixed; bottom: \${mobileNavOffset}; left: 50%; transform: translateX(-50%); z-index: 9999; animation: slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);">
                    <button onclick="\${fabAction}"
                        style="display: flex; align-items: center; gap: 0.5rem;
                               background: var(--gradient-primary); color: white; padding: 1rem 1.5rem; border-radius: 50px;
                               font-weight: 700; font-family: 'Inter', sans-serif; font-size: 1rem; border: none;
                               box-shadow: 0 8px 25px rgba(199, 53, 40, 0.3); cursor: pointer;
                               transition: transform 0.2s, box-shadow 0.2s;"
                        onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 12px 35px rgba(199, 53, 40, 0.45)'"
                        onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 25px rgba(199, 53, 40, 0.3)'">
                        <span class="material-symbols-rounded">\${fabIcon}</span>
                    ${fabText}
                </button>
                </div>`;
            }
        }
    }

    // Find the single active/current level ID purely based on unlockedLevels array
    const activeLevelId = gameState.unlockedLevels.length > 0 
        ? gameState.unlockedLevels[gameState.unlockedLevels.length - 1] 
        : 'c1-l1';

    let mobileHtml = `
        <div class="journey-map-container" style="padding-bottom: 120px; overflow-x: hidden; width: 100%; box-sizing: border-box;">
            <div style="text-align: center; margin-top: 1rem; margin-bottom: 1.25rem; width: 100%; box-sizing: border-box;">
                <div style="font-weight: 900; font-size: 2rem; color: var(--text-main); line-height: 1.2; display: flex; align-items: center; justify-content: center; gap: 0.4rem; flex-wrap: wrap;">
                    Odyssey <span style="color: var(--accent);">Journey</span>
                </div>
            </div>

            <!-- Glassmorphism stats bar -->
            <div style="display: flex; align-items: center; justify-content: space-around; gap: 0.5rem; padding: 0.75rem 1rem; margin: 0 0.75rem 1.25rem 0.75rem; background: rgba(255,255,255,0.06); backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.1); width: calc(100% - 1.5rem); box-sizing: border-box;">
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                    <span class="material-symbols-rounded" style="color: #4ade80; font-size: 1.5rem; font-variation-settings: 'FILL' 1; filter: drop-shadow(0 0 6px #4ade8088);">bolt</span>
                    <div>
                        <div style="font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: rgba(255,255,255,0.5); line-height: 1;">XP</div>
                        <div style="font-size: 1.05rem; font-weight: 900; color: #fff; font-family: 'Outfit', sans-serif;">${gameState.xp || 0}</div>
                    </div>
                </div>
                <div style="width: 1px; height: 28px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                    <span class="material-symbols-rounded" style="color: #fb923c; font-size: 1.5rem; font-variation-settings: 'FILL' 1; filter: drop-shadow(0 0 6px #fb923c88);">local_fire_department</span>
                    <div>
                        <div style="font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: rgba(255,255,255,0.5); line-height: 1;">Streak</div>
                        <div style="font-size: 1.05rem; font-weight: 900; color: #fff; font-family: 'Outfit', sans-serif;">${gameState.streak || 1}</div>
                    </div>
                </div>
                <div style="width: 1px; height: 28px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                    <span class="material-symbols-rounded" style="color: #a78bfa; font-size: 1.5rem; font-variation-settings: 'FILL' 1; filter: drop-shadow(0 0 6px #a78bfa88);">diamond</span>
                    <div>
                        <div style="font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: rgba(255,255,255,0.5); line-height: 1;">Gems</div>
                        <div style="font-size: 1.05rem; font-weight: 900; color: #fff; font-family: 'Outfit', sans-serif;">${gameState.gems || 0}</div>
                    </div>
                </div>
                <div style="width: 1px; height: 28px; background: rgba(255,255,255,0.15);"></div>
                <div style="display: flex; align-items: center; gap: 0.45rem; cursor: pointer;" onclick="renderLeaderboard()">
                    <span class="material-symbols-rounded" style="color: #fbbf24; font-size: 1.5rem; font-variation-settings: 'FILL' 1; filter: drop-shadow(0 0 6px #fbbf2488);">emoji_events</span>
                    <div>
                        <div style="font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: rgba(255,255,255,0.5); line-height: 1;">Rank</div>
                        <div style="font-size: 1.05rem; font-weight: 900; color: #fff; font-family: 'Outfit', sans-serif;">${gameState.rank && gameState.rank !== '-' ? '#' + gameState.rank : '-'}</div>
                    </div>
                </div>
            </div>
    `;


    // X offsets for the sine wave pattern
    const xOffsets = [0, -45, -75, -45, 0, 45, 75, 45];
    let globalNodeIndex = 0;

    window.courseData.forEach((chapter, cIndex) => {
        const isChapterUnlocked = gameState.unlockedChapters.includes(chapter.id);

        // Chapter Banner deterministic colors
        const unitTheme = (cIndex % 5) + 1;
        const chapBg = `linear-gradient(135deg, var(--unit-${unitTheme}-start), var(--unit-${unitTheme}-end))`;
        const accent = `var(--unit-${unitTheme}-accent)`;

        mobileHtml += `
            <div class="journey-section" style="${isChapterUnlocked ? '' : 'opacity: 0.6; filter: grayscale(1); pointer-events: none;'}">
                <div class="journey-section-header-wrapper" style="margin: 0 0.75rem 3rem 0.75rem; position: relative; z-index: 10;">
                    <!-- Solid backing -->
                    <div style="position: absolute; inset: 0; background: var(--bg-dark); border-radius: 20px; z-index: 1; pointer-events: none;"></div>
                    <div class="journey-section-header" style="background: ${chapBg}; padding: 1.5rem; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 1rem; width: 100%; box-sizing: border-box;">
                        <div style="flex: 1; text-align: left;">
                            <h2 style="font-size: 1.4rem; color: #fff; margin: 0; font-weight: 900; letter-spacing: -0.5px;">Unit ${cIndex + 1}</h2>
                            <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; margin-top: 0.4rem; font-weight: 600; line-height: 1.3;">${chapter.title.split(': ')[1] || chapter.title}</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.10); width: 45px; height: 45px; flex-shrink: 0; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #fff; backdrop-filter: blur(5px);">
                            <span class="material-symbols-rounded">menu_book</span>
                        </div>
                    </div>
                </div>
                <div class="journey-path" style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
        `;

        chapter.levels.forEach((level, lIndex) => {
            const currentX = xOffsets[globalNodeIndex % xOffsets.length];
            const nextX = xOffsets[(globalNodeIndex + 1) % xOffsets.length];
            const dx = nextX - currentX;
            globalNodeIndex++;

            const isLevelUnlocked = gameState.unlockedLevels.includes(level.id);
            const levelIdx = gameState.unlockedLevels.indexOf(level.id);
            const isCompleted = levelIdx !== -1 && (levelIdx < gameState.unlockedLevels.length - 1 || gameState.levelStats[level.id]?.passed);

            const unitThemeColors = {
                1: { primary: '#4A8BFF', shadow: '#2639D8' },
                2: { primary: '#9B5CFF', shadow: '#5B2DCC' },
                3: { primary: '#35D18A', shadow: '#15996B' },
                4: { primary: '#FF9B4A', shadow: '#E0522E' },
                5: { primary: '#6878FF', shadow: '#3426B8' }
            };
            const theme = unitThemeColors[unitTheme] || unitThemeColors[1];

            let stateClass = 'locked';
            let icon = 'lock';
            let action = '';
            let ringColor = '#343B52';
            let bgColor = '#2B3042';
            let iconColor = '#7A8199';
            let shadowColor = '#1D202B';
            let glowColor = 'transparent';

            if (isLevelUnlocked && isChapterUnlocked) {
                if (isCompleted) {
                    stateClass = 'completed';
                    icon = 'star';
                    ringColor = 'rgba(255, 255, 255, 0.8)';
                    bgColor = theme.primary;
                    iconColor = '#ffffff';
                    shadowColor = theme.shadow;
                    glowColor = 'transparent';
                    action = `renderQuestionList('${chapter.id}', '${level.id}')`;
                } else if (level.id === activeLevelId) {
                    stateClass = 'current';
                    icon = 'star';
                    ringColor = '#FFFFFF';
                    bgColor = '#FF8A3D';
                    iconColor = '#ffffff';
                    shadowColor = '#D94E2B';
                    glowColor = 'rgba(255, 138, 61, 0.35)';
                    action = `renderQuestionList('${chapter.id}', '${level.id}')`;
                } else {
                    stateClass = 'unlocked';
                    icon = 'star';
                    ringColor = '#596079';
                    bgColor = '#3B4158';
                    iconColor = '#8F96A8';
                    shadowColor = '#252938';
                    glowColor = 'rgba(90, 96, 121, 0.05)';
                    action = `renderQuestionList('${chapter.id}', '${level.id}')`;
                }
            }

            // Draw connector — skip only for absolute last level of entire course
            const isLastLevelOfChapter = (lIndex === chapter.levels.length - 1);
            const isLastLevelOfCourse = (cIndex === window.courseData.length - 1) && isLastLevelOfChapter;
            let connectorHtml = '';
            if (!isLastLevelOfCourse) {
                let pathColor = isCompleted ? theme.primary : '#2C3042';

                if (isLastLevelOfChapter) {
                    // Curved connector — always forces a visible horizontal sweep via control points
                    // Start at node center (x=40), sweep right then curve to screen center
                    const endX = 40 - currentX; // screen center in SVG coords, compensating for node translateX
                    const sweepX = 40 + 50;    // control point 1 sweeps rightward to create arc
                    connectorHtml = `
                    <svg style="position: absolute; top: 0; left: 0; width: 80px; height: 150px; overflow: visible; z-index: 0; pointer-events: none;">
                        <path d="M 40 40 C ${sweepX} 75, ${endX} 110, ${endX} 150"
                              fill="none" stroke="${pathColor}" stroke-width="20" stroke-linecap="round" />
                    </svg>`;
                } else {
                    connectorHtml = `
                    <svg style="position: absolute; top: 0; left: 0; width: 80px; height: 110px; overflow: visible; z-index: 0; pointer-events: none;">
                        <path d="M 40 40 C 40 95, ${40 + dx} 55, ${40 + dx} 110" 
                              fill="none" stroke="${pathColor}" stroke-width="20" stroke-linecap="round" />
                    </svg>`;
                }
            }

            let crownHtml = '';
            if (stateClass === 'current') {
                const startLabelHtml = (lIndex === 0) ? `
                <div style="position: absolute; top: -48px; background: white; color: var(--accent); padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.8rem; box-shadow: 0 4px 10px rgba(0,0,0,0.15); border: 2px solid #e5e7eb; animation: float-crown 2s infinite ease-in-out; white-space: nowrap; z-index: 20;">
                    START
                    <div style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid white;"></div>
                </div>` : '';

                crownHtml = `
                ${startLabelHtml}
                <div style="position: absolute; left: calc(-1 * clamp(90px, 28vw, 130px) - 8px); top: 50%; transform: translateY(-50%); width: clamp(90px, 28vw, 130px); height: clamp(90px, 28vw, 130px); overflow: visible; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.3)); z-index: 10;">
                    ${window.getMascotSVG('100%', '100%')}
                </div>
                `;
            }

            mobileHtml += `
                <div class="journey-node-wrapper" style="transform: translateX(${currentX}px); display: flex; justify-content: center; position: relative;">
                    ${connectorHtml}
                    <!-- Solid Backing to block connector -->
                    <div style="position: absolute; width: 80px; height: 80px; background: var(--bg-dark); border-radius: 50%; z-index: 1; top: 0; left: 50%; transform: translateX(-50%); pointer-events: none;"></div>
                    <div class="journey-node-inner ${stateClass === 'current' ? 'pulse-node' : ''}" onclick="${action}" style="width: 80px; height: 80px; border-radius: 50%; background: ${bgColor}; border: 6px solid ${ringColor}; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 0 ${shadowColor}, 0 0 40px 10px ${glowColor}; position: relative; z-index: 2; cursor: pointer; transition: transform 0.1s; color: ${iconColor};">
                        <span class="material-symbols-rounded" style="font-size: 2.5rem; font-weight: 800;">${icon}</span>
                        ${crownHtml}
                    </div>
                </div>
            `;
        });

        // Spacer after last level — gives the chapter-end connector path room to breathe before next chapter banner
        const isLastChapter = (cIndex === window.courseData.length - 1);
        mobileHtml += `
                </div>
            </div>
            ${!isLastChapter ? '<div style="height: 60px;"></div>' : ''}
        `;
    });

    mobileHtml += `</div>`;

    app.innerHTML = `
        <div class="desktop-view-chapters">${html}</div>
        <div class="mobile-view-chapters">${mobileHtml}</div>
    `;
}


// Render: Levels List for a Chapter
window.renderLevels = function (chapterId) {
    window.currentView = 'chapter';
    window.currentChapterId = chapterId;
    updateDesktopPanels();
    const chapter = window.courseData.find(c => c.id === chapterId);

    // Extract chapter number and name
    const chapterNum = parseInt(chapterId.replace('chapter', ''));
    const chapterName = chapter.title.split(': ')[1] || chapter.title;

    let html = renderHeader("renderChapters()", chapterName);

    // Calculate chapter progress to determine FAB logic
    const totalLevels = chapter.levels.length;
    const levelsPassed = chapter.levels.filter(l => {
        const idx = gameState.unlockedLevels.indexOf(l.id);
        return (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
    }).length;
    const progressPercent = Math.round((levelsPassed / totalLevels) * 100);

    let fabText = "Start Chapter";
    let fabIcon = "play_arrow";
    let fabTargetAction = `renderQuestionList('${chapter.id}', '${chapter.levels[0].id}')`;

    if (progressPercent === 100) {
        fabText = "Replay Chapter";
        fabIcon = "replay";
        // Unlike the chapter card, the FAB in the levels page *always* plays level 1 on replay
        fabTargetAction = `renderQuestionList('${chapter.id}', '${chapter.levels[0].id}')`;
    } else if (progressPercent > 0) {
        fabText = "Resume Chapter";
        fabIcon = "play_circle";
        const pendingLevel = chapter.levels.find(l => {
            const idx = gameState.unlockedLevels.indexOf(l.id);
            const isDone = (idx !== -1 && idx < gameState.unlockedLevels.length - 1) || gameState.levelStats[l.id]?.passed;
            return !isDone;
        });
        if (pendingLevel) {
            fabTargetAction = `renderQuestionList('${chapter.id}', '${pendingLevel.id}')`;
        }
    }

    html += `
        <div class="main-scroll-area" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">

            <!-- Chapter Summary Header -->
            <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                <div style="font-size: 0.8rem; color: var(--accent); text-transform: uppercase; font-weight: 800; letter-spacing: 1.5px;">Chapter ${chapterNum}</div>
                <h2 style="margin: 0; line-height: 1.25;">${chapterName}</h2>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0;">Select a level to continue your journey.</p>
            </div>

            <!-- Progress summary pill -->
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                <div style="display: flex; flex-direction: column; gap: 0.3rem; flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Chapter Progress</span>
                        <span style="font-size: 0.85rem; font-weight: 900; color: ${progressPercent === 100 ? 'var(--success)' : 'var(--accent)'};">${progressPercent}%</span>
                    </div>
                    <div class="progress-bar-container" style="height: 6px;">
                        <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; white-space: nowrap; flex-shrink: 0;">${levelsPassed}/${totalLevels} done</div>
            </div>

            <!-- Level Cards -->
            <div style="display: flex; flex-direction: column; gap: 0.75rem;" class="level-list">
                ${chapter.levels.map((level, idx) => {
        const isUnlocked = gameState.unlockedLevels.includes(level.id) || (chapterId === 'chapter1' && idx === 0);
        const levelIdx = gameState.unlockedLevels.indexOf(level.id);
        const isCompleted = (levelIdx !== -1 && levelIdx < gameState.unlockedLevels.length - 1) || gameState.levelStats[level.id]?.passed;
        const realQuestions = level.questions ? level.questions.filter(q => !q.id.includes('INTRO')) : [];
        const totalQs = realQuestions.length || 10;
        const completeCount = isCompleted ? totalQs : 0;

        // Force unlock if previous one is completed
        let isActuallyUnlocked = isUnlocked;
        if (idx > 0) {
            const prevLevel = chapter.levels[idx - 1];
            const prevIdx = gameState.unlockedLevels.indexOf(prevLevel.id);
            const prevDone = (prevIdx !== -1 && prevIdx < gameState.unlockedLevels.length - 1) || gameState.levelStats[prevLevel.id]?.passed;
            if (prevDone) isActuallyUnlocked = true;
        }

        const isLocked = !isActuallyUnlocked && !isCompleted;

        const statusColor = isCompleted ? 'var(--success)' : (isLocked ? 'var(--text-muted)' : 'var(--accent)');
        const statusIcon = isCompleted ? 'check_circle' : (isLocked ? 'lock' : 'play_circle');
        const borderColor = isCompleted ? 'var(--success)' : (isLocked ? 'var(--border)' : 'var(--primary)');

        return `
                    <button onclick="${!isLocked ? `renderQuestionList('${chapterId}', '${level.id}')` : ''}"
                        class="unit-card"
                        style="padding: 1rem 1.1rem; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur);
                               border: 2px solid ${borderColor}; border-radius: var(--radius-m); text-align: left;
                               display: flex; align-items: center; gap: 1rem;
                               opacity: ${isLocked ? 0.55 : 1}; cursor: ${isLocked ? 'default' : 'pointer'};
                               transition: all 0.25s ease-out; width: 100%; box-sizing: border-box;">
                        <!-- Level Number Badge -->
                        <div style="width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
                                    background: ${isCompleted ? 'rgba(0,200,150,0.12)' : (isLocked ? 'var(--bg-overlay)' : 'rgba(var(--primary-rgb),0.12)')};
                                    border: 1.5px solid ${borderColor};
                                    display: flex; align-items: center; justify-content: center;
                                    font-weight: 900; font-size: 1rem; color: ${statusColor}; font-family: 'Outfit', sans-serif;">
                            ${idx + 1}
                        </div>
                        <!-- Level Info -->
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-weight: 700; font-size: 1rem; color: ${isCompleted ? 'var(--success)' : 'var(--text-main)'}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                ${level.title}
                            </div>
                            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                <span>${completeCount}/${totalQs} questions</span>
                                ${isCompleted ? `<span style="color: var(--success); font-weight: 700;">✓ Complete</span>` : (isLocked ? `<span style="color: var(--text-muted);">Locked</span>` : '')}
                            </div>
                        </div>
                        <!-- Status Icon -->
                        <div style="font-size: 1.4rem; color: ${statusColor}; flex-shrink: 0;">
                            <span class="material-symbols-rounded" style="font-size: inherit;">${statusIcon}</span>
                        </div>
                    </button>
                `;
    }).join('')}
            </div>
        </div>

        <!-- Quick Launch FAB -->
        <button onclick="${fabTargetAction}"
            style="position: fixed; bottom: 2rem; right: 2rem; display: flex; align-items: center; gap: 0.5rem; background: var(--gradient-primary); color: white; padding: 1rem 1.5rem; border-radius: 50px; font-weight: 700; font-family: 'Inter', sans-serif; font-size: 1rem; border: none; box-shadow: 0 8px 25px rgba(199, 53, 40, 0.3); outline: none; cursor: pointer; z-index: 9999; transition: transform 0.2s, box-shadow 0.2s;">
            <span class="material-symbols-rounded">${fabIcon}</span>
            ${fabText}
        </button>
        `;
    app.innerHTML = html;
}


// Start Level Challenge (replaces question list)
window.renderQuestionList = function (chapterId, levelId) {
    const chapterObj = window.courseData.find(c => c.id === chapterId);
    const levelObj = chapterObj.levels.find(l => l.id === levelId);
    const levelIndex = chapterObj.levels.indexOf(levelObj);

    // Regenerate the 10 randomized questions from the pool specifically for this session
    levelObj.questions = generateLevelQuestions(chapterId, levelIndex, 100);

    const isReplay = levelObj.questions.some(q => gameState.completedQuestions.includes(q.id));

    // Initialize level session
    currentLevelSession = {
        chapterId,
        levelId,
        isReplay,
        correctCount: 0,
        totalQuestions: 0,
        xpGained: 0,
        startXP: gameState.xp,
        completedThisSession: []
    };

    // Start first question
    startQuestion(chapterId, levelId, 0);
}

// Activity Runner
let currentActivityState = {
    chapterId: null,
    levelId: null,
    questionIndex: 0,
    activityIndex: 0
};

// Track level session
let currentLevelSession = {
    chapterId: null,
    levelId: null,
    isReplay: false,
    correctCount: 0,
    totalQuestions: 0,
    xpGained: 0,
    startXP: 0
};

window.startQuestion = function (chapterId, levelId, qIndex) {
    window.currentView = 'activity';
    updateDesktopPanels();
    currentActivityState = { chapterId, levelId, questionIndex: qIndex, activityIndex: 0 };
    renderActivity();
}

window.renderActivity = function () {
    const { chapterId, levelId } = currentActivityState;
    if (!chapterId || !levelId) {
        renderChapters();
        return;
    }

    const chapter = window.courseData.find(c => c.id === chapterId);
    if (!chapter) {
        console.error("Chapter not found for transition:", chapterId);
        renderChapters();
        return;
    }

    const level = chapter.levels.find(l => l.id === levelId);
    if (!level) {
        console.error("Level not found for transition:", levelId);
        renderLevels(chapterId);
        return;
    }

    const levelIndex = chapter.levels.indexOf(level);

    // CRITICAL: Always check if level is complete AT THE START using live state
    if (currentActivityState.questionIndex >= level.questions.length) {
        console.log("Level complete detected at start of renderActivity");
        renderLevelComplete(chapterId, levelId);
        return;
    }

    const question = level.questions[currentActivityState.questionIndex];
    if (!question) {
        console.warn("Question not found at index:", currentActivityState.questionIndex);
        renderLevelComplete(chapterId, levelId);
        return;
    }

    // Safety check for activities
    if (!question.activities || question.activities.length === 0) {
        console.warn("Question has no activities, skipping:", question.id);
        currentActivityState.questionIndex++;
        currentActivityState.activityIndex = 0;
        renderActivity();
        return;
    }

    const activity = question.activities[currentActivityState.activityIndex];

    // Reset matching state for each new question
    if (typeof matchState !== 'undefined') {
        matchState = { selectedLeft: null, pairs: [], colorIndex: 0 };
    }

    if (!activity) {
        // Current question activities exhausted, move to next question
        console.log("Activity exhausted, moving to next question");
        currentActivityState.questionIndex++;
        currentActivityState.activityIndex = 0;

        // Recursively call to either render next question or hit the completion guard at the top
        renderActivity();
        return;
    }

    // Render Activity UI with progress
    const realQuestions = level.questions.filter(q => !q.id.includes('INTRO'));
    const isIntro = activity.type === 'info_card';
    
    // Polly visibility logic: hide during game, show during info/chapters
    if (isIntro) {
        document.body.classList.remove('game-active');
    } else {
        document.body.classList.add('game-active');
    }

    const totalSteps = realQuestions.length;
    // Current index in real questions (only if not intro)
    const currentQ = isIntro ? 0 : realQuestions.findIndex(q => q.id === question.id) + 1;

    const isMobile = window.innerWidth < 1024;

    // Build segmented story bars for mobile
    let storyBarsHtml = '';
    if (isMobile && !isIntro && totalSteps > 0) {
        storyBarsHtml = `<div style="display: flex; gap: 4px; padding: 0.6rem 1rem 0 1rem;">`;
        for (let i = 0; i < totalSteps; i++) {
            const filled = i < currentQ;
            const active = i === currentQ - 1;
            storyBarsHtml += `
                <div style="flex: 1; height: 3px; border-radius: 3px; background: rgba(255,255,255,0.25); overflow: hidden; position: relative;">
                    <div style="position: absolute; top: 0; left: 0; height: 100%; border-radius: 3px;
                        background: #fff;
                        width: ${filled ? '100%' : '0%'};
                        transition: width ${active ? '0.4s ease' : '0s'};
                    "></div>
                </div>`;
        }
        storyBarsHtml += `</div>`;
    }

    let html = isMobile ? `
        <div id="stories-screen" style="
            position: fixed; inset: 0; z-index: 10000;
            background: #0a0a14;
            display: flex; flex-direction: column;
            touch-action: pan-y;
            overscroll-behavior: contain;
        ">
            <!-- Story Bars -->
            ${storyBarsHtml}

            <!-- Header -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem 0.4rem 1rem; position: relative; z-index: 10;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <button onclick="confirmExitLevel('${chapterId}', '${levelId}')"
                        style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); border: none; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; -webkit-tap-highlight-color: transparent;">✕</button>
                    <div style="font-size: 0.85rem; color: rgba(255,255,255,0.75); font-weight: 700; letter-spacing: 0.3px;">${level.title}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div style="font-size: 0.82rem; color: #4ade80; font-weight: 800; background: rgba(74,222,128,0.12); padding: 0.3rem 0.7rem; border-radius: 20px; border: 1px solid rgba(74,222,128,0.2);">⚡ ${gameState.xp || 0}</div>
                    ${!isIntro ? `<div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); font-weight: 700;">${currentQ}/${totalSteps}</div>` : ''}
                </div>
            </div>

            <!-- Scrollable content card -->
            <div id="stories-content" style="flex: 1; overflow-y: auto; padding: 1rem 1.25rem 1.5rem 1.25rem; display: flex; flex-direction: column; position: relative; z-index: 2;">
    ` : `
        <div style="height: 8px; background: transparent;">
            <div style="width: ${isIntro ? 0 : (currentQ / totalSteps) * 100}%; height: 100%; background: var(--primary); transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);"></div>
        </div>
        <header style="padding: 1rem; display: flex; align-items: center; justify-content: space-between; background: transparent;">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <button onclick="confirmExitLevel('${chapterId}', '${levelId}')" style="font-size: 1.5rem; background: none !important; border: none !important; box-shadow: none !important; color: white; cursor: pointer;">✕</button>
                <div style="font-size: 0.9rem; color: white; font-weight: 600;">Level ${levelIndex + 1}: ${level.title}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                ${isIntro ? '' : `
                <div style="font-size: 0.95rem; color: white; font-weight: 700; background: rgba(0,0,0,0.15); padding: 0.4rem 0.8rem; border-radius: var(--radius-s);">Q: ${currentQ} / ${totalSteps}</div>
                `}
                <div class="xp-container" style="display: flex; gap: 0.5rem;">
                    <div style="font-weight: 700; color: var(--success); background: var(--bg-overlay); padding: 0.4rem 0.8rem; border-radius: var(--radius-m); transition: all 0.3s ease;">⚡ <span>${gameState.xp || 0}</span></div>
                    <div style="font-weight: 700; color: var(--accent); background: var(--bg-overlay); padding: 0.4rem 0.8rem; border-radius: var(--radius-m); transition: all 0.3s ease;">💎 <span>${gameState.gems || 0}</span></div>
                </div>
            </div>
        </header>
        <main class="main-scroll-area" style="padding: 2rem; flex: 1; display: flex; flex-direction: column;">
    `;

    // Helper to shuffle arrays
    const shuffleArray = (array) => {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Activity Content
    if (activity.type === 'choice') {
        const shuffledOptions = shuffleArray(activity.options.map((opt, idx) => ({ ...opt, originalIndex: idx })));
        html += `
            <h2 style="margin-bottom: 1.5rem;">${activity.question}</h2>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">Select the correct answer.</div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${shuffledOptions.map((opt) => `
                    <button class="option-btn" onclick="checkAnswer(this, ${opt.originalIndex})" 
                        style="padding: 1.5rem; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border: 2px solid var(--border); border-radius: var(--radius-m); text-align: left; font-size: 1.1rem; color: var(--text-main); transition: all 0.25s ease-out;">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
            <div id="feedback-area"></div>
            <div id="skip-btn-container" style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
                <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                    Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                </button>
            </div>
        `;
    } else if (activity.type === 'micro_concept') {
        html += `
             <h2 style="margin-bottom: 1.5rem;">Learn</h2>
             <p style="font-size: 1.3rem; line-height: 1.6; margin-bottom: 3rem;">${activity.text}</p>
             <button class="btn-primary" onclick="nextActivity(getGamificationRewards().xpPerQuestion)">Continue</button>
        `;
    } else if (activity.type === 'task') {
        html += `
            <h2 style="margin-bottom: 1.5rem;">Your Turn</h2>
            <p>${activity.prompt}</p>
            <textarea id="task-input" placeholder="${activity.placeholder}" style="width: 100%; height: 150px; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border: 2px solid var(--border); margin: 1.5rem 0; color: var(--text-main); padding: 1rem; border-radius: var(--radius-m); font-family: inherit; font-size: 1rem;"></textarea>
            <div id="feedback-area"></div>
            <div class="action-btn-layout">
                <div></div>
                <button id="submit-btn" class="btn-primary" onclick="checkTaskAnswer()">Submit</button>
                <div id="skip-btn-container">
                    <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                        Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                    </button>
                </div>
            </div>
        `;
    } else if (activity.type === 'multiple_choice') {
        const shuffledOptions = shuffleArray(activity.options);
        html += `
            <h2 style="margin-bottom: 1.5rem;">${activity.question}</h2>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">Select all that apply.</div>
            <div id="options-container" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
            ${shuffledOptions.map((opt, i) => `
                <label style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border: 2px solid var(--border); border-radius: var(--radius-s); cursor: pointer; transition: all 0.25s ease-out;">
                    <input type="checkbox" class="mc-input" data-correct="${opt.correct}" style="width: 1.2rem; height: 1.2rem;"> 
                    <span>${opt.text}</span>
                </label>
            `).join('')}
            </div>
            <div id="feedback-area"></div>
            <div class="action-btn-layout">
                <div></div>
                <button id="submit-btn" class="btn-primary" onclick="checkMultipleChoiceAnswer()">Submit Selection</button>
                <div id="skip-btn-container">
                    <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                        Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                    </button>
                </div>
            </div>
        `;
    } else if (activity.type === 'ordering') {
        let shuffledItems = shuffleArray(activity.items);
        let attemptsOrdering = 0;

        while (JSON.stringify(shuffledItems) === JSON.stringify(activity.items) && attemptsOrdering < 10) {
            shuffledItems = shuffleArray(activity.items);
            attemptsOrdering++;
        }

        html += `
            <h2 style="margin-bottom: 1.5rem;">${activity.question}</h2>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">Drag and drop to rearrange. Submit when ready.</div>
            <div id="sortable-list" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
                ${shuffledItems.map((item, idx) => `
                    <div class="sort-item" draggable="true" ondragstart="handleDragStart(event)" ondragover="handleSortDragOver(event)" ondrop="handleDrop(event)" ondragend="handleDragEnd()" ontouchstart="handleSortTouchStart(event)" ontouchmove="handleSortTouchMove(event)" ontouchend="handleSortTouchEnd(event)" data-index="${activity.items.indexOf(item)}" style="padding: 1.2rem; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border: 1px solid var(--border); border-radius: var(--radius-s); cursor: grab; display: flex; align-items: center; gap: 1rem; transition: opacity 0.25s ease-out, border-color 0.25s ease-out; touch-action: none;">
                        <span style="min-width: 1.6rem; height: 1.6rem; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0;">${idx + 1}</span>
                        <span style="flex: 1;">${item}</span>
                        <span style="color: var(--text-muted); font-size: 1.1rem;">☰</span>
                    </div>
                `).join('')}
            </div>
            <div id="feedback-area"></div>
            <div class="action-btn-layout">
                <div></div>
                <button id="submit-btn" class="btn-primary" onclick="checkOrderingAnswer()">Verify Order</button>
                <div id="skip-btn-container">
                    <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                        Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                    </button>
                </div>
            </div>
        `;
    } else if (activity.type === 'matching') {
        const shuffledLeftPairs = shuffleArray(activity.pairs);
        const rightItems = activity.shuffledRight || activity.pairs.map(p => p.right);
        let dynamicShuffledRight = shuffleArray(rightItems);

        let hasDirectMatch = shuffledLeftPairs.some((p, i) => p.right === dynamicShuffledRight[i]);
        let attempts = 0;

        // Loop to ensure no two options share the same row index initially 
        while (hasDirectMatch && attempts < 20) {
            dynamicShuffledRight = shuffleArray(dynamicShuffledRight);
            hasDirectMatch = shuffledLeftPairs.some((p, i) => p.right === dynamicShuffledRight[i]);
            attempts++;
        }

        html += `
            <h2 style="margin-bottom: 1.5rem;">${activity.question}</h2>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">Match the items on the left with the correct options on the right.</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem 1.25rem; margin-bottom: 1rem; align-items: stretch;">
                ${shuffledLeftPairs.map((p, i) => {
                    const leftText = p.left;
                    const rightText = dynamicShuffledRight[i];
                    return `
                        <div class="match-left-item" data-index="${i}" data-text="${leftText}" onclick="selectMatchLeft(this)"
                            style="padding: 1.1rem 1rem; background: var(--bg-card); border: 2px solid var(--border); border-radius: var(--radius-s); cursor: pointer; transition: all 0.25s ease-out; font-weight: 600; text-align: center; user-select: none; display: flex; align-items: center; justify-content: center; min-height: 100%; box-sizing: border-box;">
                            ${leftText}
                        </div>
                        <div class="match-right-item" data-index="${i}" data-text="${rightText}" onclick="selectMatchRight(this)"
                            style="padding: 1.1rem 1rem; background: var(--bg-card); border: 2px solid var(--border); border-radius: var(--radius-s); cursor: pointer; transition: all 0.25s ease-out; font-size: 0.92rem; text-align: center; user-select: none; display: flex; align-items: center; justify-content: center; min-height: 100%; box-sizing: border-box;">
                            ${rightText}
                        </div>
                    `;
                }).join('')}
            </div>
            <div id="match-status" style="text-align: center; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">← Pick an item on the <strong>left</strong> to start</div>
            <div id="feedback-area"></div>
            <div class="action-btn-layout">
                <div></div>
                <button id="submit-btn" class="btn-primary" onclick="checkMatchingAnswer()" style="display: none;">Check Matches</button>
                <div id="skip-btn-container">
                    <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                        Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                    </button>
                </div>
            </div>
        `;
    } else if (activity.type === 'fill_in_blanks') {
        const parts = activity.text.split(/\[(.*?)\]/g);

        html += `
            <h2 style="margin-bottom: 1.5rem;">${activity.question || "Fill in the Blanks"}</h2>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">Drag words from the bank into the appropriate blanks.</div>
            
            <div style="font-size: 1.25rem; line-height: 2; margin-bottom: 1.5rem; background: rgba(209, 246, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-m); border: 1px solid var(--border);">
                ${parts.map((part, i) => {
            if (i % 2 !== 0) {
                return `<span class="blank-dropzone" data-correct="${part}" ondragover="handleDragOver(event)" ondrop="handleBlankDrop(event)" style="display: inline-flex; align-items: center; justify-content: center; min-width: 120px; height: 38px; border: 2px solid var(--border); border-radius: var(--radius-s); background: var(--bg-card); margin: 0 8px; vertical-align: middle; color: var(--accent); font-weight: 700; transition: border-color 0.25s ease-out;"></span>`;
            }
            return `<span>${part}</span>`;
        }).join('')}
            </div>
            
            <div id="word-bank" style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 1rem; min-height: 60px;">
                ${shuffleArray(activity.wordBank).map(word => `
                    <div class="word-pill" draggable="true" ondragstart="handleWordDragStart(event)" ontouchstart="handleWordTouchStart(event)" ontouchmove="handleWordTouchMove(event)" ontouchend="handleWordTouchEnd(event)" data-word="${word}" style="display: flex; align-items: center; justify-content: center; min-width: 120px; padding: 0.6rem 1rem; background: var(--primary); color: white; border-radius: var(--radius-s); font-weight: 700; cursor: grab; box-shadow: 0 4px 0 rgba(20, 60, 99, 0.2); transition: all 0.25s ease-out; user-select: none; touch-action: none;">
                        ${word}
                    </div>
                `).join('')}
            </div>
            
            <div id="feedback-area"></div>
            <div class="action-btn-layout">
                <div></div>
                <button id="submit-btn" class="btn-primary" onclick="checkFillInBlanksAnswer()">Check Answer</button>
                <div id="skip-btn-container">
                    <button class="btn-secondary" title="Skip Question" onclick="skipQuestion()" style="padding: 0.55rem 1rem; font-size: 0.85rem; display:flex; align-items:center; gap:0.4rem; border-radius: var(--radius-s); font-weight: 600;">
                        Skip <span class="material-symbols-rounded" style="font-size: 1rem;">skip_next</span>
                    </button>
                </div>
            </div>
        `;
    } else if (activity.type === 'info_card') {
        html += `
            <div style="text-align: center; margin-top: 1rem;">
                <div style="height: 6rem; margin-bottom: 2rem;"></div>
                <h2 style="margin-bottom: 0.5rem; font-size: 2.2rem;">${activity.title}</h2>
                <h3 style="color: var(--accent); margin-bottom: 1.5rem; text-transform: uppercase; font-size: 1rem; letter-spacing: 2px;">${activity.subtitle}</h3>
                <p style="font-size: 1.2rem; line-height: 1.6; color: var(--text-muted); margin: 0 auto 3rem; max-width: 640px;">${activity.text}</p>
                <button class="btn-primary" onclick="nextActivity(0)" style="max-width: 300px; margin: 0 auto; width: 100%;">Start Challenge</button>
            </div>
        `;
    }

    if (isMobile) {
        html += `</div></div>`; // close #stories-content + #stories-screen
    } else {
        html += `</main>`;
    }

    app.innerHTML = html;

    // Mobile swipe & tap-zone logic
    if (isMobile) {

    }
}

// Helper to calculate dynamic XP and Gems based on Chapter and Level
function getGamificationRewards(specificChapterId, specificLevelId) {
    const chapterId = specificChapterId || (currentActivityState ? currentActivityState.chapterId : 'chapter1');
    const levelId = specificLevelId || (currentActivityState ? currentActivityState.levelId : 'c1-l1');

    const chapterObj = window.courseData.find(c => c.id === chapterId);
    if (!chapterObj) return { xpPerQuestion: 10, gemsForLevel: 50 };

    const levelIndex = chapterObj.levels.findIndex(l => l.id === levelId);
    if (levelIndex === -1) return { xpPerQuestion: 10, gemsForLevel: 50 };

    let multiplier = 1;
    if (chapterId === 'chapter2') multiplier = 2;
    if (chapterId === 'chapter3') multiplier = 3;

    const baseAmount = (levelIndex + 1) * 10;

    return {
        xpPerQuestion: baseAmount * multiplier,
        gemsForLevel: baseAmount * multiplier
    };
}

// Helper to generate correct answer display for skipped questions
window.getCorrectAnswerHtml = function (activity) {
    let type = activity.type;
    if (type === 'choice') {
        const correctOpt = activity.options.find(o => o.correct);
        return correctOpt ? correctOpt.text : 'N/A';
    } else if (type === 'multiple_choice') {
        const correctOpts = activity.options.filter(o => o.correct).map(o => o.text);
        return correctOpts.length > 0 ? `<ul style="margin-top: 0.5rem;">${correctOpts.map(o => `<li>${o}</li>`).join('')}</ul>` : 'N/A';
    } else if (type === 'ordering') {
        return `<ol style="margin-left: 1.5rem; margin-top: 0.5rem;">${activity.items.map(item => `<li>${item}</li>`).join('')}</ol>`;
    } else if (type === 'matching') {
        return `<ul style="list-style-type: none; padding: 0; margin-top: 0.5rem;">${activity.pairs.map(p => `<li style="margin-bottom: 0.5rem;"><strong>${p.left}</strong> &rarr; ${p.right}</li>`).join('')}</ul>`;
    } else if (type === 'fill_in_blanks') {
        const parts = activity.text.split(/\\[(.*?)\\]/g);
        let text = parts.map((part, i) => i % 2 !== 0 ? `<u style="color:var(--accent); font-weight:800;">${part}</u>` : part).join('');
        return `<p style="margin-top: 0.5rem; line-height: 1.6;">${text}</p>`;
    } else if (type === 'task') {
        return `<p style="margin-top: 0.5rem;">This was a subjective task without a single right answer.</p>`;
    }
    return '';
}

window.skipContinue = function () {
    currentActivityState.questionIndex++;
    currentActivityState.activityIndex = 0;
    renderActivity();
}

window.skipQuestion = function () {
    const { chapterId, levelId, questionIndex } = currentActivityState;
    const chapter = window.courseData.find(c => c.id === chapterId);
    const level = chapter.levels.find(l => l.id === levelId);
    let question = level.questions[questionIndex];

    if (!question) return;

    const currentSkips = question.skipCount || 0;

    if (currentSkips === 1) {
        // Show warning before the fatal second skip
        showModal({
            icon: null,
            title: 'Final Skip Warning',
            message: `<br>You have skipped this question twice. If you continue, it will be marked as <strong>incorrect</strong> and you will earn <strong>no XP</strong> for this question. <br>Are you sure you want to skip?`,
            confirmText: 'Skip Anyway',
            cancelText: 'Let me try',
            onConfirm: () => {
                executeSkipLogic(question, level, questionIndex);
            }
        });
    } else {
        executeSkipLogic(question, level, questionIndex);
    }
}

function executeSkipLogic(question, level, questionIndex) {
    question.skipCount = (question.skipCount || 0) + 1;

    if (question.skipCount < 2) {
        // Displace the question to the end of the queue
        const q = level.questions.splice(questionIndex, 1)[0];
        level.questions.push(q);

        currentActivityState.activityIndex = 0;
        renderActivity();
    } else {
        // Treat as wrong answer
        const activity = question.activities[currentActivityState.activityIndex];
        currentLevelSession.totalQuestions++;

        // Track completion to avoid endless loops
        if (!currentLevelSession.completedThisSession.includes(question.id)) {
            currentLevelSession.completedThisSession.push(question.id);
        }

        // Disable input options safely
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
        });
        document.querySelectorAll('input, textarea, .word-pill, .sort-item, .match-left-item, .match-right-item').forEach(el => {
            el.disabled = true;
            el.style.pointerEvents = 'none';
        });

        showFeedbackUI({
            isCorrect: false,
            isSkip: true,
            title: 'Question Skipped',
            message: `You've skipped this question twice. Review: ${activity.incorrectFeedback || "Review this concept."}`,
            onContinue: 'skipContinue()'
        });
    }
}

// Interaction Logic: Single Choice
window.checkAnswer = function (btn, optionIndex) {
    const { chapterId, levelId, questionIndex } = currentActivityState;
    const chapterObj = window.courseData.find(c => c.id === chapterId);
    if (!chapterObj) return;
    const levelObj = chapterObj.levels.find(l => l.id === levelId);
    if (!levelObj) return;
    const questionObj = levelObj.questions[questionIndex];
    if (!questionObj) return;
    const activity = questionObj.activities[0];
    if (!activity) return;
    const opt = activity.options[optionIndex];
    if (!opt) return;
    const isCorrect = opt.correct;
    const feedback = opt.feedback;

    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.disabled = true;
    });

    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    if (isCorrect) {
        const { chapterId, levelId, questionIndex } = currentActivityState;
        const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;

        // Track session stats
        currentLevelSession.correctCount++;
        if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
        currentLevelSession.totalQuestions++;

        btn.style.borderColor = 'var(--success)';
        btn.style.backgroundColor = 'rgba(0, 200, 150, 0.1)';

        // Only track progress for session (commit on complete)
        if (!currentLevelSession.completedThisSession.includes(questionId)) {
            currentLevelSession.completedThisSession.push(questionId);
        }

        showFeedbackUI({
            isCorrect: true,
            message: feedback
        });
    } else {
        // Track session stats (wrong answer)
        currentLevelSession.totalQuestions++;

        btn.style.borderColor = 'var(--error)';
        btn.style.backgroundColor = 'rgba(255, 75, 96, 0.1)';

        showFeedbackUI({
            isCorrect: false,
            message: feedback
        });
    }
}

// Check Task (Descriptive)
window.checkTaskAnswer = function () {
    const input = document.getElementById('task-input');
    const submitBtn = document.getElementById('submit-btn');

    if (input.value.trim().length < 5) {
        showFeedbackUI({
            isCorrect: false,
            title: 'Wait!',
            message: 'Please provide a bit more detail!',
            onContinue: "document.getElementById('global-feedback-area').innerHTML='';"
        });
        return;
    }

    input.disabled = true;
    submitBtn.style.display = 'none';

    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    const { chapterId, levelId, questionIndex } = currentActivityState;
    const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;

    // Effort based success
    currentLevelSession.correctCount++;
    if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
    currentLevelSession.totalQuestions++;

    // Only track progress for session (commit on complete)
    if (!currentLevelSession.completedThisSession.includes(questionId)) {
        currentLevelSession.completedThisSession.push(questionId);
    }

    showFeedbackUI({
        isCorrect: true,
        title: 'Well Done!',
        message: 'Great analysis. Your perspective helps build a deeper understanding.'
    });
}

// Check Multiple Choice
window.checkMultipleChoiceAnswer = function () {
    const inputs = document.querySelectorAll('.mc-input');
    const submitBtn = document.getElementById('submit-btn');

    let correct = true;
    let selectedAny = false;

    inputs.forEach(input => {
        const isCorrect = input.dataset.correct === 'true';
        if (input.checked) selectedAny = true;
        if (input.checked !== isCorrect) correct = false;
        input.disabled = true;
    });

    if (!selectedAny) {
        showFeedbackUI({
            isCorrect: false,
            message: 'Please select at least one option!',
            onContinue: "document.getElementById('global-feedback-area').innerHTML='';"
        });
        inputs.forEach(i => i.disabled = false);
        return;
    }

    submitBtn.style.display = 'none';

    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    const { chapterId, levelId, questionIndex } = currentActivityState;
    const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];
    const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;

    if (correct) {
        currentLevelSession.correctCount++;
        if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
        currentLevelSession.totalQuestions++;

        const feedbackText = activity.correctFeedback || "You correctly identified all the right options.";

        // Only track progress for session (commit on complete)
        if (!currentLevelSession.completedThisSession.includes(questionId)) {
            currentLevelSession.completedThisSession.push(questionId);
        }

        showFeedbackUI({
            isCorrect: true,
            title: 'Correct!',
            message: feedbackText
        });
    } else {
        const feedbackText = activity.incorrectFeedback || "Some of your selections were incorrect or you missed a correct one.";

        currentLevelSession.totalQuestions++;
        showFeedbackUI({
            isCorrect: false,
            title: 'Incorrect',
            message: feedbackText
        });
    }
}

// Check Ordering
window.checkOrderingAnswer = function () {
    const submitBtn = document.getElementById('submit-btn');

    // For now, simple verification - descriptive result
    submitBtn.style.display = 'none';

    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    const { chapterId, levelId, questionIndex } = currentActivityState;
    const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;

    const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];

    // Check if order is perfectly correct
    const currentOrder = Array.from(document.querySelectorAll('.sort-item')).map(el => parseInt(el.getAttribute('data-index')));
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(activity.correct_order);

    currentLevelSession.totalQuestions++;

    if (isCorrect) {
        currentLevelSession.correctCount++;
        if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
        if (!currentLevelSession.completedThisSession.includes(questionId)) {
            currentLevelSession.completedThisSession.push(questionId);
        }

        showFeedbackUI({
            isCorrect: true,
            title: 'Correct Order',
            message: activity.correctFeedback || "Structure follows logical progression."
        });
    } else {
        showFeedbackUI({
            isCorrect: false,
            title: 'Incorrect Order',
            message: activity.incorrectFeedback || "The items are not in the correct sequence."
        });
    }
}

// Drag and Drop Logic for Ordering Questions
let draggedItem = null;
let dragOverItem = null;

window.handleDragStart = function (e) {
    draggedItem = e.target.closest('.sort-item') || e.target;
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => { if (draggedItem) draggedItem.style.opacity = '0.4'; }, 0);
}

window.handleDragOver = function (e) {
    e.preventDefault();
}

window.handleSortDragOver = function (e) {
    e.preventDefault();
    const target = e.target.closest('.sort-item');
    if (!target || target === draggedItem) return;
    dragOverItem = target;

    // Highlight drop target
    document.querySelectorAll('.sort-item').forEach(el => {
        el.style.borderColor = 'var(--border)';
    });
    target.style.borderColor = 'var(--primary)';
}

window.handleDragEnd = function () {
    if (draggedItem) draggedItem.style.opacity = '1';
    document.querySelectorAll('.sort-item').forEach(el => {
        el.style.borderColor = 'var(--border)';
        el.style.opacity = '1';
    });
    draggedItem = null;
    dragOverItem = null;
}

window.handleDrop = function (e) {
    e.preventDefault();

    const target = e.target.closest('.sort-item');
    if (!target || !draggedItem || target === draggedItem) {
        if (draggedItem) draggedItem.style.opacity = '1';
        return;
    }

    // Swap the two elements in the DOM
    const list = target.parentNode;
    const allItems = Array.from(list.querySelectorAll('.sort-item'));
    const draggedIdx = allItems.indexOf(draggedItem);
    const targetIdx = allItems.indexOf(target);

    if (draggedIdx < targetIdx) {
        list.insertBefore(draggedItem, target.nextSibling);
    } else {
        list.insertBefore(draggedItem, target);
    }

    if (draggedItem) draggedItem.style.opacity = '1';
    document.querySelectorAll('.sort-item').forEach(el => el.style.borderColor = 'var(--border)');
    draggedItem = null;
    dragOverItem = null;
}

// ===== TOUCH DRAG-AND-DROP FOR ORDERING QUESTIONS (mobile) =====
let touchDragItem = null;
let touchDragClone = null;
let touchStartY = 0;

window.handleSortTouchStart = function (e) {
    const item = e.target.closest('.sort-item');
    if (!item) return;
    touchDragItem = item;
    touchStartY = e.touches[0].clientY;
    touchDragItem.style.opacity = '0.4';

    // Create a floating clone for visual feedback
    touchDragClone = item.cloneNode(true);
    touchDragClone.style.position = 'fixed';
    touchDragClone.style.left = item.getBoundingClientRect().left + 'px';
    touchDragClone.style.top = e.touches[0].clientY - 25 + 'px';
    touchDragClone.style.width = item.offsetWidth + 'px';
    touchDragClone.style.opacity = '0.85';
    touchDragClone.style.zIndex = '10000';
    touchDragClone.style.pointerEvents = 'none';
    touchDragClone.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
    touchDragClone.style.transform = 'scale(1.03)';
    document.body.appendChild(touchDragClone);
}

window.handleSortTouchMove = function (e) {
    if (!touchDragItem || !touchDragClone) return;
    e.preventDefault(); // Prevent scroll while dragging
    const touch = e.touches[0];
    touchDragClone.style.top = touch.clientY - 25 + 'px';

    // Find which item we're over
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const targetItem = elemBelow ? elemBelow.closest('.sort-item') : null;

    document.querySelectorAll('.sort-item').forEach(el => el.style.borderColor = 'var(--border)');
    if (targetItem && targetItem !== touchDragItem) {
        targetItem.style.borderColor = 'var(--primary)';
    }
}

window.handleSortTouchEnd = function (e) {
    if (!touchDragItem) return;

    // Remove clone
    if (touchDragClone) {
        touchDragClone.remove();
        touchDragClone = null;
    }

    // Find drop target
    const touch = e.changedTouches[0];
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const targetItem = elemBelow ? elemBelow.closest('.sort-item') : null;

    if (targetItem && targetItem !== touchDragItem) {
        const list = targetItem.parentNode;
        const allItems = Array.from(list.querySelectorAll('.sort-item'));
        const draggedIdx = allItems.indexOf(touchDragItem);
        const targetIdx = allItems.indexOf(targetItem);

        if (draggedIdx < targetIdx) {
            list.insertBefore(touchDragItem, targetItem.nextSibling);
        } else {
            list.insertBefore(touchDragItem, targetItem);
        }

        // Update visual order numbers
        Array.from(list.querySelectorAll('.sort-item')).forEach((item, idx) => {
            const numSpan = item.querySelector('span');
            if (numSpan) numSpan.textContent = idx + 1;
        });
    }

    touchDragItem.style.opacity = '1';
    document.querySelectorAll('.sort-item').forEach(el => el.style.borderColor = 'var(--border)');
    touchDragItem = null;
}

// ===== TOUCH DRAG-AND-DROP FOR FILL-IN-BLANKS (mobile) =====
let touchWord = null;
let touchWordClone = null;

window.handleWordTouchStart = function (e) {
    const pill = e.target.closest('.word-pill');
    if (!pill) return;
    touchWord = pill;

    touchWordClone = pill.cloneNode(true);
    touchWordClone.style.position = 'fixed';
    touchWordClone.style.left = e.touches[0].clientX - 50 + 'px';
    touchWordClone.style.top = e.touches[0].clientY - 20 + 'px';
    touchWordClone.style.opacity = '0.85';
    touchWordClone.style.zIndex = '10000';
    touchWordClone.style.pointerEvents = 'none';
    touchWordClone.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
    document.body.appendChild(touchWordClone);

    pill.style.opacity = '0.3';
}

window.handleWordTouchMove = function (e) {
    if (!touchWord || !touchWordClone) return;
    e.preventDefault();
    touchWordClone.style.left = e.touches[0].clientX - 50 + 'px';
    touchWordClone.style.top = e.touches[0].clientY - 20 + 'px';

    // Highlight dropzones on hover
    const elemBelow = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    document.querySelectorAll('.blank-dropzone').forEach(dz => dz.style.borderColor = 'var(--border)');
    const dropzone = elemBelow ? elemBelow.closest('.blank-dropzone') : null;
    if (dropzone) dropzone.style.borderColor = 'var(--primary)';
}

window.handleWordTouchEnd = function (e) {
    if (!touchWord) return;

    if (touchWordClone) {
        touchWordClone.remove();
        touchWordClone = null;
    }

    const touch = e.changedTouches[0];
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropzone = elemBelow ? elemBelow.closest('.blank-dropzone') : null;
    const wordBank = elemBelow ? elemBelow.closest('#word-bank') : null;

    if (dropzone) {
        // If dropzone already has a word, move it back to bank
        if (dropzone.children.length > 0) {
            const existingWord = dropzone.children[0];
            restoreWordPillStyle(existingWord);
            existingWord.style.opacity = '1';
            document.getElementById('word-bank').appendChild(existingWord);
        }

        // Style word as text inside dropzone
        touchWord.style.minWidth = 'auto';
        touchWord.style.padding = '0';
        touchWord.style.background = 'transparent';
        touchWord.style.boxShadow = 'none';
        touchWord.style.color = 'var(--primary)';
        touchWord.style.opacity = '1';

        dropzone.appendChild(touchWord);
        dropzone.style.borderColor = 'var(--primary)';
    } else if (wordBank && touchWord.parentElement.classList.contains('blank-dropzone')) {
        // Dropping back into word bank
        touchWord.parentElement.style.borderColor = 'var(--border)';
        restoreWordPillStyle(touchWord);
        touchWord.style.opacity = '1';
        wordBank.appendChild(touchWord);
    } else {
        touchWord.style.opacity = '1';
    }

    document.querySelectorAll('.blank-dropzone').forEach(dz => dz.style.borderColor = dz.children.length > 0 ? 'var(--primary)' : 'var(--border)');
    touchWord = null;
}

window.handleMatchDrop = function () { } // deprecated, kept for safety

// ===== CLICK-TO-PAIR MATCHING LOGIC =====
const MATCH_COLORS = [
    { border: '#3B82F6' },  // Standard Blue
    { border: '#10B981' },  // Standard Green
    { border: '#F59E0B' },  // Standard Amber/Yellow
    { border: '#EF4444' },  // Standard Red
    { border: '#8B5CF6' },  // Standard Purple
];

let matchState = { selectedLeft: null, pairs: [], colorIndex: 0 };

window.selectMatchLeft = function (el) {
    const leftIndex = el.getAttribute('data-index');

    // If already paired, unpair it
    const existingPair = matchState.pairs.find(p => p.leftIndex === leftIndex);
    if (existingPair) {
        unpairMatch(existingPair);
        return;
    }

    // Deselect previous left selection
    document.querySelectorAll('.match-left-item').forEach(item => {
        if (!matchState.pairs.find(p => p.leftIndex === item.getAttribute('data-index'))) {
            item.style.borderColor = 'var(--border)';
            item.style.background = 'var(--bg-card)';
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        }
    });

    // Highlight this one
    matchState.selectedLeft = el;
    el.style.borderColor = 'var(--primary)';
    el.style.background = 'rgba(30, 58, 95, 0.12)';
    el.style.transform = 'scale(1.03)';
    el.style.boxShadow = '0 0 16px rgba(30, 58, 95, 0.3)';

    updateMatchStatus();
}

window.selectMatchRight = function (el) {
    const rightIndex = el.getAttribute('data-index');

    // If already paired, unpair it
    const existingPair = matchState.pairs.find(p => p.rightIndex === rightIndex);
    if (existingPair) {
        unpairMatch(existingPair);
        return;
    }

    // If no left is selected, flash hint
    if (!matchState.selectedLeft) {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = 'shake 0.4s ease';
        updateMatchStatus('Pick an item on the left first!');
        return;
    }

    // Pair them!
    const color = MATCH_COLORS[matchState.colorIndex % MATCH_COLORS.length];
    matchState.colorIndex++;

    const leftEl = matchState.selectedLeft;
    const leftIndex = leftEl.getAttribute('data-index');

    // Style left — border only
    leftEl.style.borderColor = color.border;
    leftEl.style.background = 'var(--bg-card)';
    leftEl.style.borderLeftWidth = '5px';
    leftEl.style.transform = 'scale(1)';
    leftEl.style.boxShadow = 'none';
    leftEl.style.color = '';
    leftEl.style.fontWeight = '700';

    // Style right — border only
    el.style.borderColor = color.border;
    el.style.background = 'var(--bg-card)';
    el.style.borderLeftWidth = '5px';
    el.style.color = '';
    el.style.fontWeight = '600';

    // Record pair
    matchState.pairs.push({
        leftIndex: leftIndex,
        rightIndex: rightIndex,
        leftText: leftEl.getAttribute('data-text'),
        rightText: el.getAttribute('data-text'),
        color: color
    });

    matchState.selectedLeft = null;
    updateMatchStatus();

    // Show submit button when all pairs are made
    const { chapterId, levelId, questionIndex } = currentActivityState;
    const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];
    if (matchState.pairs.length === activity.pairs.length) {
        document.getElementById('submit-btn').style.display = 'block';
        updateMatchStatus('All paired! Hit Check Matches.');
    }
}

function unpairMatch(pair) {
    // Reset left
    const leftEl = document.querySelector(`.match-left-item[data-index="${pair.leftIndex}"]`);
    if (leftEl) {
        leftEl.style.borderColor = 'var(--border)';
        leftEl.style.background = 'var(--bg-card)';
        leftEl.style.borderLeftWidth = '2px';
        leftEl.style.color = '';
        leftEl.style.fontWeight = '600';
    }
    // Reset right
    const rightEl = document.querySelector(`.match-right-item[data-index="${pair.rightIndex}"]`);
    if (rightEl) {
        rightEl.style.borderColor = 'var(--border)';
        rightEl.style.background = 'var(--bg-card)';
        rightEl.style.borderLeftWidth = '2px';
        rightEl.style.color = '';
        rightEl.style.fontWeight = '';
    }
    // Remove from pairs
    matchState.pairs = matchState.pairs.filter(p => p !== pair);
    matchState.selectedLeft = null;

    // IMPORTANT: Also visually reset any left selection that was highlighted but not yet paired
    document.querySelectorAll('.match-left-item').forEach(item => {
        if (!matchState.pairs.find(p => p.leftIndex === item.getAttribute('data-index'))) {
            item.style.borderColor = 'var(--border)';
            item.style.background = 'var(--bg-card)';
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        }
    });

    // Hide submit if not all paired
    document.getElementById('submit-btn').style.display = 'none';
    updateMatchStatus();
}

function updateMatchStatus(msg) {
    const statusEl = document.getElementById('match-status');
    if (!statusEl) return;
    if (msg) {
        statusEl.textContent = msg;
    } else if (matchState.selectedLeft) {
        statusEl.innerHTML = `Now pick a match on the <strong>right</strong> →`;
    } else if (matchState.pairs.length > 0) {
        const { chapterId, levelId, questionIndex } = currentActivityState;
        const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];
        statusEl.textContent = `${matchState.pairs.length} of ${activity.pairs.length} paired. Tap a pair to undo.`;
    } else {
        statusEl.innerHTML = `← Pick an item on the <strong>left</strong> to start`;
    }
}

// Check Matching Answers (click-to-pair version)
window.checkMatchingAnswer = function () {
    const submitBtn = document.getElementById('submit-btn');

    const { chapterId, levelId, questionIndex } = currentActivityState;
    const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];

    let allCorrect = true;

    matchState.pairs.forEach(pair => {
        // Find the correct right text for this left text
        const correctPair = activity.pairs.find(p => p.left === pair.leftText);
        const leftEl = document.querySelector(`.match-left-item[data-index="${pair.leftIndex}"]`);
        const rightEl = document.querySelector(`.match-right-item[data-index="${pair.rightIndex}"]`);

        if (correctPair && pair.rightText === correctPair.right) {
            // Correct — border only
            if (leftEl) { leftEl.style.borderColor = 'var(--success)'; }
            if (rightEl) { rightEl.style.borderColor = 'var(--success)'; }
        } else {
            allCorrect = false;
            // Wrong — border only
            if (leftEl) { leftEl.style.borderColor = 'var(--error)'; }
            if (rightEl) { rightEl.style.borderColor = 'var(--error)'; }
        }
    });

    // Disable further clicking
    document.querySelectorAll('.match-left-item, .match-right-item').forEach(el => {
        el.onclick = null;
        el.style.cursor = 'default';
    });
    submitBtn.style.display = 'none';
    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    if (allCorrect) {
        currentLevelSession.correctCount++;
        if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
        currentLevelSession.totalQuestions++;

        const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;
        if (!currentLevelSession.completedThisSession.includes(questionId)) {
            currentLevelSession.completedThisSession.push(questionId);
        }

        showFeedbackUI({
            isCorrect: true,
            title: 'Perfect Match!',
            message: activity.correctFeedback || "All concepts linked correctly."
        });
    } else {
        currentLevelSession.totalQuestions++;
        showFeedbackUI({
            isCorrect: false,
            title: 'Not Quite',
            message: activity.incorrectFeedback || "Some pairs are incorrect."
        });
    }

    // Reset match state for next question
    matchState = { selectedLeft: null, pairs: [], colorIndex: 0 };
}

// ===== FILL IN THE BLANKS DRAG LOGIC =====
let draggedWord = null;
window.handleWordDragStart = function (e) {
    draggedWord = e.target;
    e.dataTransfer.effectAllowed = 'move';
}

window.handleBlankDrop = function (e) {
    e.preventDefault();
    const dropzone = e.target.closest('.blank-dropzone');
    if (dropzone && draggedWord) {
        // If dropzone already has a word, move it back to bank and restore pill style
        if (dropzone.children.length > 0) {
            const existingWord = dropzone.children[0];
            restoreWordPillStyle(existingWord);
            document.getElementById('word-bank').appendChild(existingWord);
        }

        // Style word as plain text inside the dropzone
        draggedWord.style.minWidth = 'auto';
        draggedWord.style.padding = '0';
        draggedWord.style.background = 'transparent';
        draggedWord.style.boxShadow = 'none';
        draggedWord.style.color = 'var(--primary)';

        dropzone.appendChild(draggedWord);
        dropzone.style.borderColor = 'var(--primary)'; // highlight box
        draggedWord = null;
    }
}

// Helper to restore pill styling when moving back to bank
function restoreWordPillStyle(wordEl) {
    wordEl.style.minWidth = '120px';
    wordEl.style.padding = '0.6rem 1rem';
    wordEl.style.background = 'var(--primary)';
    wordEl.style.boxShadow = '0 4px 0 rgba(20, 60, 99, 0.2)';
    wordEl.style.color = 'white';
}

// Allow dropping back in word bank
window.addEventListener('dragover', function (e) {
    if (e.target.id === 'word-bank') e.preventDefault();
});
window.addEventListener('drop', function (e) {
    if (e.target.id === 'word-bank' && draggedWord && draggedWord.parentElement.classList.contains('blank-dropzone')) {
        e.preventDefault();

        // Reset dropzone border
        draggedWord.parentElement.style.borderColor = 'var(--border)';

        // Restore pill style and move
        restoreWordPillStyle(draggedWord);
        e.target.appendChild(draggedWord);
        draggedWord = null;
    }
});

// Check Fill in the Blanks Answer
window.checkFillInBlanksAnswer = function () {
    const submitBtn = document.getElementById('submit-btn');
    const dropzones = document.querySelectorAll('.blank-dropzone');

    let allFilled = true;
    let allCorrect = true;

    dropzones.forEach(zone => {
        if (zone.children.length === 0) {
            allFilled = false;
        } else {
            const word = zone.children[0].getAttribute('data-word');
            const correct = zone.getAttribute('data-correct');
            if (word !== correct) {
                allCorrect = false;
                zone.style.borderColor = 'var(--error)';
                zone.children[0].style.color = 'var(--error)';
            } else {
                zone.style.borderColor = 'var(--success)';
                zone.children[0].style.color = 'var(--success)';
            }
        }
    });

    if (!allFilled) {
        showFeedbackUI({
            isCorrect: false,
            message: 'Please fill all the blanks!',
            onContinue: "document.getElementById('global-feedback-area').innerHTML='';"
        });
        return;
    }

    submitBtn.style.display = 'none';

    const skipBtn = document.getElementById('skip-btn-container');
    if (skipBtn) skipBtn.style.display = 'none';

    const { chapterId, levelId, questionIndex } = currentActivityState;
    const questionId = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].id;
    const activity = window.courseData.find(c => c.id === chapterId).levels.find(l => l.id === levelId).questions[questionIndex].activities[0];

    if (allCorrect) {
        currentLevelSession.correctCount++;
        if (!currentLevelSession.isReplay) currentLevelSession.xpGained += getGamificationRewards().xpPerQuestion;
        currentLevelSession.totalQuestions++;

        if (!currentLevelSession.completedThisSession.includes(questionId)) {
            currentLevelSession.completedThisSession.push(questionId);
        }

        showFeedbackUI({
            isCorrect: true,
            title: 'Correct!',
            message: activity.correctFeedback || "You've completed the sentence perfectly."
        });
    } else {
        currentLevelSession.totalQuestions++;
        showFeedbackUI({
            isCorrect: false,
            title: 'Incorrect',
            message: activity.incorrectFeedback || "Some words are in the wrong place."
        });
    }
}

// Helper: Show Feedback Card (Global Body Level)
window.showFeedbackUI = function (options) {
    const { isCorrect, title, message, xp = 0, onContinue = null, isSkip = false } = options;
    const feedbackArea = document.getElementById('global-feedback-area');
    if (!feedbackArea) return;

    window.currentFeedbackXP = xp;
    window.currentFeedbackOnContinue = onContinue;

    const color = isCorrect ? 'var(--success)' : 'var(--error)';
    const icon = isCorrect ? 'check_circle' : (isSkip ? 'skip_next' : 'cancel');
    const displayTitle = title || (isCorrect ? 'Correct!' : 'Incorrect');

    feedbackArea.innerHTML = `
        <div style="position: fixed; bottom: 5rem; left: 50%; transform: translateX(-50%); 
                    width: min(94%, 720px); padding: 1.5rem 2rem; 
                    background: var(--bg-card); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
                    border: 2px solid ${color}; border-radius: var(--radius-m); 
                    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3); 
                    display: flex; align-items: center; gap: 1.25rem; 
                    z-index: 999999; pointer-events: auto !important;">
            <div style="flex: 1;">
                <h4 style="color: ${color}; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.5rem; font-family: 'Outfit', sans-serif;">
                    <span class="material-symbols-rounded">${icon}</span> ${displayTitle}
                </h4>
                <p style="font-size: 0.95rem; color: var(--text-muted); margin: 0; line-height: 1.4;">${message}</p>
            </div>
            <button class="btn-primary" style="flex-shrink: 0; padding: 0.8rem 1.8rem; background: var(--gradient-primary); border: none; color: white; border-radius: 12px; font-weight: 700; cursor: pointer; transition: all 0.2s;" 
                    onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"
                    onclick="this.disabled=true; window.handleFeedbackContinue();">
                Continue
            </button>
        </div>
    `;
}

window.handleFeedbackContinue = function () {
    const xp = window.currentFeedbackXP || 0;
    const onContinue = window.currentFeedbackOnContinue;

    const feedbackArea = document.getElementById('global-feedback-area');
    if (feedbackArea) {
        feedbackArea.innerHTML = '';
    }

    if (onContinue) {
        if (typeof onContinue === 'function') {
            onContinue();
        } else if (typeof onContinue === 'string') {
            try {
                if (onContinue === 'skipContinue()') {
                    window.skipContinue();
                } else {
                    const fn = new Function(onContinue);
                    fn();
                }
            } catch (e) {
                console.error("Error executing onContinue string:", e);
            }
        }
    } else {
        window.nextActivity(xp);
    }
}

window.nextActivity = function (xpToAdd) {
    if (xpToAdd > 0) {
        // Track for session
        currentLevelSession.correctCount++;
        currentLevelSession.totalQuestions++;

        if (!currentLevelSession.isReplay) {
            currentLevelSession.xpGained += xpToAdd;
            addXP(xpToAdd);
        }
        updateDesktopPanels();
    }

    currentActivityState.activityIndex++;
    renderActivity();
}

// Level Completion Summary
function renderLevelComplete(chapterId, levelId) {
    document.body.classList.remove('game-active');
    console.log("Entering renderLevelComplete:", { chapterId, levelId });
    window.currentView = 'complete';
    updateDesktopPanels();

    if (!window.courseData) return;

    const chapter = window.courseData.find(c => c.id === chapterId);
    if (!chapter) {
        console.error("ERROR: Chapter not found in renderLevelComplete:", chapterId);
        renderChapters();
        return;
    }

    const level = chapter.levels.find(l => l.id === levelId);
    if (!level) {
        console.error("ERROR: Level not found in renderLevelComplete:", levelId);
        renderLevels(chapterId);
        return;
    }

    const { correctCount, xpGained, startXP, completedThisSession } = currentLevelSession;

    // Safety filter to ensure we don't count INTRO cards as questions if they were skipped/tracked weirdly
    const realQuestions = level.questions.filter(q => !q.id.includes('INTRO'));
    const actualTotalQs = realQuestions.length || 1; // Avoid division by zero
    const percentage = Math.round((correctCount / actualTotalQs) * 100);
    const passed = percentage >= 80;

    // Commit Level Stats if passed
    let displayXP = 0;
    let displayGems = 0;

    if (passed) {
        const currentStats = gameState.levelStats[levelId] || { score: 0, total: 0, passed: false };

        // Calculate what we should show in the results UI
        const rewards = getGamificationRewards(chapterId, levelId);
        displayXP = correctCount * rewards.xpPerQuestion;
        displayGems = rewards.gemsForLevel;

        // Only update if the score is better or it's the first pass
        if (!currentStats.passed || (correctCount > currentStats.score)) {
            gameState.levelStats[levelId] = {
                score: correctCount,
                total: actualTotalQs,
                passed: true,
                updatedAt: new Date().toISOString()
            };
            console.log(`Updated stats for ${levelId}: ${correctCount}/${actualTotalQs}`);
        }

        // Commit Completed Questions
        completedThisSession.forEach(qId => {
            if (!gameState.completedQuestions.includes(qId)) {
                gameState.completedQuestions.push(qId);
            }
        });

        // Derive XP/Gems from the updated stats
        recalculateStats();

        // 4. Streak Increment Logic (Once per calendar day)
        const todayStr = new Date().toDateString();
        const lastPlayed = gameState.lastPlayedDate ? new Date(gameState.lastPlayedDate).toDateString() : null;

        if (todayStr !== lastPlayed) {
            // Note: Server has already reset streak to 1 if they missed days.
            // If they play on a new day, we increment.
            // If it's their first time ever, it stays at 1 (initially set by server/default).
            if (lastPlayed) {
                gameState.streak += 1;
                console.log("Streak incremented! New streak:", gameState.streak);
            }
            gameState.lastPlayedDate = new Date().toISOString();
        }

        // Trigger Leaderboard Update
        saveProgress(true);
    }

    // Check if next level unlocked
    const levelIndex = chapter.levels.findIndex(l => l.id === levelId);
    const hasNextLevel = levelIndex < chapter.levels.length - 1;
    const nextLevel = hasNextLevel ? chapter.levels[levelIndex + 1] : null;
    const nextLevelUnlocked = passed && nextLevel && !gameState.unlockedLevels.includes(nextLevel.id);

    if (nextLevelUnlocked) {
        gameState.unlockedLevels.push(nextLevel.id);
    }

    // CHAPTER UNLOCK LOGIC: Check if ALL levels in this chapter are now passed
    let chapterUnlocked = false;
    let nextChapter = null;
    if (passed) {
        const allLevelsDone = chapter.levels.every(lvl => {
            return gameState.levelStats[lvl.id] && gameState.levelStats[lvl.id].passed;
        });

        if (allLevelsDone) {
            const chapterIndex = window.courseData.findIndex(c => c.id === chapterId);
            if (chapterIndex < window.courseData.length - 1) {
                nextChapter = window.courseData[chapterIndex + 1];
                if (!gameState.unlockedChapters.includes(nextChapter.id)) {
                    gameState.unlockedChapters.push(nextChapter.id);
                    // Also unlock first level of next chapter
                    const firstLevelNext = nextChapter.levels[0];
                    if (!gameState.unlockedLevels.includes(firstLevelNext.id)) {
                        gameState.unlockedLevels.push(firstLevelNext.id);
                    }
                    chapterUnlocked = true;
                }
            }
        }
    }

    // Single unified progress save to Neon database and LocalStorage
    if (passed) {
        saveProgress(true);
    }

    if (nextLevelUnlocked) {
        showModal({
            title: 'Level Unlocked!',
            message: `Nice work! "${nextLevel.title}" is now available.`,
            confirmText: 'Keep Going!',
            cancelText: null,
            pollyState: 'happy'
        });
    }

    if (chapterUnlocked && nextChapter) {
        showModal({
            title: 'Chapter Completed!',
            message: `Amazing! You have mastered "${chapter.title}". "${nextChapter.title}" is now available.`,
            confirmText: 'Onwards!',
            cancelText: null,
            pollyState: 'happy'
        });
    }

    app.innerHTML = `
        <div class="main-scroll-area" style="padding: 2.5rem 1.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%;">
            <div style="width: 160px; height: 140px; margin: 1.5rem auto 1.5rem auto; filter: drop-shadow(0 10px 25px rgba(0,0,0,0.3)); display: flex; justify-content: center; align-items: center; position: relative; overflow: visible;">
                ${window.getMascotSVG('100%', '100%', passed ? 'happy' : 'neutral')}
            </div>
            <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--text-main);">${passed ? 'Level Complete!' : 'Keep Practicing!'}</h2>
            <p style="color: var(--text-muted); margin-bottom: 3rem;">${passed ? 'Great work! You passed this level.' : 'You need 80% accuracy to pass.'}</p>
            
            <div style="background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border-radius: var(--radius-m); padding: 2rem; margin-bottom: 2rem; border: 1px solid var(--border); width: 100%; max-width: 420px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; margin-bottom: 2rem;">
                    <div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: var(--accent); white-space: nowrap;">${correctCount}/${actualTotalQs}</div>
                        <div style="color: var(--text-muted); font-size: 0.8rem;">Correct</div>
                    </div>
                    <div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: ${passed ? 'var(--success)' : 'var(--text-muted)'}; white-space: nowrap;">⚡ +${displayXP}</div>
                        <div style="color: var(--text-muted); font-size: 0.8rem;">XP</div>
                    </div>
                    <div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: ${passed && displayGems > 0 ? '#00C896' : 'var(--text-muted)'}; white-space: nowrap;">💎 +${displayGems}</div>
                        <div style="color: var(--text-muted); font-size: 0.8rem;">Gems</div>
                    </div>
                </div>
                
                <div style="height: 8px; background: rgba(209, 246, 255, 0.1); border-radius: 10px; overflow: hidden; margin-bottom: 0.5rem;">
                    <div style="width: ${percentage}%; height: 100%; background: ${passed ? 'var(--success)' : 'var(--error)'}; transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);"></div>
                </div>
                <div style="font-size: 0.9rem; color: var(--text-muted);">${percentage}% Accuracy</div>
            </div>
            
            ${nextLevelUnlocked ? `
                <div style="background: rgba(var(--primary-rgb), 0.1); border: 1px solid rgba(var(--primary-rgb), 0.3); border-radius: var(--radius-m); padding: 1.5rem; margin-bottom: 2rem; width: 100%; max-width: 420px;">
                    <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔓 Level Unlocked!</div>
                    <div style="color: var(--text-muted);">${nextLevel.title}</div>
                </div>
            ` : ''
        }

            ${(passed && nextLevel) ? `
                <div style="display: flex; flex-direction: row; gap: 1rem; width: 100%; max-width: 480px;">
                    <button class="btn-secondary" onclick="window.innerWidth < 1024 ? renderChapters() : renderLevels('${chapterId}')" style="flex: 1; white-space: nowrap;">Back to Home</button>
                    <button class="btn-primary" onclick="renderQuestionList('${chapterId}', '${nextLevel.id}')" style="flex: 1; white-space: nowrap;">Next Level</button>
                </div>
            ` : (passed && !hasNextLevel) ? `
                <button class="btn-primary" onclick="renderChapters()" style="white-space: nowrap; min-width: 200px;">Back to Home</button>
            ` : `
                <button class="btn-primary" onclick="window.innerWidth < 1024 ? renderChapters() : renderLevels('${chapterId}')" style="margin-bottom: 1rem;">Back to Home</button>
                ${!passed ? `<button class="btn-secondary" onclick="renderQuestionList('${chapterId}', '${levelId}')">Try Again</button>` : ''}
            `}
        </div>
        `;
}

// Confirm exit during level - Custom Modal
window.confirmExitLevel = function (chapterId, levelId) {
    showModal({
        icon: null,
        title: 'Exit Level?',
        message: 'Are you sure you want to exit? Your progress will be lost.',
        confirmText: 'Exit',
        cancelText: 'Stay',
        onConfirm: () => window.innerWidth < 1024 ? renderChapters() : renderLevels(chapterId)
    });
}

// Custom Modal System

// --- Intro Demo (Onboarding Tour) ---
let currentDemoStep = 0;
let demoDismissalTimeout = null;
// Returns the appropriate demo steps depending on screen size
function getDemoSteps() {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
        return [
            {
                targetId: 'app',
                title: 'Welcome to Odyssey!',
                message: 'This is your learning voyage. Let\'s take a quick tour to help you navigate and master AI concepts.',
                position: 'center'
            },
            {
                targetId: 'dashboard-stats-banner',
                title: 'Your Progress Dashboard',
                message: 'Track your XP, Gems, Rank, and daily Streak all in one glance. Tap the Rank to see the full leaderboard!',
                position: 'bottom'
            },
            {
                targetId: 'active-chapter-card',
                title: 'Your Active Chapter',
                message: 'This is your current focus. Score at least 8/10 on each level to pass and unlock the next challenge!',
                position: 'bottom'
            },
            {
                targetId: 'mobile-nav',
                title: 'Navigation Bar',
                message: 'Use the bottom bar to jump between Home, Rankings, and Settings, including theme and logout controls.',
                position: 'top'
            },
            {
                targetId: 'app',
                title: 'Ready to Explore?',
                message: 'You\'re all set! Dive into Chapter 1 and begin your odyssey. Good luck, Traveler!',
                position: 'center'
            }
        ];
    }
    // Desktop steps (original)
    return [
        {
            targetId: 'app',
            title: 'Welcome to Odyssey!',
            message: 'This is your learning voyage. Let\'s take a tour to help you navigate and master AI concepts.',
            position: 'center'
        },
        {
            targetId: 'dashboard-stats-banner',
            title: 'Your Progress',
            message: 'Track your XP, Gems, and Rank here. See your current Learning Streak and how much of the journey you\'ve completed!',
            position: 'bottom'
        },
        {
            targetId: 'mini-leaderboard-card',
            title: 'Global Rankings',
            message: 'See where you stand against other explorers. Registered users compete for the top spots on the Global Leaderboard.',
            position: 'right'
        },
        {
            targetId: 'sidebar-banter-container',
            title: 'AI Insights',
            message: 'Our AI companion shares daily tips, fun facts, and progress updates right here.',
            position: 'right'
        },
        {
            targetId: 'app',
            title: 'The Learning Path',
            message: 'This is the heart of Odyssey. Explore Chapters and Levels. Each level focuses on a different aspect of AI.',
            position: 'bottom'
        },
        {
            targetId: 'active-chapter-card',
            title: 'Active Chapter',
            message: 'This is your current focus. Each chapter contains multiple levels. Score at least 8/10 on each to pass and unlock the next challenge!',
            position: 'bottom'
        },
        {
            targetId: 'app',
            title: 'Ready to Explore?',
            message: 'You\'re all set! Dive into Chapter 1 and begin your odyssey. Good luck, Traveler!',
            position: 'center'
        }
    ];
}

let _demoSteps = [];

window.showIntroDemo = function (force = false) {
    if (window.innerWidth < 1024) return; // Completely disable onboarding tour on mobile
    if (gameState.demoCompleted && !force) return;

    // If not on home page, go home first so the tour targets exist
    if (window.currentView !== 'home') {
        renderChapters();
        setTimeout(() => window.showIntroDemo(force), 150);
        return;
    }

    // Rebuild steps for current screen size each time
    _demoSteps = getDemoSteps();

    if (demoDismissalTimeout) {
        clearTimeout(demoDismissalTimeout);
        demoDismissalTimeout = null;
    }

    currentDemoStep = 0;

    // Create overlay if not exists
    let overlay = document.querySelector('.demo-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'demo-overlay';
        overlay.onclick = closeDemo;
        document.body.appendChild(overlay);
    }

    // Create highlight if not exists
    let highlight = document.querySelector('.demo-highlight');
    if (!highlight) {
        highlight = document.createElement('div');
        highlight.className = 'demo-highlight';
        document.body.appendChild(highlight);
    }

    // Create tooltip if not exists
    let tooltip = document.querySelector('.demo-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'demo-tooltip';
        document.body.appendChild(tooltip);
    }

    renderDemoStep();

    overlay.classList.add('active');
    highlight.classList.add('active');
    tooltip.classList.add('active');
};

function renderDemoStep() {
    const step = _demoSteps[currentDemoStep];
    const tooltip = document.querySelector('.demo-tooltip');
    const highlight = document.querySelector('.demo-highlight');
    const target = document.getElementById(step.targetId);

    if (!target) {
        // Skip missing targets gracefully (e.g. mobile nav has id="mobile-nav" but some steps may still miss)
        console.warn(`Demo target #${step.targetId} not found — skipping step.`);
        if (currentDemoStep < _demoSteps.length - 1) {
            currentDemoStep++;
            renderDemoStep();
        } else {
            closeDemo();
        }
        return;
    }


    // Scroll to target if not in center; reset scroll for center steps
    if (step.position !== 'center') {
        target.scrollIntoView({ behavior: 'auto', block: 'center' });
    } else {
        const scrollArea = document.querySelector('.app-content');
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Step 5 (index 4) targets #app itself — reset inner scroll so it doesn't stay dragged down
    if (currentDemoStep === 4) {
        const scrollArea = document.querySelector('.app-content');
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Update Content
    tooltip.innerHTML = `
        <div class="demo-step-counter">Step ${currentDemoStep + 1} of ${_demoSteps.length}</div>
        <h3>${step.title}</h3>
        <p>${step.message}</p>
        <div class="demo-btn-group">
            <button class="demo-btn demo-btn-skip" onclick="closeDemo()">Skip</button>
            <div style="display: flex; gap: 0.5rem;">
                ${currentDemoStep > 0 ? `<button class="demo-btn" onclick="prevDemoStep()" style="border: 1px solid var(--border); color: var(--text-muted); font-size: 0.8rem; padding: 4px 12px; border-radius: 20px;">Back</button>` : ''}
                <button class="demo-btn demo-btn-next" onclick="nextDemoStep()">
                    ${currentDemoStep === _demoSteps.length - 1 ? 'Start Learning' : 'Next'}
                </button>
            </div>
        </div>
    `;

    // Calculate Positioning
    const rect = target.getBoundingClientRect();
    const padding = 10;

    // Position Highlight
    highlight.style.top = (rect.top - padding) + 'px';
    highlight.style.left = (rect.left - padding) + 'px';
    highlight.style.width = (rect.width + padding * 2) + 'px';
    highlight.style.height = (rect.height + padding * 2) + 'px';

    // Position Tooltip
    const tooltipRect = tooltip.getBoundingClientRect();
    let top, left;

    // Step 5 (index 4): blur with spotlight, no orange border
    const isSpotlightNoHighlight = (currentDemoStep === 4);

    if (step.position === 'center') {
        top = (window.innerHeight / 2) - (tooltipRect.height / 2);
        left = (window.innerWidth / 2) - (tooltipRect.width / 2);
        highlight.style.opacity = '0';
    } else {
        // Hide orange highlight for step 5
        highlight.style.opacity = isSpotlightNoHighlight ? '0' : '1';
        if (step.position === 'right') {
            top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
            left = rect.right + 20;
        } else if (step.position === 'left') {
            top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
            left = rect.left - tooltipRect.width - 20;
        } else if (step.position === 'bottom') {
            top = rect.bottom + 20;
            left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        } else if (step.position === 'top') {
            top = rect.top - tooltipRect.height - 20;
            left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        }
    }

    // Boundary checks
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) left = window.innerWidth - tooltipRect.width - 10;
    if (top < 10) top = 10;
    if (top + tooltipRect.height > window.innerHeight - 10) top = window.innerHeight - tooltipRect.height - 10;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';

    // Overlay: always active to block background interaction; clicking it closes demo
    const overlay = document.querySelector('.demo-overlay');
    const isBlurStep = (currentDemoStep === 0 || currentDemoStep === _demoSteps.length - 1);
    if (overlay) {
        overlay.style.pointerEvents = 'all';
        overlay.style.clipPath = 'none';
        overlay.style.webkitClipPath = 'none';

        if (isBlurStep) {
            // Full blur overlay
            overlay.style.opacity = '1';
            overlay.style.background = 'rgba(5, 10, 30, 0.7)';
            overlay.style.backdropFilter = 'blur(10px)';
            overlay.style.webkitBackdropFilter = 'blur(10px)';

            if (!step.position || step.position === 'center') {
                // No clip-path hole needed for center steps
            } else {
                const hL = rect.left - padding;
                const hT = rect.top - padding;
                const hR = rect.right + padding;
                const hB = rect.bottom + padding;

                const holePolygon = `polygon(
                    0% 0%, 
                    0% 100%, 
                    ${hL}px 100%, 
                    ${hL}px ${hT}px, 
                    ${hR}px ${hT}px, 
                    ${hR}px ${hB}px, 
                    ${hL}px ${hB}px, 
                    ${hL}px 100%, 
                    100% 100%, 
                    100% 0%
                )`;
                overlay.style.clipPath = holePolygon;
                overlay.style.webkitClipPath = holePolygon;
            }
        } else {
            // Non-blur steps: subtle scrim to block interaction without heavy blur
            overlay.style.opacity = '1';
            overlay.style.background = 'rgba(5, 10, 30, 0.35)';
            overlay.style.backdropFilter = 'none';
            overlay.style.webkitBackdropFilter = 'none';
        }
    }

    // Blur the left panel on step 5 (desktop index 4, "The Learning Path")
    const leftPanel = document.getElementById('left-panel');
    if (leftPanel) {
        if (currentDemoStep === 4) {
            leftPanel.style.filter = 'blur(6px) brightness(0.7)';
            leftPanel.style.transition = 'filter 0.4s ease';
            leftPanel.style.pointerEvents = 'none';
        } else {
            leftPanel.style.filter = '';
            leftPanel.style.transition = 'filter 0.4s ease';
            leftPanel.style.pointerEvents = '';
        }
    }
}

window.nextDemoStep = function () {
    if (currentDemoStep < _demoSteps.length - 1) {
        currentDemoStep++;
        renderDemoStep();
    } else {
        closeDemo();
    }
};

window.prevDemoStep = function () {
    if (currentDemoStep > 0) {
        currentDemoStep--;
        renderDemoStep();
    }
};

window.closeDemo = function () {
    const overlay = document.querySelector('.demo-overlay');
    const highlight = document.querySelector('.demo-highlight');
    const tooltip = document.querySelector('.demo-tooltip');

    if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'none';
        overlay.style.background = '';
        overlay.style.backdropFilter = '';
        overlay.style.webkitBackdropFilter = '';
        overlay.classList.remove('active');
        // Delay resetting clipPath until transition finishes (match style.css 0.5s transition)
        demoDismissalTimeout = setTimeout(() => {
            overlay.style.clipPath = 'none';
            overlay.style.webkitClipPath = 'none';
            demoDismissalTimeout = null;
        }, 500);
    }
    if (highlight) highlight.classList.remove('active');
    if (tooltip) tooltip.classList.remove('active');

    // Clean up left panel blur (from step 5)
    const leftPanel = document.getElementById('left-panel');
    if (leftPanel) {
        leftPanel.style.filter = '';
        leftPanel.style.pointerEvents = '';
    }

    // Reset scroll position after overlay fades out (step 6 may have scrolled content down)
    setTimeout(() => {
        const scrollArea = document.querySelector('.app-content');
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);

    gameState.demoCompleted = true;
    saveProgress();
};

// Global helper — close whichever modal is currently open
window.closeModal = function () {
    const modals = document.querySelectorAll('.app-modal');
    if (modals.length === 0) return;
    const modal = modals[modals.length - 1];
    if (!modal || modal.classList.contains('closing')) return;
    modal.classList.add('closing');
    modal.style.pointerEvents = 'none'; // prevent click-eating during fade-out
    modal.style.animation = 'fadeOut 0.2s ease-in forwards';
    const card = modal.querySelector('div');
    if (card) {
        card.style.animation = 'scaleOut 0.2s ease-in forwards';
    }
    setTimeout(() => {
        modal.remove();
        const remaining = document.querySelectorAll('.app-modal');
        if (remaining.length === 0) {
            let key = window.currentView;
            if (key === 'chapter' || key === 'activity' || key === 'complete' || key === 'admin') {
                key = 'home';
            } else if (key === 'leaderboard') {
                key = 'ranks';
            }
            updateMobileNav(key);
        }
    }, 200);
};

function showModal({ icon = '❓', title, message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, customHtml = null, confirmClass = 'btn-primary', cancelClass = 'btn-secondary', cardStyle = '', pollyState = null }) {
    const modal = document.createElement('div');
    modal.className = 'app-modal';
    modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(10, 11, 16, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    animation: fadeIn 0.2s ease-out;
    `;

    modal.innerHTML = `
        <div class="custom-scrollbar" style="position: relative; background: var(--bg-card); backdrop-filter: var(--backdrop-blur); -webkit-backdrop-filter: var(--backdrop-blur); border-radius: var(--radius-m); padding: ${pollyState ? '3.5rem 2.5rem 2.5rem 2.5rem' : '2.5rem'}; max-width: 440px; width: 90%; max-height: 85vh; overflow-y: auto; margin: 1.5rem; border: 1px solid var(--border); animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); ${cardStyle}">
            <span class="material-symbols-rounded" id="modal-close-icon" style="position: absolute; top: 1rem; right: 1rem; font-size: 1.5rem; color: var(--text-muted); cursor: pointer; transition: color 0.2s; user-select: none;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">close</span>
            ${pollyState ? `
             <div style="width: 140px; height: 120px; margin: 1.5rem auto 1.5rem auto; filter: drop-shadow(0 8px 20px rgba(0,0,0,0.25)); display: flex; justify-content: center; align-items: center; position: relative; overflow: visible;">
                ${window.getMascotSVG('100%', '100%', pollyState)}
            </div>
            ` : icon ? `
            <div style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">${/\p{Emoji}/u.test(icon) ? icon : `<span class="material-symbols-rounded" style="font-size: 2.5rem; color: var(--accent);">${icon}</span>`}</div>
            ` : ''}
            ${title ? `<h3 style="text-align: center; margin-bottom: 0.5rem; font-size: 1.5rem; font-weight: 800;">${title}</h3>` : ''}
            ${message ? `<p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.5; font-size: 1rem;">${message}</p>` : ''}
            ${customHtml || ''}
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                ${cancelText ? `<button id="modal-cancel" class="${cancelClass}" style="flex: 1; padding: 0.85rem; font-weight: 700; font-size: 0.95rem;">${cancelText}</button>` : ''}
                ${confirmText ? `<button id="modal-confirm" class="${confirmClass}" style="flex: 1; padding: 0.85rem; font-weight: 700; font-size: 0.95rem;">${confirmText}</button>` : ''}
            </div>
        </div>
        `;

    document.body.appendChild(modal);

    const closeModal = () => {
        if (modal.classList.contains('closing')) return;
        modal.classList.add('closing');
        modal.style.pointerEvents = 'none'; // prevent click-eating during fade-out
        modal.style.animation = 'fadeOut 0.2s ease-in forwards';
        const card = modal.querySelector('div');
        if (card) {
            card.style.animation = 'scaleOut 0.2s ease-in forwards';
        }
        setTimeout(() => {
            modal.remove();
            const remaining = document.querySelectorAll('.app-modal');
            if (remaining.length === 0) {
                let key = window.currentView;
                if (key === 'chapter' || key === 'activity' || key === 'complete' || key === 'admin') {
                    key = 'home';
                } else if (key === 'leaderboard') {
                    key = 'ranks';
                }
                updateMobileNav(key);
            }
        }, 200);
    };

    const closeIcon = modal.querySelector('#modal-close-icon');
    if (closeIcon) {
        closeIcon.onclick = () => {
            closeModal();
            if (onCancel) onCancel();
        };
    }

    const confirmBtn = modal.querySelector('#modal-confirm');
    if (confirmBtn) {
        confirmBtn.onclick = async () => {
            const originalText = confirmBtn.textContent;
            try {
                confirmBtn.disabled = true;
                confirmBtn.textContent = 'Processing...';

                const input = modal.querySelector('#modal-input');
                const value = input ? input.value : null;
                if (onConfirm) {
                    const result = await onConfirm(value);
                    if (result === false) {
                        confirmBtn.disabled = false;
                        confirmBtn.textContent = originalText;
                        return;
                    }
                }
                closeModal();
            } catch (error) {
                console.error("Modal confirmation failed:", error);
                confirmBtn.disabled = false;
                confirmBtn.textContent = originalText;
                // Optionally show error to user
            }
        };
    }

    const cancelBtn = modal.querySelector('#modal-cancel');
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            closeModal();
            if (onCancel) onCancel();
        };
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
            // We intentionally don't call onCancel here 
            // to allow escaping without triggering the 'Cancel' button action
        }
    };
}

// Visual FX - Trigger XP animation
function triggerXPAnimation(amount, isNegative = false) {
    const containers = document.querySelectorAll('.xp-container');
    if (containers.length === 0) return;

    containers.forEach(xpDisplay => {
        // Create floating XP element
        const floater = document.createElement('div');
        floater.className = `xp-floater ${isNegative ? 'negative' : ''} `;
        floater.textContent = isNegative ? `${amount} ` : ` + ${amount} `;
        floater.style.position = 'absolute';
        floater.style.right = '0';
        floater.style.top = '-20px';
        floater.style.color = isNegative ? 'var(--error)' : 'var(--success)';
        floater.style.fontWeight = '800';
        floater.style.fontSize = '1.3rem';
        floater.style.pointerEvents = 'none';
        floater.style.zIndex = '100';
        floater.style.textShadow = '0 2px 4px rgba(20, 60, 99, 0.5)';

        // Position relative to XP display
        xpDisplay.style.position = 'relative';
        xpDisplay.appendChild(floater);

        // Success Glow Effect
        if (!isNegative) {
            xpDisplay.classList.add('success-glow');
            setTimeout(() => xpDisplay.classList.remove('success-glow'), 600);

            // Add sparkles
            for (let i = 0; i < 3; i++) {
                const sparkle = document.createElement('span');
                sparkle.className = 'sparkle';
                sparkle.textContent = '✨';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                xpDisplay.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 800);
            }
        }

        // Update total after delay to match floating animation timing
        setTimeout(() => {
            const spans = xpDisplay.querySelectorAll('span');
            // Check if it's the desktop/header element that uses material icons or the one in the header that uses emojis
            const spanToUpdate = spans.length > 1 && spans[0].classList.contains('material-symbols-rounded') ? spans[1] : spans[spans.length - 1];

            if (spanToUpdate) {
                // Determine if this represents Gems or XP based on icon/color
                if (spanToUpdate.parentElement.innerHTML.includes('diamond') || spanToUpdate.parentElement.innerHTML.includes('💎')) {
                    spanToUpdate.textContent = gameState.gems || 0;
                } else {
                    spanToUpdate.textContent = gameState.xp || 0;
                }

                xpDisplay.classList.add('pulse-cta');
                setTimeout(() => xpDisplay.classList.remove('pulse-cta'), 300);
            }
        }, 800);
        setTimeout(() => floater.remove(), 1000);
    });
}

// Admin Actions Helper
window.adminAddOption = function (type) {
    const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
    let q = {};
    if (adminSelectedQuestion === 'new') {
        // Find existing temp object or create one
        if (!window.adminCurrentNewQuestion) {
            window.adminCurrentNewQuestion = {
                type: window.adminNewQuestionType,
                options: [],
                items: [],
                pairs: [],
                xp: 10
            };
        }
        q = window.adminCurrentNewQuestion;
    } else {
        q = fullPool.find((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === adminSelectedQuestion);
    }

    if (!q) return;

    if (type === 'choice' || type === 'multiple_choice') {
        if (!q.options) q.options = [];
        q.options.push({ text: '', correct: false });
    } else if (type === 'ordering') {
        if (!q.items) q.items = [];
        q.items.push('');
    } else if (type === 'matching') {
        if (!q.pairs) q.pairs = [];
        q.pairs.push({ left: '', right: '' });
    }

    renderGodModeRightPane();
};

window.adminRemoveOption = function (type, index) {
    const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
    let q = {};
    if (adminSelectedQuestion === 'new') {
        q = window.adminCurrentNewQuestion;
    } else {
        q = fullPool.find((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === adminSelectedQuestion);
    }

    if (!q) return;

    if (type === 'choice' || type === 'multiple_choice') {
        q.options.splice(index, 1);
    } else if (type === 'ordering') {
        q.items.splice(index, 1);
    } else if (type === 'matching') {
        q.pairs.splice(index, 1);
    }

    renderGodModeRightPane();
};

window.adminAction = async function (action, targetUser = null, extraData = null) {
    if (!['lijinns', 'admin.iimbx'].includes(currentUser)) return;

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/admin-action', {
            method: 'POST',
            body: JSON.stringify({ adminUser: currentUser, action, targetUser, extraData })
        });
        const data = await res.json();
        if (data.success) {
            showToast(data.message || 'Action completed successfully!');
            renderLeaderboard(); // Refresh
        } else {
            showModal({ icon: 'error', title: 'Error', message: data.error, confirmText: 'OK' });
        }
    } catch (e) {
        showModal({ icon: 'warning', title: 'System Error', message: 'Failed to perform admin action', confirmText: 'OK' });
    }
}

// Admin user management dropdown toggle
window.toggleAdminUserDropdown = function (username, event) {
    if (event) event.stopPropagation();

    const allDropdowns = document.querySelectorAll('.admin-user-dropdown');
    const targetId = `admin-dropdown-${username}`;
    const target = document.getElementById(targetId);
    const wasVisible = target && target.classList.contains('visible');

    // Close all
    allDropdowns.forEach(d => d.classList.remove('visible'));

    // Toggle target
    if (target && !wasVisible) {
        target.classList.add('visible');
    }
};

// Reset individual user progress confirmation helper
window.adminConfirmResetProgress = function (username) {
    const dropdown = document.getElementById(`admin-dropdown-${username}`);
    if (dropdown) dropdown.classList.remove('visible');

    showModal({
        icon: 'warning',
        title: 'Reset Progress?',
        message: `Are you sure you want to reset all progress (XP, Levels, Streak) for <strong>${username}</strong>? This action cannot be undone.`,
        confirmText: 'Reset Progress',
        cancelText: 'Cancel',
        onConfirm: () => {
            adminAction('RESET_USER', username);
        }
    });
};

// Deletion confirmation helper

window.adminConfirmDelete = function (username) {
    const dropdown = document.getElementById(`admin-dropdown-${username}`);
    if (dropdown) dropdown.classList.remove('visible');

    showModal({
        icon: 'warning',
        title: 'Delete User?',
        message: `Are you sure you want to permanently delete <strong>${username}</strong>? This action cannot be undone.`,
        confirmText: 'Delete Permanently',
        cancelText: 'Cancel',
        onConfirm: () => {
            adminAction('DELETE_USER', username);
        }
    });
};

// Reset all confirmation helper
window.adminConfirmResetAll = function () {
    showModal({
        icon: 'warning',
        title: 'Reset All Players?',
        message: 'This will reset <strong>XP, Levels, and Streaks</strong> for all users except administrators. This action is permanent.',
        confirmText: 'Reset Everyone',
        cancelText: 'Cancel',
        onConfirm: () => {
            adminAction('RESET_ALL');
        }
    });
};

// Password reset prompt helper
window.adminPromptPassword = function (username) {
    const dropdown = document.getElementById(`admin-dropdown-${username}`);
    if (dropdown) dropdown.classList.remove('visible');

    showModal({
        icon: 'key',
        title: 'Reset Password',
        message: `Set a new password for ${username}. It must be at least 6 characters.`,
        confirmText: 'Update Password',
        customHtml: `
            <div style="margin-bottom: 2rem;">
                <input type="password" id="modal-input" placeholder="Enter new password" 
                       style="width: 100%; padding: 1rem; background: var(--bg-dark); border: 1px solid var(--border); 
                              border-radius: var(--radius-s); color: var(--text-main); font-size: 1rem; outline: none; transition: border-color 0.2s;"
                       onfocus="this.style.borderColor='var(--primary)'" 
                       onblur="this.style.borderColor='var(--border)'">
            </div>
        `,
        onConfirm: (newPass) => {
            if (newPass && newPass.length >= 6) {
                adminAction('CHANGE_PASSWORD', username, newPass);
            } else if (newPass) {
                showModal({ icon: 'error', title: 'Invalid Password', message: 'Password must be at least 6 characters.', confirmText: 'Try Again', onConfirm: () => adminPromptPassword(username) });
            }
        }
    });
}

// Global click listener for all dropdowns (Main Settings + Admin User Menus)
window.addEventListener('click', function (event) {
    // 1. Settings Dropdown
    const settingsDropdown = document.getElementById('settings-dropdown');
    const settingsContainer = document.getElementById('settings-container');
    if (settingsDropdown && settingsContainer && !settingsDropdown.classList.contains('hidden')) {
        if (!settingsContainer.contains(event.target)) {
            settingsDropdown.classList.add('hidden');
        }
    }

    // 2. Admin User Dropdowns
    const allAdminDropdowns = document.querySelectorAll('.admin-user-dropdown.visible');
    allAdminDropdowns.forEach(dropdown => {
        const container = dropdown.closest('.admin-user-container');
        if (container && !container.contains(event.target)) {
            dropdown.classList.remove('visible');
        }
    });
});

// Leaderboard (Simplified reuse)
window.renderLeaderboard = async function () {
    window.currentView = 'leaderboard';
    updateDesktopPanels();
    updateMobileNav('ranks');
    app.innerHTML = renderHeader("renderChapters()", "Leaderboard") +
        `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">
        <div class="loader" style="margin: 0 auto 1rem;"></div>
            Loading rankings...
        </div> `;

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/get-leaderboard', {
            method: 'POST',
            body: JSON.stringify({ username: currentUser })
        });
        const rawData = await res.json();
        const data = syncLeaderboardData(rawData);

        let html = renderHeader("renderChapters()", "Leaderboard");
        html += `<div class="main-scroll-area" style="padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 1rem;">`;

        // Admin Panel
        if (['lijinns', 'admin.iimbx'].includes(currentUser)) {
            html += `
        <div style="background: rgba(255, 50, 50, 0.1); border: 1px dashed rgba(255, 50, 50, 0.5); padding: 1rem; border-radius: var(--radius-m); display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="font-weight: 800; color: #ff4d4d; font-size: 0.8rem; text-transform: uppercase;">🔒 Admin Control Panel</div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button onclick="adminConfirmResetAll()" style="font-size: 0.8rem; background: #ff4d4d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; font-weight: 700;">Reset All Users (Except Admins)</button>
                    </div>
                </div>
        `;
        }

        const top3 = data.slice(0, 3);
        const rest = data.slice(3);
        // Podium Section
        if (top3.length > 0) {
            const getAdminTools = (u) => {
                if (['lijinns', 'admin.iimbx'].includes(currentUser) && !['lijinns', 'admin.iimbx'].includes(u.username)) {
                    return `
                        <div class="admin-user-container" style="margin-top: 0.5rem; justify-content: center;">
                            <button onclick="toggleAdminUserDropdown('${u.username}', event)" title="Admin Actions" style="background: rgba(var(--primary-rgb), 0.1); color: var(--accent); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                                <span class="material-symbols-rounded" style="font-size: 1.2rem;">settings</span>
                            </button>
                            <div id="admin-dropdown-${u.username}" class="admin-user-dropdown">
                                <div class="admin-dropdown-item" onclick="adminPromptPassword('${u.username}')">
                                    <span class="material-symbols-rounded">key</span> Change Password
                                </div>
                                <div class="admin-dropdown-item" onclick="adminConfirmResetProgress('${u.username}')">
                                    <span class="material-symbols-rounded">restart_alt</span> Reset Progress
                                </div>
                                <div class="admin-dropdown-item danger" onclick="adminConfirmDelete('${u.username}')">
                                    <span class="material-symbols-rounded">delete</span> Delete User
                                </div>
                            </div>
                        </div>
                    `;
                }
                return '';
            };

            html += `
        <div class="podium-container">
        ${top3[1] ? `
                    <!-- Silver (2nd) -->
                    <div class="podium-item podium-silver">
                        <div class="podium-emoji"><span class="material-symbols-rounded medal-icon">military_tech</span></div>
                        <div class="podium-base">
                             <div class="podium-user-circle">${top3[1].username.slice(0, 2).toUpperCase()}</div>
                             <span class="podium-rank-num">2</span>
                        </div>
                        <div class="podium-user-info">
                            <div class="podium-username">${top3[1].username}</div>
                            <div class="podium-xp">${top3[1].xp} XP</div>
                            ${getAdminTools(top3[1])}
                        </div>
                    </div>` : '<div style="flex:1; max-width: 100px;"></div>'
                }

                    <!-- Gold (1st) -->
                    <div class="podium-item podium-gold">
                        <div class="podium-emoji gold-sparkle"><span class="material-symbols-rounded medal-icon">military_tech</span></div>
                        <div class="podium-base">
                             <div class="podium-user-circle">${top3[0].username.slice(0, 2).toUpperCase()}</div>
                             <span class="podium-rank-num">1</span>
                        </div>
                        <div class="podium-user-info">
                             <div class="podium-username">${top3[0].username}</div>
                             <div class="podium-xp">${top3[0].xp} XP</div>
                             ${getAdminTools(top3[0])}
                        </div>
                    </div>

                    <!-- Bronze (3rd) -->
        ${top3[2] ? `
                    <div class="podium-item podium-bronze">
                        <div class="podium-emoji"><span class="material-symbols-rounded medal-icon">military_tech</span></div>
                        <div class="podium-base">
                             <div class="podium-user-circle">${top3[2].username.slice(0, 2).toUpperCase()}</div>
                             <span class="podium-rank-num">3</span>
                        </div>
                        <div class="podium-user-info">
                            <div class="podium-username">${top3[2].username}</div>
                            <div class="podium-xp">${top3[2].xp} XP</div>
                            ${getAdminTools(top3[2])}
                        </div>
                    </div>` : '<div style="flex:1; max-width: 100px;"></div>'
                }
        </div>
        `;
        }

        // List Section
        html += `<div style="display: flex; flex-direction: column; gap: 0.75rem;"> `;
        rest.forEach((u, i) => {
            const isMe = u.username === currentUser;
            html += `
        <div class="leaderboard-row ${isMe ? 'current-user' : ''}" style="transition: transform 0.2s; ">
        <div style="display: flex; align-items: center; gap: 1rem;">
                        <span style="color: var(--text-muted); font-weight: 700; width: 25px; font-size: 0.9rem;">#${i + 4}</span>
                        <div style="width: 35px; height: 35px; background: var(--bg-dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; color: var(--accent);">${u.username.slice(0, 2).toUpperCase()}</div>
                        <span class="leaderboard-username">${u.username} ${isMe ? '(You)' : ''}</span>
                    </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="color: var(--accent); font-weight: 800; font-size: 1.1rem;">${u.xp}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">XP</span>
            </div>
            ${(['lijinns', 'admin.iimbx'].includes(currentUser) && !['lijinns', 'admin.iimbx'].includes(u.username)) ? `
                            <div class="admin-user-container">
                                <button onclick="toggleAdminUserDropdown('${u.username}', event)" title="Admin Actions" style="background: none; border: none; cursor: pointer; padding: 5px; opacity: 0.6; transition: 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6">
                                    <span class="material-symbols-rounded">settings</span>
                                </button>
                                <div id="admin-dropdown-${u.username}" class="admin-user-dropdown">
                                    <div class="admin-dropdown-item" onclick="adminPromptPassword('${u.username}')">
                                        <span class="material-symbols-rounded">key</span> Change Password
                                    </div>
                                    <div class="admin-dropdown-item" onclick="adminConfirmResetProgress('${u.username}')">
                                        <span class="material-symbols-rounded">restart_alt</span> Reset Progress
                                    </div>
                                    <div class="admin-dropdown-item danger" onclick="adminConfirmDelete('${u.username}')">
                                        <span class="material-symbols-rounded">delete</span> Delete User
                                    </div>
                                </div>
                            </div>
                        ` : ''}
        </div>
                </div>
        `;
        });
        html += `</div>`; // Close rest list (inner div)
        html += `</div>`; // Close main-scroll-area
        app.innerHTML = html;

        // Add subtle entrance animation
        const rows = document.querySelectorAll('.leaderboard-row');
        rows.forEach((row, idx) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(10px)';
            setTimeout(() => {
                row.style.transition = 'all 0.4s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, idx * 50);
        });

    } catch (e) {
        console.error("Leaderboard error:", e);
        app.innerHTML = renderHeader("renderChapters()", "Leaderboard") +
            `<div style="padding: 2rem; color: var(--error); text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">📴</div>
                Failed to load leaderboard.Please check your connection.
            </div> `;
    }
}

// Start the app
init();

// --- ADMIN GOD MODE EDITOR ---
let adminSelectedChapter = null;
let adminSelectedLevel = null;
let adminSelectedQuestion = null;

// Get the raw question pool for God Mode
window.getGodModePool = function (chapterId, levelId) {
    const chapMatch = chapterId.match(/\d+$/);
    const chapNum = chapMatch ? chapMatch[0] : '1';
    const lvlMatch = levelId.match(/l(\d+)$/);
    const lvlNum = lvlMatch ? lvlMatch[1] : '1';

    const varName = `chapter${chapNum}Level${lvlNum}Questions`;

    let pool = [];
    if (typeof window !== 'undefined' && window[varName]) pool = window[varName];
    else if (typeof globalThis !== 'undefined' && globalThis[varName]) pool = globalThis[varName];
    else {
        try {
            const fallback = eval(varName);
            if (fallback) pool = fallback;
        } catch (e) { }
    }

    // Inject Intro if missing for God Mode editing
    const introId = `${chapNum}-L${lvlNum}-INTRO`;
    if (pool && !pool.some(q => q.original_id === introId)) {
        const factualText = (window.LEVEL_FACTS && window.LEVEL_FACTS[`chapter${chapNum}`])
            ? window.LEVEL_FACTS[`chapter${chapNum}`][parseInt(lvlNum) - 1]
            : "No fact available.";

        pool.unshift({
            original_id: introId,
            type: "info_card",
            title: `Welcome to Level ${lvlNum}`,
            text: `Did you know? ${factualText}\n\nComplete the challenges to master this topic!`,
            xp: 0,
            published: true
        });
    }

    return pool;
};


window.renderGodModeEditor = function () {
    window.currentView = 'admin';
    updateDesktopPanels();

    if (!['lijinns', 'admin.iimbx'].includes(currentUser)) {
        app.innerHTML = `<div style="padding: 2rem; color: var(--error);">Unauthorized access.</div>`;
        return;
    }

    if (!document.getElementById('admin-layout')) {
        app.innerHTML = `
            <div id="admin-layout" style="display: flex; height: 100vh; width: 100%; background: var(--bg-dark); color: var(--text-main); font-family: 'Inter', sans-serif;">
                <div id="admin-left-pane" style="width: 300px; background: var(--bg-card); border-right: 1px solid var(--border); overflow-y: auto; display: flex; flex-direction: column;"></div>
                <div id="admin-middle-pane" style="width: 350px; background: var(--bg-dark); border-right: 1px solid var(--border); overflow-y: auto; display: flex; flex-direction: column;"></div>
                <div id="admin-right-pane" style="flex: 1; overflow-y: auto; padding: 2rem; background: var(--bg-card); display: flex; flex-direction: column; align-items: center;"></div>
            </div>
        `;
    }

    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
};

window.renderGodModeLeftPane = function () {
    const pane = document.getElementById('admin-left-pane');
    if (!pane) return;

    let html = `
        <div style="padding: 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg-dark); z-index: 10;">
            <h2 style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem; color: var(--error);"><span class="material-symbols-rounded">admin_panel_settings</span> Content Manager</h2>
            <button onclick="renderChapters()" style="margin-top: 1rem; width: 100%; padding: 0.5rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-s); color: var(--text-main); cursor: pointer;">Exit Admin Mode</button>
            <button onclick="exportContentJS()" class="pulse-cta" style="margin-top: 0.5rem; width: 100%; padding: 0.5rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-s); font-weight: 700; cursor: pointer;">Publish Live to DB</button>
        </div>
        
        <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
    `;

    window.courseData.forEach((ch, cIdx) => {
        const isChapterSelected = adminSelectedChapter === ch.id;
        html += `
            <div style="margin-bottom: 0.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; border-radius: var(--radius-s); background: ${isChapterSelected ? 'rgba(var(--primary-rgb),0.12)' : 'transparent'}; opacity: ${isChapterSelected ? '1' : '0.5'}; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='${isChapterSelected ? '1' : '0.5'}'">
                    <div style="font-weight: 800; color: ${isChapterSelected ? 'var(--primary)' : 'var(--text-main)'}; cursor: pointer; flex: 1;" 
                         onclick="adminSelectChapter('${ch.id}')">
                         Chapter ${cIdx + 1}: ${ch.title.split(': ')[0]}
                    </div>
                    <div onclick="adminEditChapter('${ch.id}')" 
                         style="cursor: pointer; opacity: 0.8; color: var(--text-main); transition: all 0.2s; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--bg-overlay);" 
                         onmouseover="this.style.opacity=1; this.style.background='rgba(var(--primary-rgb), 0.1)'" 
                         onmouseout="this.style.opacity=0.8; this.style.background='var(--bg-overlay)'" 
                         title="Edit Chapter Settings">
                        <span class="material-symbols-rounded" style="font-size: 1.1rem;">settings</span>
                    </div>
                </div>
                <div style="padding-left: 1rem; padding-top: 0.5rem; display: ${isChapterSelected || (adminSelectedChapter === null && cIdx === 0) ? 'block' : 'none'}; border-left: 1px solid var(--border); margin-left: 0.5rem;">
        `;

        ch.levels.forEach((lvl, lIdx) => {
            const isLevelSelected = adminSelectedLevel === lvl.id;
            const fullPool = getGodModePool(ch.id, lvl.id);
            const realQCount = fullPool.length;
            html += `
                <div style="padding: 0.6rem 0.8rem; font-size: 0.9rem; cursor: move; color: ${isLevelSelected ? 'var(--primary)' : 'var(--text-main)'}; background: ${isLevelSelected ? 'rgba(var(--primary-rgb), 0.15)' : 'transparent'}; border-radius: var(--radius-s); display: flex; justify-content: space-between; align-items: center; font-weight: ${isLevelSelected ? '700' : '500'}; margin-bottom: 0.2rem; opacity: ${isLevelSelected ? '1' : '0.5'}; transition: all 0.2s;"
                     draggable="true"
                     ondragstart="window.handleLevelDragStart(event, '${ch.id}', ${lIdx})"
                     ondragover="window.handleLevelDragOver(event)"
                     ondrop="window.handleLevelDrop(event, '${ch.id}', ${lIdx})"
                     onclick="adminSelectLevel('${ch.id}', '${lvl.id}')"
                     onmouseover="this.style.opacity='1'; this.style.background='rgba(var(--primary-rgb), 0.1)'" 
                     onmouseout="this.style.opacity='${isLevelSelected ? '1' : '0.5'}'; this.style.background='${isLevelSelected ? 'rgba(var(--primary-rgb), 0.15)' : 'transparent'}'">
                     <div style="display: flex; align-items: center; gap: 0.5rem; overflow: hidden;">
                        <span class="material-symbols-rounded" style="font-size: 1rem; opacity: 0.4;">drag_indicator</span>
                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">L${lIdx + 1}: ${lvl.title || 'New Level'}</span>
                     </div>
                     <span style="font-size: 0.75rem; opacity: ${isLevelSelected ? '0.8' : '0.5'}; margin-left: 0.5rem;">${realQCount} Qs</span>
                </div>
            `;
        });

        html += `
            <div style="padding: 0.6rem 0rem; margin-top: 0.4rem; border-top: 1px solid rgba(209, 246, 255, 0.05);">
                <button onclick="adminAddLevel('${ch.id}')"
                        style="width: 100%; padding: 0.6rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.5px;"
                        onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'"
                        onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                    <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span> Add Level
                </button>
            </div>
        </div></div>`;
    });

    html += `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(209, 246, 255, 0.1);">
            <button onclick="adminAddChapter()" 
                    style="width: 100%; padding: 0.65rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.5px;" 
                    onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'" 
                    onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                <span class="material-symbols-rounded" style="font-size: 1.2rem;">add_circle</span> Add Chapter
            </button>
        </div></div>
    `;

    pane.innerHTML = html;
};

window.renderGodModeMiddlePane = function () {
    const pane = document.getElementById('admin-middle-pane');
    if (!pane) return;

    let html = '';

    if (adminSelectedChapter && adminSelectedLevel) {
        const chapter = window.courseData.find(c => c.id === adminSelectedChapter);
        const lIdx = chapter.levels.findIndex(l => l.id === adminSelectedLevel);
        const level = chapter.levels[lIdx];
        const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);

        html += `<div style="padding: 1.5rem; border-bottom: 1px solid var(--border); position: sticky; top: 0; background: var(--bg-dark); z-index: 10; display: flex; justify-content: space-between; align-items: flex-start;">
                    <div style="flex: 1;">
                        <h3 style="font-size: 1rem; margin-bottom: 0.2rem;">Level ${lIdx + 1}: ${level?.title || 'Unknown Level'}</h3>
                        <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${level?.description || ''}</div>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-left: 1rem;">
                        <button onclick="adminEditLevel('${adminSelectedChapter}', '${adminSelectedLevel}')" 
                                style="background: rgba(209, 246, 255, 0.05); border: 1px solid var(--border); color: var(--text-main); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;"
                                onmouseover="this.style.background='rgba(209, 246, 255, 0.15)'; this.style.color='var(--primary)'"
                                onmouseout="this.style.background='rgba(209, 246, 255, 0.05)'; this.style.color='var(--text-main)'"
                                title="Edit Level Details">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">edit</span>
                        </button>
                        <button onclick="adminDeleteLevel('${adminSelectedChapter}', '${adminSelectedLevel}')" 
                                style="background: rgba(var(--error-rgb), 0.1); border: 1px solid rgba(var(--error-rgb), 0.3); color: var(--error); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;"
                                onmouseover="this.style.background='rgba(var(--error-rgb), 0.2)'"
                                onmouseout="this.style.background='rgba(var(--error-rgb), 0.1)'"
                                title="Delete Level">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">delete</span>
                        </button>
                    </div>
                 </div>
                 <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <button onclick="adminSelectQuestion('new')" 
                                style="width: 100%; padding: 0.7rem; background: rgba(var(--success-rgb), 0.12); border: 1.5px solid var(--success); color: var(--success); border-radius: var(--radius-s); font-weight: 800; font-size: 0.85rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.4rem; text-transform: uppercase; letter-spacing: 0.5px;"
                                onmouseover="this.style.background='rgba(var(--success-rgb), 0.2)'; this.style.boxShadow='0 2px 8px rgba(var(--success-rgb), 0.2)'"
                                onmouseout="this.style.background='rgba(var(--success-rgb), 0.12)'; this.style.boxShadow='none'">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span>
                            Add New Question
                        </button>
                        <button onclick="adminBulkUploadJSON()" 
                                style="width: 100%; padding: 0.6rem; background: rgba(var(--primary-rgb), 0.08); border: 1px dashed var(--primary); color: var(--accent); border-radius: var(--radius-s); font-weight: 700; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.3rem;"
                                onmouseover="this.style.background='rgba(var(--primary-rgb), 0.15)'"
                                onmouseout="this.style.background='rgba(var(--primary-rgb), 0.08)'">
                            <span class="material-symbols-rounded" style="font-size: 1rem;">upload_file</span>
                            Bulk Upload JSON
                        </button>
                        <input type="file" id="admin-bulk-upload-input" style="display: none;" accept=".json" onchange="adminHandleFileUpload(event)">
                    </div>
                 `;

        fullPool.forEach((q, qIdx) => {
            const qKey = q.original_id ? q.original_id.toString() : `idx_${qIdx}`;
            const isQSelected = adminSelectedQuestion === qKey;

            const qType = q.type || '';
            const typeIconMap = {
                'choice': '🔘',
                'multiple_choice': '✅',
                'task': '✏️',
                'ordering': '🔢',
                'matching': '🔗',
                'fill_in_blanks': '⬜',
                'info_card': '📖'
            };
            const typeIcon = typeIconMap[qType] || '❓';
            const previewText = q.question || q.prompt || q.text || q.title || '-';

            html += `
                <div style="padding: 0.9rem 1rem; background: ${isQSelected ? 'rgba(var(--primary-rgb),0.15)' : 'var(--bg-card)'}; border: 1px solid ${isQSelected ? 'var(--primary)' : 'var(--border)'}; border-radius: var(--radius-s); cursor: pointer; opacity: ${isQSelected ? '1' : '0.5'}; transition: opacity 0.2s;"
                     onclick="adminSelectQuestion('${qKey}')"
                     onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='${isQSelected ? '1' : '0.5'}'">
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.3rem; display: flex; align-items: center; gap: 0.4rem;">${typeIcon} <span style="font-family: monospace;">#${qIdx + 1}</span></div>
                    <div style="font-size: 0.88rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-main);">
                        ${previewText}
                    </div>
                    <div style="margin-top: 0.6rem; display: flex; align-items: center; justify-content: flex-end;">
                        ${q.published === true ? `
                            <span style="font-size: 0.65rem; background: rgba(var(--success-rgb), 0.15); color: var(--success); padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 800; display: flex; align-items: center; gap: 0.2rem; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid rgba(var(--success-rgb), 0.2);">
                                <span class="material-symbols-rounded" style="font-size: 0.8rem;">check_circle</span> Live
                            </span>
                        ` : `
                            <span style="font-size: 0.65rem; background: rgba(209, 246, 255, 0.05); color: var(--text-muted); padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid var(--border);">
                                Draft
                            </span>
                        `}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `<div style="padding: 2rem; color: var(--text-muted); text-align: center;">Select a level to view questions.</div>`;
    }

    pane.innerHTML = html;
};

window.renderGodModeRightPane = function () {
    const pane = document.getElementById('admin-right-pane');
    if (!pane) return;

    let html = '';

    if (adminSelectedQuestion && adminSelectedChapter && adminSelectedLevel) {
        let act = {};
        let qType = '';
        let isNew = (adminSelectedQuestion === 'new');

        if (isNew) {
            if (!window.adminNewQuestionType) {
                const types = [
                    { id: 'choice', name: 'Single Choice', icon: '🔘', desc: 'One correct answer' },
                    { id: 'multiple_choice', name: 'Multiple Choice', icon: '✅', desc: 'Multiple correct answers' },
                    { id: 'fill_in_blanks', name: 'Fill In Blanks', icon: '⬜', desc: 'Complete the sentence' },
                    { id: 'ordering', name: 'Ordering', icon: '🔢', desc: 'Arrange items in order' },
                    { id: 'matching', name: 'Matching', icon: '🔗', desc: 'Match pairs of items' },
                    { id: 'task', name: 'Text Task', icon: '✏️', desc: 'Open-ended answer' },
                    { id: 'info_card', name: 'Info Card', icon: '📖', desc: 'Informational slide' }
                ];

                html += `
                    <div style="width: 100%; max-width: 550px; padding: 1rem;">
                        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.4rem; color: var(--text-main);">Choose Question Type</h2>
                        <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.9rem;">Select a format to begin creating your new question.</p>
                        
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            ${types.map(t => `
                                <div onclick="adminSetNewQuestionType('${t.id}')"
                                     style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-s); padding: 1.1rem 1.4rem; cursor: pointer; transition: all 0.2s; display: flex; align-items: center;"
                                     onmouseover="this.style.borderColor='var(--primary)'; this.style.background='rgba(var(--primary-rgb), 0.05)'"
                                     onmouseout="this.style.borderColor='var(--border)'; this.style.background='var(--bg-card)'">
                                    <div style="flex: 1;">
                                        <h4 style="font-size: 0.95rem; margin-bottom: 0.1rem; color: var(--text-main); font-weight: 700;">${t.name}</h4>
                                        <p style="font-size: 0.78rem; color: var(--text-muted); margin: 0; opacity: 0.8;">${t.desc}</p>
                                    </div>
                                    <span class="material-symbols-rounded" style="font-size: 1.2rem; color: var(--text-muted); opacity: 0.4;">chevron_right</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                pane.innerHTML = html;
                return;
            } else {
                qType = window.adminNewQuestionType;
                act = {
                    type: qType,
                    xp: 10,
                    options: qType.includes('choice') ? [
                        { text: '', correct: true },
                        { text: '', correct: false },
                        { text: '', correct: false },
                        { text: '', correct: false }
                    ] : [],
                    items: qType === 'ordering' ? ['', '', '', ''] : [],
                    pairs: qType === 'matching' ? [
                        { left: '', right: '' },
                        { left: '', right: '' },
                        { left: '', right: '' },
                        { left: '', right: '' }
                    ] : [],
                    text: '',
                    wordBank: [],
                    correctFeedback: '',
                    incorrectFeedback: ''
                };
            }
        } else {
            const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
            act = fullPool.find((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === adminSelectedQuestion) || {};
            qType = act.type || '';
        }

        const inputStyle = `width: 100%; padding: 0.65rem 0.75rem; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-family: inherit; font-size: 0.9rem; box-sizing: border-box;`;
        const labelStyle = `display: block; font-weight: 600; margin-bottom: 0.35rem; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted);`;
        const sectionStyle = `display: flex; flex-direction: column; gap: 0.35rem; width: 100%;`;
        const taStyle = (h) => `width: 100%; height: ${h}px; padding: 0.65rem 0.75rem; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-family: inherit; font-size: 0.9rem; resize: vertical; box-sizing: border-box;`;

        html += `
            <div style="width: 100%; max-width: 760px; display: flex; flex-direction: column; gap: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
                    <div style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-muted); font-size: 0.85rem; font-weight: 700; background: var(--bg-overlay); padding: 0.3rem 0.7rem; border-radius: 6px; border: 1px solid var(--border);"
                         onclick="${isNew ? `adminSelectQuestion('new'); window.adminNewQuestionType = null;` : `adminSelectedQuestion = null;`} renderGodModeRightPane();">
                        <span class="material-symbols-rounded" style="font-size: 1rem;">${isNew ? 'arrow_back' : 'close'}</span>
                        ${isNew ? 'Back' : 'Close'}
                    </div>
                    <h2 style="font-size: 1.25rem; margin: 0; font-weight: 800; color: var(--text-main);">${isNew ? 'Create New' : 'Edit'} Question</h2>
                    ${!isNew ? `<span style="font-family: monospace; font-size: 0.82rem; color: var(--accent); background: rgba(var(--primary-rgb),0.1); padding: 0.2rem 0.6rem; border-radius: 6px;">#${act.original_id || adminSelectedQuestion.replace('idx_', '')}</span>` : ''}
                    <span style="padding: 0.2rem 0.6rem; background: var(--bg-overlay); border-radius: 20px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid var(--border); color: var(--text-muted);">${qType || 'unknown'}</span>
                    <div style="display: flex; align-items: center; gap: 0.4rem; padding: 0.2rem 0.6rem; background: rgba(var(--primary-rgb),0.08); border-radius: 20px; border: 1px solid rgba(var(--primary-rgb),0.2);">
                        <span style="font-size: 0.72rem; font-weight: 700; color: var(--accent);">XP:</span>
                        <input type="number" id="admin-q-xp" value="${act.xp || 10}" min="0" step="5" style="width: 45px; background: transparent; border: none; color: var(--accent); font-weight: 800; font-size: 0.75rem; text-align: center; outline: none;">
                    </div>
                </div>

                <div id="admin-error-msg" style="display: none; padding: 0.8rem 1rem; background: rgba(var(--error-rgb), 0.1); color: var(--error); border: 1px solid rgba(var(--error-rgb), 0.3); border-radius: var(--radius-s); font-size: 0.9rem; font-weight: 600; text-align: center;"></div>

                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Question Text</label>
                    <textarea id="admin-q-question" style="${taStyle(90)}" placeholder="Enter question content...">${act.question || act.prompt || act.text || ''}</textarea>
                </div>
        `;

        if (qType === 'choice' || qType === 'multiple_choice') {
            const opts = act.options || [];
            const inputType = qType === 'multiple_choice' ? 'checkbox' : 'radio';
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Answer Options <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(Select correct)</span></label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${opts.map((opt, idx) => `
                        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 0.8rem; border-radius: var(--radius-s); border: 1px solid ${opt.correct ? 'var(--success)' : 'var(--border)'}; background: ${opt.correct ? 'rgba(var(--success-rgb),0.05)' : 'var(--bg-card)'}; transition: all 0.2s;">
                            <input type="${inputType}" name="admin-q-correct" data-idx="${idx}" ${opt.correct ? 'checked' : ''}
                                   style="width: 1.1rem; height: 1.1rem; cursor: pointer; flex-shrink: 0; accent-color: var(--success);">
                            <input type="text" id="admin-q-opt-${idx}" value="${(opt.text || '').replace(/"/g, '&quot;')}"
                                   style="flex: 1; padding: 0.35rem 0.5rem; background: transparent; color: var(--text-main); border: none; border-bottom: 1px solid var(--border); font-size: 0.9rem; font-family: inherit; outline: none;" placeholder="Option ${idx + 1}">
                            
                            <button onclick="adminRemoveOption('choice', ${idx})" style="background: none; border: none; color: var(--error); cursor: pointer; padding: 4px; opacity: 0.6; transition: 0.2s; display: flex; align-items: center; justify-content: center;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6" title="Remove Option">
                                <span class="material-symbols-rounded" style="font-size: 1.2rem;">delete</span>
                            </button>
                        </div>
                    `).join('')}
                        <button onclick="adminAddOption('choice')" 
                                style="width: 100%; padding: 0.75rem; background: rgba(var(--success-rgb), 0.05); color: var(--success); border: 1px dashed var(--success); border-radius: var(--radius-s); cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
                                onmouseover="this.style.background='rgba(var(--success-rgb), 0.1)'" onmouseout="this.style.background='rgba(var(--success-rgb), 0.05)'">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span> Add Option
                        </button>
                    </div>
                </div>
                `;
        }

        if (qType === 'task') {
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Placeholder Text</label>
                    <input type="text" id="admin-q-placeholder" value="${(act.placeholder || '').replace(/"/g, '&quot;')}" style="${inputStyle}">
                </div>
            `;
        }

        if (qType === 'ordering') {
            const items = act.items || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Items in Correct Order</label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${items.map((item, idx) => `
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <span style="width:1.6rem;height:1.6rem;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;flex-shrink:0;">${idx + 1}</span>
                                <input type="text" id="admin-q-item-${idx}" value="${(item || '').replace(/"/g, '&quot;')}" placeholder="e.g., Step ${idx + 1}" style="${inputStyle}">
                                
                                <button onclick="adminRemoveOption('ordering', ${idx})" style="background: none; border: none; color: var(--error); cursor: pointer; padding: 4px; opacity: 0.6; transition: 0.2s; display: flex; align-items: center; justify-content: center;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6" title="Remove Item">
                                    <span class="material-symbols-rounded" style="font-size: 1.2rem;">delete</span>
                                </button>
                            </div>
                        `).join('')}
                        <button onclick="adminAddOption('ordering')" 
                                style="width: 100%; padding: 0.75rem; background: rgba(var(--success-rgb), 0.05); color: var(--success); border: 1px dashed var(--success); border-radius: var(--radius-s); cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
                                onmouseover="this.style.background='rgba(var(--success-rgb), 0.1)'" onmouseout="this.style.background='rgba(var(--success-rgb), 0.05)'">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span> Add Item
                        </button>
                    </div>
                </div>
                `;
        }

        if (qType === 'matching') {
            const pairs = act.pairs || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Matching Pairs</label>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        ${pairs.map((pair, idx) => `
                            <div style="display: grid; grid-template-columns: 1fr auto 1fr auto; gap: 0.75rem; align-items: center;">
                                <input type="text" id="admin-q-pair-left-${idx}" value="${(pair.left || '').replace(/"/g, '&quot;')}" placeholder="Left part" style="${inputStyle}">
                                <span style="color:var(--text-muted);font-weight:700;">&rlarr;</span>
                                <input type="text" id="admin-q-pair-right-${idx}" value="${(pair.right || '').replace(/"/g, '&quot;')}" placeholder="Right part" style="${inputStyle}">
                                
                                <button onclick="adminRemoveOption('matching', ${idx})" style="background: none; border: none; color: var(--error); cursor: pointer; padding: 4px; opacity: 0.6; transition: 0.2s; display: flex; align-items: center; justify-content: center;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6" title="Remove Pair">
                                    <span class="material-symbols-rounded" style="font-size: 1.2rem;">delete</span>
                                </button>
                            </div>
                        `).join('')}
                        <button onclick="adminAddOption('matching')" 
                                style="width: 100%; padding: 0.75rem; background: rgba(var(--success-rgb), 0.05); color: var(--success); border: 1px dashed var(--success); border-radius: var(--radius-s); cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;"
                                onmouseover="this.style.background='rgba(var(--success-rgb), 0.1)'" onmouseout="this.style.background='rgba(var(--success-rgb), 0.05)'">
                            <span class="material-symbols-rounded" style="font-size: 1.1rem;">add_circle</span> Add Pair
                        </button>
                    </div>
                </div>
                `;
        }

        if (qType === 'fill_in_blanks') {
            const fibText = act.text || '';
            const wordBank = act.wordBank || [];
            html += `
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Sentence Text <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(wrap blanks like [word])</span></label>
                    <div style="font-size: 0.82rem; color: var(--accent); background: rgba(var(--primary-rgb), 0.05); padding: 0.75rem; border-radius: var(--radius-s); margin-bottom: 0.5rem; line-height: 1.4; border: 1px dashed rgba(var(--primary-rgb), 0.2);">
                        <strong>💡 Model Question:</strong><br>
                        "The [capital] of France is [Paris]." <br>
                        <span style="opacity: 0.8; font-size: 0.75rem;">(The words in brackets will become hidden blanks for the user)</span>
                    </div>
                    <textarea id="admin-q-fib-text" style="${taStyle(100)}" placeholder="e.g., The [sun] rises in the [east].">${fibText}</textarea>
                </div>
                <div style="${sectionStyle}">
                    <label style="${labelStyle}">Word Bank <span style="font-weight:400;text-transform:none;letter-spacing:0;opacity:0.7;">(comma-separated)</span></label>
                    <input type="text" id="admin-q-wordbank" value="${wordBank.join(', ')}" style="${inputStyle}" placeholder="e.g., sun, east, west">
                </div>
                `;
        }

        if (qType !== 'info_card') {
            html += `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div style="${sectionStyle}">
                        <label style="${labelStyle}">Correct Feedback</label>
                        <textarea id="admin-q-feedback-correct" style="${taStyle(80)}" placeholder="Encouraging message...">${act.correctFeedback || ''}</textarea>
                    </div>
                    <div style="${sectionStyle}">
                        <label style="${labelStyle}">Incorrect Feedback</label>
                        <textarea id="admin-q-feedback-incorrect" style="${taStyle(80)}" placeholder="Explain the concept...">${act.incorrectFeedback || ''}</textarea>
                    </div>
                </div>
            `;
        }

        html += `
                <div style="display: flex; justify-content: flex-end; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--border); margin-top: 1rem;">
                    
                    <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <button onclick="adminDeleteQuestion('${adminSelectedQuestion}')"
                            style="min-width: 130px; padding: 0.8rem 1rem; background: rgba(var(--error-rgb), 0.05); color: var(--error); border: 1px solid var(--error); border-radius: var(--radius-m); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;"
                            onmouseover="this.style.background='rgba(var(--error-rgb), 0.1)'"
                            onmouseout="this.style.background='rgba(var(--error-rgb), 0.05)'">
                            ${isNew ? 'Cancel' : 'Delete'}
                        </button>

                        ${(!act.published) ? `
                            <button onclick="adminSaveQuestion()"
                                style="min-width: 130px; padding: 0.8rem 1rem; background: rgba(var(--primary-rgb), 0.05); color: var(--accent); border: 1px solid var(--primary); border-radius: var(--radius-m); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;">
                                Save Draft
                            </button>
                            <button onclick="adminSaveQuestion(true)"
                                style="min-width: 130px; padding: 0.8rem 1rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-m); font-weight: 800; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(var(--primary-rgb),0.3); white-space: nowrap;"
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(var(--primary-rgb),0.4)'"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(var(--primary-rgb),0.3)'">
                                Publish
                            </button>
                        ` : `
                            <button onclick="adminSaveQuestion(false, true)"
                                style="min-width: 130px; padding: 0.8rem 1rem; background: rgba(var(--primary-rgb), 0.05); color: var(--accent); border: 1px solid var(--primary); border-radius: var(--radius-m); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; white-space: nowrap;">
                                Unpublish
                            </button>
                            <button onclick="adminSaveQuestion(true)"
                                style="min-width: 130px; padding: 0.8rem 1rem; background: var(--primary); color: white; border: none; border-radius: var(--radius-m); font-weight: 800; font-size: 1rem; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(var(--primary-rgb),0.3); white-space: nowrap;"
                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(var(--primary-rgb),0.4)'"
                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(var(--primary-rgb),0.3)'">
                                Save
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    } else {
        html += `<div style="height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); flex-direction: column; gap: 1.5rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--bg-overlay); display: flex; align-items: center; justify-content: center;">
                        <span class="material-symbols-rounded" style="font-size: 3rem; opacity: 0.3;">edit_note</span>
                    </div>
                    <div style="text-align: center;">
                        <h4 style="margin: 0; color: var(--text-main); font-size: 1.1rem;">No Question Selected</h4>
                        <p style="margin: 0.25rem 0 0; font-size: 0.9rem; opacity: 0.6;">Pick a question from the list to begin editing</p>
                    </div>
                 </div>`;
    }

    pane.innerHTML = html;
};

// Now replace the old functions
// We need to replace the update functions as well



// Admin State Handlers
window.adminSelectChapter = function (chapterId) {
    adminSelectedChapter = chapterId;
    const ch = window.courseData.find(c => c.id === chapterId);
    if (ch && ch.levels.length > 0) {
        // Auto select first level
        adminSelectedLevel = ch.levels[0].id;
    } else {
        adminSelectedLevel = null;
    }
    adminSelectedQuestion = null;
    renderGodModeEditor();
}

window.adminSelectLevel = function (chapterId, levelId) {
    adminSelectedChapter = chapterId;
    adminSelectedLevel = levelId;
    adminSelectedQuestion = null;

    // Reset middle pane scroll
    const middlePane = document.getElementById('admin-middle-pane');
    if (middlePane) middlePane.scrollTop = 0;

    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}

window.adminSelectQuestion = function (qId) {
    adminEditingChapter = null;
    adminSelectedQuestion = qId;
    if (qId !== 'new') {
        window.adminNewQuestionType = null;
    }

    // Reset right pane (editor) scroll
    const rightPane = document.getElementById('admin-right-pane');
    if (rightPane) rightPane.scrollTop = 0;

    renderGodModeMiddlePane();
    renderGodModeRightPane();
}

window.adminSetNewQuestionType = function (type) {
    window.adminNewQuestionType = type;
    renderGodModeRightPane();
}



window.adminEditChapter = function (chapterId) {
    const chapter = window.courseData.find(c => c.id === chapterId);
    if (!chapter) return;

    showModal({
        icon: 'settings',
        title: 'Chapter Settings',
        message: 'Update chapter details or delete this chapter.',
        confirmText: 'Save',
        cancelText: 'Cancel',
        customHtml: `
            <div style="text-align: left; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">Chapter Title</label>
                    <input type="text" id="modal-ch-title" value="${(chapter.title || '').replace(/"/g, '&quot;')}" 
                           style="width: 100%; padding: 0.8rem; background: var(--bg-dark); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-size: 0.95rem; font-family: inherit; box-sizing: border-box;">
                </div>
                <div>
                    <label style="display: block; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">Description</label>
                    <textarea id="modal-ch-desc" style="width: 100%; padding: 0.8rem; background: var(--bg-dark); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-size: 0.95rem; font-family: inherit; height: 100px; resize: vertical; box-sizing: border-box;">${chapter.description || ''}</textarea>
                </div>
                <div style="margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                    <button onclick="adminDeleteChapter('${chapter.id}')" 
                            style="width: 100%; padding: 0.85rem; background: rgba(var(--error-rgb), 0.1); color: var(--error); border: 1px solid var(--error); border-radius: var(--radius-s); font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;"
                            onmouseover="this.style.background='rgba(var(--error-rgb), 0.2)'"
                            onmouseout="this.style.background='rgba(var(--error-rgb), 0.1)'">
                        Delete Chapter
                    </button>
                </div>
            </div>
        `,
        onConfirm: () => {
            const title = document.getElementById('modal-ch-title').value;
            const desc = document.getElementById('modal-ch-desc').value;
            window.adminSaveChapterDetails(chapterId, title, desc);
        }
    });
}

window.adminSaveChapterDetails = function (chapterId, title, desc) {
    const ch = window.courseData.find(c => c.id === chapterId);
    if (!ch) return;

    ch.title = title;
    ch.description = desc;

    renderGodModeEditor();

    showToast('Settings saved successfully!');
}

window.adminDeleteChapter = function (chapterId) {
    showModal({
        icon: null,
        title: 'Delete Chapter?',
        message: `Are you sure you want to delete ${chapterId}? This action cannot be undone.`,
        confirmText: 'Delete',
        cancelText: 'Cancel',
        onConfirm: () => {
            // Clean up unlocked state tracking if present
            const chapMatch = chapterId.match(/\d+$/);
            const chapNum = chapMatch ? parseInt(chapMatch[0]) : null;
            if (gameState) {
                if (gameState.unlockedChapters) {
                    gameState.unlockedChapters = gameState.unlockedChapters.filter(id => id !== chapterId);
                }
                if (gameState.unlockedLevels && chapNum) {
                    const prefix = `c${chapNum}-`;
                    gameState.unlockedLevels = gameState.unlockedLevels.filter(id => !id.startsWith(prefix));
                }
            }

            // Clean up globals
            const chapter = window.courseData.find(c => c.id === chapterId);
            if (chapNum && chapter) {
                chapter.levels.forEach((lvl, i) => {
                    const varName = `chapter${chapNum}Level${i + 1}Questions`;
                    if (typeof window !== 'undefined') window[varName] = undefined;
                });
            }

            // Remove from courseData
            const cIdx = window.courseData.findIndex(c => c.id === chapterId);
            if (cIdx > -1) {
                window.courseData.splice(cIdx, 1);
            }

            // Re-index remaining chapters dynamically!
            window.courseData.forEach((ch, idx) => {
                const expectedNum = idx + 1;
                const currentMatch = ch.id.match(/\d+$/);
                const currentNum = currentMatch ? parseInt(currentMatch[0]) : null;

                if (currentNum && currentNum !== expectedNum) {
                    const oldChapId = ch.id;
                    const newChapId = `chapter${expectedNum}`;

                    if (gameState && gameState.unlockedChapters) {
                        gameState.unlockedChapters = gameState.unlockedChapters.map(uid => uid === oldChapId ? newChapId : uid);
                    }

                    ch.id = newChapId;

                    // Re-index their global question arrays
                    ch.levels.forEach((lvl, lvlIdx) => {
                        const levelNum = lvlIdx + 1;
                        const oldVar = `chapter${currentNum}Level${levelNum}Questions`;
                        const newVar = `chapter${expectedNum}Level${levelNum}Questions`;

                        if (typeof window !== 'undefined' && window[oldVar] !== undefined) {
                            window[newVar] = window[oldVar];
                            window[oldVar] = undefined;
                        }

                        const oldLvlId = lvl.id;
                        const newLvlId = `c${expectedNum}-l${levelNum}`;
                        if (gameState && gameState.unlockedLevels) {
                            gameState.unlockedLevels = gameState.unlockedLevels.map(uid => uid === oldLvlId ? newLvlId : uid);
                        }

                        // Also update the level IDs inside the chapter object
                        lvl.id = `c${expectedNum}-l${levelNum}`;
                    });
                }
            });

            // Reset Global Selection if we were in the deleted/shifted chapter
            adminSelectedChapter = null;
            adminSelectedLevel = null;
            adminSelectedQuestion = null;

            // Close all modals (settings + confirmation)
            document.querySelectorAll('.app-modal').forEach(m => m.remove());

            // Re-render editor
            renderGodModeEditor();
        }
    });
}

window.adminAddChapter = function () {
    const chapterNum = window.courseData.length + 1;
    const newChapterId = `chapter${chapterNum}`;

    // Create new chapter object
    const newChapter = {
        id: newChapterId,
        title: `Draft Chapter: New Topic`,
        description: "Description goes here. Edit in content.js directly.",
        levels: Array.from({ length: 5 }, (_, i) => ({
            id: `c${chapterNum}-l${i + 1}`,
            title: `Level ${i + 1}: Topic ${i + 1}`,
            description: "Master the core concepts.",
            // It will populate default questions by generating them (which will be empty since the pool is empty)
            questions: generateLevelQuestions(newChapterId, i)
        }))
    };

    // Add to window.courseData
    window.courseData.push(newChapter);

    // Generate empty question arrays for God Mode editing
    newChapter.levels.forEach((lvl, i) => {
        const varName = `chapter${chapterNum}Level${i + 1}Questions`;
        window[varName] = [];
    });

    // Unlock it automatically so admin can see it on dashboard
    if (!gameState.unlockedChapters.includes(newChapterId)) {
        gameState.unlockedChapters.push(newChapterId);
    }

    // Re-render editor
    adminSelectedChapter = newChapterId;
    adminSelectedLevel = `c${chapterNum}-l1`;
    adminSelectedQuestion = null;

    showToast(`Chapter ${chapterNum} created!`);

    renderGodModeEditor();
};

window.adminAddLevel = function (chapterId) {
    const chapter = window.courseData.find(c => c.id === chapterId);
    if (!chapter) return;

    const chapterNum = chapterId.match(/\d+$/)[0];
    const levelNum = chapter.levels.length + 1;
    const levelId = `c${chapterNum}-l${levelNum}`;

    const newLevel = {
        id: levelId,
        title: `New Topic`,
        description: "Master the core concepts.",
        questions: []
    };

    chapter.levels.push(newLevel);

    // Initialize global question array
    const varName = `chapter${chapterNum}Level${levelNum}Questions`;
    window[varName] = [];

    renderGodModeEditor();
    adminSelectLevel(chapterId, levelId);
};

window.adminEditLevel = function (chapterId, levelId) {
    const chapter = window.courseData.find(c => c.id === chapterId);
    if (!chapter) return;
    const lIdx = chapter.levels.findIndex(l => l.id === levelId);
    if (lIdx === -1) return;
    const level = chapter.levels[lIdx];
    const levelNum = lIdx + 1;

    showModal({
        icon: 'edit',
        title: 'Level Settings',
        message: 'Update level details.',
        confirmText: 'Save',
        cancelText: 'Cancel',
        customHtml: `
            <div style="text-align: left; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">Level Topic Name</label>
                    <div style="display: flex; align-items: stretch; background: var(--bg-dark); border: 1px solid var(--border); border-radius: var(--radius-s); overflow: hidden;">
                        <span style="padding: 0 0.8rem; color: var(--text-muted); font-size: 0.95rem; border-right: 1px solid var(--border); background: rgba(255, 255, 255, 0.03); display: flex; align-items: center; white-space: nowrap;">Level ${levelNum}:</span>
                        <input type="text" id="modal-lvl-topic" value="${(level.title || '').replace(/"/g, '&quot;')}" 
                               style="flex: 1; padding: 0.8rem; background: transparent; color: var(--text-main); border: none; font-size: 0.95rem; font-family: inherit; outline: none; width: 100%;">
                    </div>
                </div>
                <div>
                    <label style="display: block; font-weight: 700; margin-bottom: 0.5rem; font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px;">Description</label>
                    <textarea id="modal-lvl-desc" style="width: 100%; padding: 0.8rem; background: var(--bg-dark); color: var(--text-main); border: 1px solid var(--border); border-radius: var(--radius-s); font-size: 0.95rem; font-family: inherit; height: 100px; resize: vertical; box-sizing: border-box;">${level.description || ''}</textarea>
                </div>
            </div>
        `,
        onConfirm: () => {
            level.title = document.getElementById('modal-lvl-topic').value.trim();
            level.description = document.getElementById('modal-lvl-desc').value;
            renderGodModeEditor();
        }
    });
};
window.adminDeleteLevel = function (chapterId, levelId) {
    showModal({
        icon: null,
        title: 'Delete Level?',
        message: `Are you sure you want to delete this level? All questions in this level's pool will be removed.`,
        confirmText: 'Delete',
        cancelText: 'Cancel',
        onConfirm: () => {
            const chapter = window.courseData.find(c => c.id === chapterId);
            if (!chapter) return;

            const lIdx = chapter.levels.findIndex(l => l.id === levelId);
            if (lIdx === -1) return;

            const chapNum = chapterId.match(/\d+$/)[0];
            const levelNum = lIdx + 1;

            // Clean up the global question array for THIS level
            const varName = `chapter${chapNum}Level${levelNum}Questions`;
            if (typeof window !== 'undefined') window[varName] = undefined;

            // Clean up unlockedLevels for the deleted level
            if (gameState && gameState.unlockedLevels) {
                gameState.unlockedLevels = gameState.unlockedLevels.filter(id => id !== levelId);
            }

            // Remove from levels array
            chapter.levels.splice(lIdx, 1);

            // Re-index remaining levels in THIS chapter
            chapter.levels.forEach((lvl, idx) => {
                const expectedLvlNum = idx + 1;
                const currentLvlMatch = lvl.id.match(/l(\d+)$/);
                const currentLvlNum = currentLvlMatch ? parseInt(currentLvlMatch[1]) : null;

                if (currentLvlNum && currentLvlNum !== expectedLvlNum) {
                    const oldLvlId = lvl.id;
                    const newLvlId = `c${chapNum}-l${expectedLvlNum}`;

                    if (gameState && gameState.unlockedLevels) {
                        gameState.unlockedLevels = gameState.unlockedLevels.map(uid => uid === oldLvlId ? newLvlId : uid);
                    }

                    // Update ID
                    lvl.id = newLvlId;
                    // Rename title if it looks like "Level X: ..."
                    if (lvl.title.startsWith(`Level ${currentLvlNum}`)) {
                        lvl.title = lvl.title.replace(`Level ${currentLvlNum}`, `Level ${expectedLvlNum}`);
                    }

                    // Shift global question arrays
                    const oldVar = `chapter${chapNum}Level${currentLvlNum}Questions`;
                    const newVar = `chapter${chapNum}Level${expectedLvlNum}Questions`;

                    if (typeof window !== 'undefined' && window[oldVar] !== undefined) {
                        window[newVar] = window[oldVar];
                        window[oldVar] = undefined;
                    }
                }
            });

            // Reset selection
            adminSelectedLevel = null;
            adminSelectedQuestion = null;

            renderGodModeEditor();
        }
    });
};

window.adminSaveQuestion = function (isPublish = false, isUnpublish = false) {
    if (!adminSelectedChapter || !adminSelectedLevel || !adminSelectedQuestion) return;

    const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
    let q = {};
    const isNew = (adminSelectedQuestion === 'new');

    if (isNew) {
        if (!window.adminNewQuestionType) return;
        q = { type: window.adminNewQuestionType };
    } else {
        q = fullPool.find((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === adminSelectedQuestion);
    }

    if (!q) return;

    const errors = [];
    const setError = (msg) => { if (isPublish) errors.push(msg); };

    // --- Gather & Validate Question Text ---
    const qNode = document.getElementById('admin-q-question');
    const qVal = qNode ? qNode.value.trim() : '';
    if (!qVal) setError("Question text is required.");

    q.question = qVal;
    if (q.type === 'task') q.prompt = qVal;
    // For info cards and FIB, 'text' is the primary field. For others, it's 'question'.
    if (q.type === 'info_card' || q.type === 'fill_in_blanks') {
        q.text = qVal;
    } else {
        q.text = qVal; // Keep both for safety across different renderers
    }

    // --- XP ---
    const xpNode = document.getElementById('admin-q-xp');
    q.xp = xpNode ? parseInt(xpNode.value) || 10 : 10;

    // --- Feedback ---
    if (q.type !== 'info_card') {
        const fCorNode = document.getElementById('admin-q-feedback-correct');
        const fIncNode = document.getElementById('admin-q-feedback-incorrect');
        const fCor = fCorNode ? fCorNode.value.trim() : '';
        const fInc = fIncNode ? fIncNode.value.trim() : '';
        if (!fCor || !fInc) setError("Both Correct and Incorrect feedback are required.");
        q.correctFeedback = fCor;
        q.incorrectFeedback = fInc;
    }

    // --- Type Specifics ---
    if (q.type === 'choice' || q.type === 'multiple_choice') {
        const inputs = document.querySelectorAll('input[name="admin-q-correct"]');
        const opts = [];
        let hasCorrect = false;
        inputs.forEach((input, idx) => {
            const txtNode = document.getElementById(`admin-q-opt-${idx}`);
            const txt = txtNode ? txtNode.value.trim() : '';
            if (!txt) setError(`Option ${idx + 1} text is empty.`);
            if (input.checked) hasCorrect = true;
            opts.push({
                text: txt,
                correct: input.checked,
                feedback: input.checked ? (q.correctFeedback || '') : (q.incorrectFeedback || '')
            });
        });
        if (!hasCorrect) setError("You must select at least one correct answer.");
        q.options = opts;
    }

    if (q.type === 'task') {
        const phNode = document.getElementById('admin-q-placeholder');
        q.placeholder = phNode ? phNode.value.trim() : '';
        if (!q.placeholder) setError("Placeholder text is required.");
    }

    if (q.type === 'ordering') {
        const items = [];
        const itemInputs = document.querySelectorAll('[id^="admin-q-item-"]');
        itemInputs.forEach((el, i) => {
            const val = el ? el.value.trim() : '';
            if (!val) setError(`Ordering item ${i + 1} is empty.`);
            items.push(val);
        });
        q.items = items;
    }

    if (q.type === 'matching') {
        const pairs = [];
        const leftInputs = document.querySelectorAll('[id^="admin-q-pair-left-"]');
        leftInputs.forEach((lEl, i) => {
            const rEl = document.getElementById(`admin-q-pair-right-${i}`);
            const lVal = lEl ? lEl.value.trim() : '';
            const rVal = rEl ? rEl.value.trim() : '';
            if (!lVal || !rVal) setError(`Matching pair ${i + 1} is incomplete.`);
            pairs.push({ left: lVal, right: rVal });
        });
        q.pairs = pairs;
        q.shuffledRight = pairs.map(p => p.right);
    }

    if (q.type === 'fill_in_blanks') {
        const fibNode = document.getElementById('admin-q-fib-text');
        const wbNode = document.getElementById('admin-q-wordbank');
        const fibVal = fibNode ? fibNode.value.trim() : '';
        const wbVal = wbNode ? wbNode.value.trim() : '';
        if (!fibVal) setError("Sentence text is required.");
        if (!fibVal.includes('[') || !fibVal.includes(']')) setError("Sentence must contain at least one [blank].");
        q.text = fibVal;
        q.wordBank = wbVal.split(',').map(s => s.trim()).filter(Boolean);
        if (q.wordBank.length === 0) setError("Word bank is required.");
    }

    // --- Validation UI ---
    const errPanel = document.getElementById('admin-error-msg');
    if (isPublish && errors.length > 0) {
        if (errPanel) {
            errPanel.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 0.3rem;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 1rem;">
                        <span class="material-symbols-rounded">warning</span>
                        Publishing Failed
                    </div>
                    <ul style="text-align: left; margin: 0.5rem 0 0 1.5rem; font-size: 0.82rem; opacity: 0.9;">
                        ${errors.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            `;
            errPanel.style.display = 'block';
            errPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    if (errPanel) errPanel.style.display = 'none';

    // --- Save to Pool ---
    if (isNew) {
        // Generate a simple sequential ID (Max ID + 1)
        let maxId = fullPool.length; // fallback
        fullPool.forEach((qu, i) => {
            let idStr = qu.original_id ? qu.original_id.toString() : '';
            let num = parseInt(idStr.replace(/\\D/g, ''), 10) || (i + 1);
            if (num > maxId) maxId = num;
        });
        q.original_id = (maxId + 1).toString();

        fullPool.push(q);
        adminSelectedQuestion = q.original_id;
        window.adminNewQuestionType = null;
    }

    const wasPublished = q.published === true;

    if (isPublish) {
        q.published = true;
    } else if (isUnpublish) {
        q.published = false;
    } else if (q.published === undefined) {
        q.published = false;
    }

    // Show success toast
    if (isUnpublish) {
        showToast('Retracted to Drafts', 'info');
    } else {
        if (isPublish) {
            showToast(wasPublished ? 'Changes Saved' : 'Published Locally');
        } else {
            showToast('Saved to Memory');
        }
    }

    renderGodModeLeftPane();
    renderGodModeMiddlePane();
    renderGodModeRightPane();
}

window.adminBulkUploadJSON = function () {
    const customHtml = `
        <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1rem; text-align: center;">
            <a href="#" onclick="event.preventDefault(); window.adminDownloadBulkGuide()" 
               style="color: var(--accent); font-size: 0.85rem; font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; opacity: 0.8; transition: opacity 0.2s;"
               onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
                <span class="material-symbols-rounded" style="font-size: 1.1rem;">description</span>
                Download JSON Format Guide (PDF compatible)
            </a>
        </div>
    `;

    showModal({
        icon: 'upload_file',
        title: 'Bulk Upload Questions',
        message: 'Choose how you want to import your JSON question array:',
        customHtml: customHtml,
        confirmText: 'Paste JSON',
        cancelText: 'Upload File',
        confirmClass: 'btn-secondary',
        onConfirm: () => adminBulkUploadPaste(),
        onCancel: () => {
            const input = document.getElementById('admin-bulk-upload-input');
            if (input) input.click();
        }
    });
};

window.adminDownloadBulkGuide = function () {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AI Course - Bulk Upload JSON Guide</title>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 20px; background: #f8fafc; }
        .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); border: 1px solid #e2e8f0; }
        h1 { color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 30px; }
        h2 { color: #2563eb; margin-top: 40px; }
        pre { background: #1e293b; color: #f8fafc; padding: 20px; border-radius: 8px; overflow-x: auto; font-size: 0.9rem; margin: 15px 0; }
        code { font-family: 'ui-monospace', monospace; }
        .tip { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .warning { background: #fff7ed; border-left: 4px solid #f97316; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        @media print { body { background: white; margin: 0; padding: 0; } .card { box-shadow: none; border: none; } }
    </style>
</head>
<body>
    <div class="card">
        <h1>Bulk Upload JSON Guide</h1>
        <p>This guide provides the correct JSON formats for importing questions into the AI Learning Course Admin UI.</p>

        <div class="tip">
            <strong>Note:</strong> When pasting or uploading, ensure your content is wrapped in a square bracket array <code>[ ]</code>.
        </div>

        <h2>1. Multiple Choice (Single Correct)</h2>
        <pre><code>{
    "type": "choice",
    "question": "What does AI stand for?",
    "options": [
        { "text": "Artificial Intelligence", "correct": true, "feedback": "Correct!" },
        { "text": "Automated Information", "correct": false, "feedback": "Try again." }
    ],
    "xp": 10
}</code></pre>

        <h2>2. Multiple Choice (Multiple Correct)</h2>
        <pre><code>{
    "type": "multiple_choice",
    "question": "Which of these are AI tools? (Select all)",
    "options": [
        { "text": "Siri", "correct": true },
        { "text": "ChatGPT", "correct": true },
        { "text": "Toaster", "correct": false }
    ],
    "xp": 15
}</code></pre>

        <h2>3. Matching Pairs</h2>
        <pre><code>{
    "type": "matching",
    "question": "Match the term to its definition.",
    "pairs": [
        { "left": "Algorithm", "right": "A set of instructions" },
        { "left": "Data", "right": "Information used for training" }
    ],
    "correctFeedback": "Perfect matches!",
    "incorrectFeedback": "Try again."
}</code></pre>

        <h2>4. Fill in the Blanks</h2>
        <p>Use square brackets <code>[ ]</code> in the <code>text</code> field.</p>
        <pre><code>{
    "type": "fill_in_blanks",
    "text": "The [GPU] is used for training [Neural] Networks.",
    "wordBank": ["GPU", "Neural", "CPU", "Biological"],
    "correctFeedback": "Correct!"
}</code></pre>

        <h2>5. Ordering</h2>
        <p>Define items in their <b>correct order</b>. The app will shuffle them for the user.</p>
        <pre><code>{
    "type": "ordering",
    "question": "Order these by processing power:",
    "items": ["Supercomputer", "Desktop PC", "Calculator"],
    "correct_order": [0, 1, 2],
    "xp": 20
}</code></pre>

        <h2>6. Task (Subjective / Open Ending)</h2>
        <pre><code>{
    "type": "task",
    "prompt": "In one sentence, how can AI help a teacher?",
    "placeholder": "Type your answer here...",
    "xp": 10
}</code></pre>

        <h2>7. Info Card (Informational Slide)</h2>
        <pre><code>{
    "type": "info_card",
    "title": "Module Summary",
    "subtitle": "Key Takeaways",
    "text": "AI is a tool, not a replacement for human creativity.",
    "xp": 0
}</code></pre>

        <div class="warning">
            <strong>Printing to PDF:</strong> To save this as a PDF, simply press <code>Ctrl+P</code> (or <code>Cmd+P</code>) and choose <b>"Save as PDF"</b> as your destination.
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI_Bulk_Upload_Guide.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Guide downloaded! Open it to print to PDF.", "success");
};

window.adminBulkUploadPaste = function () {
    const customHtml = `
        <div style="margin-top: 1rem;">
            <label style="display: block; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Paste your JSON array here:</label>
            <textarea id="modal-bulk-paste" 
                      placeholder='[ { "type": "choice", ... }, ... ]'
                      style="width: 100%; height: 200px; background: rgba(255, 255, 255, 0.9); border: 1px solid var(--border); border-radius: 8px; color: #1a365d; padding: 0.8rem; font-family: monospace; font-size: 0.85rem; resize: none;"></textarea>
        </div>
    `;

    showModal({
        icon: 'content_paste',
        title: 'Paste JSON Questions',
        message: 'Ensure your data is a valid JSON array of question objects.',
        customHtml: customHtml,
        confirmText: 'Import',
        cancelText: 'Cancel',
        onConfirm: () => {
            const text = document.getElementById('modal-bulk-paste')?.value;
            if (!text) return;
            try {
                const data = JSON.parse(text);
                window.processBulkQuestions(data);
            } catch (err) {
                showToast("Invalid JSON formatting", "error");
            }
        }
    });
};

window.adminHandleFileUpload = function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            window.processBulkQuestions(data);
        } catch (err) {
            showModal({
                icon: 'error',
                title: 'Upload Failed',
                message: 'Invalid JSON format: ' + err.message,
                confirmText: 'OK'
            });
        }
    };
    reader.readAsText(file);
    event.target.value = '';
};

window.processBulkQuestions = function (data) {
    if (!Array.isArray(data)) {
        showToast("Error: Data must be a JSON array", "error");
        return;
    }

    const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
    let addedCount = 0;

    // Find current max numeric ID to keep sequencing clean
    let maxNumeric = 0;
    fullPool.forEach(exQ => {
        if (!exQ.original_id) return;
        const match = exQ.original_id.toString().match(/\d+$/);
        if (match) {
            const num = parseInt(match[0]);
            if (num > maxNumeric) maxNumeric = num;
        }
    });

    data.forEach(q => {
        // Basic validation: must have type and some form of question text
        if (!q.type || (!q.question && !q.prompt && !q.text)) return;

        // Ensure it has an original_id for the UI mapping
        if (!q.original_id) {
            maxNumeric++;
            q.original_id = maxNumeric.toString();
        }

        // Default to unpublished
        if (q.published === undefined) q.published = false;

        // Add to pool
        fullPool.push(q);
        addedCount++;
    });

    if (addedCount > 0) {
        showToast(`Successfully added ${addedCount} questions!`, 'success');
        renderGodModeMiddlePane();
    } else {
        showToast("No valid questions found in source.", "error");
    }
};

window.handleLevelDragStart = function (e, chapterId, index) {
    e.dataTransfer.setData('text/plain', JSON.stringify({ chapterId, index }));
    e.currentTarget.style.opacity = '0.4';
};

window.handleLevelDragOver = function (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
};

window.handleLevelDrop = function (e, destChapterId, destIndex) {
    e.preventDefault();
    try {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        const { chapterId: srcChapterId, index: srcIndex } = data;

        if (srcChapterId !== destChapterId) {
            showToast("Moving levels between chapters is not supported yet", "error");
            renderGodModeLeftPane();
            return;
        }

        if (srcIndex === destIndex) {
            renderGodModeLeftPane();
            return;
        }

        const chapter = window.courseData.find(ch => ch.id === srcChapterId);
        if (!chapter) return;

        // Move the level in the array
        const [movedLevel] = chapter.levels.splice(srcIndex, 1);
        chapter.levels.splice(destIndex, 0, movedLevel);

        showToast(`Level reordered!`, "success");
        renderGodModeLeftPane();
    } catch (err) {
        console.error("Drop error:", err);
    }
};

window.adminDeleteQuestion = function (qId) {
    if (qId === 'new') {
        adminSelectedQuestion = null;
        window.adminNewQuestionType = null;
        renderGodModeMiddlePane();
        renderGodModeRightPane();
        return;
    }

    showModal({
        icon: 'delete',
        title: 'Delete Question?',
        message: 'Are you sure you want to remove this question from the pool? This action cannot be undone.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        onConfirm: () => {
            const fullPool = getGodModePool(adminSelectedChapter, adminSelectedLevel);
            const idx = fullPool.findIndex((qu, i) => (qu.original_id ? qu.original_id.toString() : `idx_${i}`) === qId);

            if (idx !== -1) {
                fullPool.splice(idx, 1);
                adminSelectedQuestion = null;
                renderGodModeLeftPane();
                renderGodModeMiddlePane();
                renderGodModeRightPane();

                // Show success toast
                showToast('🗑️ Question Removed', 'info');
            }
        }
    });
};

// Generate the final content.js file for download
window.exportContentJS = async function () {
    const payload = {
        adminUser: currentUser,
        chapters: window.courseData,
        pools: {}
    };

    window.courseData.forEach((ch, cIdx) => {
        const chapNum = cIdx + 1;
        ch.levels.forEach((lvl, lIdx) => {
            const levelNum = lIdx + 1;
            const varName = `chapter${chapNum}Level${levelNum}Questions`;
            payload.pools[varName] = window.getGodModePool(ch.id, lvl.id);
        });
    });

    try {
        const res = await fetch(API_BASE + '/.netlify/functions/save-course-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            showModal({
                icon: 'check_circle',
                title: 'Live in Production',
                message: 'Your course content has been successfully saved to the global database and is now live for all users!',
                confirmText: 'Okay'
            });
        } else {
            const errData = await res.json();
            throw new Error(errData.error || 'Server error');
        }
    } catch (err) {
        console.error("Publish Error: ", err);
        showModal({
            icon: 'error',
            title: 'Publish Failed',
            message: 'Could not connect to database or update failed: ' + err.message,
            confirmText: 'OK'
        });
    }
}

// --- DESKTOP SLIDING DRAWER LOGIC ---
let desktopCoachOpen = false;

window.toggleDesktopCoach = function() {
    desktopCoachOpen = !desktopCoachOpen;
    const drawer = document.getElementById('desktop-coach-drawer');
    const badge = document.getElementById('desktop-coach-badge');
    const input = document.getElementById('desktop-coach-input');
    const fab = document.getElementById('desktop-coach-fab');
    const mascotContainer = document.getElementById('polly-mascot-container');
    
    if (desktopCoachOpen) {
        drawer.style.transform = 'translateY(0)';
        drawer.style.opacity = '1';
        drawer.style.pointerEvents = 'auto';
        if (badge) badge.style.display = 'none';
        if (input) setTimeout(() => input.focus(), 300);
        
        // Hide Polly's bubble immediately when drawer is opened
        const bubble = document.getElementById('polly-speech-bubble');
        if (bubble) {
            bubble.style.opacity = '0';
            bubble.style.transform = 'translateY(10px) scale(0.9)';
        }
        
        // Move Polly back to position
        if (fab) {
            fab.style.transform = 'scale(1) translateY(0)';
        }
        
        // Maintain happy expression for 10 seconds
        if (mascotContainer) {
            const svg = mascotContainer.querySelector('.polly-svg, .garfield-svg');
            if (svg) {
                svg.classList.add('happy');
                setTimeout(() => {
                    // Only remove if we aren't hovering it right now
                    if (!isPollyHovered) {
                        svg.classList.remove('happy');
                    }
                }, 10000);
            }
        }
    } else {
        drawer.style.transform = 'translateY(120%)';
        drawer.style.opacity = '0';
        drawer.style.pointerEvents = 'none';
    }
};

// Close desktop coach when clicking outside of it
document.addEventListener('click', function(e) {
    if (desktopCoachOpen) {
        const drawer = document.getElementById('desktop-coach-drawer');
        const fab = document.getElementById('desktop-coach-fab');
        // If click is outside drawer and outside fab, close the drawer
        if (drawer && !drawer.contains(e.target) && fab && !fab.contains(e.target)) {
            window.toggleDesktopCoach();
        }
    }
});

window.handleDesktopCoachSend = function() {
    const input = document.getElementById('desktop-coach-input');
    const history = document.getElementById('desktop-coach-history');
    if (!input || !history) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    const userDiv = document.createElement('div');
    userDiv.style.display = 'flex';
    userDiv.style.justifyContent = 'flex-end';
    userDiv.style.marginBottom = '1rem';
    userDiv.innerHTML = `
        <div style="background: var(--gradient-primary); color: white; padding: 0.85rem 1.1rem; border-radius: 16px 16px 4px 16px; font-size: 0.95rem; font-family: 'Outfit', sans-serif;">
            ${message}
        </div>
    `;
    history.appendChild(userDiv);
    input.value = '';

    // Scroll to bottom
    history.scrollTop = history.scrollHeight;

    // Mock bot response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.style.display = 'flex';
        botDiv.style.gap = '0.75rem';
        botDiv.style.marginBottom = '1rem';
        botDiv.innerHTML = `
            <div style="width: 32px; height: 32px; border-radius: 50%; overflow: hidden; background: white; flex-shrink: 0; border: 2px solid var(--accent);"><img src="${window.getMascotAvatarSrc()}" style="width: 100%; height: 100%; object-fit: cover;"></div>
            <div style="background: rgba(var(--primary-rgb), 0.15); border: 1px solid rgba(var(--primary-rgb), 0.3); border-radius: 4px 16px 16px 16px; padding: 0.85rem 1.1rem; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; font-family: 'Outfit', sans-serif;">
                That is a fantastic question! Let me check the knowledge base regarding: "${message}"...
            </div>
        `;
        history.appendChild(botDiv);
        history.scrollTop = history.scrollHeight;
    }, 1000);
};

// Initialize Desktop FAB Mascot
(function initPollyFAB() {
    const container = document.getElementById('polly-mascot-container');
    if (container && window.getMascotSVG) {
        container.innerHTML = window.getMascotSVG('100%', '100%', 'neutral');
    } else if (!container) {
        document.addEventListener('DOMContentLoaded', initPollyFAB);
    }
})();

// Polly Periodic Mentoring & Hover Logic
let isPollyHovered = false;
let pollyTimeout = null;

window.showPollyBubble = function(text, isHover = false) {
    if (isHover) isPollyHovered = true;
    if (desktopCoachOpen) return;
    
    const bubble = document.getElementById('polly-speech-bubble');
    const bubbleText = document.getElementById('polly-bubble-text');
    const fab = document.getElementById('desktop-coach-fab');
    const mascotContainer = document.getElementById('polly-mascot-container');
    
    if (!bubble || !bubbleText || !fab) return;

    bubbleText.textContent = text;
    bubble.style.opacity = '1';
    bubble.style.transform = 'translateY(0) scale(1)';
    
    if (isHover) {
        fab.style.transform = 'scale(1.1) translateY(-10px)';
        if (mascotContainer) {
            const svg = mascotContainer.querySelector('.polly-svg, .garfield-svg');
            if (svg) svg.classList.add('happy');
        }
    }

    // Auto hide if it's a periodic popup
    if (!isHover) {
        clearTimeout(pollyTimeout);
        pollyTimeout = setTimeout(() => {
            if (!isPollyHovered) window.hidePollyBubble(false);
        }, 7000); // Show for 7 seconds
    }
};

window.hidePollyBubble = function(isHover = false) {
    if (isHover) isPollyHovered = false;
    
    const bubble = document.getElementById('polly-speech-bubble');
    const fab = document.getElementById('desktop-coach-fab');
    const mascotContainer = document.getElementById('polly-mascot-container');
    
    if (!bubble || !fab) return;

    if (!isPollyHovered) {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(10px) scale(0.9)';
    }
    
    if (isHover) {
        fab.style.transform = 'scale(1) translateY(0)';
        if (mascotContainer && !desktopCoachOpen) {
            const svg = mascotContainer.querySelector('.polly-svg, .garfield-svg');
            if (svg) svg.classList.remove('happy');
        }
    }
};

// 50 Context-Aware Mentoring Messages
const pollyMessages = [
    // Beginner Messages (XP < 300)
    { text: "Welcome to your AI journey!", condition: (s) => s.xp < 300 },
    { text: "Every great AI engineer started exactly where you are.", condition: (s) => s.xp < 300 },
    { text: "Don't worry if concepts feel abstract right now. It clicks soon!", condition: (s) => s.xp < 300 },
    { text: "Take your time reading through the fundamentals.", condition: (s) => s.xp < 300 },
    { text: "Getting the basics right is the most important step.", condition: (s) => s.xp < 300 },
    { text: "Machine learning sounds like magic, but it's just math and data.", condition: (s) => s.xp < 300 },
    { text: "I'm here to help you navigate these new terms.", condition: (s) => s.xp < 300 },
    { text: "A small step today is a giant leap for your AI career.", condition: (s) => s.xp < 300 },
    { text: "We all make mistakes while learning. Keep trying!", condition: (s) => s.xp < 300 },
    { text: "Curiosity is your best tool right now.", condition: (s) => s.xp < 300 },

    // Intermediate Messages (XP between 300 and 1500)
    { text: "You're building a solid foundation.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "Notice how the concepts are starting to connect?", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "You're no longer a beginner. Keep pushing!", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "Neural networks can be tricky, but you're getting the hang of it.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "You're leveling up fast. Great work.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "Don't forget to review older chapters if you feel stuck.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "Your analytical skills are sharpening.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "You're halfway to becoming an AI pro.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "Things are getting advanced, but so are you.", condition: (s) => s.xp >= 300 && s.xp < 1500 },
    { text: "It's all about pattern recognition, both for AI and for you.", condition: (s) => s.xp >= 300 && s.xp < 1500 },

    // Advanced Messages (XP >= 1500)
    { text: "Your dedication to AI is truly impressive.", condition: (s) => s.xp >= 1500 },
    { text: "You have the knowledge of an advanced practitioner now.", condition: (s) => s.xp >= 1500 },
    { text: "Complex algorithms are no match for you anymore.", condition: (s) => s.xp >= 1500 },
    { text: "You're making this look easy.", condition: (s) => s.xp >= 1500 },
    { text: "Look at that XP! You're a top performer.", condition: (s) => s.xp >= 1500 },
    { text: "You've mastered concepts that confuse most people.", condition: (s) => s.xp >= 1500 },
    { text: "The AI community needs minds like yours.", condition: (s) => s.xp >= 1500 },
    { text: "I might need to start asking YOU for help soon.", condition: (s) => s.xp >= 1500 },
    { text: "You are crushing the leaderboard.", condition: (s) => s.xp >= 1500 },
    { text: "Incredible mastery. Keep aiming higher.", condition: (s) => s.xp >= 1500 },

    // Streak-based Messages
    { text: "A 3-day streak! You are building great habits.", condition: (s) => s.streak >= 3 && s.streak < 7 },
    { text: "Consistency is key, and you're proving it.", condition: (s) => s.streak >= 3 && s.streak < 7 },
    { text: "Don't break your streak now, you're on a roll.", condition: (s) => s.streak >= 3 && s.streak < 7 },
    { text: "One week streak! 🔥 Incredible consistency.", condition: (s) => s.streak >= 7 && s.streak < 14 },
    { text: "7 days of learning changes the brain. You're evolving.", condition: (s) => s.streak >= 7 && s.streak < 14 },
    { text: "You've been here every day. That's true dedication.", condition: (s) => s.streak >= 7 && s.streak < 14 },
    { text: "Over two weeks! Your learning momentum is unstoppable.", condition: (s) => s.streak >= 14 },
    { text: "I've never seen such a long streak. Brilliant work.", condition: (s) => s.streak >= 14 },
    { text: "You're making AI learning a core part of your daily life.", condition: (s) => s.streak >= 14 },
    { text: "Keep this streak alive!", condition: (s) => s.streak >= 3 },

    // General Engagement / Context-Free
    { text: "Remember to take short breaks to let the information settle.", condition: (s) => true },
    { text: "Need a hint? Click me and ask away.", condition: (s) => true },
    { text: "AI is a marathon, not a sprint.", condition: (s) => true },
    { text: "Data is the new oil, and you're learning how to refine it.", condition: (s) => true },
    { text: "Think about how you can apply this concept in real life.", condition: (s) => true },
    { text: "Every expert was once a beginner.", condition: (s) => true },
    { text: "Feeling stuck? It happens to the best of us.", condition: (s) => true },
    { text: "Learning is a process. Enjoy the journey.", condition: (s) => true },
    { text: "You are doing great.", condition: (s) => true },
    { text: "If you have questions, I'm right here.", condition: (s) => true }
];

function triggerPeriodicPolly() {
    // Only show if user isn't actively hovering, the drawer is closed, and user is logged in
    if (!isPollyHovered && !desktopCoachOpen && currentUser && gameState) {
        // Filter messages based on the user's current gameState
        const validMessages = pollyMessages.filter(msg => msg.condition(gameState));
        
        if (validMessages.length > 0) {
            const randomMsg = validMessages[Math.floor(Math.random() * validMessages.length)];
            window.showPollyBubble(randomMsg.text, false);
        }
    }
}

// Show the first progress-aware message after 5 seconds, then repeat every 45 seconds
setTimeout(() => {
    triggerPeriodicPolly();
    setInterval(triggerPeriodicPolly, 45000);
}, 5000);

