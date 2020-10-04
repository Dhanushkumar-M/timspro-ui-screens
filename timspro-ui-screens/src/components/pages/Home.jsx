import React from 'react';
import Dropdown from './../common/Dropdown';
class Home extends React.Component {
  constructor() {
   super();
   this.state = {
    selectValue: null, 
       filterData: ['India', 'Canada', 'Srilanka', 'Afghanisthan']
   };
  }
 onChangeHandle = (name) => {
   this.setState({ selectValue: name });
  };
 render() {
   return (
    <div className='home'>
         <Dropdown 
           selectValue={this.state.selectValue}
           filterData={this.state.filterData} 
           setFilteredData={this.onChangeHandle} 
         />
         <Dropdown 
           selectValue={this.state.selectValue}
           filterData={this.state.filterData} 
           setFilteredData={this.onChangeHandle} 
         />

    </div>
   );
  }
 }

export default Home;