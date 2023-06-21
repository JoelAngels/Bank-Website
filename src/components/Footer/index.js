import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonial</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Okiki Amayo
                {/* Sagacity */}
              </SocialLogo>
              <WebsiteRights>Okiki Amayo © All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink>
                  <FaGithub
                    onClick={() => {
                      window.open("https://github.com/JoelAngels/");
                    }}
                  />
                </SocialIconLink>
                <SocialIconLink aria-label="Linkedin">
                  <FaLinkedin
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/joel-angel-4b05141a3"
                      );
                    }}
                  />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
