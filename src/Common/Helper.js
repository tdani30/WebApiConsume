export const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    address: '',
    username:'',
    password:''
};

export const initialFieldLogin = {
    username:'',
    password:''
};

export const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})