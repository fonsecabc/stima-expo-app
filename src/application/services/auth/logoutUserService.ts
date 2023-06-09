import { AuthRepository, LocalStorageRepository } from '../../../infra/repositories'

export async function signOutUserService() {
    await AuthRepository.instance.signOut()
    await LocalStorageRepository.instance.removeData({ key: 'currentUser' })
}
