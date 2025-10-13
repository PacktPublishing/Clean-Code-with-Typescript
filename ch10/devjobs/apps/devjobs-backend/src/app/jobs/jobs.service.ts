import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { FileStorage } from "../common/file-storage";
import { Job } from "../../../../../libs/api-types/model";

@Injectable()
export class JobsService {
  private storage = new FileStorage<Job>("jobs.json");

  findAll(filters?: Partial<Job>): Job[] {
    let jobs = this.storage.read();

    if (filters) {
      jobs = jobs.filter((job) =>
        Object.entries(filters).every(([key, val]) =>
          val
            ? job[key as keyof Job]?.toString().includes(val.toString())
            : true
        )
      );
    }
    return jobs;
  }

  create(job: Omit<Job, "id">): Job {
    const jobs = this.storage.read();
    const newJob = { id: randomUUID(), ...job };
    jobs.push(newJob);
    this.storage.write(jobs);
    return newJob;
  }
}
