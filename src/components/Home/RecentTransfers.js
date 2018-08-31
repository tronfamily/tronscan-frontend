import React, {Component} from "react";
import {tu} from "../../utils/i18n";
import {injectIntl} from "react-intl";
import {loadTransactions} from "../../actions/blockchain";
import {connect} from "react-redux";
import {TronLoader} from "../common/loaders";
import {ONE_TRX} from "../../constants";
import {TRXPrice} from "../common/Price";
import {AddressLink, TransactionHashLink} from "../common/Links";
import TimeAgo from "react-timeago";
import {Link} from "react-router-dom";
import {withTimers} from "../../utils/timing";
import {Client} from "../../services/api";


class RecentTransfers extends Component {

  constructor() {
    super();

    this.state = {
      transfers: [],
    };
  }

  componentDidMount() {
    this.load();
    this.props.setInterval(() => {
      this.load();
    }, 6000);
  }

  load = async () => {
    let {transfers} = await Client.getTransfers({
      sort: '-timestamp',
      limit: 10,
      count: null,
    });

    this.setState({ transfers });
  };

  render() {

    let {transfers} = this.state;

    if (transfers === null) {
      return (
        <div className="text-center d-flex justify-content-center">
          <TronLoader/>
        </div>
      );
    }

    if (transfers.length === 0) {
      return (
        <div className="text-center d-flex justify-content-center">
          <TronLoader/>
        </div>
      );
    }

    return (
      <div className="card" style={styles.card}>
        <div className="card-header bg-tron-light d-flex">
          <i className="fa fa-server mr-3 fa_width_20 color-grey-100"></i>
          <h5 className="m-0 lh-175 color-grey-100">{tu("transfers")}</h5>
          <Link to="/blockchain/transfers" className="ml-auto btn btn-sm btn-outline-secondary color-grey-200 color-grey-border" style={{borderRadius:'0.15rem'}}>
            {tu("view_all")}
          </Link>
        </div>
        <ul className="list-group list-group-flush" style={styles.list}>
        {
          transfers.map((transfer, i) => (
            <li key={transfer.transactionHash} className="list-group-item p-3">
              <div className="media">
                <div className="media-body mb-0 d-flex">
                  <div className="text-left">
                    <div className="pt-1">
                      <i className="fa fa-bars mr-2 mt-1 fa_width color-tron-100"></i>
                      <TransactionHashLink hash={transfer.transactionHash}>{transfer.transactionHash.substr(0, 30)}...</TransactionHashLink>
                    </div><br/>

                    <span className="color-grey-300 mr-2">{tu("from")}</span>
                    <AddressLink wrapClassName="d-inline-block mr-2" className="color-tron-100" address={transfer.transferFromAddress} truncate={false}>
                      {transfer.transferFromAddress.substr(0, 18)}...
                    </AddressLink>
                    <span className="color-grey-300 mr-2">{tu("to")}</span>
                    <AddressLink wrapClassName="d-inline-block mr-2" className="color-tron-100" address={transfer.transferToAddress} truncate={false}>
                      {transfer.transferToAddress.substr(0, 18)}...
                    </AddressLink><br/>
                  </div>
                  <div className="ml-auto text-right d-flex flex-column pt-2">
                    <div className="color-grey-200" style={{flex:1}}>
                      <TRXPrice amount={transfer.amount / ONE_TRX} />
                    </div>
                    <div className="text-muted color-grey-300 small" style={{flex:1}}>
                      <TimeAgo date={transfer.timestamp} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    activeLanguage: state.app.activeLanguage,
  };
}

const mapDispatchToProps = {
  loadTransactions
};

export default connect(mapStateToProps, mapDispatchToProps)(withTimers(injectIntl(RecentTransfers)))

const styles = {
  list: {
    overflowY: 'scroll',
    overflowX: 'none',
    height: 618,
  },
  card:{
    border:'none',
    borderRadius:0
  }
};
