import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ListItem, ListItemText, ListItemSecondaryAction, List, Typography } from "@material-ui/core";
import { MenuSharp } from "@material-ui/icons";

export default function CollectionOrderTab({ onChange, selectedWeb, selectedVirtual }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <DragDropContext onDragEnd={e => onChange(e, "selectedVirtual")}>
          <Typography variant="h5">Virtual</Typography>
          <Droppable droppableId={1}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <List style={{ maxWidth: 300 }}>
                  {selectedVirtual.map((item, index) => (
                    <Draggable index={index} draggableId={`${index}_d`}>
                      {drag => (
                        <div ref={drag.innerRef} {...drag.dragHandleProps} {...drag.draggableProps}>
                          <ListItem divider>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                              <MenuSharp />
                            </ListItemSecondaryAction>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div style={{ marginLeft: 20 }}>
        <DragDropContext onDragEnd={e => onChange(e, "selectedWeb")}>
          <Typography variant="h5">Web</Typography>
          <Droppable droppableId={2}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <List style={{ maxWidth: 300 }}>
                  {selectedWeb.map((item, index) => (
                    <Draggable index={index} draggableId={`${index}_d`}>
                      {drag => (
                        <div ref={drag.innerRef} {...drag.dragHandleProps} {...drag.draggableProps}>
                          <ListItem divider>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                              <MenuSharp />
                            </ListItemSecondaryAction>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
