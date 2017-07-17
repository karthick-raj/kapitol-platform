import React, {Component} from 'react';
import legislation from '../files/legislation.json';

class Legislation extends Component{
    render(){
        let topic = this.props.match.params.keyword;
        let recentBills = legislation[0][topic]["recent_bills"];
        const RecentBillList = (props) => {
            {console.log(props.recentBill)}
            return (
                <tr>
                    <td>{props.recentBill.name}</td>
                    <td>{props.recentBill.stage}</td>
                    <td>{props.recentBill.sponsorship_party}</td>
                    <td>{props.recentBill.projections.pass}</td>
                    <td>{props.recentBill.projections.fail}</td>
                    <td>{props.recentBill.results.yay}</td>
                    <td>{props.recentBill.results.nay}</td>
                </tr>
            )

            };
        return(
            <div>
                <h1>115th Congressional Voting</h1>
                <h1>{topic}</h1>
                <p>{legislation[0][topic]["description"]}</p>
                {
                    console.log(recentBills)
                }
                <table>
                    <tr>
                        <th>Recent Bills</th>
                        <th>Details</th>
                        <th>Projection</th>
                        <th>Results</th>
                    </tr>
                    <tr>
                        <td>Recent bills put forth in Congress relaxing to Gun Rights. Click on the bill name to run it through our prediction algorithms, seen below.</td>
                        <td>Bill details, including bill placement in Congress and bill sponsoring party </td>
                        <td>Kapitol algorithm prediction for bill passage </td>
                        <td>Bill results updated in real ;me. Results vary out of 100 or 435 depending on chamber</td>
                    </tr>
                    {
                        recentBills.map((bill,index) => {
                            return (
                                <RecentBillList key={index} recentBill={bill}/>
                            );
                        })
                    }
                </table>
                </div>
        )
    }
}

export default Legislation;