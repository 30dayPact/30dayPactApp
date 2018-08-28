import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './List.css'

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class List extends Component {

  constructor(props) { 
    super(props);
    this.state = {

      checkedG: null,

    }

  }
  
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    // rout the state back to the backend DB

  };
  
  // Utilize React mouse events onDrag* 
  handleDragStart= (e) => {
    //e.style ="opacity:0.1";  // this / e.target is the source node.
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
  }
  handleDragEnter(e) {
    console.log("handleDragEnter")
    console.log(e.target)    
  }
  handleDragOver(e) {
    console.log("handleDragOver", e.target)
    e.preventDefault();
  }
  handleDrop = (e) => {
    console.log(e.target)
    e.target.innerHTML = e.dataTransfer.getData('text/html');
    return false;
  }

  render() {
    return (
      <Paper className='paper'>
        <Table className='top6-table'>
          <TableHead>
            <TableRow>
              <TableCell>Today's Topo 6</TableCell>
              <TableCell numeric>Priority</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow draggable="true" 	onDragStart={(e) => this.handleDragStart(e)} onDrop={(e) => this.handleDrop(e)}  onDragEnter={(e)=>this.handleDragEnter(e)} onDragOver={(e)=>{this.handleDragOver(e)}} id={row.id} key={row.id}>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Checkbox
                        checked={this.state.checkedG}
                        onChange={this.handleChange('checkedG')}
                        value="checkedG"
                        />
                      }
                      //label="things I want to check off"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
      </Paper>

    );
  }
}



export default List;
