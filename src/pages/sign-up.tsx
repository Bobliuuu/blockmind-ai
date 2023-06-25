import { useState } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { signIn, useSession } from "next-auth/react";
import AuthLayout from "~/components/layouts/AuthLayout";
import { useFormik } from "formik";
import TextInput from "~/components/UI/TextInput";
import InputFeedback from "~/components/UI/InputFeedback";
import Button from "~/components/UI/Button";
import { validateSignUp } from "~/utils/formValidation";
import { Eye, EyeOff } from "react-feather";
import { COLORS } from "~/constants/colors";
import worldCoinLogo from "~/../public/icons/worldcoin.svg";
import polygonLogo from "~/../public/icons/polygon.png";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Loading from "~/components/sections/loading/loading";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validate: validateSignUp,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleGoogleSignUp = async () => {
    await signIn("google");
  };

  const handlWorldCoinSignUp = () => {
    console.log("worldcoin signup");
  };

  if (status === "loading") {
    return <Loading />;
  } else if (status === "authenticated") {
    void router.push("/dashboard");
  }

  return (
    <AuthLayout>
      <h1 className="mb-3 font-display text-6xl font-bold text-white 2xs:text-7xl xl:text-8xl 2xl:text-9xl">
        Sign Up
      </h1>
      <p className="mb-7 text-beige md:text-lg xl:mb-10">
        Already have an account?{" "}
        <Link href="/log-in" className="text-gradient">
          Log In.
        </Link>
      </p>

      <p className="mb-4 text-beige md:text-lg xl:mb-4">
        Use an identity provider to get a{" "}
        <span className="text-gradient">free usage quota</span>.
      </p>
      <Button
        type="button"
        onClick={handlWorldCoinSignUp}
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
        Sign up with WorldCoin
      </Button>
      <Button
        type="button"
        onClick={handlWorldCoinSignUp}
        hierarchy="secondary"
        font="font-semibold"
        icon={
          <Image
            src={polygonLogo as StaticImageData}
            alt="WorldCoin logo"
            className="w-5"
          />
        }
        classes="w-full mb-5 md:mb-6"
      >
        Sign up with Polygon ID
      </Button>
      <Button
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleGoogleSignUp}
        hierarchy="secondary"
        font="font-semibold"
        icon={<FcGoogle size={20} />}
        classes="w-full mb-12 md:mb-12"
      >
        Sign up with Google
      </Button>

      <p className="mb-4 text-beige md:text-lg xl:mb-4">
        Or sign up <span className="text-gradient">anonymously</span>
        {"  "}
        and pay with crypto.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5 md:mb-6">
          <TextInput
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <InputFeedback state="error">
              {formik.errors.username}
            </InputFeedback>
          )}
        </div>
        <div className="mb-5 md:mb-6">
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
        <div className="mb-6 md:mb-6">
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
          classes="w-full mb-5 md:mb-0"
        >
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
}
