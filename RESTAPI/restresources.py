from datetime import datetime
from flask import request
from flask_restful import Resource
from schemas import employee_schema,employees_schema
from app import db
from entities import Employee


#resouces
 
        
class EmployeeListResource(Resource):
    def get(self,empcode):
        emp=Employee.query.get_or_404(empcode)
        return employee_schema.dump(emp)
    def delete(self,empcode):
        emp=Employee.query.get_or_404(empcode)
        db.session.delete(emp)
        db.session.commit()
        return 'employee Deleted Successfully'
    

class EmployeeResource(Resource):
    def get(self):
        employees=Employee.query.all()
        return employees_schema.dump(employees)
    
    def post(self):
        name=request.json['name']
        department=request.json['department']
        doj=request.json['doj']
        date_obj = datetime. strptime(doj, '%Y-%m-%d')
        basicsalary=request.json['basicsalary']
        new_emp=Employee(name,department,date_obj,basicsalary)
        db.session.add(new_emp)
        db.session.commit()
        return "Employee Added Successfully"
    
    def put(self):
        id=request.json['empcode']
        emp=Employee.query.get_or_404(id)

        if 'name' in request.json:
            emp.employeeName=request.json['name']
        db.session.commit()
        return "Employee updated Successfully"


