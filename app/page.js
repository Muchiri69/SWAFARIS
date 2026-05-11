'use client';
import { useState, useEffect } from "react";

const MOCK_ITINERARY = `YOUR SWAFARIS JOURNEY

7 Days · Maasai Mara & Amboseli · 2 Guests · Premium

────────────────────────────

DAY 1 — NAIROBI ARRIVAL
Lodge: The Emakoko, Nairobi National Park
A quiet arrival. Your room opens to the park — no city noise, just wilderness at the edge of Nairobi. We chose this because after a long flight, you need stillness before adventure.
Evening: Sundowner drive through Nairobi National Park
Cost: $420 per night

────────────────────────────

DAY 2 — INTO THE MARA
Lodge: Angama Mara, Maasai Mara
Flight: Wilson Airport to Keekorok (45 min)
Perched above the Great Rift Valley, Angama Mara offers the most cinematic view in Kenya. We placed you here on Day 2 so the Mara reveals itself slowly — first the scale, then the wildlife.
Activity: Afternoon game drive — resident cheetah coalition nearby
Cost: $1,200 per person per night

────────────────────────────

DAY 3 — MARA IMMERSION
Lodge: Angama Mara
A full day on the plains. Picnic breakfast on the Mara — just you, your guide, and the horizon.
Highlight: Mara River crossing season runs July to October. Timing is everything.
Cost: Included

────────────────────────────

DAY 4 — AMBOSELI TRANSITION
Lodge: Tortilis Camp, Amboseli
Flight: Keekorok to Amboseli (1 hr)
We transition you at midday — avoiding travel fatigue by timing the flight after a slow morning. Tortilis sits under a canopy of fever trees with Kilimanjaro filling the sky at dusk.
Activity: Evening elephant herds — largest in Africa
Cost: $890 per person per night

────────────────────────────

DAY 5 — KILIMANJARO MORNING
Lodge: Tortilis Camp
Rise before the clouds build. The mountain is clearest at dawn — a moment few travelers plan for. We did.
Activity: Observation Hill panoramic walk
Cost: Included

────────────────────────────

DAY 6 — NAIROBI FINALE
Hotel: Villa Rosa Kempinski, Nairobi
Flight: Amboseli to Wilson (45 min)
An unhurried afternoon. Optional: Karen Blixen Museum — where Out of Africa was lived, not just written.
Dinner: Carnivore Restaurant
Cost: $280 per night

────────────────────────────

DAY 7 — DEPARTURE
Transfer: Villa Rosa Kempinski to JKIA
Swafaris farewell: Single-origin Kenya coffee and a handcrafted Maasai bracelet — something real to carry home.

────────────────────────────

JOURNEY SUMMARY
Duration: 7 days, 6 nights
Investment: $8,200 per person
Includes: All flights, accommodation, meals, game drives
Swafaris support: 24/7 WhatsApp throughout your trip`;

export default function Home() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
  }, []);

  async function handleSubmit() {
    if (!prompt.trim()) return;
    setLoading(true);
    setItinerary("");
    await new Promise((r) => setTimeout(r, 2500));
    setItinerary(MOCK_ITINERARY);
    setLoading(false);
  }

  function handleWhatsApp() {
    window.open("https://wa.me/254700000000?text=Hi, I would like to book this Swafaris trip: " + encodeURIComponent(prompt), "_blank");
  }

  if (showPlanner) {
    return (
      <main style={{minHeight: "100vh", background: "#F5F1E8", fontFamily: "var(--font-cormorant)"}}>

        <nav style={{background: "#F5F1E8", borderBottom: "1px solid #e8e0d0", padding: "20px 40px"}} className="flex items-center justify-between">
          <button
            onClick={() => { setShowPlanner(false); setItinerary(""); setPrompt(""); }}
            className="flex items-center gap-3"
            style={{background: "none", border: "none", cursor: "pointer"}}
          >
            <img src="/impala.png" alt="Swafaris" style={{width: "36px", height: "36px", objectFit: "contain"}} />
            <span style={{color: "#8B6B43", fontSize: "18px", letterSpacing: "0.2em", fontWeight: "600"}} className="uppercase">
              Swafaris
            </span>
          </button>
          <span style={{color: "#9CA3AF", fontSize: "11px", letterSpacing: "0.15em"}} className="uppercase">
            Journey Planner
          </span>
        </nav>

        <div style={{maxWidth: "700px", margin: "0 auto", padding: "60px 24px"}}>

          <div className="text-center" style={{marginBottom: "48px"}}>
            <h2 style={{fontSize: "42px", fontWeight: "300", color: "#2C2416", letterSpacing: "0.05em", marginBottom: "16px"}}>
              Design your journey
            </h2>
            <div style={{width: "60px", height: "1px", background: "#C6A46C", margin: "0 auto 20px"}}></div>
            <p style={{color: "#9CA3AF", fontSize: "16px", lineHeight: "1.7", fontFamily: "sans-serif"}}>
              Tell us who you are and how you want to feel. We will handle everything else.
            </p>
          </div>

          <div style={{background: "#FFFFFF", borderRadius: "4px", padding: "32px", boxShadow: "0 2px 40px rgba(44,36,22,0.08)", marginBottom: "16px"}}>
            <div style={{color: "#C6A46C", fontSize: "10px", letterSpacing: "0.2em", marginBottom: "16px"}} className="uppercase">
              Your vision
            </div>
            <textarea
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "16px",
                color: "#2C2416",
                lineHeight: "1.8",
                fontFamily: "var(--font-cormorant)"
              }}
              rows={4}
              placeholder="Two of us, 7 days, honeymoon. We love golden mornings, wide open spaces, and quiet luxury..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div style={{borderTop: "1px solid #e8e0d0", paddingTop: "20px", marginTop: "16px"}} className="flex items-center justify-between">
              <span style={{color: "#C6A46C", fontSize: "11px", letterSpacing: "0.1em"}} className="uppercase">
                72 vetted Kenya properties
              </span>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  background: loading ? "#e8e0d0" : "#8B6B43",
                  color: loading ? "#9CA3AF" : "#F5F1E8",
                  border: "none",
                  padding: "12px 32px",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "2px"
                }}
                onMouseEnter={(e) => { if (!loading) e.target.style.background = "#C6A46C"; }}
                onMouseLeave={(e) => { if (!loading) e.target.style.background = "#8B6B43"; }}
                className="uppercase"
              >
                {loading ? "Crafting your journey..." : "Plan my trip"}
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap" style={{marginBottom: "40px"}}>
            {["Honeymoon safari", "Family adventure", "Corporate retreat", "Solo explorer"].map((s) => (
              <button
                key={s}
                onClick={() => setPrompt(s)}
                style={{
                  background: "transparent",
                  border: "1px solid #d4c9b8",
                  color: "#8B6B43",
                  padding: "8px 16px",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  borderRadius: "2px",
                  transition: "all 0.2s ease",
                  fontFamily: "sans-serif"
                }}
                onMouseEnter={(e) => { e.target.style.borderColor = "#8B6B43"; e.target.style.background = "#f0ebe0"; }}
                onMouseLeave={(e) => { e.target.style.borderColor = "#d4c9b8"; e.target.style.background = "transparent"; }}
              >
                {s}
              </button>
            ))}
          </div>

          {itinerary && (
            <div style={{background: "#FFFFFF", borderRadius: "4px", boxShadow: "0 2px 40px rgba(44,36,22,0.08)", overflow: "hidden"}}>
              <div style={{background: "#2C2416", padding: "20px 32px"}} className="flex items-center justify-between">
                <div>
                  <div style={{color: "#C6A46C", fontSize: "11px", letterSpacing: "0.15em"}} className="uppercase">Your Swafaris Itinerary</div>
                  <div style={{color: "#9CA3AF", fontSize: "12px", marginTop: "4px", fontFamily: "sans-serif"}}>Curated for you — Ready to book</div>
                </div>
                <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#C6A46C"}}></div>
              </div>
              <div style={{padding: "32px", maxHeight: "400px", overflowY: "auto"}}>
                <div style={{color: "#2C2416", fontSize: "14px", lineHeight: "2", whiteSpace: "pre-wrap", fontFamily: "sans-serif"}}>
                  {itinerary}
                </div>
              </div>
              <div style={{borderTop: "1px solid #e8e0d0", padding: "20px 32px"}} className="flex gap-3">
                <button
                  onClick={handleWhatsApp}
                  style={{
                    flex: 1,
                    background: "#2C2416",
                    color: "#C6A46C",
                    border: "none",
                    padding: "14px",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.2s ease",
                    fontFamily: "sans-serif"
                  }}
                  onMouseEnter={(e) => { e.target.style.background = "#8B6B43"; }}
                  onMouseLeave={(e) => { e.target.style.background = "#2C2416"; }}
                  className="uppercase"
                >
                  Book via WhatsApp
                </button>
                <button
                  onClick={() => { setItinerary(""); setPrompt(""); }}
                  style={{
                    background: "transparent",
                    border: "1px solid #d4c9b8",
                    color: "#8B6B43",
                    padding: "14px 24px",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.2s ease",
                    fontFamily: "sans-serif"
                  }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "#8B6B43"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "#d4c9b8"; }}
                  className="uppercase"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main style={{minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/hero2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: loaded ? 1 : 0,
        transition: "opacity 2.5s ease",
        filter: "saturate(0.9) brightness(0.75)"
      }}></div>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(20,14,8,0.3) 0%, rgba(20,14,8,0.15) 40%, rgba(20,14,8,0.7) 100%)"
      }}></div>

      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "0 32px",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 2s ease 0.8s, transform 2s ease 0.8s"
      }}>
        <img
          src="/impala.png"
          alt="Swafaris"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
            margin: "0 auto 24px",
            filter: "drop-shadow(0 4px 24px rgba(198,164,108,0.5))",
            display: "block"
          }}
        />

        <div style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F5F1E8",
          fontSize: "72px",
          fontWeight: "300",
          letterSpacing: "0.3em",
          lineHeight: "1",
          marginBottom: "20px",
          textShadow: "0 2px 40px rgba(0,0,0,0.3)"
        }} className="uppercase">
          Swafaris
        </div>

        <div style={{width: "80px", height: "1px", background: "#C6A46C", margin: "0 auto 24px"}}></div>

        <p style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F5F1E8",
          fontSize: "24px",
          fontWeight: "300",
          letterSpacing: "0.06em",
          marginBottom: "8px",
          textShadow: "0 1px 20px rgba(0,0,0,0.4)"
        }}>
          Discover Kenya, your way.
        </p>

        <p style={{
          color: "#C6A46C",
          fontSize: "11px",
          letterSpacing: "0.2em",
          marginBottom: "48px",
          fontFamily: "sans-serif"
        }} className="uppercase">
          Curated by intelligence. Felt by heart.
        </p>

        <button
          onClick={() => setShowPlanner(true)}
          style={{
            background: "transparent",
            border: "1px solid #C6A46C",
            color: "#C6A46C",
            padding: "16px 56px",
            fontSize: "11px",
            letterSpacing: "0.25em",
            cursor: "pointer",
            transition: "all 0.4s ease",
            borderRadius: "1px",
            fontFamily: "sans-serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#C6A46C";
            e.target.style.color = "#2C2416";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#C6A46C";
          }}
          className="uppercase"
        >
          Begin your journey
        </button>

        <div style={{marginTop: "64px", display: "flex", gap: "56px", justifyContent: "center"}}>
          {[["72", "Vetted Properties"], ["18", "Kenya Circuits"], ["24/7", "Journey Support"]].map(([num, label]) => (
            <div key={label} style={{textAlign: "center"}}>
              <div style={{color: "#F5F1E8", fontSize: "22px", fontWeight: "300", fontFamily: "var(--font-cormorant)", marginBottom: "6px"}}>{num}</div>
              <div style={{color: "#C6A46C", fontSize: "9px", letterSpacing: "0.15em", fontFamily: "sans-serif"}} className="uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(245,241,232,0.4)",
        fontSize: "9px",
        letterSpacing: "0.2em",
        fontFamily: "sans-serif"
      }} className="uppercase">
        Premium AI Travel — Kenya
      </div>
    </main>
  );
}
