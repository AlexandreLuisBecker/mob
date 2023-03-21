import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Image } from 'react-native'

import Header from './src/components/Header';
import DisplayImage from './src/components/DisplayImage';
import ToDoItem from './src/components/ToDoItem';
import ToDoInput from './src/components/ToDoInput';

export default function App(){
  const [tasks,setTasks] = useState([])
  const [addTasks, setAddTasks] = useState(false)

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      {
        id: Math.random().toString(),
        value: taskTitle
      }
    ])
    setAddTasks(false)
  }

  const deleteTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(tasks => task.id !== taskId)
    })
  }

  const cancelTaskHandler = () => {
    setAddTasks(false)
  }

  return (
   <View>
    <Header title="Lista de Tarefas"></Header>
    <View style={styles.screen}>
      <Button title='Adicionar Nova Tarefa!'
      onPress={() => setAddTasks(true)}
      ></Button>
      <ToDoInput
        visible = {addTasks}
        onAddTask = {addTaskHandler}
        onCancel  = {cancelTaskHandler}
      ></ToDoInput>
       </View>
      <DisplayImage taskStatus={tasks} ></DisplayImage>
      <View style={styles.screenList}>
        <FlatList
          keyExtractor={(item,index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <ToDoItem title = {itemData.item.value}
            onDelete = {deleteTaskHandler}
            id = {itemData.item.id}
            />
          )}
        ></FlatList>
     
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70
  
  },
  screenList: {
    marginLeft: 20,
    marginRight: 20
  }
})