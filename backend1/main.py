from flask import Flask, request,jsonify,send_file
from flask_cors import CORS

import cv2
from g2p_en import G2p
import re
import component
from component import imgIndex
from ttsInterview import addAudio

app = Flask(__name__)
CORS(app)


@app.route("/<string:sentence>")
def hello_world(sentence):
    duration=addAudio(sentence)
    
    index,duration_arr=imgIndex(sentence,duration)
    result={
        "indexArr": index,
        "duration":duration_arr,
    }
    print(duration_arr)
    return jsonify(result)


@app.route("/audio")
def send_audio():
    return send_file('aud.wav', mimetype='audio/wav', as_attachment=True)



if __name__ == '__main__':
    app.run(debug=True)