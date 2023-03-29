import { Text, VStack } from '@chakra-ui/react';
import { Custom } from 'components/common';
import { FILTER_DATE } from 'types/constans';
import { useQuery } from '@tanstack/react-query';

const initialFilter = { id: 'date', value: FILTER_DATE.TODAY } as const;
const InfoContainor = () => {
  const { dataUpdatedAt } = useQuery({
    queryKey: ['orderList'],
    refetchInterval: 5000,
  });
  return (
    <>
      <VStack marginBottom='8' alignItems='flex-start'>
        <Custom.TagGray>
          <strong>Today :</strong>
          <Text fontWeight='md'> &nbsp;{initialFilter.value}</Text>
        </Custom.TagGray>
        <Custom.TagGray>
          <strong>The last sync</strong>
          <Text fontWeight='md'>&nbsp;{new Date(dataUpdatedAt).toLocaleTimeString()}</Text>
        </Custom.TagGray>
      </VStack>
    </>
  );
};

export default InfoContainor;
