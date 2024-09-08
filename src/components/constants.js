export const ActiveUser = {
    Email: "pjadeja5228@gmail.com",
    Image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg",
    UserName: "Pruthvirajsinh Jadeja",
    Password: "12345",
}
export const ProjectEnum = {
    Customer: "",
    RefranceNumber: "",
    ProjectName: "",
    ProjectNumber: "",
    Location: "",
    Address: "",
    DueDate: null,
    Contect: "",
    Manager: "",
    Staff: "",
    Status: "",
    Email: "",
}
export const sampleData = [
  {
    id: 1,
    customer: 'John Doe',
    refNumber: 'REF12345',
    projectName: 'Project A',
    projectNumber: 'P001',
    location: 'New York',
    address: '123 Main St, NY',
    
  }
];


export const Projectcolumns = [
  { field: 'customer', headerName: 'Customer', width: 150 },
  { field: 'refNumber', headerName: 'Ref Number', width: 150 },
  { 
    field: 'projectName', 
    headerName: 'Project Name', 
    width: 200, 
    // valueGetter: (params) => params.row.projectRef.projectName // Access nested object
  },
  { 
    field: 'projectNumber', 
    headerName: 'Project Number', 
    width: 150, 
    // valueGetter: (params) => params.row.projectRef.projectNumber 
  },
  { 
    field: 'location', 
    headerName: 'Project Location', 
    width: 200, 
    // valueGetter: (params) => params.row.projectLocation.location 
  },
  { 
    field: 'address', 
    headerName: 'Address', 
    width: 250, 
    // valueGetter: (params) => params.row.projectLocation.address 
  },
];
