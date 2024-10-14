from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles


class dbAnswer(BaseModel):
    id:int
    title:str
    description:str
    answer:str
    user:int

a_Answer=[] #메모리에 저장

app = FastAPI()

@app.post("/answers")
def post_Answer(p_Answer:dbAnswer):
    a_Answer.append(p_Answer)
    return '200'
    
@app.get("/answers")
def read_Answers():
    return a_Answer

app.mount("/",StaticFiles(directory='static',html=True),name='static')