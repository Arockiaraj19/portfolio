import { HeaderComponent } from "./utilities/header_component";
import { HomeComponent } from "./utilities/home_component";
import { LinkHomeComponent } from "./utilities/link_home_component";

const Header=()=>{
return (
    <div className='w-full py-8 px-10 bg-primary'>
        <HeaderComponent/>
        <HomeComponent/>
        <LinkHomeComponent/>
    </div>
);
}


export default Header