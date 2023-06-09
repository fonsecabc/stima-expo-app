import { AuthRepository } from '../../../infra/repositories'

export async function signOutUserService() {
    
    return await AuthRepository.instance.signOut()
}
