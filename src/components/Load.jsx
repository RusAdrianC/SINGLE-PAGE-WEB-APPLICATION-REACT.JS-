import React from "react";

export default class Load extends React.Component {
  state = {
    data: null, //n avem date
    loading: true, //se incarca
  };
  //operatie asyncrona

  componentDidMount() {
    //console.log(this.props.children);
    this.props
      .source()
      .then((response) => this.setState({ data: response, loading: false }))
      .catch((error) => this.setState({ loading: false }));
  }
  //render props

  render() {
    return this.props.children({
      value: this.state.data,
      loading: this.state.loading,
    });
  }
}
