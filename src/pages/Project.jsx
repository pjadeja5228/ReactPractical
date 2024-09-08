import {  Button, Card, CardContent, Grid, TextField, Typography,  } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Projectcolumns, sampleData } from '../components/constants';
import { useState } from 'react';
import { checkPropTypes } from 'prop-types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { AddProjectList, EditProject } from '../store/slice';

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const Project = () => {
    const [addNew, setAddNew] = useState(false);
    
    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h4" gutterBottom align="left" sx={{ color: '#121212' }}>
                Projects
                <Button
                    variant="contained"
                    // style={{ backgroundColor: "none", border: "none" }}
                    style={{  float: 'right', height:'40px', width:"50px"}}
                    fullWidth
                    onClick={() => { setAddNew(true) }}
                >
                    Add
                </Button>
            </Typography>
            <StyledCard>
                {addNew ?
                    <AddProject Add={() => {setAddNew(false)}} Cancel={() => {setAddNew(false)}}/>
                    :
                    <Containt />
                }
                
            </StyledCard>
        </div>
    );
};

const AddProject = ({ Add, Cancel}) => {
    const dispatch = useDispatch();
    const ID = useSelector((state) => state.Users.LoginUser.Email);
    const { 
        Customer,
        RefranceNumber,
        ProjectName,
        ProjectNumber,
        Location,
        Address,
        DueDate,
        Contect,
        Manager,
        Staff,
        Status,
        Email,
     } = useSelector((state) => state.Projects.AddProject);

    return (
        <CardContent>
            <Grid container spacing={1} margin={"20px"}>
                <Grid item xs={3.9}>
                    Customer
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Customer}
                        onChange={(e) => dispatch(EditProject({ key: "Customer", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Refrance Numbe
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={RefranceNumber}
                        onChange={(e) => dispatch(EditProject({ key: "RefranceNumber", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Project Name
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={ProjectName}
                        onChange={(e) => dispatch(EditProject({ key: "ProjectName", value: e.target.value }))}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={1} margin={"20px"}>
                <Grid item xs={3.9}>
                    Project Number
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={ProjectNumber}
                        onChange={(e) => dispatch(EditProject({ key: "ProjectNumber", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Area Location
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Location}
                        onChange={(e) => dispatch(EditProject({ key: "Location", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Address
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Address}
                        onChange={(e) => dispatch(EditProject({ key: "Address", value: e.target.value }))}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={1} margin={"20px"}>
                <Grid item xs={3}>
                    Due Date
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            // label="Select Date"
                            value={DueDate}
                            onChange={(newValue) => dispatch(EditProject({ key: "DueDate", value: newValue }))}
                            renderInput={(params) => <TextField {...params}
                                fullWidth
                                type="text"
                                variant="outlined"
                                margin="normal" />
                            }
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={3.9}>
                    Contect
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Contect}
                        onChange={(e) => dispatch(EditProject({ key: "Contect", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Manager
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Manager}
                        onChange={(e) => dispatch(EditProject({ key: "Manager", value: e.target.value }))}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={1} margin={"20px"}>
                <Grid item xs={3.9}>
                    Staff
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Staff}
                        onChange={(e) => dispatch(EditProject({ key: "Staff", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Status
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={Status}
                        onChange={(e) => dispatch(EditProject({ key: "Status", value: e.target.value }))}
                    />
                </Grid>
                <Grid item xs={3.9}>
                    Email
                    <TextField
                        fullWidth
                        type="email"
                        variant="outlined"
                        margin="normal"
                        value={Email}
                        onChange={(e) => dispatch(EditProject({ key: "Email", value: e.target.value }))}
                    />
                </Grid>

            </Grid>
            <Grid container spacing={1} margin={"0px"}>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        // style={{ backgroundColor: "none", border: "none" }}
                        style={{ float: 'right', height: '40px', width: "150px" }}
                        fullWidth
                        onClick={() => { Add(true); dispatch(AddProjectList(ID)) }}
                    >
                        Add Now
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        // style={{ backgroundColor: "none", border: "none" }}
                        style={{ float: 'right', height: '40px', width: "150px" }}
                        fullWidth
                        onClick={() => { Cancel(true); dispatch(EditProject()) }}
                    >
                        Cancel
                    </Button>
                </Grid>


            </Grid>

        </CardContent>
    );
}
AddProject.propTypes = {
    Add: checkPropTypes.func,
    Cancel: checkPropTypes.func,
};
const Containt = () => {
    const projectList = useSelector((state) => state.Projects.ProjectList);
    const rows = projectList.map((item, index) => ({
        id: index,
        customer: item.Customer,
        refNumber: item.RefranceNumber,
        projectName: item.ProjectName,
        projectNumber: item.ProjectNumber,
        location: item.Location,
        address: item.Address,
    }));
      
    return (
        <CardContent>
            <Typography variant="h6" gutterBottom>
                Table

            </Typography>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={Projectcolumns} pageSize={5} />
            </div>
        </CardContent>
    );
}
export default Project;
