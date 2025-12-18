# Unlocking Quantum Computing

A 4-hour, instructor-led, laptop-based quantum computing workshop platform.

## Overview

This is an interactive learning system designed to teach quantum computing fundamentals through hands-on exercises using quantum simulators. The workshop is simulation-only (no real quantum hardware required) and all exercises run in Google Colab.

### What Attendees Will Learn

- **Qubits** — The fundamental unit of quantum information
- **Superposition** — How qubits can be in multiple states at once
- **Entanglement** — The "spooky" connection between qubits
- **Quantum Circuits** — How to build and run quantum programs
- **Grover's Algorithm** — A real quantum algorithm with provable speedup

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

### Backend
- **FastAPI** (Python)
- Serves workshop metadata and structure
- Ready for future extensions (analytics, progress tracking)

### Exercises
- **Google Colab** notebooks
- **Qiskit** quantum computing framework
- Simulation-only (AerSimulator)

## Project Structure

```
unlocking_quantum_computing/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Page routes
│   │   │   ├── page.tsx     # Home
│   │   │   ├── start-here/
│   │   │   ├── lab/
│   │   │   ├── concepts/
│   │   │   ├── algorithms/
│   │   │   ├── capstone/
│   │   │   ├── why-this-matters/
│   │   │   ├── cheatsheet/
│   │   │   ├── help/
│   │   │   └── resources/
│   │   ├── components/      # Reusable components
│   │   └── lib/             # Utilities and data
│   └── package.json
├── backend/                  # FastAPI application
│   ├── main.py
│   ├── routers/
│   │   └── workshop.py
│   └── requirements.txt
├── notebooks/               # Colab notebooks
│   ├── 00_sanity_check.ipynb
│   ├── 01_qubits.ipynb
│   ├── 02_superposition.ipynb
│   ├── 03_entanglement.ipynb
│   ├── 04_circuits.ipynb
│   ├── 05_grover.ipynb
│   └── capstone.ipynb
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.9+
- npm or yarn

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Running the Backend (Optional)

The backend provides API endpoints for workshop metadata. It's optional for basic usage.

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## Workshop Flow

### Sitemap

1. `/` — Home (Orientation & Motivation)
2. `/start-here` — Onboarding & Expectations
3. `/lab/00-sanity-check` — First success lab
4. `/concepts/qubits` — Understanding qubits
5. `/concepts/superposition` — Being in multiple states
6. `/concepts/entanglement` — Spooky action
7. `/concepts/circuits` — Building quantum programs
8. `/algorithms/grover` — Quantum search algorithm
9. `/capstone` — Final project
10. `/why-this-matters` — The bigger picture
11. `/cheatsheet` — Quick reference
12. `/help` — Troubleshooting
13. `/resources` — Further learning

### Page Structure

Every instructional page follows this template:

1. **Concept Explanation** — Plain English, no math proofs
2. **Visual/Intuition Section** — Diagrams and mental models
3. **Exercise Section** — Clear instructions + "Open in Google Colab" button
4. **Reflection Questions** — For group discussion

## Google Colab Integration

### Setting Up Notebooks for Your Repository

1. Push this repository to GitHub
2. Update `frontend/src/lib/workshop-data.ts`:
   ```typescript
   export const GITHUB_REPO = "YOUR_USERNAME/unlocking_quantum_computing";
   ```
3. Colab links will automatically point to your repository

### How It Works

- Each exercise page has an "Open in Google Colab" button
- Clicking opens the notebook directly in Colab from GitHub
- Attendees click "Copy to Drive" to save their work
- All notebooks use Qiskit with AerSimulator (simulation only)

## Customization

### Adding New Pages

1. Create a new folder in `frontend/src/app/`
2. Add a `page.tsx` file
3. Update `frontend/src/lib/workshop-data.ts` with the new page

### Adding New Notebooks

1. Create an `.ipynb` file in `notebooks/`
2. Link it from the relevant page using the `ColabButton` component

### Modifying Workshop Structure

Edit `frontend/src/lib/workshop-data.ts` and `backend/routers/workshop.py` to update the page order and metadata.

## Workshop Schedule (Suggested)

| Time | Topic |
|------|-------|
| Hour 1 | Setup + Qubits + Superposition |
| Hour 2 | Entanglement + Circuits |
| Hour 3 | Grover's Algorithm |
| Hour 4 | Capstone + Wrap-up |

## Future Extensions

This platform is designed to support:

- **Progress Tracking** — Save attendee progress
- **Analytics** — Workshop completion rates
- **Paid Access** — Gating for commercial workshops
- **QuantumReeder Integration** — Tie-ins with other products
- **Interactive Visualizations** — Replace placeholder visuals

## License

MIT

## Contributing

Contributions welcome! Please open an issue or PR.
