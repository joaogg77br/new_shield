import React from "react";
import ActionAndCondicions from "../components/ActionsAndConditions";
import Header from "../components/Header";
import MainCont from "../components/MainCont";

const  ConditionPage: React.FC  = () => {
       const Cd: object[] =[ 
        {
                nameCondition:'Atordoado',
                description:"Quem está atordoado fica de xereca",
                cause:"-2d20"
            },
    
        {
                nameCondition:'xereca',
                description:"Quem está atordoado fica de xereca",
                cause:"-2d20"
            },
    
       ]
    return(
        <>
         <Header/>
         <ActionAndCondicions/>
         <MainCont table={Cd} />    
        </>
    )

}
 
export default ConditionPage;