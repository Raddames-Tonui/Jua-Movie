import requests, os
from flask import Flask, request, jsonify
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# Retrieve the API key from the environment
OMDB_API_KEY = os.getenv('OMDB_API_KEY')

app = Flask(__name__)


@app.route('/movies', methods=['GET'])
def get_movies():
    query = request.args.get('query')
    url = f'http://www.omdbapi.com/?s={query}&apikey={OMDB_API_KEY}'
    response = requests.get(url)
    return jsonify(response.json())

@app.route('/movies/<movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    url = f'http://www.omdbapi.com/?i={movie_id}&apikey={OMDB_API_KEY}'
    response = requests.get(url)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True, port=5555)
