'use client'
import { useRouter } from "next/navigation"


const about = () => {
    const router = useRouter();
    const handleNavigation = (routerName)=> {
        router.push(routerName);
    }
  return (
    <>
        <h2>About Us</h2>
        <button onClick={()=>router.push('/contact')}>Contact</button><br/><br/>
        <button onClick={()=>handleNavigation('/home')}>Home</button>
    </>
  )
}

export default about