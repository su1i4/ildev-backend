import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';

@Injectable()
export class RolesMethodGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // const method = request.method;
    // const url = request.url;

    if (!user) {
      throw new ForbiddenException('Не авторизован');
    }

    if (user.role === Role.ADMIN) {
      return true;
    }

    if (user.role === Role.USER) {
      throw new ForbiddenException('Доступ запрещён для USER');
    }

    return true;
  }
}
