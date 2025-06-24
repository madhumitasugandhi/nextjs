import Link from "next/link"

const home = () => {
  return (
   <>
    <h2>Home</h2>
    <Link href= '/about'>About</Link>
   </>
  )
}

export default home