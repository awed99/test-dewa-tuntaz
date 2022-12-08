import { useState } from 'react'
import { useRouter } from 'next/router'

const useCustom = () => {
    const router = useRouter()
    const [openLoader, setOpenLoader] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setOpenLoader(true)
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
        setTimeout(() => {
            setOpenLoader(false)
            if (
                data.get('email') === 'admin' &&
                data.get('password') === 'password'
            ) {
                alert('Logged in...')
                router.push('/dashboard')
            } else {
                alert('Wrong Username or Password!')
            }
        }, 3000)
    }

    return {
        state: {
            openLoader,
        },
        handler: {
            handleSubmit,
            setOpenLoader,
        },
    }
}

export default useCustom