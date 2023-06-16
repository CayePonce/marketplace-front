import "./style.css";
import { useForm } from "react-hook-form";
import useLoginForm from "../../../hooks/useLoginForm";
import TextInput from "../../inputs/TextInput";
import PasswordInput from "../../inputs/PasswordInput";

function LoginForm() {
  const handleRegister = () => {
    setRegisterActive(true);
    setLoginActive(false);
  };

  const { setLoginActive, setRegisterActive, submitInfo } = useLoginForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit(submitInfo)} className="formContainer">
          <TextInput
            label={"Usuario:"}
            register={register("username")}
            errors={errors}
            registerName={"username"}
          />
          <PasswordInput
            label={"Contraseña:"}
            register={register("password")}
            errors={errors}
            registerName={"password"}
          />

          <button type="submit">Login</button>
        </form>
        <p>
          ¿Eres nuev@?
          <span className="register" onClick={handleRegister}>
            ¡Regístrate!
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
