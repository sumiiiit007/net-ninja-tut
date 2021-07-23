const Navbar = () => {
    return ( 
        <nav  className ="navbar">
            <h1>the sumit's blog </h1>
            <div className="link"> 
            <a href="/">Home  </a>  
            <a href ="create" style ={{
               color:"white",
               backgroundColor:" #f1356d",
               borderRadius:'8px'
            }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;