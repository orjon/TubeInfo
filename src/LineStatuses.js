import React, { Component } from 'react';
import LineStatus from './LineStatus';
import './Section.scss';

class LineStatuses extends Component {
 
  goToLine(id){
    this.props.history.push(`/line/${id}`);
  }

  render(){
    const { tubeLines } = this.props
    const tubeStatuses = tubeLines.map( line => (
      <LineStatus key={line.id} line={line} handleClick={() => this.goToLine(line.id)}/>
    ))
    return(
      <section>
        <div className='sectionTitle'>Line Statuses</div>
        <div className='sectionBody'>
          {/* {tubeStatuses} */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus libero magnam, dicta ullam reprehenderit nam labore aliquam commodi iusto eaque facilis molestias nostrum. Culpa saepe minima excepturi illo, eos nobis?</p>
        
        </div>
      </section>

    )
  }
}

export default LineStatuses;
