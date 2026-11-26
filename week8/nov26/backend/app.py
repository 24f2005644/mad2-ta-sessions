from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "jhhkvjgcvklhvjjbkbhgkj"  # never hardcode in production
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = 3600      # 1 hour in seconds (default)

CORS(app)

jwt = JWTManager(app)







@app.route('/api/login', methods=['POST'])
def login():

    email = "vinay@email.com"


    # Here you can add code to validate the user credentials against a database or perform any other logic
    access_token = create_access_token(identity=email)
    print(access_token)

    return jsonify(access_token=access_token), 200





@app.route('/api/hello', methods=['GET'])
@jwt_required()
def hello():
    identity = get_jwt_identity()
    print(identity)
    # user = User.query.filter_by(email=identity).first()

    return jsonify({'name': 'vinay', 'city': 'Mumbai', "Age":'21', 'email': '24f2005644@ds.study.iitm.ac.in', 'identity': identity }), 200




if __name__ == '__main__':
    app.run(debug=True)
