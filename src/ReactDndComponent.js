import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { collection } from "./services/utils/controllers";
import useApi from "./services/hooks/useApi";

const dataFromBackEnd = [
  {
    id: uuidv4(),
    content: "STAFF CLAIM",
  },
  {
    id: uuidv4(),
    content: "THIRD PARTY",
  },
];

const columnsFromBackend = [
  {
    [uuidv4()]: {
      name: "STAFF CLAIM",
      items: dataFromBackEnd,
    },
  },
];

const ReactDndComponent = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          <Droppable droppableId={id}>
            {(provided, snapshot) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "lightblue"
                      : "orange",
                    padding: 4,
                    width: "100%",
                    minHeight: 500,
                  }}
                >
                  <Draggable>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.dragHandleProps}
                          style={{
                            backgroundColor: snapshot.isDragging
                              ? "red"
                              : "orange",
                          }}
                        ></div>
                      );
                    }}
                  </Draggable>
                </div>
              );
            }}
          </Droppable>;
        })}
      </DragDropContext>
    </div>
  );
};

export default ReactDndComponent;
