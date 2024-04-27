
import { NavLink } from "../const";
import ngopiLogo from "../image/icon/Logo.png"
import searchIcon from "../image/icon/Icon Search.png"
import shoppingIcon from "../image/icon/ShoppingBagOpen.png"

function Nav() {
    return ( 
    <header className="p-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href=""><img src={ngopiLogo} alt="Ngopi-logo" /></a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {NavLink.map((item,index) => {
            return (
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            )
        })}
        </ul>

       <div className="flex flex-row gap-2">
        <a href="#"><img width={25} height={25} src={searchIcon} alt="searchicon" /></a>
        <a href="#"><img width={25} height={25} src={shoppingIcon} alt="shoppingicon" /></a>
        </div> 
     
      </nav>
    </header>
     );
}

export default Nav;