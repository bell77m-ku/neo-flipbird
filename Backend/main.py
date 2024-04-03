from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import datetime

app = Flask(__name__)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
boards = []
comments = []


@app.route("/")
def Greet():
    return "<h1>Hello world</h1>"


@app.route("/boards", methods=["GET"])
@cross_origin()
def get_all_boards():
    return jsonify({"boards": boards})


@app.route("/boards/<int:board_id>", methods=["GET"])
@cross_origin()
def get_books(board_id):
    board = next((b for b in boards if b["board_id"] == board_id), None)
    if board:
        return jsonify(board)
    else:
        return jsonify({"error": "Board not found"}), 404


@app.route("/boards", methods=["POST"])
@cross_origin()
def create():
    data = request.get_json()
    new_boards = {
        "board_id": len(boards) + 1,
        "board_name": data["board_name"],
        "description": data["description"],
        "like": 0,
        "dislike": 0,
        "board_date":f"{datetime.datetime.now():%Y-%m-%d}",
        "board_tags": data["board_tags"]
    }
    boards.append(new_boards)
    return jsonify(new_boards), 201


@app.route("/boards/<int:board_id>", methods=["DELETE"])
@cross_origin()
def delete_board(board_id):
    global boards
    boards = [b for b in boards if b["board_id"] != board_id]
    return jsonify({"message": "board was Deleted"})


@app.route("/boards/<int:board_id>", methods=["PUT"])
@cross_origin()
def update_boards(board_id):
    print(board_id)
    board = next((b for b in boards if b["board_id"] != board_id), None)
    if board:
        data = request.get_json()
        print(data)
        board.update(data)
        return jsonify(board), 200
    else:
        return jsonify({"message": "Board not found"}), 404

# comment section

@app.route("/comments", methods=["GET"])
@cross_origin()
def get_all_comments():
        return jsonify({"comments": comments})

@app.route("/comments/<int:comments_id>", methods=["GET"])
@cross_origin()
def get_comment(comments_id):
        comment = next((c for c in comments if c["comments_id"] == comments_id), None)
        if comment:
            return jsonify(comment)
        else:
            return jsonify({"error": "comments not found"}), 404

@app.route("/comments", methods=["POST"])
@cross_origin()
def createComment():
        data = request.get_json()
        new_comment = {
            "comment_id": len(boards) + 1,
            "board_id": data["board_id"],
            "comment": data["comment"],
            "comment_date": f"{datetime.datetime.now():%Y-%m-%d}"
        }
        comments.append(new_comment)
        return jsonify(new_comment), 201

@app.route("/comments/<int:comment_id>", methods=["DELETE"])
@cross_origin()
def delete_comment(comment_id):
        global comments
        comments = [c for c in comments if c["comment_id"] != comment_id]
        return jsonify({"message": "comment was Deleted"})

@app.route("/comments/<int:comment_id>", methods=["PUT"])
@cross_origin()
def update_comment(comment_id):

        comment = next((c for c in boards if c["comment_id"] != comment_id), None)
        if comment:
            data = request.get_json()
            comment.update(data)
            return jsonify(comment), 200
        else:
            return jsonify({"message": "Comment not found"}), 404


if __name__ == "__main__":
    app.run(host="127.0.0.1", port="5000", debug=True)
