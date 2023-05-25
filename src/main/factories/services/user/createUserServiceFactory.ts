import { variables } from '@/main/config'
import { CreateUserService } from '@/application/services'
import { AxiosHttpRepositoryFactory } from '@/main/factories'

export class CreateUserServiceFactory {
    private static instance: CreateUserServiceFactory

    public static getInstance(): CreateUserServiceFactory {
        if (!this.instance) {
            this.instance = new CreateUserServiceFactory()
        }

        return this.instance
    }

    public make(): CreateUserService {
        return new CreateUserService(
            AxiosHttpRepositoryFactory.getInstance().make(),
            variables.apiEndpoint
        )
    }
}
