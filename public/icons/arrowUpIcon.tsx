import React from "react";

type ArrowIconProps = React.SVGProps<SVGSVGElement>

const ArrowUpIcon: React.FC<ArrowIconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
);

export default ArrowUpIcon;
