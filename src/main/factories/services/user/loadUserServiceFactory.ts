import { variables } from '@/main/config'
import { LoadUserService } from '@/application/services'
import { AxiosHttpRepositoryFactory } from '@/main/factories'

export class LoadUserServiceFactory {
    private static instance: LoadUserServiceFactory

    public static getInstance(): LoadUserServiceFactory {
        if (!this.instance) {
            this.instance = new LoadUserServiceFactory()
        }

        return this.instance
    }

    public make(): LoadUserService {
        return new LoadUserService(
            AxiosHttpRepositoryFactory.getInstance().make(),
            variables.apiEndpoint
        )
    }
}
