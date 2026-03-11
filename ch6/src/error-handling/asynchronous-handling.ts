export function fetchDataWithPromises(url: string): Promise<void> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Data fetched successfully:', data);
    })
    .catch((error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      console.error('An error occurred:', message);
    })
    .finally(() => {
      console.log('Fetch operation completed.');
    });
}

export async function fetchData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('An error occurred:', error.message);
    } else {
      console.error('Unexpected error value:', error);
    }
  } finally {
    console.log('Fetch operation completed.');
  }
}
