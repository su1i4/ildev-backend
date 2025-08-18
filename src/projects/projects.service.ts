import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
//   constructor(
//     @InjectRepository(ProjectEntity)
//     private projectsRepo: Repository<ProjectEntity>,
//   ) {}
}
