import { StyleSheet, Button, View, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }


  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/splash.png')}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
          <Button title="Add goal" onPress={addGoalHandler} color={'white'}/>
          </View>
          <View style={styles.button}>
          <Button title="Cancel" onPress={props.setVisible} color={'red'} />
          </View>
          <Text>this is a test</Text>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b',
  },
  TextInput: {
    borderWidth: 1,
    color: 'white',
    borderColor: "grey",
    width: "90%",
    margin: 8,
    padding: 8,
  },
  buttonContainer: {
      marginTop: 16,
      flexDirection: 'row'
  },
  button: {
      width: 100,
      marginHorizontal: 8,
  },
  image: {
      width: 100,
      height: 100,
      margin: 20,
  }
});
