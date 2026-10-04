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