Perfect 🚀 Let’s build the **AuthModule** step by step, now that our `UsersModule` properly hashes passwords. This module will:

* Handle **login** (`POST /auth/login`)
* Validate user credentials with bcrypt
* Issue **JWT tokens** (to prove identity & role)
* Provide guards so only authenticated users can hit protected routes

---

## 1. Install Dependencies

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm install -D @types/passport-jwt
```

---

## 2. Generate Auth Module, Controller, Service

From your workspace root:

```bash
npx nx g @nx/nest:module --path=apps/devjobs-backend/src/app/auth/auth
npx nx g @nx/nest:controller --path=apps/devjobs-backend/src/app/auth/auth
npx nx g @nx/nest:service --path=apps/devjobs-backend/src/app/auth/auth
```

You’ll get this structure:

```
apps/devjobs-backend/src/app/auth/
  ├── auth.controller.ts
  ├── auth.service.ts
  └── auth.module.ts
```

---

## 3. Configure AuthModule

In `auth.module.ts`:

```ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'super-secret-key', // ⚠️ replace with env var in production!
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```

---

## 4. AuthService – Login Logic

```ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

---

## 5. AuthController – Expose /auth/login

```ts
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
```

---

## 6. JWT Strategy (for Protected Routes)

`auth/jwt.strategy.ts`:

```ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key', // ⚠️ move to env in prod
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, role: payload.role };
  }
}
```

---

## 7. Guard for Controllers

Create `auth/jwt-auth.guard.ts`:

```ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

Usage in any controller:

```ts
import { UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile() {
  return { msg: 'This is a protected route' };
}
```

---

## 8. Wire AuthModule into AppModule

Finally, open `apps/devjobs-backend/src/app/app.module.ts`:

```ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
})
export class AppModule {}
```

---

## 9. Testing Login Flow

1. First register a user:

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"email":"bob@example.com","password":"secret","role":"seeker"}'
```

2. Then log in:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"bob@example.com","password":"secret"}'
```

✅ You’ll get back:

```json
{ "access_token": "eyJhbGciOiJIUzI1NiIsInR5..." }
```

3. Use the token to hit a protected route:

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:3000/some/protected
```

---

👉 At this point, we’ve got **users + login + JWT authentication** wired up.
Next, we can show readers how to:

* Add **role-based guards** (only companies can post jobs).
* Build out the **companies module** (with `companyId` tied to jobs).
* Expand the **jobs module** with protected posting routes.

Do you want me to take the next step into **companies module** (registering company profiles + linking to jobs), or first pause to explain **role-based guards** in detail?