import Github from "./svg/github.svg";
import Linkedin from "./svg/linkedin.svg";
import Facebook from "./svg/facebook.svg";
import { IconProps } from "./index.d";

export const GithubIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Github {...rest} />
    </span>
  );
};

export const LinkedinbIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Linkedin {...rest} />
    </span>
  );
};

export const FacebookIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Facebook {...rest} />
    </span>
  );
};
