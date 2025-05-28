import { HeaderContainer } from './style'
import logo from '../../assets/img/logo.png'

export function Header() {
  return (
    <>
        <HeaderContainer>
            <img src={logo} alt="" />
        </HeaderContainer>
    </>
  );
}