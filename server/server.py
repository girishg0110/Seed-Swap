from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

# MongoDB setup
load_dotenv()
MONGODB_USERNAME = os.getenv("MONGODB_USERNAME")
MONGODB_PASSWORD = os.getenv("MONGODB_PASSWORD")
CLUSTER_ADDRESS = os.getenv("CLUSTER_ADDRESS")
CONNECTION_STRING = f"mongodb+srv://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@{CLUSTER_ADDRESS}/?retryWrites=true&w=majority"
client = MongoClient(CONNECTION_STRING, server_api=ServerApi('1'))
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Flask setup
app = Flask(__name__)

def collectionToJson(collection, filter={}):
    return [{key : str(document[key]) for key in document} for document in collection.find(filter)]

@app.route('/offers', methods=['GET', 'POST'])
def index():    
    if request.method == 'POST':
        new_offer = request.get_json()
        new_offer["bids"] = []
        resp = offer_collection.insert_one(new_offer)

        return jsonify(id = str(resp.inserted_id)), 200

    return collectionToJson(offer_collection), 200

@app.route('/match', methods=['POST'])
def match():
    offer_id = request.form['offer_id']
    match_amt = request.form['matched_amt']
    bidder_name = request.form['bidder_firstname'] + request.form['bidder_lastname']
    match_seed = request.form['matched_seed']
    offer_collection.update_one({'_id' : ObjectId(offer_id)}, 
                                jsonify(match_amt = match_amt, bidder = bidder_name, match_seed = match_seed))
    return jsonify(id=offer_id), 200


if __name__ == '__main__':
    db = client["seed-swap"]
    offer_collection = db["offers"]
    app.run(debug=True)