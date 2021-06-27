'use strict';
const db = require('./conn');

class ExecutiveModel {
    constructor(id,name, slug, first_year_active) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.first_year_active = first_year_active;
    }
    static async getAllExecutiveData() {
        try {
            const response = await db.any(
                `SELECT name, first_year_active FROM ceos;`
            )
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}



module.exports = ExecutiveModel;