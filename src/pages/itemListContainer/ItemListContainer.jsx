import React, { useEffect, useState } from "react";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';


function ItemListContainer() {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();  
    const itemsCollection = categoryId ? query(collection(db, "items"), where("category", "==", categoryId)) : collection(db, "items");
    setLoading(true);
    setData([]);
    getDocs(itemsCollection).then((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
      setLoading(false);
    })
    
  }, [categoryId]);


  return (
    <div>
      {loading ? <Spinner></Spinner> : <ItemList items={data}></ItemList>}
    </div>
  );
}



export default ItemListContainer;
