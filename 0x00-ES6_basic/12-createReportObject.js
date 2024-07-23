#!/usr/bin/env node
/* eslint-disable */

export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList,
        getNumberOfDepartments($allEmployees) {
            return Oject.keys($allEmployees).length;
        }
    }
}
