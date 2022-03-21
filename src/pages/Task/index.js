import React, { useState } from "react";
//import { doc, onSnapshot, collection, query, where, onSnapshot } from "firebase/firestore";
import { FontAwesome } from "@expo/vector-icons"
import { 
  View, 
  Text, 
  TouchableOpacity,
  FlatList
 } from "react-native"
import { useEffect } from "react";

import app from "../../config/firebaseconfig"
import styles from './style'

export default function Task({ navigation }) {
  const [ task, setTask ] = useState([])

  function deleteTask(id){
    app.collection("Tasks").doc(id).delete()
  }

  useEffect(() => {
    app.collection("Tasks").onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })  
      setTask(list)
    })
  }, [])

  return (
    <View style={styles.container} >
      <FlatList />
      <TouchableOpacity>
        <Text style={styles.iconButton} > +

        </Text>
        
      </TouchableOpacity>
    </View>
  )
}