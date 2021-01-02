import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas de 05-funciones', () => {

    test('getUser devvuelve un objeto ', () => {

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        
        const usertest = getUser()
        console.log(getUser())
        
        expect(user).toEqual(usertest)

    })
    
    
    test('GetUserActivo con argumento', () => {
        
        const nombre = 'gonzalo'
        const user = getUsuarioActivo (nombre)

        expect(nombre).toBe(user.username)
        expect(user).toEqual({
            uid: user.uid,
            username: nombre
        })
    })
    
})
