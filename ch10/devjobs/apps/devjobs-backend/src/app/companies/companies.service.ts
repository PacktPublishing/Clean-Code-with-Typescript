import { Injectable } from "@nestjs/common";
import { FileStorage } from "../common/file-storage";
import { randomUUID } from "crypto";
import { Company } from "../../../../../libs/api-types/model";

@Injectable()
export class CompaniesService {
  private storage = new FileStorage<Company>("companies.json");

  findAll(): Company[] {
    return this.storage.read();
  }

  create(company: Omit<Company, "id">): Company {
    const companies = this.storage.read();
    const newCompany = { id: randomUUID(), ...company };
    companies.push(newCompany);
    this.storage.write(companies);
    return newCompany;
  }
}
