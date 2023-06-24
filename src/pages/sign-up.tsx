import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import AuthLayout from "~/components/layouts/AuthLayout";
import { useFormik } from "formik";
import TextInput from "~/components/UI/TextInput";
import InputFeedback from "~/components/UI/InputFeedback";
import Button from "~/components/UI/Button";
import { validateSignUp } from "~/utils/formValidation";
import { Eye, EyeOff } from "react-feather";
import { COLORS } from "~/constants/colors";
import worldCoinLogo from "~/../public/icons/worldcoin.svg";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: validateSignUp,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleGoogleSignUp = () => {
    console.log("google signup");
  };

  const handlWorldCoinSignUp = () => {
    console.log("worldcoin signup");
  };

  return (
    <AuthLayout>
      <h1 className="mb-3 font-display text-6xl font-bold text-white 2xs:text-7xl xl:text-8xl 2xl:text-9xl">
        Sign Up
      </h1>
      <p className="mb-7 text-beige md:text-lg xl:mb-10">
        Have an account?{" "}
        <Link href="/log-in" className="text-gradient">
          Log In.
        </Link>
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5 md:mb-6">
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <InputFeedback state="error">{formik.errors.email}</InputFeedback>
          )}
        </div>
        <div className="mb-5 md:mb-6">
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <InputFeedback state="error">
              {formik.errors.password}
            </InputFeedback>
          )}
        </div>
        <div className="mb-14 md:mb-16">
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={
              showConfirmPassword ? (
                <EyeOff
                  size={24}
                  color={COLORS.beige}
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <Eye
                  size={24}
                  color={COLORS.beige}
                  onClick={() => setShowConfirmPassword(true)}
                />
              )
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <InputFeedback state="error">
              {formik.errors.confirmPassword}
            </InputFeedback>
          )}
        </div>
        <Button
          type="submit"
          hierarchy="primary"
          font="font-semibold"
          padding="py-3"
          classes="w-full mb-5 md:mb-6"
        >
          Sign Up
        </Button>
      </form>
      <Button
        type="button"
        onClick={handleGoogleSignUp}
        hierarchy="secondary"
        font="font-semibold"
        padding="py-3"
        icon={<FcGoogle size={20} />}
        classes="w-full mb-5 md:mb-6"
      >
        Sign up with Google
      </Button>
      <Button
        type="button"
        onClick={handlWorldCoinSignUp}
        hierarchy="secondary"
        font="font-semibold"
        padding="py-3"
        icon={
          <Image
            src={worldCoinLogo as StaticImageData}
            alt="WorldCoin logo"
            className="w-5"
          />
        }
        classes="w-full mb-5 md:mb-6"
      >
        Sign up with WorldCoin
      </Button>
    </AuthLayout>
  );
}
