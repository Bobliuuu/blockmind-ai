import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import AuthLayout from "~/components/layouts/AuthLayout";
import { useFormik } from "formik";
import TextInput from "~/components/UI/TextInput";
import InputFeedback from "~/components/UI/InputFeedback";
import Button from "~/components/UI/Button";
import { validateLogIn } from "~/utils/formValidation";
import { Eye, EyeOff } from "react-feather";
import { COLORS } from "~/constants/colors";
import worldCoinLogo from "~/../public/icons/worldcoin.svg";
import { FcGoogle } from "react-icons/fc";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogIn,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleGoogleLogin = () => {
    console.log("google login");
  };

  const handlWorldCoinLogIn = () => {
    console.log("worldcoin login");
  };

  return (
    <AuthLayout>
      <h1 className="mb-3 font-display text-6xl font-bold text-white 2xs:text-7xl xl:text-8xl 2xl:text-9xl">
        Log In
      </h1>
      <p className="mb-7 text-beige md:text-lg xl:mb-10">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-gradient">
          Sign Up.
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
        <div className="mb-14 md:mb-16">
          <TextInput
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={
              showPassword ? (
                <EyeOff
                  size={24}
                  color={COLORS.beige}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  size={24}
                  color={COLORS.beige}
                  onClick={() => setShowPassword(true)}
                />
              )
            }
          />
          {formik.touched.password && formik.errors.password && (
            <InputFeedback state="error">
              {formik.errors.password}
            </InputFeedback>
          )}
        </div>
        <Button
          type="submit"
          hierarchy="primary"
          font="font-semibold"
          classes="w-full mb-5 md:mb-6"
        >
          Log In
        </Button>
      </form>
      <Button
        type="button"
        onClick={handleGoogleLogin}
        hierarchy="secondary"
        font="font-semibold"
        icon={<FcGoogle size={20} />}
        classes="w-full mb-5 md:mb-6"
      >
        Log in with Google
      </Button>
      <Button
        type="button"
        onClick={handlWorldCoinLogIn}
        hierarchy="secondary"
        font="font-semibold"
        icon={
          <Image
            src={worldCoinLogo as StaticImageData}
            alt="WorldCoin logo"
            className="w-5"
          />
        }
        classes="w-full mb-5 md:mb-6"
      >
        Log in with WorldCoin
      </Button>
    </AuthLayout>
  );
}
