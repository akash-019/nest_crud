import { Controller, Get, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AppService } from './app.service';
import { user } from './env';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    console.log(user);
    try {
      const jwt = this.jwtService.sign({ user: user });
      return jwt;
    } catch (e) {
      console.log(e);
    }
  }
}
