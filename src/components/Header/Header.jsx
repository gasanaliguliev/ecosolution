import { Icon } from '../../shared/icon/Icon';
import {
    HeaderContainer,
    Logo,
    MenuWrapper,
    ButtonMenu,
    ButtonGetInTouch,
  } from './Header.styled';

export const Header = () => {
    return (
        <HeaderContainer>
          <Logo href="/">
            <Icon
              iconName="icon-favicon_logo"
              width={'31px'}
              height={'18px'}
              fill={'inherit'}
            />
            <Icon
              iconName="icon-ecosolution"
              width={'170px'}
              height={'40px'}
              fill={'inherit'}
            />
            <Icon
              iconName="icon-greenergy"
              width={'60px'}
              height={'18px'}
              fill={'inherit'}
            />
          </Logo>
    
          <MenuWrapper>
            <ButtonMenu type="button">
              <Icon
                iconName="icon-menu"
                width={'16px'}
                height={'16px'}
                stroke={'#000'}
              />
            </ButtonMenu>
           {/* <BurgerMenu/> */}
            <ButtonGetInTouch
              href="#contact-us"
            >
              Get in touch
              <span>
                <Icon iconName="icon-arrow-down" width={14} height={14} />
              </span>
            </ButtonGetInTouch>
          </MenuWrapper>
        </HeaderContainer>
      );
}

