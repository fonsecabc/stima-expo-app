import { LoginUserUsecase } from '../../../domain/usecases'
import { AuthRepository } from '../../../infra/repositories'

export async function LoginUserService(params: LoginUserUsecase.Params): Promise<LoginUserUsecase.Response> {
    const { email, password } = params
    
    return await AuthRepository.instance.loginWithEmailAndPassword({ email, password })
}
