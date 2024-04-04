import { Link } from "react-router-dom";


function Header(){
    return <div className=" flex pt-3 gap-2 justify-around h-[60px]">
    <h1 className="text-orange-500 ml-10"> Design With Naima</h1>
    <div className="flex gap-2">
       <ul className="flex gap-4 mr-10 ">
        <li>Project</li>
        <Link to="/about">About Me</Link>
        <li>FAQ</li>
        <li>Contant me </li>
       </ul>
       
      
       
       
    </div>
    </div>
}

export default Header;