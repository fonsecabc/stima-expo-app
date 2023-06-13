import { AuthRepository } from '../../../infra/repositories'
import { ResetPasswordUsecase } from '../../../domain/usecases'

export async function ResetPasswordService(params: ResetPasswordUsecase.Params): Promise<ResetPasswordUsecase.Response> {
    const { email } = params
    
    return await AuthRepository.instance.sendResetPasswordEmail({ email })
}
