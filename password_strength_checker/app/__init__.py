from flask import Flask

def create_app():
    app = Flask(__name__)
    from .views import app as views_blueprint
    app.register_blueprint(views_blueprint)
    return app
