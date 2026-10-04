# Quode

**Quode** (Quote + Code) is a creative repository where metaphoric quotes are translated into code. 

Here, philosophical thoughts, idioms, and metaphors are re-imagined as programmatic snippets—expressing abstract human ideas through mathematics, logic, and algorithms.

## Concept

The idea is to take a metaphoric quote and build an executable "code version" of it. It blends the expressiveness of human language with the precise, logical structure of programming to create something uniquely thought-provoking.

## Example

Here is the first entry and structure used in this repository, where types and logic reflect the metaphorical constraints of the quote, and a breakdown explains "the math" behind it:

```typescript
type PageState = { wetness: number; resolved: boolean };

const turnPage = (page: PageState): boolean => {
  if (page.wetness > 0 || !page.resolved) {
    console.log(`Smeared: ${Math.min(100, page.wetness * 1.5)}%`);
    return false;
  }
  return true;
};

const letTimePass = (page: PageState, days: number): void => {
  page.wetness = Math.max(0, page.wetness - days * 5);
};

// i keep trying to turn the page,
// but the ink is still wet and
// it's smearing onto everything.

let page: PageState = { wetness: 100, resolved: false };

turnPage(page);
letTimePass(page, 20);
page.resolved = true;
turnPage(page);

/*
The math:

- wetness > 0 OR unresolved = can't move forward
- smearAmount = wetness × 1.5 = spreads when you force it
- wetness -= days × 5 = only time heals
- Can only turnPage() when both dry AND resolved
*/
```

## About

This repository serves as an experimental space for turning abstract concepts and quotes into code calculations and logic structures. Feel free to explore the repository to find various thoughts and quotes expressed as code!
