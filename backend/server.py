from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS, cross_origin
from stl import mesh
from io import BytesIO
from image_processer import convert_image

app = Flask(__name__)
CORS(app)

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

    #process image
    convert_image(file)
    # send success message to client
    return jsonify({
        'success': True,
        'file': 'Received'
    })
# GET request to send the newly created STL file
# flask_cors.CORS(app, expose_headers='Authorization')
