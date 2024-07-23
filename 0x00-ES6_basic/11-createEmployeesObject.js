#!/usr/bin/env node
/* eslint-disable */


module.exports = function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees,
    };
}
