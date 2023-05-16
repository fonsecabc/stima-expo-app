import { AxiosHttpRepository } from '@/infra/repositories'

export class AxiosHttpRepositoryFactory {
    private static instance: AxiosHttpRepositoryFactory

    public static getInstance(): AxiosHttpRepositoryFactory {
        if (!this.instance) {
            this.instance = new AxiosHttpRepositoryFactory()
        }

        return this.instance
    }

    public make(): AxiosHttpRepository {
        return new AxiosHttpRepository()
    }
}
