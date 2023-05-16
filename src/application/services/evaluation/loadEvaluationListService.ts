import { GetType } from '@/domain/enums'
import { HttpClientContract } from '@/domain/contracts'
import { EvaluationListObject } from '@/domain/entities'
import { LoadEvaluationListUsecase } from '@/domain/usecases'

export class LoadEvaluationListService implements LoadEvaluationListUsecase {
    constructor(
        private readonly axiosHttpRepository: HttpClientContract<EvaluationListObject[]>,
    ) { }

    async perform(params: LoadEvaluationListUsecase.Params): Promise<LoadEvaluationListUsecase.Response> {
        const { accessToken, userUid } = params
        const response = await this.axiosHttpRepository.request({
            url:'',
            method: 'POST',
            body: { userUid, type: GetType.LIST },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        if (response.statusCode >= 200 && response.statusCode <= 299) return new Error(response.body.error)

        return response.body.data
    }
}
