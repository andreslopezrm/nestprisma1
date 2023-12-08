import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    demo(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string;
        password: string;
        createAt: Date;
        updateAt: Date;
    }[]>;
}
