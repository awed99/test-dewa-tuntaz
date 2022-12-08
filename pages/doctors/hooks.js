import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useCustom = () => {
    const router = useRouter()
    const [openLoader, setOpenLoader] = useState(false)
    const [doctors, setDoctors] = useState([])
    const [show, setShow] = useState(20)

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

    const getDoctors = (skip=0, showed) => {
        fetch(`https://dummyjson.com/users?limit=${showed || show}&skip=${skip*20}`).then((res) => res.json()).then((res) => setDoctors(res))
    }

    const handleChangeShow = (val) => {
        setShow(val?.target?.value)
        getDoctors(0, val?.target?.value)
    }

    useEffect(() => {
        getDoctors(0)
    }, [])

    return {
        state: {
            openLoader,
            doctors,
            show,
        },
        handler: {
            handleSubmit,
            setOpenLoader,
            setDoctors,
            setShow,
            getDoctors,
            handleChangeShow,
        },
    }
}

export default useCustom