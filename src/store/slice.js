import { createSlice } from '@reduxjs/toolkit';
import { Reducers } from './reducer';
import { ActiveUser, ProjectEnum } from '../components/constants';

const UserDetailSlice = createSlice({
    name: 'Users',
    initialState: {
        LoginUser: null,
        List: [ActiveUser]
    },
    reducers: Reducers
});
const DarkMode = createSlice({
    name: 'DarkMode',
    initialState: { Enable: false },
    reducers: Reducers
});
const ProjectSlice = createSlice({
    name: 'Projects',
    initialState: {
        AddProject: ProjectEnum,
        ProjectList: []
    },
    reducers: Reducers
});

export const { UpdateUser, RemoveUser, UserLogin } = UserDetailSlice.actions;
export const { SetDarkMode } = DarkMode.actions;
export const { EditProject, AddProjectList } = ProjectSlice.actions;
export const UserReducer = UserDetailSlice.reducer;
export const DarkModeReducer = DarkMode.reducer;
export const ProjectReducer = ProjectSlice.reducer;
