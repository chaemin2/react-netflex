import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props=>props.bgColor};
  width: 100px;
  height: 100px;
  text-align: center;
`;

const Circle = styled(Box)`
  border-radius: 100px;
`;

const Text = styled.span`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

function App() {
  return (
    <Container>
    <Box bgColor = 'blue'>
      <Text>네모</Text>
    </Box>
    <Circle bgColor='green'>
      <Text>동그라미</Text>
    </Circle>
    </Container>
  );
}

export default App;
