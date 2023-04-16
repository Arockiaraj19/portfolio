import { HeaderComponent } from "./utilities/header_component";
import { HomeComponent } from "./utilities/home_component";
import { LinkHomeComponent } from "./utilities/link_home_component";

const Header=()=>{
return (
    <div>
          <HeaderComponent/>
          <div className='w-full py-14 px-10 bg-primary' id="home">
      
      <HomeComponent/>
      <LinkHomeComponent/>
  </div>
    </div>
   
);
}


export default Header