#!/usr/bin/env node
/* eslint-disable */


export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees,
    };
}
