import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

print("fuck me in the ass!")

mongo_url = "mongodb+srv://domdypol:Dompol19@cluster0.hxrw0cv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(mongo_url)
db = client["flipbird"]
collection = db["flipoff"]
collection_board = db["flipboard"]

f = open("flipoff.json")

Users = json.load(f)

class Product(BaseModel):
    name: str
    price: float

@app.get("/")
def hello_world():
    return {"message": "Hello, World!"}

@app.get("/users")
async def get_all_users():
    users_list = []
    users = collection.find()
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
    boards = collection.find()
    for board in boards:
        board_list.append({
            "board_id": board['board_id'],
            "comment_id" : board['comment_id'],
            "user_id_comment" : board['user_id_comment'],
            "comment" : board['comment']
        })
    return board_list

@app.get("/board/{board_id}")
def get_board(board_id: int):
    board = collection.find_one({"board_id": board_id})
    if board:
        return board
    else:
        raise HTTPException(status_code=404, detail="Product not found")

# test code below

@app.get("/products/", response_model=list[Product])
def get_all_products():
    return list(collection.find())

@app.get("/products/{product_id}", response_model=Product)
def get_product_by_id(product_id: int):
    product = collection.find_one({"id": product_id}, {"_id": 0})
    if product:
        return product
    else:
        raise HTTPException(status_code=404, detail="Product not found")

@app.post("/products/", response_model=dict)
def add_product(product: Product):
    product_dict = product.dict()
    product_id = collection.insert_one(product_dict).inserted_id
    return {"id": product_id}

@app.delete("/products/{product_id}", response_model=dict)
def delete_product(product_id: int):
    result = collection.delete_one({"id": product_id})
    if result.deleted_count == 1:
        return {"message": "Product deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Product not found")

@app.put("/products/{product_id}", response_model=dict)
def update_product(product_id: int, product: Product):
    product_dict = product.dict()
    update_data = {"$set": product_dict}
    result = collection.update_one({"id": product_id}, update_data)
    if result.modified_count == 1:
        return {"message": "Product updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Product not found")
    
f.close()
