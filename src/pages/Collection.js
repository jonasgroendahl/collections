import React, { useState, useEffect } from "react";
import HeaderDiv from "../components/HeaderDiv";
import HeaderTabs from "../components/HeaderTabs";
import { collections, titles as TitleHashMap } from "../utils/vars";
import MultiLineHeadLine from "../components/MultiLineHeadLine";
import CollectionDetailTab from "../components/Collection/DetailTab";
import CollectionItemsTab from "../components/Collection/ItemsTab";
import CollectionOrderTab from "../components/Collection/OrderTab";
import Footer from "../components/Footer";
import { Button } from "@material-ui/core";

const titles = Object.keys(TitleHashMap).map(tKey => TitleHashMap[tKey]);

export default function Collection(props) {
  const [tab, setTab] = useState(0);
  const [collection, setCollection] = useState({
    name: "",
    description: "",
    end: "",
    start: "",
    active: false,
    id: 0,
    selected: [],
    selectedVirtual: [],
    selectedWeb: []
  });

  useEffect(() => {
    const id = parseInt(props.match.params.id);
    if (id) {
      const col = collections.find(c => c.id === id);
      setCollection(col);
    }
  }, []);

  function handleChange(e) {
    setCollection({ ...collection, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  }

  function handleSelectItem(e, itemId) {
    let newItems;
    if (e.target.checked) {
      newItems = collection[e.target.name].concat(itemId);
    } else {
      newItems = collection[e.target.name].filter(i => i !== itemId);
    }
    setCollection({ ...collection, [e.target.name]: newItems });
  }

  function handleMoveItem({ source, destination }, dataStruct) {
    if (!destination) {
      return;
    }

    const newCollection = { ...collection };

    const removedItem = newCollection[dataStruct][source.index];
    newCollection[dataStruct].splice(source.index, 1);
    newCollection[dataStruct].splice(destination.index, 0, removedItem);
    setCollection(newCollection);
  }

  function handleSelectAllWeb() {
    const allTitles = collection.selected.map(title => title);
    const combined = [...collection.selectedWeb, ...allTitles];

    const newCollection = { ...collection, selectedWeb: [...new Set(combined)] }; // remove dublicates
    setCollection(newCollection);
  }

  function handleBulkSelect(e) {
    console.log("Bulk");
    let selected = [];

    if (e.target.checked) {
      selected = titles.reduce((acc, cur) => {
        if (!acc.includes(cur.id)) {
          acc.push(cur.id);
        }
        return acc;
      }, []);
    }

    setCollection({ ...collection, selected });
  }

  return (
    <div>
      <HeaderDiv renderBottom={<HeaderTabs items={["Details", "Items", "Display order"]} onChange={setTab} value={tab} />}>
        <MultiLineHeadLine primary="Global collection" secondary={collection.name} />
      </HeaderDiv>
      <div className="indent">
        {tab === 0 && <CollectionDetailTab {...collection} onChange={handleChange} />}
        {tab === 1 && (
          <CollectionItemsTab
            titles={titles}
            item={collection}
            onChange={handleSelectItem}
            onChangeAll={handleBulkSelect}
            onActionWeb={handleSelectAllWeb}
          />
        )}
        {tab === 2 && (
          <CollectionOrderTab
            selectedVirtual={console.log(TitleHashMap, collection.selectedVirtual) || collection.selectedVirtual.map(i => TitleHashMap[i])}
            selectedWeb={collection.selectedWeb.map(i => TitleHashMap[i])}
            onChange={handleMoveItem}
          />
        )}
      </div>
      <Footer>
        <Button variant="contained" color="primary" disabled={!collection.name}>
          Save
        </Button>
      </Footer>
    </div>
  );
}
