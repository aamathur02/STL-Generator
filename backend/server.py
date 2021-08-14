from flask import Flask, request, jsonify, send_from_directory, session
from flask_cors import CORS, cross_origin
from stl import mesh
from io import BytesIO
from image_processer import convert_image
import os

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
@app.route("/stl", methods=["GET"])
def get_stl():
    # if stl is None:
    #     print(os.getcwd())
    #     return jsonify ({
    #         'success': False,
    #         'file': 'Not Found',
    #     })

    return send_from_directory(os.getcwd(), 'surface.stl')
    # output =  BytesIO()
    # stl._write_ascii(output,"object.stl")
    # response = make_response(output.getvalue())
    # return response

@app.after_request
def set_cache_preferences(response):
   response.headers['Cache-Control'] = 'no-store'
   return response
# flask_cors.CORS(app, expose_headers='Authorization')
