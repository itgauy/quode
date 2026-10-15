type Person = { realityLoad: number; tolerance: number; happiness: number };
type Illusion = { cost: number; relief: number; duration: number };

const canBearReality = (person: Person): boolean => {
  return person.realityLoad <= person.tolerance;
};

const rentIllusion = (person: Person, illusion: Illusion): Person => {
  const perceivedHappiness = illusion.relief / illusion.cost;
  const realityUnchanged = person.realityLoad;
  return {
    ...person,
    realityLoad: realityUnchanged,
    happiness: person.happiness + perceivedHappiness,
  };
};

const fadeIllusion = (person: Person, illusion: Illusion): Person => {
  return {
    ...person,
    happiness: Math.max(0, person.happiness - illusion.relief / illusion.duration),
  };
};

// reality is too heavy for people,
// so they rent illusions
// and call it happiness.

//          - franz kafka

let person: Person = { realityLoad: 100, tolerance: 30, happiness: 0 };
let illusion: Illusion = { cost: 10, relief: 80, duration: 5 };

console.log(canBearReality(person));

person = rentIllusion(person, illusion);
console.log(person.happiness);

person = fadeIllusion(person, illusion);
console.log(person.happiness);

console.log(canBearReality(person));

/*
The math:

- realityLoad > tolerance = can't bear it
- perceivedHappiness = relief / cost — cheap comfort feels like joy
- realityUnchanged — illusions never reduce the actual weight
- fade = happiness -= relief / duration — rented things always expire
- After it fades, reality is still too heavy
*/
