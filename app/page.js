'use client';
import { useState } from "react";

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
  const [prompt, setPrompt] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [hoverMain, setHoverMain] = useState(false);
  const [hoverWA, setHoverWA] = useState(false);
  const [hoverReset, setHoverReset] = useState(false);

  async function handleSubmit() {
    if (!prompt.trim()) return;
    setLoading(true);
    setItinerary("");
    await new Promise((r) => setTimeout(r, 2000));
    setItinerary(MOCK_ITINERARY);
    setLoading(false);
  }

  function handleWhatsApp() {
    var url = "https://wa.me/254700000000?text=Hi, I would like to book this Swafaris trip: " + encodeURIComponent(prompt);
    window.open(url, "_blank");
  }

  return (
    <main style={{background: "#080d1a"}} className="min-h-screen flex flex-col">

      <nav style={{borderBottom: "1px solid #1e3a5f"}} className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Swafaris" style={{width: "48px", height: "48px", objectFit: "contain"}} />
          <span style={{color: "#c9a84c", letterSpacing: "0.15em", fontSize: "22px", fontWeight: "600"}} className="uppercase">
            Swafaris
          </span>
        </div>
        <div style={{color: "#3a5070"}} className="text-xs tracking-widest uppercase">
          Premium AI Travel - Kenya
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">

          <div className="text-center mb-8">
            <p style={{color: "#a8bdd0", fontSize: "16px", letterSpacing: "0.05em"}} className="mb-3">
              Plan your perfect Kenya trip with AI — curated, intelligent, premium.
            </p>
            <div style={{background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", height: "1px"}} className="mb-4"></div>
            <p style={{color: "#a8bdd0"}} className="text-base leading-relaxed">
              Tell us your dream trip. Our AI plans it perfectly — the right lodge, the right moment, the right experience.
            </p>
          </div>

          <div style={{background: "#0d1525", border: "1px solid #1e3a5f"}} className="rounded-2xl p-5 mb-3">
            <div style={{color: "#c9a84c"}} className="text-xs uppercase tracking-widest mb-2">
              Describe your dream trip
            </div>
            <textarea
              style={{color: "#e8dfc8", background: "transparent"}}
              className="w-full placeholder-gray-600 text-sm outline-none resize-none leading-relaxed"
              rows={3}
              placeholder="2 people, 7 days, first safari, budget around $8,000. Love wildlife and a touch of luxury..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div style={{borderTop: "1px solid #1e3a5f"}} className="flex items-center justify-between mt-3 pt-3">
              <span style={{color: "#3a5070"}} className="text-xs">
                72 vetted Kenya properties
              </span>
              <button
                onClick={handleSubmit}
                disabled={loading}
                onMouseEnter={() => setHoverMain(true)}
                onMouseLeave={() => setHoverMain(false)}
                style={{
                  background: loading ? "#1e3a5f" : hoverMain ? "#e8c86a" : "#c9a84c",
                  color: loading ? "#4a6080" : "#080d1a",
                  boxShadow: hoverMain && !loading ? "0 0 20px rgba(201,168,76,0.5)" : "none",
                  transform: hoverMain && !loading ? "scale(1.03)" : "scale(1)",
                  transition: "all 0.2s ease"
                }}
                className="px-6 py-2 rounded-xl text-sm font-semibold"
              >
                {loading ? "Crafting your itinerary..." : "Plan my trip"}
              </button>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            {["Honeymoon safari", "Family adventure", "Corporate retreat"].map((s) => (
              <button
                key={s}
                onClick={() => setPrompt(s)}
                style={{color: "#7a8fa8", border: "1px solid #1e3a5f", transition: "all 0.2s ease"}}
                onMouseEnter={(e) => {
                  e.target.style.color = "#c9a84c";
                  e.target.style.borderColor = "#c9a84c";
                  e.target.style.boxShadow = "0 0 12px rgba(201,168,76,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#7a8fa8";
                  e.target.style.borderColor = "#1e3a5f";
                  e.target.style.boxShadow = "none";
                }}
                className="text-xs px-3 py-1.5 rounded-lg"
              >
                {s}
              </button>
            ))}
          </div>

          {itinerary && (
            <div style={{background: "#0d1525", border: "1px solid #1e3a5f"}} className="rounded-2xl overflow-hidden">
              <div style={{borderBottom: "1px solid #1e3a5f"}} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <div style={{color: "#f0ead8"}} className="font-medium text-sm">Your Swafaris Itinerary</div>
                  <div style={{color: "#3a5070"}} className="text-xs mt-0.5">Curated for you - Ready to book</div>
                </div>
                <div style={{background: "#c9a84c", boxShadow: "0 0 10px rgba(201,168,76,0.5)"}} className="w-2 h-2 rounded-full"></div>
              </div>
              <div className="p-6 max-h-64 overflow-y-auto">
                <div style={{color: "#d4e4f0"}} className="text-sm leading-relaxed whitespace-pre-wrap">
                  {itinerary}
                </div>
              </div>
              <div style={{borderTop: "1px solid #1e3a5f"}} className="px-6 py-3 flex gap-3">
                <button
                  onClick={handleWhatsApp}
                  onMouseEnter={() => setHoverWA(true)}
                  onMouseLeave={() => setHoverWA(false)}
                  style={{
                    background: hoverWA ? "#1e4a2e" : "#152a1e",
                    color: "#4ade80",
                    boxShadow: hoverWA ? "0 0 16px rgba(74,222,128,0.3)" : "none",
                    transition: "all 0.2s ease"
                  }}
                  className="flex-1 px-6 py-2.5 rounded-xl text-sm font-medium text-center"
                >
                  Book via WhatsApp
                </button>
                <button
                  onClick={() => setItinerary("")}
                  onMouseEnter={() => setHoverReset(true)}
                  onMouseLeave={() => setHoverReset(false)}
                  style={{
                    color: hoverReset ? "#c9a84c" : "#4a6080",
                    border: hoverReset ? "1px solid #c9a84c" : "1px solid #1e3a5f",
                    boxShadow: hoverReset ? "0 0 12px rgba(201,168,76,0.2)" : "none",
                    transition: "all 0.2s ease"
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm"
                >
                  Start over
                </button>
              </div>
            </div>
          )}

          {!itinerary && (
            <div style={{borderTop: "1px solid #1e3a5f"}} className="mt-6 pt-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div style={{color: "#c9a84c"}} className="text-xl font-light mb-1">72</div>
                  <div style={{color: "#3a5070"}} className="text-xs">Vetted properties</div>
                </div>
                <div>
                  <div style={{color: "#c9a84c"}} className="text-xl font-light mb-1">18</div>
                  <div style={{color: "#3a5070"}} className="text-xs">Kenya circuits</div>
                </div>
                <div>
                  <div style={{color: "#c9a84c"}} className="text-xl font-light mb-1">24/7</div>
                  <div style={{color: "#3a5070"}} className="text-xs">Trip support</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </main>
  );
}
