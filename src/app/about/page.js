'use client'
import { useRouter } from "next/navigation"


const about = () => {
    const router = useRouter();
  return (
    <>
        <h2>About Us</h2>
        <button onClick={()=> router.push('/contact')}>Contact</button><br/><br/>
        <button onClick={()=> router.push('/home')}>Home</button>
    </>
  )
}

export default about