import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

mongo_url = "mongodb+srv://domdypol:Dompol19@cluster0.hxrw0cv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(mongo_url)
db = client["flipbird"]
collection_board = db["flipboard"]
collection_comment = db["flipcomment"]

print("fuck this shit")

class Comments(BaseModel):
    comment: str
    user_name: str
    pronouns: str
    comment_date: str

class Comments(BaseModel):
    board_id : int
    board_name: str
    description : str 
    like : int
    dislike : int
    board_date : str
    tag : list = [str]

@app.post("/boards/", response_model=Comments, response_description="Create new board")
async def add_board(board : Comments):
    new_board = await collection_board.insert_one(board.model_dump(by_alias=True, exclude=["id"]))
    created_board = await collection_board.insert_one(new_board).inserted_id
    return created_board

@app.post("/comments/", response_model=Comments, response_description="Create new board")
async def add_comment(comment : Comments):
    new_comment = await collection_comment.insert_one(comment.model_dump(by_alias=True, exclude=["id"]))
    create_comment = await collection_comment.insert_one(new_comment).inserted_id
    return create_comment

@app.get("/")
def hello_world():
    return {"message": "Hello, World!"}

@app.get("/users")
async def get_all_users():
    users_list = []
    users = collection_board.find()
    for user in users:
        users_list.append({
            "board_id" : user['id'],
            "user_id" : user['user_id'],
            "tag" : user["tag"],
            "description" : user['description'],
            "like" : user['like'],
            "dislike" : user['dislike'],
            "date" : user['date']
        })
    return users_list

@app.get("/boards")
async def get_all_boards():
    board_list = []
    boards = collection_board.find()
    for board in boards:
        board_list.append({
            "board_id": board['board_id'],
            "comment_id" : board['comment_id'],
            "user_id_comment" : board['user_id_comment'],
            "comment" : board['comment']
        })
    return board_list

@app.get("/users/{board_id}")
def get_user(board_id: int):
    board = collection_board.find_one({"board_id": board_id})
    if board:
        return board
    else:
        raise HTTPException(status_code=404, detail="board not found")
    
@app.get("/boards/{board_id}")
def get_board(board_id: int):
    board = collection_board.find_one({"board_id": board_id})
    if board:
        return board
    else:
        raise HTTPException(status_code=404, detail="board not found")

@app.delete("/users/{board_id}" )
def delete_user(board_id: int):
    result = collection_board.delete_one({"board_id": board_id})
    if result.deleted_count == 1:
        return {"message": "Board deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Board not found")
    
@app.delete("/boards/{board_id}")
def delete_board(board_id: int):
    result = collection_board.delete_one({"board_id": board_id})
    if result.deleted_count == 1:
        return {"message": "Board deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Board not found")
