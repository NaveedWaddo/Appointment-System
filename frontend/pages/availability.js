import { useMutation, gql } from '@apollo/client';
import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export default function Availability() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async () => {
    await createUser({ variables: { name, email } });
    setName('');
    setEmail('');
  };

  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Set Availability
      </Heading>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        mb={3}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={3}
      />
      <Textarea placeholder="Your availability..." mb={3} />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Save Availability
      </Button>
    </Box>
  );
}
