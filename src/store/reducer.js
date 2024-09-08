import { ProjectEnum } from "../components/constants";

export const Reducers = {
    UpdateUser: (state, action) => {
        const payload = action.payload;
        state.List.push(payload)

    },
    RemoveUser: (state, action) => {
        const exixist = state.List.filter(prev => prev.Email === action.payload.Email);
        if (exixist.length > 0) {
            state.List = state.List.filter(prev => prev.Email !== action.payload.Email);
        }
    },
    UserLogin: (state, action) => {
        if (action.payload) {
            state.LoginUser = action.payload;
        }else{
            state.LoginUser = null;
        }
    },
    SetDarkMode: (state, action) => {
        state.Enable = action.payload;
    },
    EditProject: (state, action) => {
        if (action.payload) {
            const { key, value } = action.payload;
            switch (key) {
                case "Customer":
                    state.AddProject.Customer = value;
                    break;
                case "RefranceNumber":
                    state.AddProject.RefranceNumber = value;
                    break;
                case "ProjectName":
                    state.AddProject.ProjectName = value;
                    break;
                case "ProjectNumber":
                    state.AddProject.ProjectNumber = value;
                    break;
                case "Location":
                    state.AddProject.Location = value;
                    break;
                case "Address":
                    state.AddProject.Address = value;
                    break;
                case "DueDate":
                    state.AddProject.DueDate = value;
                    break;
                case "Contect":
                    state.AddProject.Contect = value;
                    break;
                case "Manager":
                    state.AddProject.Manager = value;
                    break;
                case "Staff":
                    state.AddProject.Staff = value;
                    break;
                case "Status":
                    state.AddProject.Status = value;
                    break;
                case "Email":
                    state.AddProject.Email = value;
                    break;
                default:
                    break;
            }
        } else {
            state.AddProject = ProjectEnum
        }
    },
    AddProjectList: (state, action) => {
        if (action.payload) {
            const  Id = action.payload;
            state.ProjectList.push({...state.AddProject, id: Id});
            state.AddProject = ProjectEnum
        } 
    },
    
}