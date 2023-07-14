import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>Navbar</Container>
    </Section>
  );
};
export default Navbar;
