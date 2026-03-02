import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Request,
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { AuthGuard } from "@nestjs/passport";
import type { Job, CreateJob } from "../../../../../libs/api-types/model";
import type {AuthRequest} from '../types/auth-request.interface'


@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(@Query() query: Partial<Job>) {
    // Public route: returns all jobs, with optional filters (e.g. ?tech=react)
    return this.jobsService.findAll(query);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post()
  create(@Body() body: CreateJob, @Request() req: AuthRequest) {
    // Protected route: only companies can post jobs
    if (req.user.role !== "company") {
      return { error: "Only company users can post jobs." };
    }
    return this.jobsService.create({ ...body, companyId: req.user.sub });
  }
}
