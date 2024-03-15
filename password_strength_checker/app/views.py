from flask import Blueprint, request, jsonify, render_template  
import re

app = Blueprint('app', __name__)

def is_strong_password(password):
    length_check = len(password) >= 8
    digit_check = re.search(r"\d", password) is not None
    uppercase_check = re.search(r"[A-Z]", password) is not None
    lowercase_check = re.search(r"[a-z]", password) is not None
    special_char_check = re.search(r"[!@#$%^&*(),.?\":{}|<>]", password) is not None
    
    return all([length_check, digit_check, uppercase_check, lowercase_check, special_char_check])

@app.route('/')
def index():
    return render_template('index.html')  # render_template

@app.route('/check-password', methods=['POST'])
def check_password():
    data = request.get_json()
    password = data.get('password')

    if not password:
        return jsonify({'error': 'Password is required'}), 400

    is_strong = is_strong_password(password)

    return jsonify({'is_strong': is_strong})
