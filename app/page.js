'use client';
import { useState, useEffect } from "react";

const MOCK_ITINERARY = `SWAFARIS - YOUR KENYA JOURNEY

7 Days - Maasai Mara and Amboseli - 2 Guests - Premium Tier

DAY 1 - ARRIVAL IN NAIROBI
Accommodation: The Emakoko Lodge, Nairobi National Park
Activity: Sundowner drive through Nairobi National Park
Meals: Dinner at the lodge
Est. Cost: $420 per night

DAY 2 - FLY TO THE MAASAI MARA
Accommodation: Angama Mara, Maasai Mara
Flight: Nairobi Wilson to Keekorok airstrip (45 min)
Activity: Afternoon game drive - big cat territory
Meals: All inclusive
Est. Cost: $1,200 per person per night

DAY 3 - MARA FULL DAY
Accommodation: Angama Mara
Activity: Full day game drive with picnic breakfast on the Mara plains
Meals: All inclusive
Est. Cost: Included

DAY 4 - MARA MORNING, FLY TO AMBOSELI
Accommodation: Tortilis Camp, Amboseli
Flight: Keekorok to Amboseli airstrip (1 hr)
Activity: Evening game drive - elephant herds with Kilimanjaro backdrop
Meals: All inclusive
Est. Cost: $890 per person per night

DAY 5 - AMBOSELI FULL DAY
Accommodation: Tortilis Camp
Activity: Dawn game drive for best Kilimanjaro views
Meals: All inclusive
Est. Cost: Included

DAY 6 - AMBOSELI AND RETURN TO NAIROBI
Flight: Amboseli to Nairobi Wilson (45 min)
Accommodation: Villa Rosa Kempinski, Nairobi
Dinner: Carnivore Restaurant, Nairobi
Est. Cost: $280 per night

DAY 7 - DEPARTURE
Transfer: Villa Rosa Kempinski to JKIA Airport
Swafaris farewell gift: Kenya coffee and handcrafted Maasai bracelet

TRIP SUMMARY
Total duration: 7 days, 6 nights
Estimated total: $8,200 per person
Swafaris booking fee: Included
Your Swafaris contact: Available 24/7 on WhatsApp throughout your trip`;

export default function Home() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
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
    var url = "https://wa.me/254700000000?text=Hi, I would like to book this Swafaris trip: " + encodeURIComponent(prompt);
    window.open(url, "_blank");
  }

  if (showPlanner) {
    return (
      <main style={{background: "#0F1720", minHeight: "100vh"}} className="flex flex-col">
        <nav style={{borderBottom: "1px solid #1e2d3d"}} className="flex items-center justify-between px-8 py-4">
          <button onClick={() => { setShowPlanner(false); setItinerary(""); setPrompt(""); }} className="flex items-center gap-3">
            <img src="/impala.png" alt="Swafaris" style={{width: "40px", height: "40px", objectFit: "contain"}} />
            <span style={{color: "#C6A46C", letterSpacing: "0.2em", fontSize: "16px", fontWeight: "600"}} className="uppercase">
              Swafaris
            </span>
          </button>
          <span style={{color: "#9CA3AF", fontSize: "12px", letterSpacing: "0.1em"}} className="uppercase">
            Journey Planner
          </span>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
          <div style={{maxWidth: "680px", width: "100%"}}>

            <div className="text-center mb-8">
              <h2 style={{
                fontFamily: "var(--font-cormorant)",
                color: "#C6A46C",
                fontSize: "38px",
                fontWeight: "300",
                letterSpacing: "0.08em"
              }}>
                Design your journey
              </h2>
              <div style={{background: "linear-gradient(90deg, transparent, #C6A46C, transparent)", height: "1px", margin: "12px auto", width: "200px"}}></div>
              <p style={{color: "#9CA3AF", fontSize: "14px"}}>
                Tell us who you are and how you want to feel. We will do the rest.
              </p>
            </div>

            <div style={{background: "#0d1825", border: "1px solid #1e2d3d", borderRadius: "16px"}} className="p-6 mb-4">
              <div style={{color: "#C6A46C", fontSize: "11px", letterSpacing: "0.15em"}} className="uppercase mb-3">
                Your trip vision
              </div>
              <textarea
                style={{color: "#F5F1E8", background: "transparent", width: "100%", fontSize: "14px", lineHeight: "1.7"}}
                className="outline-none resize-none placeholder-gray-600"
                rows={4}
                placeholder="2 people, 7 days, honeymoon, budget $8,000. We love wildlife, quiet mornings, and a touch of luxury..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div style={{borderTop: "1px solid #1e2d3d", marginTop: "12px", paddingTop: "12px"}} className="flex items-center justify-between">
                <span style={{color: "#4a6080", fontSize: "11px"}}>72 vetted Kenya properties</span>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    background: loading ? "#1e2d3d" : "#C6A46C",
                    color: loading ? "#4a6080" : "#0F1720",
                    padding: "8px 24px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    cursor: loading ? "not-allowed" : "pointer"
                  }}
                >
                  {loading ? "Crafting your journey..." : "Plan my trip"}
                </button>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {["Honeymoon safari", "Family adventure", "Corporate retreat", "Solo explorer"].map((s) => (
                <button
                  key={s}
                  onClick={() => setPrompt(s)}
                  style={{
                    color: "#9CA3AF",
                    border: "1px solid #1e2d3d",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontSize: "11px",
                    transition: "all 0.2s ease",
                    background: "transparent"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#C6A46C";
                    e.target.style.borderColor = "#C6A46C";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#9CA3AF";
                    e.target.style.borderColor = "#1e2d3d";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {itinerary && (
              <div style={{background: "#0d1825", border: "1px solid #1e2d3d", borderRadius: "16px", overflow: "hidden"}}>
                <div style={{borderBottom: "1px solid #1e2d3d", padding: "16px 24px"}} className="flex items-center justify-between">
                  <div>
                    <div style={{color: "#F5F1E8", fontWeight: "500", fontSize: "14px"}}>Your Swafaris Itinerary</div>
                    <div style={{color: "#4a6080", fontSize: "11px", marginTop: "2px"}}>Curated for you — Ready to book</div>
                  </div>
                  <div style={{width: "8px", height: "8px", borderRadius: "50%", background: "#C6A46C", boxShadow: "0 0 10px rgba(198,164,108,0.6)"}}></div>
                </div>
                <div style={{padding: "24px", maxHeight: "320px", overflowY: "auto"}}>
                  <div style={{color: "#d4e4f0", fontSize: "13px", lineHeight: "1.8", whiteSpace: "pre-wrap"}}>
                    {itinerary}
                  </div>
                </div>
                <div style={{borderTop: "1px solid #1e2d3d", padding: "16px 24px"}} className="flex gap-3">
                  <button
                    onClick={handleWhatsApp}
                    style={{
                      flex: 1,
                      background: "#0f2318",
                      color: "#4ade80",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontWeight: "500",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => { e.target.style.background = "#162e20"; }}
                    onMouseLeave={(e) => { e.target.style.background = "#0f2318"; }}
                  >
                    Book via WhatsApp
                  </button>
                  <button
                    onClick={() => { setItinerary(""); setPrompt(""); }}
                    style={{
                      color: "#9CA3AF",
                      border: "1px solid #1e2d3d",
                      padding: "12px 20px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      background: "transparent",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => { e.target.style.borderColor = "#C6A46C"; e.target.style.color = "#C6A46C"; }}
                    onMouseLeave={(e) => { e.target.style.borderColor = "#1e2d3d"; e.target.style.color = "#9CA3AF"; }}
                  >
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0F1720",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: heroLoaded ? 0.35 : 0,
        transition: "opacity 2s ease",
        filter: "saturate(0.8)"
      }}></div>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(15,23,32,0.6) 0%, rgba(15,23,32,0.3) 50%, rgba(15,23,32,0.85) 100%)"
      }}></div>

      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "0 24px",
        opacity: heroLoaded ? 1 : 0,
        transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1.5s ease 0.5s, transform 1.5s ease 0.5s"
      }}>
        <img
          src="/impala.png"
          alt="Swafaris"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
            margin: "0 auto 20px",
            filter: "drop-shadow(0 0 20px rgba(198,164,108,0.4))"
          }}
        />

        <div style={{
          fontFamily: "var(--font-cormorant)",
          color: "#C6A46C",
          fontSize: "64px",
          fontWeight: "300",
          letterSpacing: "0.25em",
          lineHeight: "1",
          textShadow: "0 0 60px rgba(198,164,108,0.3)",
          marginBottom: "16px"
        }} className="uppercase">
          Swafaris
        </div>

        <div style={{
          background: "linear-gradient(90deg, transparent, #C6A46C, transparent)",
          height: "1px",
          width: "200px",
          margin: "0 auto 20px"
        }}></div>

        <p style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F5F1E8",
          fontSize: "22px",
          fontWeight: "300",
          letterSpacing: "0.08em",
          marginBottom: "8px"
        }}>
          Discover Kenya, your way.
        </p>

        <p style={{
          color: "#9CA3AF",
          fontSize: "13px",
          letterSpacing: "0.05em",
          marginBottom: "40px"
        }}>
          Curated by intelligence. Felt by heart.
        </p>

        <button
          onClick={() => setShowPlanner(true)}
          style={{
            background: "transparent",
            border: "1px solid #C6A46C",
            color: "#C6A46C",
            padding: "14px 48px",
            borderRadius: "2px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.2em",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#C6A46C";
            e.target.style.color = "#0F1720";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#C6A46C";
          }}
        >
          BEGIN YOUR JOURNEY
        </button>

        <div style={{marginTop: "60px", display: "flex", gap: "48px", justifyContent: "center"}}>
          {[["72", "Vetted Properties"], ["18", "Kenya Circuits"], ["24/7", "Journey Support"]].map(([num, label]) => (
            <div key={label} style={{textAlign: "center"}}>
              <div style={{color: "#C6A46C", fontSize: "20px", fontWeight: "300", marginBottom: "4px"}}>{num}</div>
              <div style={{color: "#4a6080", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase"}}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "#4a6080",
        fontSize: "10px",
        letterSpacing: "0.15em",
        textTransform: "uppercase"
      }}>
        Premium AI Travel — Kenya
      </div>
    </main>
  );
}
