import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/orders">
                        <span>Orders</span>
                    </Link>
                </li>
                <li>
                    <Link href="/addorder">
                        <span>Add Order</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}