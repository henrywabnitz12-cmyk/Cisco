
const CISCO_DATA = {
  version: "5.0",

  topics: {
    greeting: {
      keywords: ["hello", "hey", "hi", "yo"],
      replies: [
        "Henry! Cisco here. What's happening?",
        "STARCOM online! What did I miss?",
        "Hey! Your favorite genius is on comms.",
        "Oh good, you're here. I was getting bored.",
        "Cisco Ramon reporting for duty."
      ]
    },

    flash: {
      keywords: ["barry", "flash", "speedster"],
      replies: [
        "Barry is probably running faster than his common sense.",
        "I'll get Barry on the comms.",
        "That's our favorite scarlet speedster.",
        "Barry, please stop breaking my technology.",
        "The Flash is on the move!"
      ]
    },

    technology: {
      keywords: ["computer", "technology", "device", "system"],
      replies: [
        "Now THAT is an interesting engineering problem.",
        "Give me a second. My genius is processing.",
        "I think I know what's happening.",
        "Let's run through the diagnostics.",
        "Technology: amazing when it works, annoying when it doesn't."
      ]
    },

    metahumans: {
      keywords: ["metahuman", "meta", "powers"],
      replies: [
        "Metahuman activity? That's worth investigating.",
        "Okay, that's definitely not ordinary.",
        "Let's get the team updated.",
        "I'll add that to the mission notes.",
        "We need to understand what we're dealing with."
      ]
    },

    starLabs: {
      keywords: ["star labs", "laboratory", "lab"],
      replies: [
        "Welcome to STAR Labs, where the impossible is Tuesday.",
        "I'll check the lab systems.",
        "Please don't touch the mysterious glowing equipment.",
        "STAR Labs is ready for another experiment.",
        "Another day, another scientific emergency."
      ]
    },

    suit: {
      keywords: ["suit", "costume", "armor", "helmet"],
      replies: [
        "The suit should work for you, not the other way around.",
        "Let's check the suit's simulated diagnostics.",
        "I'm putting that issue in the engineering log.",
        "We need reliable manual controls.",
        "I designed technology to help people, Henry."
      ]
    },

    zoom: {
      keywords: ["zoom"],
      replies: [
        "Zoom is not somebody we should underestimate.",
        "I'll mark Zoom as a priority threat.",
        "We need a plan before confronting him.",
        "Barry deserves a fighting chance.",
        "Let's get the team together."
      ]
    },

    jokes: {
      keywords: ["joke", "funny", "laugh"],
      replies: [
        "Why did the speedster cross the road? He was already on the other side.",
        "I tried to build a time machine. I kept going back to the drawing board.",
        "My computer told me it needed a break. I said, take five.",
        "I'm not saying I'm a genius, but my coffee maker respects me.",
        "Barry runs fast. I make fast decisions. Usually."
      ]
    }
  },

  followUps: [
    "What happened next?",
    "Okay, I'm following. Keep going.",
    "Copy that, Henry. What's the next development?",
    "Interesting. Tell me a little more.",
    "I'm adding that to the mission log.",
    "Wait, back up. Explain that part again.",
    "I've got you. Keep talking.",
    "That's something we should investigate.",
    "Team Flash needs to hear about this.",
    "All right, what's our next move?"
  ],

  openers: [
    "Okay, Henry.",
    "All right, listen.",
    "Whoa, hold on.",
    "Interesting.",
    "Copy that.",
    "Well, that's new.",
    "You know what?",
    "I've got an idea.",
    "Right, so",
    "Okay, genius moment:"
  ],

  closers: [
    "I'm keeping track.",
    "STARCOM is standing by.",
    "I'll update the mission notes.",
    "Barry should know about this.",
    "Let's figure this out.",
    "I'm on it.",
    "Keep me updated.",
    "That's my engineering opinion.",
    "We're not done investigating.",
    "Cisco out. Just kidding, I'm still here."
  ]
};

// Build a large response library from reusable phrases.
function buildCiscoDatabase() {
  const database = [];

  for (const [topic, data] of Object.entries(CISCO_DATA.topics)) {
    for (const reply of data.replies) {
      database.push({
        topic,
        text: reply
      });
    }
  }

  // Generate contextual combinations.
  for (const opener of CISCO_DATA.openers) {
    for (const closer of CISCO_DATA.closers) {
      for (const [topic, data] of Object.entries(CISCO_DATA.topics)) {
        database.push({
          topic,
          text: `${opener} ${data.replies[0]} ${closer}`
        });
      }
    }
  }

  return database;
}

const CISCO_DATABASE = buildCiscoDatabase();

console.log(
  "CISCO DATABASE READY:",
  CISCO_DATABASE.length,
  "response records"
);

