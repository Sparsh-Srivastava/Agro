from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
import pickle

with open("Language_Detection", "rb") as f:
  mp = pickle.load(f)

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/", methods=["GET"])
def index_get():
    return render_template("base.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    payload = [data['data']]
    output = mp.predict(payload)
    return(output[0])

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=7000)