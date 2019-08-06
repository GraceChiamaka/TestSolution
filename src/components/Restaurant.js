import React from 'react';

const restaurant = (props) => {
    return (
        <div className="col-md-4">
            <div className="card teal teal-darken-2 text-white">
                <div className="card-body">
                    <h3>{props.name}</h3>
                    <p>{props.status}</p>
                    <table className="table white-text border border-light table-sm">
                        <tbody>
                            <tr>
                                <td>Popularity Rating</td>
                                <td className="text-left">{props.pop}</td>
                            </tr>
                            <tr>
                                <td>Minimum Cost</td>
                                <td className="text-left">{props.min}</td>
                            </tr>
                            <tr>
                                <td>Best Match</td>
                                <td className="text-left">{props.match}</td>
                            </tr>
                            <tr>
                                <td>Delivery Costs</td>
                                <td className="text-left">{props.delCost}</td>
                            </tr>
                            <tr>
                                <td>Average Price</td>
                                <td className="text-left">{props.avg}</td>
                            </tr>
                            <tr>
                                <td>Popularity Rating</td>
                                <td className="text-left">{props.pop}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default restaurant;