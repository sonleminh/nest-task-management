import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService, // @InjectRepository(AuthService.userRepository) // private usersRepository: User,
  ) {
    super({
      secretOrKey: 'topSecret51',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any) {
    // const { username } = payload;
    // const user: User = await this.authService.validateUser(username);
    // console.log('1:', user);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
    return payload;
  }
}
