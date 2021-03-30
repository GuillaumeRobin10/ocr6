HOME ="http://127.0.0.1:8000/api/v1/titles/?format=json&sort_by=+-imdb_score"
# Set CORS headers for the main request
HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
}