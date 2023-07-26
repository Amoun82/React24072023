import React from "react";

class Enfant extends React.Component { 


    render() {
        return ( 
                <p>
                    {this.props.title}{console.log(this.props)}
                </p>
                ) ;
    }

}

export default Enfant ;