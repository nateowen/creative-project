const e = React.createElement;

class RegisterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    alert('A UUID was generated.')
    event.preventDefault();
  }

  render() {
    if (this.state.register) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));