import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return <header></header>;
}
