from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.get("/")
def home():
    return render_template("index.html")

@app.get("/about")
def about():
    return render_template("about.html")

@app.get("/health")
def health():
    return jsonify(status="ok", service="CYFEN LABS public website")

@app.errorhandler(404)
def not_found(error):
    return "Page not found", 404

if __name__ == "__main__":
    # Local testing only. The public host will run Gunicorn.
    app.run(host="127.0.0.1", port=5000, debug=False)
