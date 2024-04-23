import { db } from "@/firebase/config";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

export default async function getCollection(collectionName) {
  // const querySnapshot = await getDocs(collection(db, collectionName))

  const q = query(collection(db, collectionName))
  const unsub = onSnapshot(q, querySnapshot => {
    const documents = []
    
    querySnapshot.forEach(doc => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    return documents
  })

}