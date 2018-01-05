import React from 'react'
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Picker,
} from 'react-native'

const screenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
})
const Screen = ({ children }) => (
  <View style={screenStyles.screen}>{children}</View>
)

const innerScreenStyles = StyleSheet.create({
  screen: {
    padding: 30,
  },
})
const InnerScreen = ({ children }) => (
  <View style={innerScreenStyles.screen}>{children}</View>
)

const formGroupStyles = StyleSheet.create({
  view: {
    marginBottom: 33,
  },
})
const FormGroup = ({ children }) => (
  <View style={formGroupStyles.view}>{children}</View>
)

const controlLabelStyles = StyleSheet.create({
  text: {
    marginBottom: 12,
  },
})
const ControlLabel = ({ children }) => (
  <Text style={controlLabelStyles.text}>{children}</Text>
)
const styles = StyleSheet.create({
  buildOrBreakSelectionView: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#77AF9C',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    borderColor: '#E0E3DA',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  pickerItem: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  submitButtonContainer: {
    marginTop: 'auto',
    borderColor: '#E0E3DA',
    backgroundColor: '#f4f7f7',
    borderTopWidth: 1,
    padding: 17,
    flexDirection: 'row',
  },
  submitButton: {
    backgroundColor: '#77AF9C',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginLeft: 'auto',
  },
})
export default class AddHabitScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Add',
  }
  constructor(props) {
    super(props)
    this.state = { buildOrBreak: '', habitText: '', duration: 21 }
  }
  renderBuildOrBreakSelection() {
    return (
      <FormGroup>
        <ControlLabel>
          Really simple now. Do you want to{' '}
          <Text style={styles.boldText}>build</Text> or{' '}
          <Text style={styles.boldText}>break</Text> this habit?
        </ControlLabel>
        <View style={styles.buildOrBreakSelectionView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ buildOrBreak: 'build' })
            }}
          >
            <Text>Build</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ buildOrBreak: 'break' })
            }}
          >
            <Text>Break</Text>
          </TouchableOpacity>
        </View>
      </FormGroup>
    )
  }
  renderHabitNameInput() {
    return (
      <FormGroup>
        <ControlLabel>And what should we call this habit?</ControlLabel>
        <TextInput
          style={styles.textInput}
          placeholder="???"
          onChangeText={text => this.setState({ habitText: text })}
        />
      </FormGroup>
    )
  }
  renderDurationPicker() {
    const pickerItems = Array.from(
      new Array(365),
      (val, index) => index + 1
    ).map(val => <Picker.Item key={val} label={val.toString()} value={val} />)
    return (
      <FormGroup>
        <ControlLabel>
          How long do you want to maintain your streak?
        </ControlLabel>
        <Picker
          selectedValue={this.state.duration}
          itemStyle={styles.pickerItem}
          onValueChange={item => this.setState({ duration: item })}
        >
          {pickerItems}
        </Picker>
      </FormGroup>
    )
  }
  renderSubmitButton() {
    return (
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text>Goooo</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <Screen>
        <InnerScreen>
          {this.renderBuildOrBreakSelection()}
          {this.renderHabitNameInput()}
          {this.renderDurationPicker()}
        </InnerScreen>
        {this.renderSubmitButton()}
      </Screen>
    )
  }
  r
}
