import Github from "./svg/github.svg";
import Linkedin from "./svg/linkedin.svg";
import Facebook from "./svg/facebook.svg";
import CSS from "./svg/css.svg";
import Figma from "./svg/figma.svg";
import Git from "./svg/git.svg";
import GraphQL from "./svg/graphql.svg";
import HTML from "./svg/html.svg";
import Javascript from "./svg/javascript.svg";
import Jest from "./svg/jest.svg";
import MongoDB from "./svg/mongodb.svg";
import Nextjs from "./svg/nextjs.svg";
import Nodejs from "./svg/nodejs.svg";
import Python from "./svg/python.svg";
import ReactSVG from "./svg/react.svg";
import Sass from "./svg/sass.svg";
import Tailwind from "./svg/tailwind.svg";
import Typescript from "./svg/typescript.svg";

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

export const CSSIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <CSS {...rest} />
    </span>
  );
};

export const FigmaIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Figma {...rest} />
    </span>
  );
};

export const GitIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Git {...rest} />
    </span>
  );
};

export const GraphQLIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <GraphQL {...rest} />
    </span>
  );
};

export const HTMLIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <HTML {...rest} />
    </span>
  );
};

export const JavascriptIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Javascript {...rest} />
    </span>
  );
};

export const JestIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Jest {...rest} />
    </span>
  );
};

export const MongoDBIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <MongoDB {...rest} />
    </span>
  );
};

export const NextjsIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Nextjs {...rest} />
    </span>
  );
};

export const NodejsIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Nodejs {...rest} />
    </span>
  );
};

export const PythonIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Python {...rest} />
    </span>
  );
};

export const ReactIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <ReactSVG {...rest} />
    </span>
  );
};

export const SassIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Sass {...rest} />
    </span>
  );
};

export const TailwindIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Tailwind {...rest} />
    </span>
  );
};

export const TypescriptIcon = (props: IconProps) => {
  const { className, ...rest } = props;
  return (
    <span className={className}>
      <Typescript {...rest} />
    </span>
  );
};
