import { GetEntityService } from '../entities'
import { GetType } from '../../../domain/enums'
import { LoginUserUsecase } from '../../../domain/usecases'
import { AuthRepository, LocalStorageRepository } from '../../../infra/repositories'

import { User } from 'firebase/auth'

export async function LoginUserService(params: LoginUserUsecase.Params): Promise<LoginUserUsecase.Response> {
    const { email, password } = params
    
    const firebaseUser = await AuthRepository.instance.loginWithEmailAndPassword({ email, password })
    if (firebaseUser instanceof Error) return firebaseUser

    const user = await GetEntityService<User>({ entity: 'user', type: GetType.ENTITY, uid: firebaseUser.uid })
    if (user instanceof Error) return user

    return await LocalStorageRepository.instance.storeData({ key: 'currentUser', value: { ...firebaseUser, ...user } })
}
