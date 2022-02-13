import React, { useState, useRef, useEffect } from "react";
import "./drag.css";

function DragNDrop({ data, returnValue = () => {} }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(data);
  }, [setList, data]);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handletDragStart = (e, item) => {
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    // console.log("Entering a drag target", targetItem);
    returnValue(targetItem.item);

    if (dragItemNode.current !== e.target) {
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));

        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );

        dragItem.current = targetItem;
        localStorage.setItem("List", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;
  };

  const getStyles = (item) => {
    // console.log("Dragged item", item);

    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return "dnd-item current";
    }

    return "dnd-item";
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className="dnd-group bg-success"
          >
            <h4 className="text-white">{grp.title}</h4>

            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={itemI}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { item, itemI, grpI });
                      }
                    : null
                }
                className={
                  dragging ? getStyles({ grpI, itemI, item }) : "dnd-item"
                }
              >
                <h3 className="card-title">
                  BUDGET CODE: {item.subBudgetHead.budgetCode}
                </h3>
                <h3>AMOUNT: {item.amount}</h3>
                <h3>PAYMENT TYPE: {item.payment_type.toUpperCase()}</h3>
                <h3>Description: {item.description}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default DragNDrop;
