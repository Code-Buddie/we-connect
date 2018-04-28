import React, {Component} from 'react'
import { getCompanies } from '../shared/services/company-service'
import './companies.css'

const companies = getCompanies();

const isSearched = searchTerm => company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase());

export class CompaniesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies,
            searchTerm: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onSearchChange(event){
        this.setState({searchTerm: event.target.value})
    }

    onDismiss(id){
        const updatedCompanies = this.state.companies.filter(company => company.objectID !==id );
        this.setState({updatedCompanies});

    }

    render() {
        const {companies, searchTerm } = this.state;
        return (
            <div class="container mt-3">
                <div class="card">
                    <div class="card-body">
                        <SearchBar
                            value={searchTerm}
                            onChange={this.onSearchChange}/>
                    </div>
                </div>
                <div class="row">
                    {companies.filter(isSearched(searchTerm)).map(company =>
                        <div class="col-md-6">
                            <div class="card my-2">
                                <div class="card-body" key={company.objectID}>
                                    <h4 class="card-title">{company.name}</h4>
                                    {/*<p class="card-text">Tags: {company.tag_list}</p>*/}
                                    <p class="card-text">Category:{company.category_code}</p>
                                    <a class="card-text" href={company.homepage_url}>URL:{company.homepage_url}</a>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        );
    }
}

class SearchBar extends Component {

    render() {
        const { value, onChange } = this.props;
        return (
            <div class="row mx-sm-1 my-1 justify-content-between">
                <div>
                    <ul class="nav nav-pills mt-2">
                        <li class="nav-item">
                            <p class="lead pt-1 filter">Filter by:</p></li>
                        <li class="nav-item px-md-1">
                            <button type="button" class="btn btn-primary active">All</button>
                        </li>
                        <li class="nav-item px-md-1">
                            <button type="button" class="btn btn-primary">Location</button>
                        </li>
                        <li class="nav-item px-md-1">
                            <button type="button" class="btn btn-primary">Category</button>
                        </li>
                    </ul>
                </div>
                    <div>
                        <form class="form-inline">
                            <input class="form-control mr-sm-1" placeholder='Search' value={value} onChange={onChange} id="searchBar"/>
                            <span class="oi oi-magnifying-glass"/>
                        </form>
                    </div>
                </div>
                );
                }
                }

// export default CompaniesComponent