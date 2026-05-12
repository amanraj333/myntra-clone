from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {
        "id": 1,
        "name": "T-Shirt",
        "price": 999
    },
    {
        "id": 2,
        "name": "Shoes",
        "price": 1999
    }
]

@app.route("/")
def home():
    return "Backend Running"

@app.route("/products")
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)