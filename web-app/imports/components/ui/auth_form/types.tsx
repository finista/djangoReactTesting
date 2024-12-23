type AuthFormMethod = "login" | "register"

interface FormProps {
    readonly route: string;
    readonly method: AuthFormMethod;
}

export default FormProps