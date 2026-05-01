import React,{ type ReactNode }  from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
  type To,
 
} from "react-router";

type CustComLinkProps = {
  children: ReactNode;
  to: To;
} & React.ComponentProps<typeof Link>;

export default function CustComLink({
  children,
  to,
  ...props
}: CustComLinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  console.log(resolved);
  console.log(to);
  console.log(match);

  return (
    <>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </>
  );
}