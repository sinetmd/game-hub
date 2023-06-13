import { Button, Collapse, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  // limit of 300 chars
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Collapse startingHeight={75} in={expanded}>
        {summary}
      </Collapse>
      <Button
        marginTop="10px"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
