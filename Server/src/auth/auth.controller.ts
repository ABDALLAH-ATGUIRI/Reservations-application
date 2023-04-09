import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UpdateDto } from './dto/update.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/token/:id')
  @UseGuards(AuthGuard())
  getToken(@Param('id') id: string): Promise<{ success: boolean }> {
    return this.authService.getToken(id);
  }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  @Put('/update')
  update(
    @Param('id')
    id: string,
    @Body()
    user: UpdateDto,
  ): Promise<{ token: string }> {
    return this.authService.updateUser(id, user);
  }
}
