import { calculateSquare } from './calculate-square';

type ParagraphLike = {
  style: { color: string };
  textContent: string;
};

export function handleCalculationUnsafe(inputValue: string, resultEl: ParagraphLike): void {
  const result = calculateSquare(inputValue);
  resultEl.style.color = 'green';
  resultEl.textContent = `Square: ${result}`;
}

export function handleCalculation(inputValue: string, resultEl: ParagraphLike): void {
  try {
    const result = calculateSquare(inputValue);
    resultEl.style.color = 'green';
    resultEl.textContent = `Square: ${result}`;
  } catch (error: unknown) {
    resultEl.style.color = 'red';
    if (error instanceof Error) {
      resultEl.textContent = error.message;
    } else {
      resultEl.textContent = 'An unexpected error occurred.';
    }
  }
}

export function handleCalculationWithValidation(
  inputValue: string,
  resultEl: ParagraphLike
): void {
  if (!inputValue) {
    resultEl.style.color = 'red';
    resultEl.textContent = 'Input cannot be empty.';
    return;
  }

  if (!/^-?\d*\.?\d*$/.test(inputValue)) {
    resultEl.style.color = 'red';
    resultEl.textContent = 'Please enter a valid number.';
    return;
  }

  try {
    const result = calculateSquare(inputValue);
    resultEl.style.color = 'green';
    resultEl.textContent = `Square: ${result}`;
  } catch (error: unknown) {
    resultEl.style.color = 'red';
    resultEl.textContent = error instanceof Error ? error.message : 'An unexpected error occurred.';
  }
}
