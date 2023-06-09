import { ResetPasswordUsecase } from '../../../domain/usecases'
import { AuthRepository } from '../../../infra/repositories'

export async function ResetPasswordService(params: ResetPasswordUsecase.Params): Promise<ResetPasswordUsecase.Response> {
    const { email } = params
    
    return await AuthRepository.instance.SendResetPasswordEmail({ email })
}
