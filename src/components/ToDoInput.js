import React, { useState } from 'react'

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
  Image
} from 'react-native'

import Header from './Header'

const ToDoInput = props => {
  const [taskAdded, setTaskAdded] = useState('')
  const toDoInputHandler = taskAdded => {
    setTaskAdded(taskAdded)
  }
  const addTaskHandler = () => {
    props.onAddTask(taskAdded)
    setTaskAdded('')
  }
  const checkInput = taskAdded => {
    if (taskAdded.length > 0) {
      addTaskHandler()
    } else {
      Alert.alert('Error', 'Por favor informe uma tarefa!', [{ text: 'OK' }], {
        cancelable: false
      })
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <Header title="Aplicativo To-Do"></Header>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={toDoInputHandler}
          value={taskAdded}
          placeholder="Task"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancelar"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Adicionar"
              color="green"
              onPress={() => checkInput(taskAdded)}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default ToDoInput
