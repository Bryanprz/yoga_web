import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';
import EditListForm from './EditListForm';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lists: [], editingListId: null };

    this.addNewList = this.addNewList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.editingList = this.editingList.bind(this);
    this.editList = this.editList.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
      .then(response => {
        console.log('resp: ', response)
        this.setState({
          lists: response.data
        })
      })
      .catch(error => console.log('error: ', error)) 
  }    
  
  addNewList(title, excerpt) {
    axios.post('/api/v1/lists',{ list: { title, excerpt } })
      .then(resp => { 
        console.log(resp);
        const lists = [ ...this.state.lists, resp.data];
        this.setState({ lists });
      })
      .catch(err => console.log(err));
  }

  editingList(id) {
    this.setState({
      editingListId: id
    })
  }

  editList(id, title, excerpt) {
    axios.put('/api/v1/lists/' + id, {
      list: {
        title, excerpt
      }
    })
    .then(resp => {
      console.log(resp);
      const lists = this.state.lists;
      lists[id-1] = { id, title, excerpt };
      this.setState(() => ({ 
        lists, 
        editingListId: null
      }))
    })  
    .catch(err => console.log(err));
  }
  
  removeList(id) {
    axios.delete('/api/v1/lists/' + id)
      .then(resp => {
        const lists = this.state.lists.filter(
          list => list.id !== id
        )
        this.setState({ lists });
      }) 
      .catch(err => console.log(err));
  } 

  render() {
    return (
      <div className="Lists-container">
        {this.state.lists.map(list => {
          if (this.state.editingListId === list.id) {
            return (<EditListForm
                      list={ list } 
                      key={ list.id } 
                      editList={ this.List } 
                    />)
          } else {
            return (<List 
                      list={ list } 
                      key={ list.id } 
                      editList={ this.editList } 
                    />)
          }
        })}

        <NewListForm onNewList={ this.addNewList } />
      </div>
    )
  }
}

export default ListContainer;
