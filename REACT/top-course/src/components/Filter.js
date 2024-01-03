import React from 'react'

const Filter = (props)=>{
     return(
        <div>
            {props.filterData.map( (data) =>{
                return(
                    <button key={data.id}>
                      {data.title}
                    </button>
                )
            })}
        </div>
     )
}

export default Filter;