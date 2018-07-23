import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

class Buttons extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'all',
    };
  }
  render() {
    const top10 = [{'name':'all','region':'所有'},
      {'name':'as','region':'所有'},
      {'name':'eu','region':'所有'},
      {'name':'af','region':'所有'},
      {'name':'na','region':'所有'},
      {'name':'sa','region':'所有'},
      {'name':'oc','region':'所有'},
      {'name':'an','region':'所有'}];
    return (
      <div>
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary">国家</Button>
          </ButtonToolbar>
        </div>
        <p />
        <div>
          <ButtonToolbar>

            {top10.map((item, index) => (
              <Button key={index} bsStyle={this.state.active === 'as' ? 'primary' : 'default'} onClick={this.onClickHandle('as')}>{item.region}</Button>
            ))}

            <Button bsStyle={this.state.active === 'all' ? 'primary' : 'default'} onClick={this.onClickHandle('all')}>所有</Button>
            <Button bsStyle={this.state.active === 'as' ? 'primary' : 'default'} onClick={this.onClickHandle('as')}>亚洲</Button>
            <Button bsStyle={this.state.active === 'eu' ? 'primary' : 'default'} onClick={this.onClickHandle('eu')}>欧洲</Button>
            <Button bsStyle={this.state.active === 'af' ? 'primary' : 'default'} onClick={this.onClickHandle('af')}>非洲</Button>
            <Button bsStyle={this.state.active === 'na' ? 'primary' : 'default'} onClick={this.onClickHandle('na')}>北美洲</Button>
            <Button bsStyle={this.state.active === 'sa' ? 'primary' : 'default'} onClick={this.onClickHandle('sa')}>南美洲</Button>
            <Button bsStyle={this.state.active === 'oc' ? 'primary' : 'default'} onClick={this.onClickHandle('oc')}>大洋洲</Button>
            <Button bsStyle={this.state.active === 'an' ? 'primary' : 'default'} onClick={this.onClickHandle('an')}>南极洲</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
  onClickHandle = (code)=>{
    this.setState({ active: code});
    this.props.onClickHandle(code);
  }
}

export default Buttons;
