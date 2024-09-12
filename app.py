from flask import Flask, request, jsonify
import json
import logging
from logging.handlers import RotatingFileHandler
import time

app = Flask(__name__)

log_handler = RotatingFileHandler('sntl_bridg_log.log', maxBytes=100000, backupCount=5)
log_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
log_handler.setFormatter(formatter)
app.logger.addHandler(log_handler)

def _0x1a2b(_0x1c2d):
    return f"{_0x1c2d}"

@app.route('/detect', methods=['POST'])
def _0x1d2e():
    _0x2a3b = request.headers.get('Origin', 'unknown')
    _0x3b4c = request.json
    _0x4c5d = len(_0x3b4c.get('e', []))

    if _0x4c5d > 50:
        app.logger.info(f"Suspect activity detected from {_0x2a3b} with {_0x4c5d} events.")
        return jsonify({'status': 'sus'})
    
    _0x6b7c = {
        'origin': _0x1a2b(_0x2a3b),
        'data': _0x3b4c,
        'timestamp': time.time()
    }

    with open('user_activity_log.json', 'a') as _0x8c9d:
        _0x8c9d.write(json.dumps(_0x6b7c) + '\n')

    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=False, port=5000)
