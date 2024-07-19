from typing import Union 
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {"Hello":"World"}

#item_id - path parameter
#q - query parameter
#/items/5?q=somequery
@app.get("/items/{item_id}")
def read_item(item_id : int, q: Union[str, None] = None):
    return {"item_id":item_id,"q":q}

