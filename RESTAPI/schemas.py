from entities import Employee
from app import ma


class EmployeeSchema(ma.Schema):
    class Meta:
        fields=('empcode','name','department','doj','basicsalary')
        modal=Employee


employee_schema=EmployeeSchema()
employees_schema=EmployeeSchema(many=True)