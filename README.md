React-Select
============

An à la carte set of polished, extensible, and accessible form inputs built for React, based on the excellent Kendo UI Core and jQuery UI packaged for Meteor.


### Adding it to your project

~~~
meteor add praneybehl:react-widgets
~~~


This package wraps the react components [React-Widgets](https://github.com/jquense/react-widgets) for Meteor.


## Usage

This package exports the following:

Pick and choose one, or more of the following Components
- DropdownList
- ComboBox
- Multiselect
- SelectList (checkbox and radio group)
- DateTimePicker
- Calendar
- NumberPicker

It also exports the main module "ReactWidgets" for customization

## Simple usage cases:

### DropdownList:
~~~
var colors = ['orange', 'red', 'blue', 'purple'];

    <DropdownList defaultValue={"orange"} data={colors}/>
~~~

### ComboBox:
~~~
var colors = ['orange', 'red', 'blue', 'purple'];

    <Combobox defaultValue={"orange"} data={colors}/>
~~~

### Multiselect:
~~~
var colors = ['orange', 'red', 'blue', 'purple'];

    <Multiselect defaultValue={["orange", "red"]} data={colors}/>
~~~

### SelectList:
~~~
var colors = ['orange', 'red', 'blue', 'purple'];

    <SelectList defaultValue={["orange", "red"]} data={colors}/>
~~~

### DateTimePicker:
~~~
var Example = React.createClass({

  getInitialState() {
    return { value0: new Date(), value1: null };
  },

  render() {
    var change = (name, value) => this.setState({
        ['value' + name]: value
      });

    return (<div>
      <DateTimePicker
        value={this.state.value0}
        onChange={change.bind(null, '0')}/>
      <DateTimePicker
        value={this.state.value1}
        onChange={change.bind(null, '1')}/>
    </div>)
  }
});
~~~

### Calendar:
~~~
    <Calendar defaultValue={new Date()} />
~~~

### NumberPicker:
~~~
    <NumberPicker defaultValue={1} />
    <NumberPicker defaultValue={null} />
~~~


__Demos and Documentation [here](http://jquense.github.io/react-widgets/docs/)__


For more information checkout : [React-Widgets](https://github.com/jquense/react-widgets)


# License

MIT Licensed.
