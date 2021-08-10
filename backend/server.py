from flask import Flask, request, jsonify, make_response, render_template
import numpy
from stl import mesh
from io import BytesIO
app = Flask(__name__)


@app.route("/test")
def server_test():
    return "<p>Server is working!</p>"

# POST request to send the PNG file
@app.route("/upload", methods=["POST"])
def handle_image():
    # get the image file from the request
    if 'file' not in request.files:
        #flash('file not found')
        return jsonify({
        'success': False,
        'file': 'Not Found'
    })
    
    files = request.files
    file = files.get('file')
    file.save(file.filename)

    # send success message to client
    return jsonify({
        'success': True,
        'file': 'Received'
    })
# GET request to send the newly created STL file