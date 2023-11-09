import { Card, Flex, ProgressBar, Text, Title } from "@tremor/react";

const DataBars1 = () => {
  // const [value, setValue] = React.useState(null);

  return (
    <>
      <Card className="max-w-sm mx-auto">
        <Title>Rates</Title>
        <Flex>
          <Text>$ 9,012 &bull; 45%</Text>
          <Text>$ 20,000</Text>
        </Flex>
        <ProgressBar value={45} color="teal" className="mt-3" />
      </Card>
    </>
  );
};

export default DataBars1;
