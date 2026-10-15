type Hand = { cards: number; value: number };

const play = (hand: Hand, strategy: "hold" | "discard"): number => {
  if (strategy === "hold") {
    return hand.value * 0.8;
  }
  const discarded = Math.floor(hand.cards * 0.3);
  const remaining = hand.cards - discarded;
  return remaining * (hand.value / hand.cards) * 1.8;
};

// the best skill at cards
// is knowing when to discard.

//          - baltasar gracián

let hand: Hand = { cards: 10, value: 50 };

console.log(play(hand, "hold"));
console.log(play(hand, "discard"));

/*
The math:

- hold = value × 0.8 — keeping everything weakens you
- discard = (remaining) × (value/card) × 1.8 — fewer, better cards win harder
*/