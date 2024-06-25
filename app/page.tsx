import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Code } from '@nextui-org/code';
import MainPage from "@/components/home/MainPage";

export default function Home() {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center">
				<MainPage/>
				</div>
  );
}
