import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props=>props.bgColor};
  border: ${props=>props.borderColor} solid 5px;
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
    <Box bgColor = 'purple' borderColor="blue">
      <Text>네모</Text>
    </Box>
    <Circle bgColor='pink' borderColor="green">
      <Text>동그라미</Text>
    </Circle>
    </Container>
  );
}

export default App;
