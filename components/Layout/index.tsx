import Navbar from '../Navigation'
import {ReactNode} from 'react'

const Layout = ({children}:LayoutProps) => {
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout