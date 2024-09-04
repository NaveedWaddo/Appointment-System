// frontend/pages/index.js
import { useQuery, gql } from '@apollo/client';
import { Box, Heading, Text } from '@chakra-ui/react';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        User Availability
      </Heading>
      {data.users.map((user) => (
        <Box key={user.id} mb={3}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </Box>
      ))}
    </Box>
  );
}
