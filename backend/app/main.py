from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "vamos por el 5 Backend go go go"}
