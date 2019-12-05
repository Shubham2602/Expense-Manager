import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rai, Sanjeev",
      balance: "263273",
      currency: "$",
      bank1: {
        account: "3256312",
        balance: "2823.34",
        name: "HDFC"
      },
      bank2: {
        account: "3847399",
        balance: "3430.68",
        name: "CITI"
      },
      projectedBalance: "42872.32",
      upcomingIncome: "43435.23",
      totalUpcomingBillPmt: "4834.23",
      totalLiability: "3473.33",
      flatmates: {
        balance: "500",
        flag: "Receivable",
        alert: "Remind for Payment"
      },
      officeColleagues: {
        balance: "200",
        flag: "Payable",
        alert: "Pay Bill"
      }
    };
  }

  render() {
    return (
      <div>
        <h2>Easy Expense Manager</h2>
        <div id="Profile">
          <div>
            <table>
              <tr>
                <td>
                  <button>View Transaction History</button>
                </td>
                <td>
                  <button>Add Transaction to Group</button>
                </td>
                <td>
                  <button>Create Group</button>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <div>
              <img
                src="C:\Users\prashanth.dsouza\Desktop\demopic.jpg"
                height="20"
                width="20"
              />
            </div>
            <div>
              <label>
                <h2>{this.state.name}</h2>
              </label>
            </div>
          </div>
        </div>
        <div id="AccountInfo">
          <table>
            <tr>
              <td>
                <div>
                  <label>
                    Current account balance : {this.state.currency}
                    {parseFloat(this.state.bank1.balance) +
                      parseFloat(this.state.bank2.balance)}
                  </label>
                </div>
                <div>
                  <label>
                    {this.state.bank1.account}({this.state.bank1.name}):{" "}
                    {this.state.bank1.balance}
                  </label>
                </div>
                <div>
                  <label>
                    {this.state.bank2.account}({this.state.bank2.name}):{" "}
                    {this.state.bank2.balance}
                  </label>
                </div>
                <br></br>
                <div>
                  <label>
                    Projected Balance: {this.state.currency}
                    {this.state.projectedBalance}
                  </label>
                </div>
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  Liability to various groups: {this.state.totalLiability}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <label>
                    Upcoming Income: {this.state.currency}
                    {this.state.upcomingIncome}
                  </label>
                </div>
                <table>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <tr>
                    <td>Salary</td>
                    <td>30-Nov-19</td>
                    <td>$2500</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                  <tr>
                    <td>From Joe</td>
                    <td>15-Dec-19</td>
                    <td>$250</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                  <tr>
                    <td>From Victor</td>
                    <td>13-Dec-19</td>
                    <td>$2500</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
                <label>
                  Upcoming bill payment : {this.state.currency}
                  {this.state.totalUpcomingBillPmt}
                </label>
                <table>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <tr>
                    <td>Salary</td>
                    <td>30-Nov-19</td>
                    <td>$2500</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                  <tr>
                    <td>From Joe</td>
                    <td>15-Dec-19</td>
                    <td>$250</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                  <tr>
                    <td>From Victor</td>
                    <td>13-Dec-19</td>
                    <td>$2500</td>
                    <td>
                      <button>Done</button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>

        <div id="Groups Management">
          <h2>Groups Management</h2>
          <table id="grpManagementTbl">
            <tr>
              <td>
                <button id="group1">Flatmates</button>
              </td>
              <td>
                <button>
                  {this.state.flatmates.flag} : &nbsp;
                  {this.state.flatmates.balance}
                </button>
              </td>
              <td>
                <button>{this.state.flatmates.alert}</button>
              </td>
              <td>
                <button>View Transactions</button>
              </td>
              <td>
                <table>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <tr>
                    <td>Salary</td>
                    <td>30-Nov-19</td>
                    <td>$2500</td>
                  </tr>
                  <tr>
                    <td>From Joe</td>
                    <td>15-Dec-19</td>
                    <td>$250</td>
                  </tr>
                  <tr>
                    <td>From Victor</td>
                    <td>13-Dec-19</td>
                    <td>$2500</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <button id="group2">Office Colleagues</button>
              </td>
              <td>
                <button>
                  {this.state.officeColleagues.flag} : &nbsp;
                  {this.state.officeColleagues.balance}
                </button>
              </td>
              <td>
                <button>{this.state.officeColleagues.alert}</button>
              </td>
              <td>
                <button>View Transactions</button>
              </td>
              <td>
                <table>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <tr>
                    <td>Salary</td>
                    <td>30-Nov-19</td>
                    <td>$2500</td>
                  </tr>
                  <tr>
                    <td>Joe</td>
                    <td>15-Dec-19</td>
                    <td>$250</td>
                  </tr>
                  <tr>
                    <td>Victor</td>
                    <td>13-Dec-19</td>
                    <td>$2500</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
