import requests

seedOffers = [
    {
      "offered_seed": "Rose 🌹",
      "offered_amt": "30",
      "desired_seed": "Chrysanthemum 💮",
      "proposer": "Greg Samson"
    },
    {
      "offered_seed": "Sunflower 🌻",
      "offered_amt": "70",
      "desired_seed": "American Wildflower 💠",
      "proposer": "Christine MacPherson"
    },
    {
      "offered_seed": "Snapdragon 🏵️",
      "offered_amt": "20",
      "desired_seed": "Poppy 🌼",
      "proposer": "Samir Mudhakar"
    },
    {
      "offered_seed": "Tomato 🍅",
      "offered_amt": "100",
      "desired_seed": "Thyme 🍃",
      "proposer": "Esteban Garbanzo"
    },
    {
      "offered_seed": "Mint 🍀",
      "offered_amt": "10",
      "desired_seed": "Petunia 🌺",
      "proposer": "Porto Fucci"
    },
    {
      "offered_seed": "Lavendar 💠",
      "offered_amt": "20",
      "desired_seed": "Poppy 💮",
      "proposer": "Kalonos Margim"
    },
    {
      "offered_seed": "Cilantro 🌿",
      "offered_amt": "100",
      "desired_seed": "Rose 🌹",
      "proposer": "Petrus Kamolos"
    },
    {
      "offered_seed": "Basil 🍃",
      "offered_amt": "10",
      "desired_seed": "Marigold 🏵️",
      "proposer": "Felapitin Korragulus"
    },
    {
      "offered_seed": "Zinnia 🌸",
      "offered_amt": "20",
      "desired_seed": "Cosmos 💮",
      "proposer": "Jumbotron Michaels"
    },
    {
      "offered_seed": "Marigold 🌷",
      "offered_amt": "100",
      "desired_seed": "Morning Glory 🏵️",
      "proposer": "Frank Zamboni"
    }
  ]

url = 'http://localhost:5000/offers'
for offer in seedOffers:
    name = offer["proposer"]
    firstname, lastname = name.split(' ')
    del offer["proposer"]
    offer["proposer_firstname"] = firstname
    offer["proposer_lastname"] = lastname
    offer["bidder_firstname"] = ""
    offer["bidder_lastname"] = ""
    offer["matched_amt"] = 0
    offer["matched_seed"] = ""

print(seedOffers)

for offer in seedOffers: 
  requests.post(url=url, json=offer)

