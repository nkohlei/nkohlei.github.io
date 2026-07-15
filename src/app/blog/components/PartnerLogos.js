"use client";

/*
  PARTNER LOGOS — Clean, Colored, and Transparent Logos
  ─────────────────────────────────────────────────────
*/

const PARTNERS = [
  /* 1 */
  {
    id: "nasa", url: "https://www.nasa.gov", label: "NASA",
    render: () => <img src="/logos/nasa.svg" alt="NASA" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 2 – SpaceX: white on disk, inverts to black in light mode, remains white in dark mode */
  {
    id: "spacex", url: "https://www.spacex.com", label: "SpaceX",
    render: () => <img src="/logos/spacex.svg" alt="SpaceX" className="w-full h-full object-contain partner-logo-img theme-adaptive-invert"/>,
  },
  /* 3 */
  {
    id: "cern", url: "https://home.cern", label: "CERN",
    render: () => <img src="/logos/cern.png" alt="CERN" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 4 */
  {
    id: "natgeo", url: "https://www.nationalgeographic.com", label: "National Geographic",
    render: () => (
      <svg viewBox="0 0 199 59" className="w-full h-full object-contain partner-logo-img" style={{ color: "var(--foreground)" }}>
        <path fill="#FBD42C" d="M0,0v58.992h40.627V0H0z M34.751,53.053H5.855V5.943h28.896V53.053z"/>
        <path fill="currentColor" d="M64.838,20.568h-0.057c-3.241-5.279-6.513-9.942-9.813-14.636H52.45v20.533h2.779V11.739h0.028 c3.273,5.31,6.543,10.004,9.844,14.726h2.518V5.932h-2.781V20.568z M84.899,26.465L78.443,5.932H75.55l-7.006,20.533h3.01 l1.767-5.603h6.106l1.593,5.603H84.899z M74.217,18.338c0.811-2.699,1.622-5.188,2.345-8.36h0.059 c0.811,3.171,1.534,5.661,2.287,8.36H74.217z M88.169,26.465h3.474V8.69h5.327V5.932H82.844V8.69h5.326V26.465z M101.542,5.932 h-3.444v20.533h3.444V5.932z M112.255,26.815c5.298,0,8.598-4.78,8.598-10.911c0-5.749-3.649-10.326-8.598-10.326 c-4.951,0-8.6,4.577-8.6,10.326C103.655,22.036,106.955,26.815,112.255,26.815z M112.255,8.513c3.445,0,4.891,3.607,4.891,7.392 c0,3.93-1.272,7.978-4.891,7.978c-3.619,0-4.892-4.047-4.892-7.978C107.363,12.12,108.81,8.513,112.255,8.513z M125.742,11.739 h0.032c3.27,5.31,6.54,10.004,9.841,14.726h2.518V5.932h-2.779v14.636h-0.058c-3.241-5.279-6.513-9.942-9.813-14.636h-2.518v20.533 h2.777V11.739z M143.833,20.862h6.11l1.592,5.603h3.878l-6.454-20.533h-2.895l-7.007,20.533h3.014L143.833,20.862z M147.079,9.978 h0.057c0.809,3.171,1.533,5.661,2.288,8.36h-4.693C145.544,15.639,146.352,13.149,147.079,9.978z M166.731,23.706h-6.859V5.932 h-3.446v20.533h10.306V23.706z M62.006,49.949c-0.725,0.382-1.505,0.5-2.431,0.5c-2.981,0-5.876-2.876-5.876-7.744 c0-4.663,2.518-7.627,6.224-7.627c1.332,0,2.779,0.498,3.705,1.084l1.128-2.433c-1.157-0.882-3.039-1.585-4.921-1.585 c-6.078,0-9.842,4.899-9.842,10.501c0,6.043,3.764,10.737,9.725,10.737c1.969,0,3.909-0.525,5.763-1.262v-8.479h-3.475V49.949z M72.107,43.643h5.675v-2.756h-5.675v-5.632h5.791v-2.757h-9.263v20.533H78.94v-2.76h-6.833V43.643z M88.609,32.145 c-4.951,0-8.597,4.576-8.597,10.326c0,6.13,3.299,10.912,8.597,10.912c5.297,0,8.596-4.782,8.596-10.912 C97.205,36.721,93.558,32.145,88.609,32.145z M88.609,50.449c-3.62,0-4.893-4.048-4.893-7.979c0-3.785,1.447-7.393,4.893-7.393 c3.444,0,4.891,3.607,4.891,7.393C93.5,46.401,92.228,50.449,88.609,50.449z M110.406,49.949c-0.723,0.382-1.506,0.5-2.432,0.5 c-2.982,0-5.877-2.876-5.877-7.744c0-4.663,2.519-7.627,6.226-7.627c1.331,0,2.779,0.498,3.702,1.084l1.13-2.433 c-1.157-0.882-3.04-1.585-4.923-1.585c-6.076,0-9.839,4.899-9.839,10.501c0,6.043,3.763,10.737,9.727,10.737 c1.966,0,3.905-0.525,5.76-1.262v-8.479h-3.474V49.949z M128.759,38.424c0-3.992-2.404-5.926-6.281-5.926h-5.414v20.533h3.473 v-7.744h1.563l3.271,7.744h3.965l-4.079-8.508C127.483,43.321,128.759,40.887,128.759,38.424z M121.985,42.646 c-0.349,0.03-1.161,0.06-1.449,0.089v-7.479h1.537c2.052,0,3.209,1.2,3.209,3.313C125.282,41.325,123.635,42.559,121.985,42.646z M136.401,32.498l-7.007,20.533h3.009l1.767-5.604h6.108l1.596,5.604h3.876l-6.456-20.533H136.401z M135.07,44.907 c0.81-2.701,1.62-5.194,2.344-8.361h0.059c0.809,3.167,1.533,5.66,2.287,8.361H135.07z M171.167,40.388h-7.209v-7.89h-3.445v20.533 h3.445v-9.887h7.209v9.887h3.472V32.554h-3.472V40.388z M177.967,53.029h3.444V32.498h-3.444V53.029z M193.57,50.449 c-3.358,0-6.196-2.876-6.196-7.744c0-4.663,2.579-7.627,6.109-7.627c1.332,0,2.722,0.615,3.562,1.143l1.099-2.491 c-1.187-0.822-2.864-1.585-4.66-1.585c-6.05,0-9.785,4.899-9.785,10.501c0,6.043,3.764,10.737,9.729,10.737 c1.678,0,3.53-0.675,4.572-1.407l-0.954-2.553C196.148,50.009,194.902,50.449,193.57,50.449z M152.262,32.498h-5.41v20.533h3.474 v-7.744h1.561c4.142,0,6.658-3.405,6.658-6.863C158.544,34.432,156.144,32.498,152.262,32.498z M151.771,42.646 c-0.347,0.027-1.185,0.055-1.446,0.082v-7.473h1.561c2.028,0,3.186,1.2,3.186,3.313C155.071,41.325,153.421,42.559,151.771,42.646z"/>
      </svg>
    ),
  },
  /* 5 – The North Face: white on disk, inverts to black in light mode, remains white in dark mode */
  {
    id: "tnf", url: "https://www.thenorthface.com", label: "The North Face",
    render: () => <img src="/logos/thenorthface.svg" alt="The North Face" className="w-full h-full object-contain partner-logo-img theme-adaptive-invert"/>,
  },
  /* 6 */
  {
    id: "google", url: "https://www.google.com", label: "Google",
    render: () => <img src="/logos/google.svg" alt="Google" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 7 */
  {
    id: "ibm", url: "https://www.ibm.com", label: "IBM",
    render: () => <img src="/logos/ibm.svg" alt="IBM" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 8 */
  {
    id: "mit", url: "https://www.mit.edu", label: "MIT",
    render: () => <img src="/logos/mit.svg" alt="MIT" className="w-full h-full object-contain partner-logo-img scale-[0.7]"/>,
  },
  /* 9 */
  {
    id: "popsci", url: "https://www.popsci.com", label: "Popular Science",
    render: () => <img src="/logos/popularscience.png" alt="Popular Science" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 10 */
  {
    id: "canon", url: "https://www.canon.com", label: "Canon",
    render: () => <img src="/logos/canon.svg" alt="Canon" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 11 */
  {
    id: "gopro", url: "https://www.gopro.com", label: "GoPro",
    render: () => <img src="/logos/gopro.png" alt="GoPro" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 12 – Red Bull: textless colored SVG logo, theme-adaptive inversion */
  {
    id: "redbull", url: "https://www.redbull.com", label: "Red Bull",
    render: () => <img src="/logos/redbull.svg" alt="Red Bull" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 13 */
  {
    id: "tesla", url: "https://www.tesla.com", label: "Tesla",
    render: () => <img src="/logos/tesla.svg" alt="Tesla" className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 14 */
  {
    id: "nvidia", url: "https://www.nvidia.com", label: "NVIDIA",
    render: () => (
      <svg viewBox="0 0 120 60" className="w-full h-full object-contain partner-logo-img" style={{ color: "var(--foreground)" }}>
        <path fill="currentColor" d="M52.412 38.843v16.863h4.76V38.843zm-37.44-.03v16.877h4.802V42.587l3.744.014c1.23 0 2.086.3 2.672.93.757.8 1.057 2.1 1.057 4.46v7.703h4.66v-9.317c0-6.66-4.244-7.56-8.388-7.56zm45.115.03v16.863h7.717c4.116 0 5.46-.686 6.902-2.215 1.03-1.072 1.686-3.444 1.686-6.03 0-2.372-.557-4.487-1.543-5.802-1.743-2.358-4.287-2.815-8.088-2.815zm4.716 3.658h2.044c2.972 0 4.887 1.33 4.887 4.787s-1.915 4.802-4.887 4.802h-2.044zm-19.25-3.658l-3.973 13.36-3.8-13.36h-5.145l5.43 16.863h6.86l5.487-16.863zM78.62 55.706h4.76V38.843h-4.76zm13.347-16.863l-6.645 16.848H90l1.057-2.987h7.86l1 2.972h5.102l-6.702-16.834zm3.087 3.072l2.887 7.888h-5.86z"/>
        <path fill="#76b900" d="M53.922 13.005v-2.85l.844-.035c7.81-.246 12.93 6.72 12.93 6.72s-5.524 7.67-11.453 7.67c-.792 0-1.566-.123-2.305-.37v-8.656c3.044.37 3.66 1.707 5.47 4.75l4.064-3.413s-2.973-3.888-7.97-3.888c-.528-.018-1.056.018-1.583.07m0-9.43v4.258l.844-.053C65.62 7.4 72.71 16.682 72.71 16.682s-8.128 9.887-16.6 9.887c-.74 0-1.46-.07-2.182-.194v2.64c.598.07 1.214.123 1.812.123 7.882 0 13.582-4.03 19.106-8.78.915.74 4.662 2.516 5.436 3.3-5.243 4.398-17.47 7.934-24.402 7.934a17.36 17.36 0 0 1-1.935-.106V35.2H83.9V3.575zm0 20.566v2.252c-7.284-1.302-9.307-8.884-9.307-8.884s3.5-3.87 9.307-4.504v2.463h-.018c-3.044-.37-5.436 2.48-5.436 2.48s1.355 4.803 5.454 6.193m-12.93-6.95s4.3-6.37 12.948-7.037V7.833C44.37 8.607 36.1 16.7 36.1 16.7s4.68 13.547 17.822 14.778v-2.463c-9.64-1.196-12.93-11.823-12.93-11.823z"/>
      </svg>
    ),
  },
  /* 15 */
  {
    id: "wb", url: "https://www.warnerbros.com", label: "Warner Bros.",
    render: () => <img src="/logos/warnerbros.svg" alt="Warner Bros." className="w-full h-full object-contain partner-logo-img"/>,
  },
  /* 16 */
  {
    id: "nbc", url: "https://www.nbc.com", label: "NBC",
    render: () => (
      <svg viewBox="0 0 120 60" className="w-full h-full object-contain partner-logo-img" style={{ color: "var(--foreground)" }}>
        <path d="M59.998 5.918c-.933-2.33-3.207-4.846-7.465-4.5-5.424.6-7.114 5.788-6.295 8.89-2.16-1.463-5.834-2.106-9.04.64-4.14 4.15-1.925 9.762.35 11.108-2.508-.232-6.472 1.462-7.35 5.896-.933 5.504 3.263 8.713 7.35 8.713h45.307c4.725 0 7.346-4.087 7.052-7.942-.464-5.03-5.067-6.96-7.578-6.548 2.098-1.17 4.9-6.67.64-10.992-3.382-3.217-7.694-2.047-9.2-.643.817-2.687-.523-8.243-6.008-9.12-.38-.042-.744-.065-1.092-.065-4.188 0-6.07 3.06-6.66 4.566" fill="#fff"/>
        <path d="M37.954 11.822c-2.392 2.165-3.263 7.072 1.05 9.94l17.203 11.802-8.34-19.11c-1.748-4.51-6.53-5.493-9.91-2.633" fill="#f37021"/>
        <path d="M52.762 2.53c-2.796.057-6.995 3.387-5.126 8.472l8.627 20.345 3.03-21.4c.702-5.317-3.322-7.772-6.532-7.418" fill="#cc004c"/>
        <path d="M60.64 9.132h1.63s.87 0 1 .41c-.642.524-2.39.6-2.157 3.4l2.742 18.412 8.568-20.4c1.753-4.555-1.926-8.358-5.19-8.475l-.463-.02c-2.93 0-6.285 2.128-6.12 6.68" fill="#6460aa"/>
        <path d="M72.07 14.628l-8.104 18.88 17.198-11.864c3.964-2.812 3.325-7.307 1.106-9.53-.93-1.046-2.638-1.854-4.448-1.854-2.138 0-4.425 1.134-5.752 4.368" fill="#0089d0"/>
        <path d="M79.237 24.33l-16.15 11.28h19.886c4.08 0 6.702-4.207 5.536-8.067-.78-2.426-3.1-4.33-5.77-4.334-1.128.001-2.325.34-3.5 1.12" fill="#0db14b"/>
        <path d="M37.5 35.61h19.593L40.928 24.33c-3.732-2.398-7.93-.995-9.444 2.984C30.2 31.87 33.407 35.61 37.5 35.61" fill="#fcb711"/>
        <path fill="currentColor" d="M58.7 49.926h3.408c.783.05 2.172.733 2.172 2.353 0 1.694-1.44 2.378-2.222 2.455H58.7v-4.808m-.052-7.542h2.805c.96.052 2.093.76 2.093 2.076 0 1.3-.857 2.15-1.966 2.303h-2.93v-4.38m-3.835-3.14V57.87h9.037c2.145 0 4.695-2.15 4.695-4.96 0-2.935-1.917-4.376-3.13-4.96 0 0 2.22-1.3 2.123-4.075-.1-3.745-3.56-4.632-4.747-4.632h-7.977M40.952 57.87V47.143L52.665 58.58V39.245H48.73v10.453l-11.716-11.2V57.87zm28.226-9.514c.1 5.9 4.33 10.293 9.77 10.293 1.3 0 2.65-.244 4.038-.78v-3.795a6.76 6.76 0 0 1-3.525.997c-3.292 0-6.4-2.436-6.27-6.867.222-3.594 3.164-6.076 6.336-6.076 1.16 0 2.356.335 3.46 1.065V39.5c-1.287-.522-2.567-.755-3.8-.755-5.427 0-9.905 4.577-10 9.6"/>
      </svg>
    ),
  },
  /* 17 */
  {
    id: "oxypace", url: "https://oxypace.com.tr", label: "Oxypace",
    render: () => <img src="/logos/oxypace.svg" alt="Oxypace" className="w-full h-full object-contain partner-logo-img scale-[0.98]"/>,
  },
];

/* ── LOGO ITEM ────────────────────────────────────────────────── */

function LogoItem({ partner }) {
  return (
    <a
      id={`partner-${partner.id}`}
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center justify-center
        w-[140px] h-[70px]
        transition-all duration-300
        hover:-translate-y-0.5
      "
    >
      {partner.render()}
    </a>
  );
}

/* ── SECTION ──────────────────────────────────────────────────── */

export default function PartnerLogos({ lang = "tr" }) {
  const heading = lang === "en" ? "Partners & References" : "Ortaklar & Referanslar";
  const sub = lang === "en"
    ? "Organizations defining the frontier of science and exploration"
    : "Bilim ve keşfin sınırlarını belirleyen kuruluşlar";

  return (
    <section
      className="glass-nav transition-theme"
      style={{ paddingTop: "48px", paddingBottom: "48px", borderTop: "1px solid var(--border-color)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>
            {heading}
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-subtle)" }}>{sub}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-6xl mx-auto">
          {PARTNERS.map((p) => (
            <LogoItem key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
