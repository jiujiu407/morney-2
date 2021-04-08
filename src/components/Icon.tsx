import React from "react";
import cs from 'classnames';
//如和require一整个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props = {
    name?:string
} & React.SVGAttributes<any>
const Icon=(props:Props)=>{
    const {name,children,className, ...rest}=props
    return(
        <svg className={cs('icon',className)} {...rest}>
            {props.name && <use xlinkHref={'#'+props.name}/>}
        </svg>
    )
}
export default Icon;