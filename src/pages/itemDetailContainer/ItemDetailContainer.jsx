import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'



function ItemDetailContainer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const {itemId} = useParams();

  useEffect(() => {

    const db = getFirestore();  
    const itemDoc = doc(db, "items", itemId);
    setLoading(true);
    setData([]);
    getDoc(itemDoc).then((snapshot) => {
      if(snapshot.exists()){
          setData({id: snapshot.id, ...snapshot.data()})
      }else{
          navigate("/items/notFound");
      }

      setLoading(false);
    })
  }, [itemId]);

 

  return (
    <div>
      {loading? <Spinner></Spinner> : <ItemDetail producto={data}></ItemDetail>}
    </div>
  );
}



export default ItemDetailContainer;
