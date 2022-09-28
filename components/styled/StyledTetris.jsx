import styled from "styled-components";
export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://picsum.photos/1200/1200?random") #000;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  height: 100vh;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

{/* <div className="w-screen h-screen overflow-hidden bg-center bg-cover" style="background-image: url(https://picsum.photos/1200/1200?random)">

</div> */}
