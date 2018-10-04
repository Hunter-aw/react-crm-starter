import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import SearchClients from './SearchClients';
import ClientNav from './ClientNav';
import ClientsSection from './ClientsSection'
import ReactPaginate from 'react-paginate'
import './clients.css'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            pageCount: 1
        }
    }
    componentDidMount () {
        const data = this.props.clientData
        this.props.updateNavBar("clients");
        this.props.updateClientData()
    }
    // loadCommentsFromServer() {
    //     $.ajax({
    //       url      : this.props.url,
    //       data     : {limit: this.props.perPage, offset: this.state.offset},
    //       dataType : 'json',
    //       type     : 'GET',
    
    //       success: data => {
    //         this.setState({data: data.comments, pageCount: Math.ceil(data.meta.total_count / data.meta.limit)});
    //       },
    
    //       error: (xhr, status, err) => {
    //         console.error(this.props.url, status, err.toString());
    //       }
    //     });
    // }

    // handlePageClick = (data) => {
    //     let selected = data.selected;
    //     let offset = Math.ceil(selected * this.props.perPage);
    
    //     this.setState({offset: offset}, () => {
    //       this.loadCommentsFromServer();
    //     });
    // };

    render() {
        console.log("rendering")
        console.log(this.props.clientData)
        return(
            <div className="container">
                <SearchClients/>
                <ClientNav/>
                <ClientsSection data = {this.props.clientData}/>
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        )
    }
}

export default Clients