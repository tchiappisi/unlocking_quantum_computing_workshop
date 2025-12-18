from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import workshop

app = FastAPI(
    title="Quantum Workshop API",
    description="Backend API for the Unlocking Quantum Computing workshop",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(workshop.router, prefix="/api/workshop", tags=["workshop"])


@app.get("/")
async def root():
    return {"message": "Quantum Workshop API", "status": "running"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
