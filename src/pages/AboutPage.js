import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            At Comfy Sloth, our story is one of passion, dedication, and a deep love for creating beautiful living spaces. It all began with a dream to provide exceptional, handcrafted furniture that blends comfort and style seamlessly. What started as a small family-run venture has evolved into a trusted name in the world of furniture. For [number of years] years, we have been committed to designing and crafting furniture that not only stands the test of time but also transforms houses into cozy homes. Our journey is a testament to our unwavering commitment to quality and the joy we find in helping you design your ideal comfort zone. Join us in creating a more comfortable and beautiful world, one piece of furniture at a time.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
