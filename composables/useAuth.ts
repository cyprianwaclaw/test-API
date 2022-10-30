import {ISession} from "~/types/ISession";

export async function registerWithEmail(email:string, password:string){

try{
        const res = await $fetch<ISession>('https://api.escuelajs.co/api/v1/auth/login',{
        method: 'POST',
        body:{
            email,
            password
        }
    })
    if(res){
        useState('user').value = res
        await useRouter().push('/dashboard')
    }
} catch (e){
    console.log('error: ' + e.toString())
}
}