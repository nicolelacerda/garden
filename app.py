from flask import Flask, render_template
import gunicorn 

app = Flask(__name__)

@app.route("/index")
def index():
  return render_template("index.html")



if __name__ == '__main__':
    app.run(port=5000, debug=True)