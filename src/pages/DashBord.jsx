import { Grid, Card, CardContent, Typography, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StyledCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
];

const Dashboard = () => {
    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h4" gutterBottom align="left" sx={{ color: '#121212' }}>
                Dashboard
            </Typography>

            {/* Box Grid */}
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <StyledCard>
                        <CardContent style={{minHeight:"80px"}}>
                            <Typography variant="h6">Total Users
                            <div style={{  float: 'right', fontSize: '35px', backgroundColor:"ButtonShadow", height:'50px', width:"50px", borderRadius:"10px",marginInline:"10px"}}> 👥</div>
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={3}>
                    <StyledCard>
                        <CardContent style={{minHeight:"80px"}}>
                            <Typography variant="h6">Total Orders <div style={{  float: 'right', fontSize: '35px', backgroundColor:"ButtonShadow", height:'50px', width:"50px", borderRadius:"10px",marginInline:"10px"}}> 📦</div></Typography>
                            {/* <div style={{ fontSize: '24px', marginTop: '10px' }}>📦</div> */}
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={3}>
                    <StyledCard>
                        <CardContent style={{minHeight:"80px"}}>
                            <Typography variant="h6">Total Sales <div style={{  float: 'right', fontSize: '35px', backgroundColor:"ButtonShadow", height:'50px', width:"50px", borderRadius:"10px",marginInline:"10px"}}> 💵</div></Typography>
                            {/* <div style={{ fontSize: '24px', marginTop: '10px' }}>💹</div> */}
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={3}>
                    <StyledCard>
                        <CardContent style={{minHeight:"80px"}}>
                            <Typography variant="h6">Total Pending <div style={{  float: 'right', fontSize: '35px', backgroundColor:"ButtonShadow", height:'50px', width:"50px", borderRadius:"10px",marginInline:"10px"}}> ⏳</div></Typography>
                            {/* <div style={{ fontSize: '24px', marginTop: '10px' }}>⏲️</div> */}
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>

            {/* Chart */}
            <StyledCard>
                <CardContent>
            <Typography variant="h6" gutterBottom>
                Sales Details
                    <Select defaultValue="1 Month" style={{ float: 'right', marginBottom: '10px' }}>
                        <MenuItem value="1 Month">1 Month</MenuItem>
                        <MenuItem value="3 Months">3 Months</MenuItem>
                        <MenuItem value="6 Months">6 Months</MenuItem>
                        <MenuItem value="1 Year">1 Year</MenuItem>
                    </Select>
                    </Typography>

                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </StyledCard>

            {/* Table */}
            <StyledCard>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Table
                    </Typography>
                    <Select defaultValue="1 Month" style={{ float: 'right', marginBottom: '10px' }}>
                        <MenuItem value="1 Month">1 Month</MenuItem>
                        <MenuItem value="3 Months">3 Months</MenuItem>
                        <MenuItem value="6 Months">6 Months</MenuItem>
                        <MenuItem value="1 Year">1 Year</MenuItem>
                    </Select>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product Name</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Location</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date-Time</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
                                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Your table rows here */}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </StyledCard>
        </div>
    );
};

export default Dashboard;
