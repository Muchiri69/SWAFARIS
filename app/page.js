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
Perched above the Great Rift Valley, Angama Mara offers the most cinematic view in Kenya. We placed you here on Day 2 so the Mara reveals itself slowly.
Activity: Afternoon game drive — resident cheetah coalition nearby
Cost: $1,200 per person per night

────────────────────────────

DAY 3 — MARA IMMERSION
Lodge: Angama Mara
A full day on the plains. Picnic breakfast on the Mara — just you, your guide, and the horizon.
Highlight: Mara River crossing season runs July to October.
Cost: Included

────────────────────────────

DAY 4 — AMBOSELI TRANSITION
Lodge: Tortilis Camp, Amboseli
Flight: Keekorok to Amboseli (1 hr)
Tortilis sits under fever trees with Kilimanjaro filling the sky at dusk. We time this transition to avoid travel fatigue.
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
An unhurried afternoon. Optional: Karen Blixen Museum.
Dinner: Carnivore Restaurant
Cost: $280 per night

────────────────────────────

DAY 7 — DEPARTURE
Transfer: Villa Rosa Kempinski to JKIA
Swafaris farewell: Single-origin Kenya coffee and a handcrafted Maasai bracelet.

────────────────────────────

JOURNEY SUMMARY
Duration: 7 days, 6 nights
Investment: $8,200 per person
Includes: All flights, accommodation, meals, game drives
Swafaris support: 24/7 WhatsApp throughout your trip`;

const slides = ["/hero.jpg", "/hero2.jpg"];

export default function Home() {
  const [showPlanner, setShowPlanner] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
    const interval = setInterval(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
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
      <main style={{
        minHeight: "100vh",
        background: "#0F1720",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-cormorant)"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
          filter: "saturate(0.5)"
        }}></div>

        <nav style={{
          position: "relative",
          zIndex: 10,
          borderBottom: "1px solid rgba(198,164,108,0.15)",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <button
            onClick={() => { setShowPlanner(false); setItinerary(""); setPrompt(""); }}
            style={{background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px"}}
          >
            <img src="/logo.png" alt="Swafaris" style={{width: "36px", height: "36px", objectFit: "contain"}} />
            <span style={{color: "#C6A46C", fontSize: "16px", letterSpacing: "0.2em", fontWeight: "600"}} className="uppercase">
              Swafaris
            </span>
          </button>
          <span style={{color: "rgba(198,164,108,0.4)", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "sans-serif"}} className="uppercase">
            Journey Planner
          </span>
        </nav>

        <div style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "680px",
          margin: "0 auto",
          padding: "56px 24px"
        }}>
          <div style={{textAlign: "center", marginBottom: "48px"}}>
            <h2 style={{
              fontSize: "48px",
              fontWeight: "300",
              color: "#F5F1E8",
              letterSpacing: "0.06em",
              marginBottom: "16px",
              lineHeight: "1.1"
            }}>
              Design your journey
            </h2>
            <div style={{width: "48px", height: "1px", background: "#C6A46C", margin: "0 auto 20px"}}></div>
            <p style={{
              color: "rgba(156,163,175,0.8)",
              fontSize: "15px",
              lineHeight: "1.8",
              fontFamily: "sans-serif",
              fontWeight: "300"
            }}>
              Tell us who you are and how you want to feel.<br/>We will handle everything else.
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(198,164,108,0.2)",
            borderRadius: "4px",
            padding: "32px",
            marginBottom: "16px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              color: "#C6A46C",
              fontSize: "10px",
              letterSpacing: "0.25em",
              marginBottom: "20px",
              fontFamily: "sans-serif"
            }} className="uppercase">
              Your vision
            </div>

            <textarea
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "18px",
                color: "#F5F1E8",
                lineHeight: "1.8",
                fontFamily: "var(--font-cormorant)",
                fontWeight: "300"
              }}
              rows={4}
              placeholder="Two of us, 7 days, honeymoon. Golden mornings, wide open spaces, quiet luxury..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <div style={{
              borderTop: "1px solid rgba(198,164,108,0.15)",
              paddingTop: "20px",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <span style={{color: "rgba(198,164,108,0.4)", fontSize: "10px", letterSpacing: "0.12em", fontFamily: "sans-serif"}} className="uppercase">
                72 vetted Kenya properties
              </span>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  background: loading ? "rgba(198,164,108,0.1)" : "#C6A46C",
                  color: loading ? "rgba(198,164,108,0.4)" : "#0F1720",
                  border: "none",
                  padding: "12px 36px",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "2px",
                  fontWeight: "600",
                  fontFamily: "sans-serif"
                }}
                onMouseEnter={(e) => { if (!loading) e.target.style.background = "#d4b87a"; }}
                onMouseLeave={(e) => { if (!loading) e.target.style.background = "#C6A46C"; }}
                className="uppercase"
              >
                {loading ? "Crafting your journey..." : "Plan my trip"}
              </button>
            </div>
          </div>

          <div style={{display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px"}}>
            {["Honeymoon safari", "Family adventure", "Corporate retreat", "Solo explorer"].map((s) => (
              <button
                key={s}
                onClick={() => setPrompt(s)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(198,164,108,0.2)",
                  color: "rgba(198,164,108,0.6)",
                  padding: "8px 18px",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  borderRadius: "2px",
                  transition: "all 0.2s ease",
                  fontFamily: "sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#C6A46C";
                  e.target.style.color = "#C6A46C";
                  e.target.style.background = "rgba(198,164,108,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(198,164,108,0.2)";
                  e.target.style.color = "rgba(198,164,108,0.6)";
                  e.target.style.background = "transparent";
                }}
                className="uppercase"
              >
                {s}
              </button>
            ))}
          </div>

          {itinerary && (
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(198,164,108,0.2)",
              borderRadius: "4px",
              overflow: "hidden",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{
                background: "rgba(198,164,108,0.08)",
                borderBottom: "1px solid rgba(198,164,108,0.15)",
                padding: "20px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <div>
                  <div style={{color: "#C6A46C", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "sans-serif"}} className="uppercase">
                    Your Swafaris Itinerary
                  </div>
                  <div style={{color: "rgba(156,163,175,0.6)", fontSize: "12px", marginTop: "4px", fontFamily: "sans-serif"}}>
                    Curated for you — Ready to book
                  </div>
                </div>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#C6A46C",
                  boxShadow: "0 0 12px rgba(198,164,108,0.6)"
                }}></div>
              </div>

              <div style={{padding: "32px", maxHeight: "420px", overflowY: "auto"}}>
                <div style={{
                  color: "#d4e4f0",
                  fontSize: "14px",
                  lineHeight: "2",
                  whiteSpace: "pre-wrap",
                  fontFamily: "sans-serif",
                  fontWeight: "300"
                }}>
                  {itinerary}
                </div>
              </div>

              <div style={{
                borderTop: "1px solid rgba(198,164,108,0.15)",
                padding: "20px 32px",
                display: "flex",
                gap: "12px"
              }}>
                <button
                  onClick={handleWhatsApp}
                  style={{
                    flex: 1,
                    background: "rgba(198,164,108,0.1)",
                    color: "#C6A46C",
                    border: "1px solid rgba(198,164,108,0.3)",
                    padding: "14px",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    fontFamily: "sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#C6A46C";
                    e.target.style.color = "#0F1720";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(198,164,108,0.1)";
                    e.target.style.color = "#C6A46C";
                  }}
                  className="uppercase"
                >
                  Book via WhatsApp
                </button>
                <button
                  onClick={() => { setItinerary(""); setPrompt(""); }}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(156,163,175,0.6)",
                    padding: "14px 24px",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.2s ease",
                    fontFamily: "sans-serif"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "rgba(198,164,108,0.3)";
                    e.target.style.color = "#C6A46C";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.color = "rgba(156,163,175,0.6)";
                  }}
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

      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('" + src + "')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: loaded && slide === i ? 1 : 0,
            transition: "opacity 1.8s ease",
            filter: "saturate(0.9) brightness(0.65)"
          }}
        ></div>
      ))}

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(15,23,32,0.4) 0%, rgba(15,23,32,0.15) 40%, rgba(15,23,32,0.8) 100%)"
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
       <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "28px",
            background: "rgba(198,164,108,0.08)",
            border: "1px solid rgba(198,164,108,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(198,164,108,0.15)"
          }}>
            <img
              src="/logo.png"
              alt="Swafaris"
              style={{
                width: "72px",
                height: "72px",
                objectFit: "contain",
                filter: "drop-shadow(0 4px 24px rgba(198,164,108,0.6))"
              }}
            />
          </div>
        <div style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F5F1E8",
          fontSize: "72px",
          fontWeight: "300",
          letterSpacing: "0.3em",
          lineHeight: "1",
          marginBottom: "20px",
          textShadow: "0 2px 40px rgba(0,0,0,0.4)"
        }} className="uppercase">
          Swafaris
        </div>

        <div style={{width: "80px", height: "1px", background: "#C6A46C", margin: "0 auto 24px"}}></div>

        <p style={{
          fontFamily: "var(--font-cormorant)",
          color: "#F5F1E8",
          fontSize: "26px",
          fontWeight: "300",
          letterSpacing: "0.06em",
          marginBottom: "10px",
          textShadow: "0 1px 20px rgba(0,0,0,0.4)"
        }}>
          Discover Kenya, your way.
        </p>

        <p style={{
          color: "#C6A46C",
          fontSize: "10px",
          letterSpacing: "0.25em",
          marginBottom: "52px",
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
            fontSize: "10px",
            letterSpacing: "0.3em",
            cursor: "pointer",
            transition: "all 0.4s ease",
            borderRadius: "1px",
            fontFamily: "sans-serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#C6A46C";
            e.target.style.color = "#0F1720";
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
              <div style={{
                color: "#F5F1E8",
                fontSize: "24px",
                fontWeight: "300",
                fontFamily: "var(--font-cormorant)",
                marginBottom: "6px"
              }}>{num}</div>
              <div style={{
                color: "#C6A46C",
                fontSize: "9px",
                letterSpacing: "0.15em",
                fontFamily: "sans-serif"
              }} className="uppercase">{label}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop: "40px", display: "flex", gap: "8px", justifyContent: "center"}}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: slide === i ? "24px" : "6px",
                height: "2px",
                background: slide === i ? "#C6A46C" : "rgba(198,164,108,0.3)",
                borderRadius: "2px",
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
              onClick={() => setSlide(i)}
            ></div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(245,241,232,0.35)",
        fontSize: "9px",
        letterSpacing: "0.2em",
        fontFamily: "sans-serif",
        whiteSpace: "nowrap"
      }} className="uppercase">
        Premium AI Travel — Kenya
      </div>
    </main>
  );
}
