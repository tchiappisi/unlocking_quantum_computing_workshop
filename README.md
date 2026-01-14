# Quantum Computing Workshop - Code Reference

---

## Jump To Your Current Lab

- [Lab 01: Qubits](#lab-01-qubits)
- [Lab 02: Superposition](#lab-02-superposition)
- [Lab 03: Entanglement](#lab-03-entanglement)
- [Lab 04: Circuits](#lab-04-circuits)
- [Lab 05: Grover's Algorithm](#lab-05-grovers-algorithm)
- [Capstone: Build Something Cool](#capstone-build-something-cool)
- [Quick Help](#quick-help)

---
---
---
---
---
---
---
---
---
---

# Lab 01: Qubits

**Your Turn:** When you see `# Add gates here...` in your notebook, try these:

---

### Option A: Create Superposition
```python
qc = QuantumCircuit(1, 1)
qc.h(0)
qc.measure(0, 0)
```
**Result:** ~50% zero, ~50% one

---

### Option B: Flip Then Superposition
```python
qc = QuantumCircuit(1, 1)
qc.x(0)
qc.h(0)
qc.measure(0, 0)
```
**Result:** Still ~50/50 (different phase internally)

---

### Option C: Two H Gates Cancel Out
```python
qc = QuantumCircuit(1, 1)
qc.h(0)
qc.h(0)
qc.measure(0, 0)
```
**Result:** 100% zero - the gates cancel!

---

### Option D: Two X Gates Cancel Out
```python
qc = QuantumCircuit(1, 1)
qc.x(0)
qc.x(0)
qc.measure(0, 0)
```
**Result:** 100% zero - flipping twice = no change

---

**Try it:** What happens if you do `h(0)` then `x(0)` then `h(0)`?

---
---
---
---
---
---
---
---
---
---

# Lab 02: Superposition

**Your Turn:** Run each exercise, then answer these questions in your head (or discuss with a neighbor):

---

### After Exercise 1:
- How many outcomes did you see?
- Are the probabilities equal?
- What would happen with 3 qubits?

---

### After Exercise 2:
- How many outcomes with 3 qubits? With 4?
- Do the probabilities add up to 100%?

---

### After Exercise 3 (RY gate):
Try changing the angle! Copy this and change `0.5` to other values:
```python
theta = np.pi * 0.5  # Try: 0.25, 0.5, 0.75, 1.0
qc = QuantumCircuit(1, 1)
qc.ry(theta, 0)
qc.measure(0, 0)
result = simulator.run(qc, shots=1000).result()
plot_histogram(result.get_counts())
```

| Value | What You'll See |
|-------|-----------------|
| 0.25 | Mostly zeros |
| 0.5 | 50/50 |
| 0.75 | Mostly ones |
| 1.0 | All ones |

---

### Mind-Blowing Fact:
```
50 qubits = 1,000,000,000,000,000 states
```
That's more states than atoms in your body!

---
---
---
---
---
---
---
---
---
---

# Lab 03: Entanglement

**Your Turn:** Create qubits that are always OPPOSITE (when one is 0, the other is 1)

---

### Copy This:
```python
qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.x(1)
qc.measure([0, 1], [0, 1])
```

---

### Run it and check:
- Do you see `01` and `10`?
- Do you EVER see `00` or `11`?

---

### Why it works:
1. `h(0)` + `cx(0,1)` = Bell state (always SAME)
2. `x(1)` flips qubit 1
3. Now they're always OPPOSITE!

---

### Bonus Challenge:
Can you make a 3-qubit GHZ state where all 3 are always the same?
```python
qc = QuantumCircuit(3, 3)
qc.h(0)
qc.cx(0, 1)
qc.cx(0, 2)
qc.measure([0, 1, 2], [0, 1, 2])
```
You should only see `000` and `111`!

---
---
---
---
---
---
---
---
---
---

# Lab 04: Circuits

**Your Turn:** Predict, then verify!

---

### Exercise: Predict the Half Adder Output

Before running, predict what the output will be:

| Input A | Input B | Your Prediction | Actual Result |
|:-------:|:-------:|:---------------:|:-------------:|
| 0 | 0 | ? | (run it!) |
| 0 | 1 | ? | (run it!) |
| 1 | 0 | ? | (run it!) |
| 1 | 1 | ? | (run it!) |

---

### Hint:
- Sum = A XOR B (different = 1, same = 0)
- Carry = A AND B (both 1 = 1, otherwise = 0)

---

### Bonus: Build Your Own Gate Sequence

Try this in a new cell - predict the output first!

```python
qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.x(0)
qc.x(1)
qc.measure([0, 1], [0, 1])

result = simulator.run(qc, shots=1000).result()
plot_histogram(result.get_counts())
```

**Predict:** What states will you see? Will they be equal probability?

---

### Gate Reference:
| Gate | What It Does | Code |
|------|--------------|------|
| X | Flips 0↔1 | `qc.x(0)` |
| H | 50/50 superposition | `qc.h(0)` |
| CNOT | Flip target IF control=1 | `qc.cx(0, 1)` |
| Toffoli | Flip target IF both controls=1 | `qc.ccx(0, 1, 2)` |

---
---
---
---
---
---
---
---
---
---

# Lab 05: Grover's Algorithm

**Your Turn:** Search for `|101⟩` instead of `|111⟩`

---

### Step 1: Copy This Oracle
```python
def oracle_101(qc):
    qc.x(1)
    qc.ccz(0, 1, 2)
    qc.x(1)
```

---

### Step 2: Run It
```python
qc = grover_custom(oracle_101, iterations=2)
result = simulator.run(qc, shots=1000).result()
plot_histogram(result.get_counts())
```

---

### Check: Does `101` appear ~95% of the time?

---

### Bonus: Try a Different State!

The pattern: If a bit is `0` → add `qc.x()` before AND after `ccz`

| Target | Which qubits have 0? | Oracle Code |
|--------|---------------------|-------------|
| \|011⟩ | qubit 0 | `x(0)`, `ccz`, `x(0)` |
| \|100⟩ | qubits 1 and 2 | `x(1)`, `x(2)`, `ccz`, `x(1)`, `x(2)` |
| \|010⟩ | qubits 0 and 2 | `x(0)`, `x(2)`, `ccz`, `x(0)`, `x(2)` |

Pick one and try it!

---
---
---
---
---
---
---
---
---
---

# Capstone: Build Something Cool

**Your Turn:** Pick one (or make your own!) when you see `# Add your gates here!`

---

### Idea 1: Quantum Dice (1-6)
```python
def quantum_dice():
    qc = QuantumCircuit(3, 3)
    qc.h(0); qc.h(1); qc.h(2)
    qc.measure([0, 1, 2], [0, 1, 2])
    simulator = AerSimulator()
    result = simulator.run(qc, shots=1).result()
    value = int(list(result.get_counts().keys())[0], 2)
    while value == 0 or value == 7:
        result = simulator.run(qc, shots=1).result()
        value = int(list(result.get_counts().keys())[0], 2)
    return value

print("You rolled:", quantum_dice())
```

---

### Idea 2: Quantum Magic 8-Ball
```python
def quantum_8ball():
    answers = ["Yes", "No", "Maybe", "Ask again", "Definitely", "Unlikely", "Certain", "Doubtful"]
    qc = QuantumCircuit(3, 3)
    qc.h(0); qc.h(1); qc.h(2)
    qc.measure([0, 1, 2], [0, 1, 2])
    simulator = AerSimulator()
    result = simulator.run(qc, shots=1).result()
    index = int(list(result.get_counts().keys())[0], 2)
    return answers[index]

print("Will I pass?", quantum_8ball())
```

---

### Idea 3: Rock Paper Scissors
```python
def quantum_rps():
    qc = QuantumCircuit(2, 2)
    qc.h(0); qc.h(1)
    qc.measure([0, 1], [0, 1])
    result = AerSimulator().run(qc, shots=1).result()
    choices = {'00': 'Rock', '01': 'Paper', '10': 'Scissors', '11': 'Rock'}
    return choices[list(result.get_counts().keys())[0]]

print("Player 1:", quantum_rps())
print("Player 2:", quantum_rps())
```

---

### Idea 4: Quantum Coin Flip
```python
def quantum_coin():
    qc = QuantumCircuit(1, 1)
    qc.h(0)
    qc.measure(0, 0)
    simulator = AerSimulator()
    result = simulator.run(qc, shots=1).result()
    return "HEADS" if list(result.get_counts().keys())[0] == '0' else "TAILS"

print(quantum_coin())
```

---

### Idea 5: GHZ State (3 Entangled Qubits)
```python
qc = QuantumCircuit(3, 3)
qc.h(0)
qc.cx(0, 1)
qc.cx(0, 2)
qc.measure([0, 1, 2], [0, 1, 2])
result = AerSimulator().run(qc, shots=1000).result()
plot_histogram(result.get_counts())  # Only 000 and 111!
```

---

### Idea 6: Quantum Lottery (3 numbers 0-9)
```python
def quantum_lottery():
    numbers = []
    for _ in range(3):
        qc = QuantumCircuit(4, 4)
        qc.h(0); qc.h(1); qc.h(2); qc.h(3)
        qc.measure([0,1,2,3], [0,1,2,3])
        result = AerSimulator().run(qc, shots=1).result()
        numbers.append(int(list(result.get_counts().keys())[0], 2) % 10)
    return numbers

print("Lottery:", quantum_lottery())
```

---
---
---
---
---
---
---
---
---
---

# Quick Help

| Problem | Fix |
|---------|-----|
| "Module not found" | `%pip install qiskit qiskit-aer` |
| Results look wrong | Did you add `qc.measure()`? |
| Circuit won't draw | Add `%matplotlib inline` at top |

---

| Gate | What It Does | Code |
|------|--------------|------|
| X | Flips 0↔1 | `qc.x(0)` |
| H | Creates 50/50 superposition | `qc.h(0)` |
| CNOT | Flips target IF control is 1 | `qc.cx(0, 1)` |
| Toffoli | Flips IF both controls are 1 | `qc.ccx(0, 1, 2)` |

---

**Q: Different results each time?** That's quantum! True randomness.

**Q: What's "shots"?** How many times to run. More = better statistics.

---

# Great job today! You wrote real quantum code.
