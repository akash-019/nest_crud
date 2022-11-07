import { Test, TestingModule } from '@nestjs/testing';
import { TeammemberController } from './teammember.controller';
import { TeammemberService } from './teammember.service';

describe('TeammemberController', () => {
  let controller: TeammemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeammemberController],
      providers: [TeammemberService],
    }).compile();

    controller = module.get<TeammemberController>(TeammemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
