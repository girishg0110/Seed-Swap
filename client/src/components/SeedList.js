import React from "react";
import SeedOffer from "./SeedOffer";


function SeedList() {
  // need to get list of offers
  // const seedOffers = [
  //   { offered_seed: "Rose", offered_amt: "3", desired_seed: "Poppy" },
  //   { offered_seed: "Rose", offered_amt: "3", desired_seed: "Poppy" },
  //   { offered_seed: "Rose", offered_amt: "3", desired_seed: "Poppy" },
  //   { offered_seed: "Rose", offered_amt: "3", desired_seed: "Poppy" },
  //   { offered_seed: "Rose", offered_amt: "3", desired_seed: "Poppy" },
  // ];

  const [seedOffers, setSeedOffers] = useState(0)

  useEffect(() => {
    const fetchOffers = async () => {
      const result = await fetch("https://localhost:5000")
      result.json().then(json => {
        setSeetOffers(json)
      })
    }
  })

  console.log(seedOffers)

  // generate Array of SeedOffers with different parameters each
  var seed_rows = [];
  for (var i = 0; i < seedOffers.length; i++) {
    var item = seedOffers[i];
    seed_rows.push(
      <SeedOffer
        offered_seed={item.offered_seed}
        offered_amt={item.offered_amt}
        desired_seed={item.desired_seed}
      />
    );
  }
  console.log(seed_rows);

  return (
    <div>
      {seed_rows}
    </div>
  );
}

export default SeedList;
