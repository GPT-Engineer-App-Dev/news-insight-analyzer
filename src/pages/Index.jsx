import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import nlp from "compromise";

const Index = () => {
  const [query, setQuery] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    const doc = nlp(query);
    const topics = doc.topics().out('array');
    setAnalysis({ topics });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">User Query Analysis</Text>
        <Input
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleAnalyze}>
          Analyze
        </Button>
        {analysis && (
          <Box mt={4} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text fontSize="lg" fontWeight="bold">Analysis Result:</Text>
            <Text>Topics: {analysis.topics.join(", ")}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;