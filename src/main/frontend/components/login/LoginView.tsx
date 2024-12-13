import {LoginOverlay} from "@vaadin/react-components";
import {useSignal} from "@vaadin/hilla-react-signals";
import {useAuth} from "Frontend/components/auth/auth";

export default function LoginView() {
    const { login } = useAuth();
    const hasError = useSignal(false);
    const hasDisable = useSignal(false);

    if (hasError.value && hasDisable.value)
    {
        hasDisable.value = false;
    }

    return (
        <LoginOverlay
            opened
            error={hasError.value}
            noForgotPassword
            onLogin={async ({ detail: { username, password } }) => {
                const { error } = await login(username, password);
                hasError.value = Boolean(error);
            }}
            onErrorChanged={() => hasDisable.value = true}
            disabled={hasDisable.value}
        />
    );
}