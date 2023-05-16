import { LoadEvaluationListService } from '@/application/services'
import { AxiosHttpRepositoryFactory } from '@/main/factories'

export class LoadEvaluationListServiceFactory {
    private static instance: LoadEvaluationListServiceFactory

    public static getInstance(): LoadEvaluationListServiceFactory {
        if (!this.instance) {
            this.instance = new LoadEvaluationListServiceFactory()
        }

        return this.instance
    }

    public make(): LoadEvaluationListService {
        return new LoadEvaluationListService(
            AxiosHttpRepositoryFactory.getInstance().make()
        )
    }
}