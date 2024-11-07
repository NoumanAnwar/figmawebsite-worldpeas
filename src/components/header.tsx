import Link from "next/link"
export default function Header () {
    return (
        <div>
                    <div>
                <ul>
                    <li className="flex justify-end gap-10 pr-20 mt-20">
                        
                    <Link href='/'>Home</Link>
                        <Link href='shop'>Shop</Link>
                        <Link href='newstand'>Newstand</Link>
                        <Link href='whoweare'>Who we are</Link>
                        <Link href='myprofile'>My profile</Link>
                       
                        <button className="bg-lime-900 py-2 px-2 rounded-lg  text-white hover:bg-green-700">Basket (3)</button>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}