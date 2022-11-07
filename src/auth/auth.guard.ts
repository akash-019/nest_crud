import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.user(request);
  }

  async user(@Req() request: Request) {
    try {
      let token = request.headers['authorization'];
      token = token.split(' ')[1];
      const data = await this.jwtService.verifyAsync(token);

      if (!data) {
        throw new UnauthorizedException();
      }

      return true;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
