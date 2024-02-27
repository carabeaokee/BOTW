import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// function to capitalize the first letter of each word
function capitalizeWords(str: string) {
  return str.replace(/\b\w+\b/g, (word) => {
    // Regular expression to match Roman numerals
    const romanNumeralRegex =
      /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (romanNumeralRegex.test(word.toUpperCase())) {
      // If the word is a Roman numeral, return it in uppercase
      return word.toUpperCase();
    } else {
      // Otherwise, apply the original capitalization rules
      return word.replace(/\b\w/g, (char, index) => {
        if (index > 0 && word[index - 1] === "'") {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      });
    }
  });
}

// DetailsCard component
export function DetailsCard({ item }) {
  return (
    <>
      <Card style={{ width: "8rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{capitalizeWords(item.name)}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
