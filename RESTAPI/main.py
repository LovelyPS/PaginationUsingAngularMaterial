from app import api,app
from restresources import EmployeeListResource,EmployeeResource       

api.add_resource(EmployeeListResource,'/employee/<int:empcode>')
api.add_resource(EmployeeResource,'/employee')

if __name__=="__main__":
    app.run(debug=True)

