import { Card, Flex, Text, ProgressCircle } from "@tremor/react";

const ProgressCircle1 = () => {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-slate-500 text-sm text-center font-mono">
            without children
          </p>
          <Card className="max-w-sm mx-auto">
            <Flex className="space-x-5" justifyContent="start">
              <ProgressCircle value={75.5} size="md" />
              <div>
                <Text className="font-medium text-gray-700">
                  $340/$450 (75%)
                </Text>
                <Text>Spend management control</Text>
              </div>
            </Flex>
          </Card>
        </div>
        <div className="space-y-3">
          <p className="text-slate-500 text-sm text-center font-mono">
            progress value as children
          </p>
          <Card className="max-w-sm mx-auto">
            <Flex className="space-x-5" justifyContent="center">
              <ProgressCircle value={75} size="md">
                <span className="text-xs text-gray-700 font-medium">75%</span>
              </ProgressCircle>
              <ProgressCircle value={75} size="md">
                <span className="text-xs text-gray-700 font-medium">75%</span>
              </ProgressCircle>
            </Flex>
          </Card>
        </div>
        <div className="space-y-3">
          <p className="text-slate-500 text-sm text-center font-mono">
            avatar as children
          </p>
          <Card className="max-w-sm mx-auto">
            <Flex className="space-x-5" justifyContent="center">
              <ProgressCircle value={75} size="md" color="indigo">
                <span className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-sm text-indigo-500 font-medium">
                  SV
                </span>
              </ProgressCircle>
              <ProgressCircle value={75} size="md" color="violet">
                <span className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center text-sm text-violet-500 font-medium">
                  CK
                </span>
              </ProgressCircle>
              <ProgressCircle value={75} size="md" color="fuchsia">
                <span className="h-12 w-12 rounded-full bg-fuchsia-100 flex items-center justify-center text-sm text-fuchsia-500 font-medium">
                  AM
                </span>
              </ProgressCircle>
            </Flex>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProgressCircle1;
