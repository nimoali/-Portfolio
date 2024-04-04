import '../style/index.css'
import Bio from './Bio'
import StartProject from './Projects'
import Header from './Header'



function Home(){
    return (
        <div>
            <Header />
    <div className='container'>
        <img className="image" src="https://img.freepik.com/free-photo/woman-s-portrait_144627-39542.jpg?t=st=1711388688~exp=1711392288~hmac=8625a3fdcf87fff896dc5e2ac86382f1aa4bf1a04b0d7eb703936c0eb7cf02b0&w=360" alt="" />
        <div>
            <h1 className='header'>Hi, i'm Naima , <br /> A Digital Designer</h1>
        </div>
        <Bio />
        <StartProject/>
    </div>
    </div>
    )
}
export default Home