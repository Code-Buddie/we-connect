import COMPANIES from '../models/company-repository'

export function getCompanies() {
        return COMPANIES;
    }

export function getCompany(id){
    return COMPANIES.find(company => company.objectID === id);
}