from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

WORKSHOP_PAGES = [
    {"id": "home", "path": "/", "title": "Home", "subtitle": "Orientation & Motivation", "order": 0},
    {"id": "start-here", "path": "/start-here", "title": "Start Here", "subtitle": "Onboarding & Expectations", "order": 1},
    {"id": "lab-00", "path": "/lab/00-sanity-check", "title": "Lab 00: Sanity Check", "subtitle": "First Success", "order": 2},
    {"id": "qubits", "path": "/concepts/qubits", "title": "Qubits", "subtitle": "The Quantum Bit", "order": 3},
    {"id": "superposition", "path": "/concepts/superposition", "title": "Superposition", "subtitle": "Being in Multiple States", "order": 4},
    {"id": "entanglement", "path": "/concepts/entanglement", "title": "Entanglement", "subtitle": "Spooky Action", "order": 5},
    {"id": "circuits", "path": "/concepts/circuits", "title": "Quantum Circuits", "subtitle": "Building Blocks", "order": 6},
    {"id": "grover", "path": "/algorithms/grover", "title": "Grover's Algorithm", "subtitle": "Quantum Search", "order": 7},
    {"id": "capstone", "path": "/capstone", "title": "Capstone Project", "subtitle": "Putting It Together", "order": 8},
    {"id": "why-this-matters", "path": "/why-this-matters", "title": "Why This Matters", "subtitle": "The Bigger Picture", "order": 9},
    {"id": "cheatsheet", "path": "/cheatsheet", "title": "Cheatsheet", "subtitle": "Quick Reference", "order": 10},
    {"id": "help", "path": "/help", "title": "Help", "subtitle": "Getting Unstuck", "order": 11},
    {"id": "resources", "path": "/resources", "title": "Resources", "subtitle": "Continue Learning", "order": 12},
]

WORKSHOP_METADATA = {
    "title": "Unlocking Quantum Computing",
    "duration": "4 hours",
    "format": "Instructor-led, laptop-based workshop",
    "prerequisites": ["Basic Python knowledge", "Laptop with web browser"],
    "objectives": [
        "Understand core quantum computing concepts",
        "Build and run quantum circuits using simulators",
        "Implement Grover's search algorithm",
        "Gain confidence to explore quantum computing further"
    ]
}


@router.get("/structure")
async def get_workshop_structure():
    return {
        "metadata": WORKSHOP_METADATA,
        "total_pages": len(WORKSHOP_PAGES),
        "pages": WORKSHOP_PAGES
    }


@router.get("/pages")
async def get_workshop_pages():
    return {"pages": WORKSHOP_PAGES}


@router.get("/pages/{page_id}")
async def get_page(page_id: str):
    for page in WORKSHOP_PAGES:
        if page["id"] == page_id:
            return page
    return {"error": "Page not found"}
