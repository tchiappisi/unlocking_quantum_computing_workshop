export interface WorkshopPage {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  order: number;
  notebookUrl?: string;
}

export const GITHUB_REPO = "tchiappisi/unlocking_quantum_computing";

export const workshopPages: WorkshopPage[] = [
  { id: "home", path: "/", title: "Home", subtitle: "Orientation & Motivation", order: 0 },
  { id: "start-here", path: "/start-here", title: "Start Here", subtitle: "Onboarding & Expectations", order: 1 },
  { id: "lab-00", path: "/lab/00-sanity-check", title: "Lab 00: Sanity Check", subtitle: "First Success", order: 2, notebookUrl: "00_sanity_check.ipynb" },
  { id: "qubits", path: "/concepts/qubits", title: "Qubits", subtitle: "The Quantum Bit", order: 3, notebookUrl: "01_qubits.ipynb" },
  { id: "superposition", path: "/concepts/superposition", title: "Superposition", subtitle: "Being in Multiple States", order: 4, notebookUrl: "02_superposition.ipynb" },
  { id: "entanglement", path: "/concepts/entanglement", title: "Entanglement", subtitle: "Spooky Action", order: 5, notebookUrl: "03_entanglement.ipynb" },
  { id: "circuits", path: "/concepts/circuits", title: "Quantum Circuits", subtitle: "Building Blocks", order: 6, notebookUrl: "04_circuits.ipynb" },
  { id: "grover", path: "/algorithms/grover", title: "Grover's Algorithm", subtitle: "Quantum Search", order: 7, notebookUrl: "05_grover.ipynb" },
  { id: "capstone", path: "/capstone", title: "Capstone Project", subtitle: "Putting It Together", order: 8, notebookUrl: "capstone.ipynb" },
  { id: "why-this-matters", path: "/why-this-matters", title: "Why This Matters", subtitle: "The Bigger Picture", order: 9 },
  { id: "cheatsheet", path: "/cheatsheet", title: "Cheatsheet", subtitle: "Quick Reference", order: 10 },
  { id: "help", path: "/help", title: "Help", subtitle: "Getting Unstuck", order: 11 },
  { id: "resources", path: "/resources", title: "Resources", subtitle: "Continue Learning", order: 12 },
];

export function getColabUrl(notebookName: string): string {
  return `https://colab.research.google.com/github/${GITHUB_REPO}/blob/main/notebooks/${notebookName}`;
}

export function getPageByPath(path: string): WorkshopPage | undefined {
  return workshopPages.find(p => p.path === path);
}

export function getNextPage(currentPath: string): WorkshopPage | undefined {
  const current = getPageByPath(currentPath);
  if (!current) return undefined;
  return workshopPages.find(p => p.order === current.order + 1);
}

export function getPrevPage(currentPath: string): WorkshopPage | undefined {
  const current = getPageByPath(currentPath);
  if (!current) return undefined;
  return workshopPages.find(p => p.order === current.order - 1);
}
