import uvicorn
from app.config import config

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0",
                log_level="debug", port=config.PORT)

