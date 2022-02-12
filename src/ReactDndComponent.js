import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { collection } from "./services/utils/controllers";
import useApi from "./services/hooks/useApi";

const ReactDndComponent = () => {
  const { data, request } = useApi(collection);

  const initialColumns = {
    ["1"]: {
      name: "STAFF CLAIM",
      items: data,
    },
  };

  useEffect(() => {
    request("budgetHeads");
  }, []);

  const [columns, setColumns] = useState(initialColumns);

  console.log(columns);

  return (
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
                    : "green",
                  padding: 4,
                  width: 250,
                  minHeight: 500,
                }}
              >
                {column.items.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: "none",
                              padding: 16,
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "royalblue"
                                : "dodgerblue",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.beneficiary}
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
              </div>
            );
          }}
        </Droppable>;
      })}
    </DragDropContext>
  );
};

export default ReactDndComponent;
