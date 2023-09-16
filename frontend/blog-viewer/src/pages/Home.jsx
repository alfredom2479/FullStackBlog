//import '../App.css';
import { HomeGlobalStyles } from '../components/styles/Global';
import { TitleContainer } from '../components/styles/TitleContainer.styled';
import { HomeLink } from '../components/styles/HomeButton.styled';


export default function Home(){

  return(
    <>
    <HomeGlobalStyles/>
      <TitleContainer>
        Welcome To My Blog
        <HomeLink to="/blogposts" className='main-butt'>Posts</HomeLink>
      </TitleContainer>
    </>
  )
}

