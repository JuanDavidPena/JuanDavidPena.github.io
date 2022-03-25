import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
        <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
        </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    ADDU
                </SocialLogo>
                <WebsiteRights>ADDU © {new Date().getFullYear()}
                All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
    </FooterContainer>
  )
}

export default Footer