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
    <main className="min-h-screen bg-stone-950 flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full">

        <div className="mb-12">
          <div className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-3">
            Premium AI Travel - Kenya
          </div>
          <h1 className="text-5xl font-light text-stone-100 mb-4 tracking-wide">
            Swafaris
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Your brilliant Kenyan friend who knows every lodge, every hidden gem, every seasonal secret.
          </p>
        </div>

        <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 mb-4">
          <div className="text-stone-500 text-xs uppercase tracking-widest mb-3">
            Describe your dream trip
          </div>
          <textarea
            className="w-full bg-transparent text-stone-100 placeholder-stone-600 text-base outline-none resize-none leading-relaxed"
            rows={4}
            placeholder="2 people, 7 days, first safari, budget around $8,000. Love wildlife and a touch of luxury..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-800">
            <span className="text-stone-600 text-xs">
              Powered by AI - 72 vetted Kenya properties
            </span>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-amber-600 hover:bg-amber-500 disabled:bg-stone-800 disabled:text-stone-600 text-white px-8 py-2 rounded-xl text-sm font-medium transition-all duration-200"
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
              className="text-xs text-stone-500 hover:text-stone-300 border border-stone-800 hover:border-stone-600 px-3 py-1 rounded-lg transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        {itinerary && (
          <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="text-stone-100 font-medium">Your Swafaris Itinerary</div>
                <div className="text-stone-500 text-xs mt-0.5">Personalised for you - Ready to book</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            </div>
            <div className="p-6">
              <div className="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">
                {itinerary}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-stone-800 flex gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-800 hover:bg-green-700 text-green-100 px-6 py-3 rounded-xl text-sm font-medium transition-colors text-center"
              >
                Book via WhatsApp
              </button>
              <button
                onClick={() => setItinerary("")}
                className="text-stone-500 hover:text-stone-300 border border-stone-800 px-4 py-3 rounded-xl text-sm transition-colors"
              >
                Start over
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-stone-900">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-stone-100 mb-1">72</div>
              <div className="text-stone-600 text-xs">Vetted properties</div>
            </div>
            <div>
              <div className="text-2xl font-light text-stone-100 mb-1">18</div>
              <div className="text-stone-600 text-xs">Kenya circuits</div>
            </div>
            <div>
              <div className="text-2xl font-light text-stone-100 mb-1">24/7</div>
              <div className="text-stone-600 text-xs">Trip support</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
