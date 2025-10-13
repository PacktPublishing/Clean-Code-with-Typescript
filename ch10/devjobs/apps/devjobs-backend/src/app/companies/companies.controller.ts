import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  ForbiddenException
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CompaniesService } from "./companies.service";

@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @UseGuards(AuthGuard("jwt"))
  @Post()
  create(@Body() body: any, @Request() req: any) {
    if (req.user.role !== "company") {
      throw new ForbiddenException('Only company accounts can create companies.');
    }
    return this.companiesService.create(body);
  }
}
