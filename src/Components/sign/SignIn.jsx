import { Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';



// eslint-disable-next-line react/prop-types
export default function SignIn({ setIsAuthenticated }) {
  const navigate = useNavigate(); 
   const [login , setLogin]=useState(false);
   const[wrong,setWrong]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

const { register, handleSubmit, formState: { errors }, trigger, getValues } = useForm();

  const handleSignIn = async () => {
    // Trigger validation
    const isValid = await trigger();
  
    // Get form data
    const formData = getValues();
  
    // Check if both email and password are not empty
    if (isValid && formData.email && formData.pass) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.pass
        );
  
        console.log("userCredential:", userCredential);
  
        if (userCredential) {
          console.log("Setting login to true");
          setLogin(true);
          setIsAuthenticated(true);
          navigate('/home');
        } else {
          console.log("userCredential is null");
        }
      } catch (error) {
        console.error("Sign-in failed:", error.message);
        setWrong(true);
      }
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  
  return (
    <>
      {login && (
        <Alert className='alertsign' variant="success" dismissible onClose={() => setLogin(false)}>
          login successfully !!
        </Alert>
      )}

{wrong && (
  <div className="text-center mt-3" >
    <Alert className='alertsign' variant="danger" dismissible onClose={() => setWrong(false)}>
email or password are incorrect
    </Alert>
  </div>
)}
  <Form
              onSubmit={handleSubmit(handleSignIn)}
              noValidate
              className="form-sign p-5 mt-2"
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  {...register("email", { required: true })}
                />
                {errors.email && errors.email.type === "required" && (
                  <div className="invalid-feedback">Email is required</div>
                )}
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <div className="password-input-container">
    <Form.Control
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      id="pass"
      onChange={(e) => setPassword(e.target.value)}
      className={`form-control ${errors.pass ? "is-invalid" : ""}`}
      {...register("pass", { required: true })}
    />
    <FontAwesomeIcon
      icon={showPassword ? faEyeSlash : faEye}
      onClick={togglePasswordVisibility}
      className="eye-icon"
    />
  </div>
                {errors.pass && errors.pass.type === "required" && (
                  <div className="invalid-feedback">Password is required</div>
                )}

              </Form.Group>
              <div className="text-right">
                <Button
                  type="button"
                  onClick={handleSignIn}
                  className="submitBtn"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          
            </>
  );
}