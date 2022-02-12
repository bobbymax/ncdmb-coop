import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

const items = [
  { id: 1, name: "STAFF CLAIM" },
  { id: 2, name: "THIRD PARTY" },
];

const ReactSmoothDnd = () => {
  return (
    <div style={{ minHeight: 500 }}>
      <Container
        onDragEnd={(result) => console.log(result)}
        orientation="horizontal"
      >
        {items.map((item) => (
          <Draggable key={item.id}>
            <div style={{ width: 250, padding: 20, backgroundColor: "white" }}>
              <h3>{item.name}</h3>
            </div>
          </Draggable>
        ))}
      </Container>
    </div>
  );
};

export default ReactSmoothDnd;
