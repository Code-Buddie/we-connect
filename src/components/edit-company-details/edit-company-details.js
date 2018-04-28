import React, {Component} from 'react'
import './edit-company-details.css'

import {getCompany} from '../shared/services/company-service'

const company = getCompany(3);

class EditCompanyDetailsComponent extends Component {
    constructor() {
        super();

        this.state = {
            company
        }

    }


    render() {
        return <div class="container">
            <div class="card m-sm-5 p-sm-5">
                <h4 class="display-4">Edit Company Details</h4>
                <div class="card-body">
                    <form>
                        <Form_group
                            id="company_name"
                            value={company.name}
                            type="text">
                            Company Name:
                        </Form_group>
                        <Form_group
                            id="company_url"
                            value={company.homepage_url}
                            type="text">
                            Company URL:
                        </Form_group>
                        <Form_group
                            id="category_code"
                            value={company.category_code}
                            type="text">
                            Category:
                        </Form_group>
                        <Form_group
                            id="founded_year"
                            value={company.founded_year}
                            type="text">
                            Year Founded:
                        </Form_group>
                        <Form_group
                            id="company_email"
                            value={company.email_address}
                            type="text">
                            Company Email
                        </Form_group>
                        <Form_group
                            id="company_contact"
                            value={company.phone_number}
                            type="text">
                            Company Contact:
                        </Form_group>
                        <Form_group
                            id="description"
                            value={company.description}
                            type="text">
                            Description
                        </Form_group>
                        <Form_group
                            id="company_overview"
                            value={company.overview}
                            type="text">
                            Overview:
                        </Form_group>
                        <Form_group
                            id="company_partners"
                            value={company.partners}
                            type="text">
                            Partners:
                        </Form_group>
                    </form>
                    <div className="text-right">
                        <button className="btn btn-primary active mx-1"> Save</button>
                        <button className="btn btn-danger active mx-1"> Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

class Form_group extends Component {
    render() {
        const {children, id, type, value} = this.props;
        return <div class="form-group row">
            <label for="staticEmail" id={id} className="col-sm-2 col-form-label">{children}</label>
            <div class="col-sm-10">
                <input type={type} value={value} className="form-control"/>
            </div>
        </div>
    }
}

export default EditCompanyDetailsComponent