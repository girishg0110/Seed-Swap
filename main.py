from flask import Flask, render_template, request
import time
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

@app.route('/', methods=['GET', 'POST'])
def index():    
    if request.method == 'POST':
        timestamp = time.time_ns()
        offered_seed = request.form['offered_seed']
        offered_amt = request.form['offered_amt']
        desired_seed = request.form['desired_seed']
        '''listings[timestamp] = {
            "offered_seed" : offered_seed, 
            "offered_amt" : offered_amt, 
            "desired_seed" : desired_seed
        }'''
        #print(listings)
        collection_name.insert_one({
            "offered_seed" : offered_seed, 
            "offered_amt" : offered_amt, 
            "desired_seed" : desired_seed
        })

        return render_template('index.html', listings=collection_name)
    print(collection_name.find_one()["_id"])
    return render_template('index.html', listings=collection_name)

@app.route('/match', methods=['POST'])
def offer():
    offer_id = request.form['offer_id']
    print("id", offer_id)
    collection_name.find
    offer = collection_name.find_one({'_id' : ObjectId(offer_id)})
    print("offer:", offer)
    match_amt = request.form['matched_amt']
    return render_template('match.html', id=offer_id, 
                           offer=offer, 
                           match_amt=match_amt)


if __name__ == '__main__':
    dbname = client["listings"]
    collection_name = dbname["open_listings"]
    app.run(debug=True)