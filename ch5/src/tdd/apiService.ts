export interface HttpClient {
  get(): Promise<{ data: { results: number[] } }>;
}

export class ApiService {
  static async fetchData(client: HttpClient): Promise<number[]> {
    const data = await client.get();
    return data.data.results;
  }
}
