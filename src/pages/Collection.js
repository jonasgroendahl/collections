import React, { useState, useEffect, useContext } from "react";
import HeaderDiv from "../components/HeaderDiv";
import HeaderTabs from "../components/HeaderTabs";
import { collections, titles as TitleHashMap } from "../utils/vars";
import MultiLineHeadLine from "../components/MultiLineHeadLine";
import CollectionDetailTab from "../components/Collection/DetailTab";
import CollectionItemsTab from "../components/Collection/ItemsTab";
import CollectionOrderTab from "../components/Collection/OrderTab";

const titles = Object.keys(TitleHashMap).map(tKey => TitleHashMap[tKey]);

export default function Collection(props) {
  const [tab, setTab] = useState(0);
  const [collection, setCollection] = useState({});

  useEffect(() => {
    const col = collections.find(c => c.id === parseInt(props.match.params.id));
    setCollection(col);
  }, []);

  function handleChange(e) {
    setCollection({ ...collection, [e.target.name]: e.target.value });
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

  function handleBulkSelect(e) {
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
      <HeaderDiv renderBottom={<HeaderTabs items={["Start", "Items", "Display order"]} onChange={setTab} value={tab} />}>
        <MultiLineHeadLine primary="Global collection" secondary={collection.name} />
      </HeaderDiv>
      <div className="indent">
        {tab === 0 && <CollectionDetailTab {...collection} onChange={handleChange} />}
        {tab === 1 && <CollectionItemsTab titles={titles} item={collection} onChange={handleSelectItem} onChangeAll={handleBulkSelect} />}
        {tab === 2 && (
          <CollectionOrderTab
            selectedVirtual={collection.selectedVirtual.map(i => TitleHashMap[i])}
            selectedWeb={collection.selectedWeb.map(i => TitleHashMap[i])}
            onChange={handleMoveItem}
          />
        )}
      </div>
    </div>
  );
}
