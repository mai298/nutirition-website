"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
  } = useForm();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Trigger validation
    const isValid = await trigger();

    // Get form data
    const formData = getValues();

      try {

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
          phoneNumber,
          displayName
        );

        console.log("userCredential:", userCredential);
          console.log("Setting sign to true");
          navigate('/home');

      } catch (error) {
        console.error("Sign-in failed:", error.message);
      }
    
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit(handleSignUp)}
      className="form-sign p-3 mt-3"
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Enter your name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter your phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="phone"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>

        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
        We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="pass"
        />
      </Form.Group>

      <div className="text-right">
        <Button type="button"
        onClick={handleSignUp}
        className="submitBtn">
          Sign up
        </Button>
      </div>
    </Form>
  );
}
