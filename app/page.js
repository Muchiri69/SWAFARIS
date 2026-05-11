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
    <main style={{background: "#0a0f1e"}} className="min-h-screen flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full">

        <div className="mb-12">
          <div style={{color: "#c9a84c"}} className="text-xs font-medium tracking-widest uppercase mb-3">
            Premium AI Travel - Kenya
          </div>
          <h1 style={{color: "#f5f0e8"}} className="text-6xl font-light mb-4 tracking-widest uppercase">
            Swafaris
          </h1>
          <div style={{background: "#c9a84c", height: "1px", width: "60px"}} className="mb-4"></div>
          <p style={{color: "#8a9bb0"}} className="text-lg leading-relaxed">
            Your brilliant Kenyan friend who knows every lodge, every hidden gem, every seasonal secret — and plans your entire trip perfectly.
          </p>
        </div>

        <div style={{background: "#111827", border: "1px solid #1e3a5f"}} className="rounded-2xl p-6 mb-4">
          <div style={{color: "#c9a84c"}} className="text-xs uppercase tracking-widest mb-3">
            Describe your dream trip
          </div>
          <textarea
            style={{color: "#f5f0e8", background: "transparent"}}
            className="w-full placeholder-gray-600 text-base outline-none resize-none leading-relaxed"
            rows={4}
            placeholder="2 people, 7 days, first safari, budget around $8,000. Love wildlife and a touch of luxury..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div style={{borderTop: "1px solid #1e3a5f"}} className="flex items-center justify-between mt-4 pt-4">
            <span style={{color: "#4a6080"}} className="text-xs">
              72 vetted Kenya properties
            </span>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{background: loading ? "#1e3a5f" : "#c9a84c", color: loading ? "#4a6080" : "#0a0f1e"}}
              className="px-8 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            >
              {loading ? "Crafting your itinerary..." : "Plan my trip"}
            </button>
          </div>
        </div>

        <div className="flex gap-3 mb-12">
          {["Honeymoon safari", "Family adventure", "Corporate retreat"].map((s) => (
            <button
              key={s}
              onClick={() => setPrompt(s)}
              style={{color: "#8a9bb0", border: "1px solid #1e3a5f"}}
              className="text-xs hover:opacity-80 px-3 py-1 rounded-lg transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        {itinerary && (
          <div style={{background: "#111827", border: "1px solid #1e3a5f"}} className="rounded-2xl overflow-hidden">
            <div style={{borderBottom: "1px solid #1e3a5f"}} className="px-6 py-4 flex items-center justify-between">
              <div>
                <div style={{color: "#f5f0e8"}} className="font-medium">Your Swafaris Itinerary</div>
                <div style={{color: "#4a6080"}} className="text-xs mt-0.5">Curated for you - Ready to book</div>
              </div>
              <div style={{background: "#c9a84c"}} className="w-2 h-2 rounded-full"></div>
            </div>
            <div className="p-6">
              <div style={{color: "#c8d8e8"}} className="text-sm leading-relaxed whitespace-pre-wrap">
                {itinerary}
              </div>
            </div>
            <div style={{borderTop: "1px solid #1e3a5f"}} className="px-6 py-4 flex gap-3">
              <button
                onClick={handleWhatsApp}
                style={{background: "#1a3a2a", color: "#4ade80"}}
                className="flex-1 px-6 py-3 rounded-xl text-sm font-medium transition-colors text-center"
              >
                Book via WhatsApp
              </button>
              <button
                onClick={() => setItinerary("")}
                style={{color: "#4a6080", border: "1px solid #1e3a5f"}}
                className="px-4 py-3 rounded-xl text-sm transition-colors"
              >
                Start over
              </button>
            </div>
          </div>
        )}

        <div style={{borderTop: "1px solid #1e3a5f"}} className="mt-16 pt-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div style={{color: "#c9a84c"}} className="text-2xl font-light mb-1">72</div>
              <div style={{color: "#4a6080"}} className="text-xs">Vetted properties</div>
            </div>
            <div>
              <div style={{color: "#c9a84c"}} className="text-2xl font-light mb-1">18</div>
              <div style={{color: "#4a6080"}} className="text-xs">Kenya circuits</div>
            </div>
            <div>
              <div style={{color: "#c9a84c"}} className="text-2xl font-light mb-1">24/7</div>
              <div style={{color: "#4a6080"}} className="text-xs">Trip support</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
