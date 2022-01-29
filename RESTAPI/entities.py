from app import db

class Employee(db.Model):
    __tablename__ = 'employee'
    empcode=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100))
    department=db.Column(db.String(100))
    doj=db.Column(db.Date)
    basicsalary=db.Column(db.Integer)

    def __init__(self,name,department,doj,basicsalary):
        self.name=name
        self.department=department
        self.doj=doj
        self.basicsalary=basicsalary
 